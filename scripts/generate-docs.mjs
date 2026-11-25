// ============================================================
// Ozon OpenAPI 转换为纯 VitePress Markdown 矩阵与多语言生成器
// ============================================================

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CATEGORY_MAP, translateSummary } from './i18n-dict.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');
const SPECS_DIR = path.join(ROOT_DIR, 'specs');

// 支持生成的三种语言
const LANGUAGES = [
  { code: 'zh', prefix: '', default: true },
  { code: 'ru', prefix: '/ru', default: false },
  { code: 'en', prefix: '/en', default: false },
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_]+/g, '-');
}

function getCategoryInfo(rawTag) {
  if (CATEGORY_MAP[rawTag]) return CATEGORY_MAP[rawTag];
  for (const [key, val] of Object.entries(CATEGORY_MAP)) {
    if (val.ru === rawTag || val.en === rawTag || key.toLowerCase() === rawTag.toLowerCase()) {
      return val;
    }
  }
  return {
    zh: rawTag,
    ru: rawTag,
    en: rawTag,
    icon: '📌'
  };
}

function formatMethodBadge(method) {
  const m = method.toUpperCase();
  if (m === 'POST') return '<Badge type="tip" text="POST" />';
  if (m === 'GET') return '<Badge type="info" text="GET" />';
  if (m === 'PUT') return '<Badge type="warning" text="PUT" />';
  if (m === 'DELETE') return '<Badge type="danger" text="DELETE" />';
  return `<Badge text="${m}" />`;
}

