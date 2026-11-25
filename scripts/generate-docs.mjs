// ============================================================
// Ozon OpenAPI 转换为纯 VitePress Markdown 矩阵与多语言生成器
// 架构方案 B: UI 骨架完全解耦 + 上游字段事实驱动 + 0 Token 消耗
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

// 多语言 UI 骨架字典（彻底消除硬编码与语言混杂）
const UI_STRINGS = {
  zh: {
    siteTitle: 'Ozon API 镜像站',
    overview: '接口概览',
    category: '所属模块',
    method: '请求方法',
    url: '接口地址',
    desc: '详细说明',
    officialDescTitle: '查看官方详细说明 (Официальное описание)',
    headers: '鉴权请求头',
    params: '请求参数',
    paramName: '参数名',
    paramIn: '位置 (In)',
    required: '必填',
    descHeader: '说明',
    yes: '是',
    no: '否',
    body: '请求体',
    viewSchema: '查看数据结构定义 (Schema)',
    responses: '返回响应',
    success: '成功响应',
    error: '异常响应',
    codeExamples: '调用示例代码',
    sellerHeaderDesc1: '卖家后台唯一识别码',
    sellerHeaderDesc2: '卖家后台生成的 API 访问令牌',
    bearerDesc: 'Bearer 格式的 OAuth 2.0 访问令牌',
    overviewNavTitle: '业务模块导航',
    overviewCol1: '模块分类',
    overviewCol2: '包含端点数',
    overviewCol3: '快速直达',
    enterModule: '进入模块',
    endpointsCount: (n) => `${n} 个接口`,
  },
  ru: {
    siteTitle: 'Ozon API Документация',
    overview: 'Обзор метода',
    category: 'Категория',
    method: 'HTTP-метод',
    url: 'URL запроса',
    desc: 'Описание',
    officialDescTitle: 'Официальное описание',
    headers: 'Заголовки авторизации',
    params: 'Параметры запроса',
    paramName: 'Параметр',
    paramIn: 'Расположение',
    required: 'Обязательный',
    descHeader: 'Описание',
    yes: 'Да',
    no: 'Нет',
    body: 'Тело запроса',
    viewSchema: 'Посмотреть схему данных (Schema)',
    responses: 'Ответы сервера',
    success: 'Успешный ответ',
    error: 'Ошибка',
    codeExamples: 'Примеры кода',
    sellerHeaderDesc1: 'Идентификатор клиента (Client ID)',
    sellerHeaderDesc2: 'API-ключ продавца (API Key)',
    bearerDesc: 'OAuth 2.0 токен доступа в формате Bearer',
    overviewNavTitle: 'Навигация по разделам',
    overviewCol1: 'Категория',
    overviewCol2: 'Количество методов',
    overviewCol3: 'Перейти',
    enterModule: 'Открыть раздел',
    endpointsCount: (n) => `${n} методов`,
  },
  en: {
    siteTitle: 'Ozon API Docs',
    overview: 'Endpoint Overview',
    category: 'Category',
    method: 'Method',
    url: 'Request URL',
    desc: 'Description',
    officialDescTitle: 'View Official Description (Russian)',
    headers: 'Authentication Headers',
    params: 'Parameters',
    paramName: 'Parameter',
    paramIn: 'In',
    required: 'Required',
    descHeader: 'Description',
    yes: 'Yes',
    no: 'No',
    body: 'Request Body',
    viewSchema: 'View Schema Definition',
    responses: 'Responses',
    success: 'Success',
    error: 'Error',
    codeExamples: 'Code Examples',
    sellerHeaderDesc1: 'Unique Client ID from seller cabinet',
    sellerHeaderDesc2: 'API Key generated in seller cabinet',
    bearerDesc: 'Bearer format OAuth 2.0 Access Token',
    overviewNavTitle: 'Module Navigation',
    overviewCol1: 'Category',
    overviewCol2: 'Endpoints',
    overviewCol3: 'Direct Link',
    enterModule: 'Enter Module',
    endpointsCount: (n) => `${n} endpoints`,
  }
};

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
  const ui = UI_STRINGS[lang] || UI_STRINGS.zh;
  
  // 标题生成策略：严格语言对齐
  let title = '';
  if (lang === 'zh') {
    const summaryZh = translateSummary(op.summary, 'zh');
    title = summaryZh && summaryZh !== '无接口描述' ? summaryZh : `${method.toUpperCase()} ${pathName}`;
  } else if (lang === 'ru') {
    title = op.summary || `${method.toUpperCase()} ${pathName}`;
  } else {
    // en 模式下：如果有英文 summary 则使用，否则显示清晰的路径+方法或 operationId
    title = op.operationId ? op.operationId.replace(/_/g, ' ') : `${method.toUpperCase()} ${pathName}`;
  }

  const mUpper = method.toUpperCase();
  const host = apiType === 'seller' ? 'https://api-seller.ozon.ru' : 'https://api-performance.ozon.ru';

  // 1. Frontmatter
  let md = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${(op.summary || title).replace(/"/g, '\\"')}"
---

# ${title}

${formatMethodBadge(mUpper)} \`${pathName}\`

`;

  // 2. 接口概览
  md += `## ${ui.overview}\n\n`;
  const catName = catInfo[lang] || catInfo.en || catInfo.zh;
  md += `- **${ui.category}**：${catInfo.icon || '📌'} ${catName}\n`;
  md += `- **${ui.method}**：\`${mUpper}\`\n`;
  md += `- **${ui.url}**：\`${host}${pathName}\`\n`;
  
  // 详细说明 description 渲染策略（去脑补、事实驱动）
  if (op.description && op.description !== op.summary) {
    if (lang === 'ru') {
      // 俄文版：直接作为原生段落
      md += `- **${ui.desc}**：\n\n> ${op.description.replace(/\n/g, '\n> ')}\n\n`;
    } else {
      // 中文与英文版：放入折叠框，优雅展示官方事实源，不污染中文主视觉
      md += `\n::: details ${ui.officialDescTitle}\n> ${op.description.replace(/\n/g, '\n> ')}\n:::\n\n`;
    }
  } else {
    md += `\n`;
  }

  // 3. 请求头与参数 (Parameters)
  const params = op.parameters || [];
  if (params.length > 0) {
    md += `## ${ui.params}\n\n`;
    md += `| ${ui.paramName} | ${ui.paramIn} | ${ui.required} | ${ui.descHeader} |\n`;
    md += `| :--- | :--- | :--- | :--- |\n`;
    for (const p of params) {
      const name = p.name || (p.$ref ? p.$ref.split('/').pop() : 'param');
      const inPos = p.in || 'header';
      const required = p.required ? ui.yes : ui.no;
      // 优先从上游字段提取，上游没有则显示 '-'，绝不脑补硬编码文本！
      const desc = p.description || (
        name === 'Client-Id' ? ui.sellerHeaderDesc1 :
        name === 'Api-Key' ? ui.sellerHeaderDesc2 :
        name === 'Authorization' ? ui.bearerDesc : '-'
      );
      md += `| \`${name}\` | \`${inPos}\` | ${required} | ${desc} |\n`;
    }
    md += `\n`;
  } else {
    // 默认通用鉴权头
    md += `## ${ui.headers}\n\n`;
    md += `| ${ui.paramName} | ${ui.required} | ${ui.descHeader} |\n`;
    md += `| :--- | :--- | :--- |\n`;
    if (apiType === 'seller') {
      md += `| \`Client-Id\` | ${ui.yes} | ${ui.sellerHeaderDesc1} |\n`;
      md += `| \`Api-Key\` | ${ui.yes} | ${ui.sellerHeaderDesc2} |\n`;
    } else {
      md += `| \`Authorization\` | ${ui.yes} | ${ui.bearerDesc} |\n`;
    }
    md += `\n`;
  }

  // 4. 请求体 (Request Body)
  if (op.requestBody) {
    md += `## ${ui.body}\n\n`;
    md += `Content-Type: \`application/json\`\n\n`;
    const jsonContent = op.requestBody.content?.['application/json'];
    if (jsonContent?.example) {
      md += `\`\`\`json\n${JSON.stringify(jsonContent.example, null, 2)}\n\`\`\`\n\n`;
    } else if (jsonContent?.schema) {
      md += `::: details ${ui.viewSchema}\n\`\`\`json\n${JSON.stringify(jsonContent.schema, null, 2)}\n\`\`\`\n:::\n\n`;
    }
  }

  // 5. 返回响应示例 (Responses)
  md += `## ${ui.responses}\n\n`;
  const responses = op.responses || {};
  for (const [code, resp] of Object.entries(responses)) {
    const defaultDesc = code === '200' ? ui.success : ui.error;
    const desc = resp.description || defaultDesc;
    md += `### HTTP ${code} - ${desc}\n\n`;
    const respJson = resp.content?.['application/json'];
    if (respJson?.example) {
      md += `\`\`\`json\n${JSON.stringify(respJson.example, null, 2)}\n\`\`\`\n\n`;
    } else if (respJson?.schema) {
      md += `::: details ${ui.viewSchema}\n\`\`\`json\n${JSON.stringify(respJson.schema, null, 2)}\n\`\`\`\n:::\n\n`;
    }
  }

  // 6. 调用示例代码 (Code Examples)
  md += `## ${ui.codeExamples}\n\n`;
  md += `::: code-group\n`;
  
  // cURL
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

  // Python
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

  // Node.js
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

  console.log(`📊 统计：Seller API 共 ${sellerEndpoints.length} 个端点，Performance API 共 ${perfEndpoints.length} 个端点。`);

  for (const langObj of LANGUAGES) {
    const lang = langObj.code;
    const langRoot = langObj.default ? DOCS_DIR : path.join(DOCS_DIR, lang);
    const prefix = langObj.prefix;

    console.log(`🌐 正在构建 [${lang.toUpperCase()}] 语言文档树...`);

    const sidebarSeller = [];
    const sidebarPerf = [];

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

    // 1. Seller API
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

        let itemText = '';
        if (lang === 'zh') {
          const summaryZh = translateSummary(ep.op.summary, 'zh');
          itemText = summaryZh && summaryZh !== '无接口描述' ? summaryZh : `${ep.method.toUpperCase()} ${ep.pathName}`;
        } else if (lang === 'ru') {
          itemText = ep.op.summary || `${ep.method.toUpperCase()} ${ep.pathName}`;
        } else {
          itemText = ep.op.operationId ? ep.op.operationId.replace(/_/g, ' ') : `${ep.method.toUpperCase()} ${ep.pathName}`;
        }

        sidebarItems.push({
          text: itemText,
          link: `${prefix}/seller/${group.catSlug}/${ep.fileSlug}`,
        });
      }

      const catName = group.catInfo[lang] || group.catInfo.en || group.catInfo.zh;
      const groupTitle = `${group.catInfo.icon || '📦'} ${catName}`;
      sidebarSeller.push({
        text: groupTitle,
        collapsed: true,
        items: sidebarItems,
      });
    }

    // 2. Performance API
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

        let itemText = '';
        if (lang === 'zh') {
          const summaryZh = translateSummary(ep.op.summary, 'zh');
          itemText = summaryZh && summaryZh !== '无接口描述' ? summaryZh : `${ep.method.toUpperCase()} ${ep.pathName}`;
        } else if (lang === 'ru') {
          itemText = ep.op.summary || `${ep.method.toUpperCase()} ${ep.pathName}`;
        } else {
          itemText = ep.op.operationId ? ep.op.operationId.replace(/_/g, ' ') : `${ep.method.toUpperCase()} ${ep.pathName}`;
        }

        sidebarItems.push({
          text: itemText,
          link: `${prefix}/performance/${group.catSlug}/${ep.fileSlug}`,
        });
      }

      const catName = group.catInfo[lang] || group.catInfo.en || group.catInfo.zh;
      const groupTitle = `${group.catInfo.icon || '🚀'} ${catName}`;
      sidebarPerf.push({
        text: groupTitle,
        collapsed: true,
        items: sidebarItems,
      });
    }

    // 3. 生成概览页
    generateOverviewPages(langRoot, lang, prefix, sellerGroups, perfGroups);

    // 4. 生成 Sidebar JSON
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
    console.log(`✅ [${lang.toUpperCase()}] 侧边栏配置生成完成`);
  }

  console.log('🎉 所有多语言 Markdown 文档与 Sidebar 已按照纯净方案 B 全部重构完成！');
}