function generateMarkdownContent({ pathName, method, op, apiType, lang, catInfo }) {
  const summary = translateSummary(op.summary, lang);
  const title = summary && summary !== '无接口描述' ? summary : `${method.toUpperCase()} ${pathName}`;
  const mUpper = method.toUpperCase();
  const host = apiType === 'seller' ? 'https://api-seller.ozon.ru' : 'https://api-performance.ozon.ru';

  // 1. Frontmatter
  let md = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${(summary || '').replace(/"/g, '\\"')}"
---

# ${title}

${formatMethodBadge(mUpper)} \`${pathName}\`

`;

  // 2. 接口描述与所属分类
  md += `## 接口概览\n\n`;
  md += `- **所属模块**：${catInfo.icon || '📌'} ${catInfo[lang] || catInfo.zh}\n`;
  md += `- **请求方法**：\`${mUpper}\`\n`;
  md += `- **接口地址**：\`${host}${pathName}\`\n`;
  if (op.description && op.description !== op.summary) {
    md += `- **详细说明**：\n\n> ${op.description.replace(/\n/g, '\n> ')}\n\n`;
  }
  md += `\n`;

  // 3. 请求头与参数 (Parameters)
  const params = op.parameters || [];
  if (params.length > 0) {
    md += `## 请求参数 (Parameters)\n\n`;
    md += `| 参数名 | 位置 (In) | 必填 | 说明 |\n`;
    md += `| :--- | :--- | :--- | :--- |\n`;
    for (const p of params) {
      const name = p.name || (p.$ref ? p.$ref.split('/').pop() : 'param');
      const inPos = p.in || 'header';
      const required = p.required ? '是 (Yes)' : '否 (No)';
      const desc = p.description || (name === 'Client-Id' ? 'Ozon 卖家唯一 Client ID' : name === 'Api-Key' ? 'Ozon 开发者 API Key' : '-');
      md += `| \`${name}\` | \`${inPos}\` | ${required} | ${desc} |\n`;
    }
    md += `\n`;
  } else {
    // 默认鉴权请求头说明
    md += `## 鉴权请求头 (Headers)\n\n`;
    md += `| 参数名 | 必填 | 示例 / 说明 |\n`;
    md += `| :--- | :--- | :--- |\n`;
    if (apiType === 'seller') {
      md += `| \`Client-Id\` | 是 | 卖家后台唯一识别码 |\n`;
      md += `| \`Api-Key\` | 是 | 卖家后台生成的 API 访问令牌 |\n`;
    } else {
      md += `| \`Authorization\` | 是 | Bearer 格式的 OAuth 2.0 访问令牌 |\n`;
    }
    md += `\n`;
  }

  // 4. 请求体 (Request Body)
  if (op.requestBody) {
    md += `## 请求体 (Request Body)\n\n`;
    md += `Content-Type: \`application/json\`\n\n`;
    const jsonContent = op.requestBody.content?.['application/json'];
    if (jsonContent?.example) {
      md += `\`\`\`json\n${JSON.stringify(jsonContent.example, null, 2)}\n\`\`\`\n\n`;
    } else if (jsonContent?.schema) {
      md += `::: details 查看 Request Schema 结构定义\n\`\`\`json\n${JSON.stringify(jsonContent.schema, null, 2)}\n\`\`\`\n:::\n\n`;
    }
  }

  // 5. 返回响应示例 (Responses)
  md += `## 返回响应 (Responses)\n\n`;
  const responses = op.responses || {};
  for (const [code, resp] of Object.entries(responses)) {
    const desc = resp.description || (code === '200' ? '成功响应' : '异常错误');
    md += `### HTTP ${code} - ${desc}\n\n`;
    const respJson = resp.content?.['application/json'];
    if (respJson?.example) {
      md += `\`\`\`json\n${JSON.stringify(respJson.example, null, 2)}\n\`\`\`\n\n`;
    } else if (respJson?.schema) {
      md += `::: details 查看 Response Schema 定义\n\`\`\`json\n${JSON.stringify(respJson.schema, null, 2)}\n\`\`\`\n:::\n\n`;
    }
  }

  // 6. 多语言调用示例 (Code Group)
  md += `## 调用示例代码\n\n`;
  md += `::: code-group\n`;
  
  // cURL 示例
  md += `\`\`\`bash [cURL]\n`;
  md += `curl -X ${mUpper} "${host}${pathName}" \\\n`;
  if (apiType === 'seller') {
    md += `  -H "Client-Id: YOUR_CLIENT_ID" \\\n`;
    md += `  -H "Api-Key: YOUR_API_KEY" \\\n`;
  } else {
    md += `  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \\\n`;
  }
  md += `  -H "Content-Type: application/json"`;
  if (mUpper === 'POST' || mUpper === 'PUT') {
    md += ` \\\n  -d '{}'`;
  }
  md += `\n\`\`\`\n\n`;

  // Python 示例
  md += `\`\`\`python [Python]\n`;
  md += `import requests\n\n`;
  md += `url = "${host}${pathName}"\n`;
  md += `headers = {\n`;
  if (apiType === 'seller') {
    md += `    "Client-Id": "YOUR_CLIENT_ID",\n`;
    md += `    "Api-Key": "YOUR_API_KEY",\n`;
  } else {
    md += `    "Authorization": "Bearer YOUR_OAUTH_TOKEN",\n`;
  }
  md += `    "Content-Type": "application/json"\n`;
  md += `}\n\n`;
  if (mUpper === 'POST' || mUpper === 'PUT') {
    md += `response = requests.${method.toLowerCase()}(url, headers=headers, json={})\n`;
  } else {
    md += `response = requests.${method.toLowerCase()}(url, headers=headers)\n`;
  }
  md += `print(response.status_code, response.json())\n`;
  md += `\`\`\`\n\n`;

  // Node.js 示例
  md += `\`\`\`javascript [Node.js]\n`;
  md += `const response = await fetch("${host}${pathName}", {\n`;
  md += `  method: "${mUpper}",\n`;
  md += `  headers: {\n`;
  if (apiType === 'seller') {
    md += `    "Client-Id": "YOUR_CLIENT_ID",\n`;
    md += `    "Api-Key": "YOUR_API_KEY",\n`;
  } else {
    md += `    "Authorization": "Bearer YOUR_OAUTH_TOKEN",\n`;
  }
  md += `    "Content-Type": "application/json"\n`;
  md += `  },\n`;
  if (mUpper === 'POST' || mUpper === 'PUT') {
    md += `  body: JSON.stringify({})\n`;
  }
  md += `});\n`;
  md += `const data = await response.json();\n`;
  md += `console.log(data);\n`;
  md += `\`\`\`\n`;
  md += `:::\n`;

  return md;
}

function processSpec(specPath, apiType) {
  if (!fs.existsSync(specPath)) {
    console.error(`Spec file not found: ${specPath}`);
    return [];
  }
  const spec = JSON.parse(fs.readFileSync(specPath, 'utf8'));
  const endpoints = [];

  for (const [pathName, methods] of Object.entries(spec.paths || {})) {
    for (const [method, op] of Object.entries(methods)) {
      if (!['get', 'post', 'put', 'delete', 'patch'].includes(method.toLowerCase())) continue;
      const tags = op.tags || ['General'];
      // 提取规范分类
      const enTag = tags.find(t => /^[A-Za-z0-9&_ -]+$/.test(t)) || tags[0];
      const catInfo = getCategoryInfo(enTag);
      const catSlug = slugify(enTag);
      const fileSlug = slugify(pathName.replace(/^\//, '').replace(/\//g, '-'));

      endpoints.push({
        pathName,
        method: method.toLowerCase(),
        op,
        apiType,
        enTag,
        catInfo,
        catSlug,
        fileSlug: `${method.toLowerCase()}-${fileSlug}`,
      });
    }
  }

  return endpoints;
}

export function buildDocs() {
  console.log('🚀 开始解析 Ozon OpenAPI 规范并生成纯 VitePress 矩阵文档...');

  const sellerEndpoints = processSpec(path.join(SPECS_DIR, 'ozon-seller-openapi.json'), 'seller');
  const perfEndpoints = processSpec(path.join(SPECS_DIR, 'ozon-performance-openapi.json'), 'performance');
  const allEndpoints = [...sellerEndpoints, ...perfEndpoints];

  console.log(`📊 统计：Seller API 共 ${sellerEndpoints.length} 个端点，Performance API 共 ${perfEndpoints.length} 个端点。`);

  // 针对每种语言生成对应的 Markdown 目录与 Sidebar
  for (const langObj of LANGUAGES) {
    const lang = langObj.code;
    const langRoot = langObj.default ? DOCS_DIR : path.join(DOCS_DIR, lang);
    const prefix = langObj.prefix; // '' or '/ru' or '/en'

    console.log(`\n🌐 正在构建 [${lang.toUpperCase()}] 语言文档树...`);

    const sidebarSeller = [];
    const sidebarPerf = [];

    // 按模块分组
    const groupByTypeAndCat = (endpoints, apiType) => {
      const catGroups = new Map();
      for (const ep of endpoints) {
        if (ep.apiType !== apiType) continue;
        if (!catGroups.has(ep.catSlug)) {
          catGroups.set(ep.catSlug, {
            catInfo: ep.catInfo,
            catSlug: ep.catSlug,
            items: [],
          });
        }
        catGroups.get(ep.catSlug).items.push(ep);
      }
      return Array.from(catGroups.values());
    };

    // 1. 处理 Seller API
    const sellerGroups = groupByTypeAndCat(sellerEndpoints, 'seller');
    for (const group of sellerGroups) {
      const groupDir = path.join(langRoot, 'seller', group.catSlug);
      fs.mkdirSync(groupDir, { recursive: true });

      const sidebarItems = [];
      for (const ep of group.items) {
        const mdContent = generateMarkdownContent({
          pathName: ep.pathName,
          method: ep.method,
          op: ep.op,
          apiType: 'seller',
          lang,
          catInfo: group.catInfo,
        });

        const filePath = path.join(groupDir, `${ep.fileSlug}.md`);
        fs.writeFileSync(filePath, mdContent, 'utf8');

        const summary = translateSummary(ep.op.summary, lang);
        const itemText = summary && summary !== '无接口描述' ? summary : `${ep.method.toUpperCase()} ${ep.pathName}`;
        sidebarItems.push({
          text: itemText,
          link: `${prefix}/seller/${group.catSlug}/${ep.fileSlug}`,
        });
      }

      const groupTitle = `${group.catInfo.icon || '📦'} ${group.catInfo[lang] || group.catInfo.zh}`;
      sidebarSeller.push({
        text: groupTitle,
        collapsed: true,
        items: sidebarItems,
      });
    }

    // 2. 处理 Performance API
    const perfGroups = groupByTypeAndCat(perfEndpoints, 'performance');
    for (const group of perfGroups) {
      const groupDir = path.join(langRoot, 'performance', group.catSlug);
      fs.mkdirSync(groupDir, { recursive: true });

      const sidebarItems = [];
      for (const ep of group.items) {
        const mdContent = generateMarkdownContent({
          pathName: ep.pathName,
          method: ep.method,
          op: ep.op,
          apiType: 'performance',
          lang,
          catInfo: group.catInfo,
        });

        const filePath = path.join(groupDir, `${ep.fileSlug}.md`);
        fs.writeFileSync(filePath, mdContent, 'utf8');

        const summary = translateSummary(ep.op.summary, lang);
        const itemText = summary && summary !== '无接口描述' ? summary : `${ep.method.toUpperCase()} ${ep.pathName}`;
        sidebarItems.push({
          text: itemText,
          link: `${prefix}/performance/${group.catSlug}/${ep.fileSlug}`,
        });
      }

      const groupTitle = `${group.catInfo.icon || '🚀'} ${group.catInfo[lang] || group.catInfo.zh}`;
      sidebarPerf.push({
        text: groupTitle,
        collapsed: true,
        items: sidebarItems,
      });
    }

    // 3. 生成分类总览概览页 index.md
    generateOverviewPages(langRoot, lang, prefix, sellerGroups, perfGroups);

    // 4. 将 Sidebar 写入文件以便 VitePress 配置直接引入
    const sidebarConfig = {
      [`${prefix}/seller/`]: [
        {
          text: lang === 'zh' ? '📖 Seller API 概览' : lang === 'ru' ? '📖 Обзор Seller API' : '📖 Seller API Overview',
          link: `${prefix}/seller/`
        },
        ...sidebarSeller
      ],
      [`${prefix}/performance/`]: [
        {
          text: lang === 'zh' ? '📖 Performance API 概览' : lang === 'ru' ? '📖 Обзор Performance API' : '📖 Performance API Overview',
          link: `${prefix}/performance/`
        },
        ...sidebarPerf
      ],
    };

    const sidebarPath = path.join(DOCS_DIR, `.vitepress/sidebar-${lang}.json`);
    fs.mkdirSync(path.dirname(sidebarPath), { recursive: true });
    fs.writeFileSync(sidebarPath, JSON.stringify(sidebarConfig, null, 2), 'utf8');
    console.log(`✅ [${lang.toUpperCase()}] 侧边栏配置已生成：${sidebarPath}`);
  }

  console.log('\n🎉 所有多语言 Markdown 文档与 Sidebar 全部生成成功！');
}

function generateOverviewPages(langRoot, lang, prefix, sellerGroups, perfGroups) {
  // 1. Seller 概览页
  const sellerTitle = lang === 'zh' ? 'Ozon 卖家核心 API (Seller API)' : lang === 'ru' ? 'Ozon Seller API (Основной API продавца)' : 'Ozon Seller API';
  const sellerDesc = lang === 'zh' 
    ? '全面涵盖 Ozon 跨境开店所必需的商品刊登、价格与库存同步、订单履约发货、类目属性与财务结算等 480+ 个端点。'
    : 'Полный набор методов для работы с товарами, остатками, ценами, заказами FBS/FBO и финансами на Ozon.';

  let sellerMd = `---
title: "${sellerTitle}"
---

# ${sellerTitle}

${sellerDesc}

## 业务模块导航

| 模块分类 | 包含端点数 | 快速直达 |
| :--- | :--- | :--- |
`;

  for (const group of sellerGroups) {
    const title = `${group.catInfo.icon || '📦'} ${group.catInfo[lang] || group.catInfo.zh}`;
    const firstLink = group.items[0] ? `${prefix}/seller/${group.catSlug}/${group.items[0].fileSlug}` : '#';
    sellerMd += `| **${title}** | \`${group.items.length}\` 个接口 | [进入模块](${firstLink}) |\n`;
  }

  fs.mkdirSync(path.join(langRoot, 'seller'), { recursive: true });
  fs.writeFileSync(path.join(langRoot, 'seller/index.md'), sellerMd, 'utf8');

  // 2. Performance 概览页
  const perfTitle = lang === 'zh' ? 'Ozon 广告营销推广 API (Performance API)' : lang === 'ru' ? 'Ozon Performance API (Реклама и продвижение)' : 'Ozon Performance API';
  const perfDesc = lang === 'zh'
    ? '涵盖 Ozon 官方 CPC 点击付费、搜索排位推广（CPO）、广告效果归因统计及外部流量分析等 48+ 个核心端点。'
    : 'Методы для управления рекламными кампаниями, ставками и аналитикой продвижения на Ozon.';

  let perfMd = `---
title: "${perfTitle}"
---

# ${perfTitle}

${perfDesc}

## 广告营销分类导航

| 推广模块 | 包含端点数 | 快速直达 |
| :--- | :--- | :--- |
`;

  for (const group of perfGroups) {
    const title = `${group.catInfo.icon || '🚀'} ${group.catInfo[lang] || group.catInfo.zh}`;
    const firstLink = group.items[0] ? `${prefix}/performance/${group.catSlug}/${group.items[0].fileSlug}` : '#';
    perfMd += `| **${title}** | \`${group.items.length}\` 个接口 | [进入模块](${firstLink}) |\n`;
  }

  fs.mkdirSync(path.join(langRoot, 'performance'), { recursive: true });
  fs.writeFileSync(path.join(langRoot, 'performance/index.md'), perfMd, 'utf8');
}

// 直接执行
buildDocs();