function generateOverviewPages(langRoot, lang, prefix, sellerGroups, perfGroups) {
  const ui = UI_STRINGS[lang] || UI_STRINGS.zh;

  // 1. Seller 概览页
  const sellerTitle = lang === 'zh' ? 'Ozon 卖家核心 API (Seller API)' : lang === 'ru' ? 'Ozon Seller API (Основной API продавца)' : 'Ozon Seller API';
  const sellerDesc = lang === 'zh' 
    ? '全面涵盖 Ozon 跨境开店所必需的商品刊登、价格与库存同步、订单履约发货、类目属性与财务结算等 480+ 个端点。'
    : lang === 'ru'
    ? 'Полный набор методов для работы с товарами, остатками, ценами, заказами FBS/FBO и финансами на Ozon.'
    : 'Comprehensive API endpoints for managing products, inventory, prices, FBS/FBO fulfillment orders, and financial reports on Ozon.';

  let sellerMd = `---
title: "${sellerTitle}"
---

# ${sellerTitle}

${sellerDesc}

## ${ui.overviewNavTitle}

| ${ui.overviewCol1} | ${ui.overviewCol2} | ${ui.overviewCol3} |
| :--- | :--- | :--- |
`;

  for (const group of sellerGroups) {
    const catName = group.catInfo[lang] || group.catInfo.en || group.catInfo.zh;
    const title = `${group.catInfo.icon || '📦'} ${catName}`;
    const firstLink = group.items[0] ? `${prefix}/seller/${group.catSlug}/${group.items[0].fileSlug}` : '#';
    sellerMd += `| **${title}** | \`${ui.endpointsCount(group.items.length)}\` | [${ui.enterModule}](${firstLink}) |\n`;
  }

  fs.mkdirSync(path.join(langRoot, 'seller'), { recursive: true });
  fs.writeFileSync(path.join(langRoot, 'seller/index.md'), sellerMd, 'utf8');

  // 2. Performance 概览页
  const perfTitle = lang === 'zh' ? 'Ozon 广告营销推广 API (Performance API)' : lang === 'ru' ? 'Ozon Performance API (Реклама и продвижение)' : 'Ozon Performance API';
  const perfDesc = lang === 'zh'
    ? '涵盖 Ozon 官方 CPC 点击付费、搜索排位推广（CPO）、广告效果归因统计及外部流量分析等 48+ 个核心端点。'
    : lang === 'ru'
    ? 'Методы для управления рекламными кампаниями, ставками и аналитикой продвижения на Ozon.'
    : 'Manage CPC ad campaigns, search promotions (CPO), bid recommendations, and traffic analytics on Ozon.';

  let perfMd = `---
title: "${perfTitle}"
---

# ${perfTitle}

${perfDesc}

## ${ui.overviewNavTitle}

| ${ui.overviewCol1} | ${ui.overviewCol2} | ${ui.overviewCol3} |
| :--- | :--- | :--- |
`;

  for (const group of perfGroups) {
    const catName = group.catInfo[lang] || group.catInfo.en || group.catInfo.zh;
    const title = `${group.catInfo.icon || '🚀'} ${catName}`;
    const firstLink = group.items[0] ? `${prefix}/performance/${group.catSlug}/${group.items[0].fileSlug}` : '#';
    perfMd += `| **${title}** | \`${ui.endpointsCount(group.items.length)}\` | [${ui.enterModule}](${firstLink}) |\n`;
  }

  fs.mkdirSync(path.join(langRoot, 'performance'), { recursive: true });
  fs.writeFileSync(path.join(langRoot, 'performance/index.md'), perfMd, 'utf8');
}

buildDocs();
