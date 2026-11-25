# Ozon 开发者 API 全量交互式镜像站 (OpenAPI 3.0)

[![GitHub Pages Deployment](https://github.com/ywl-ozon-track/ozon-api-doc/actions/workflows/deploy-pages.yml/badge.svg)](https://ywl-ozon-track.github.io/ozon-api-doc/)
[![API Sync & PR Bot](https://github.com/ywl-ozon-track/ozon-api-doc/actions/workflows/cron-sync-pr.yml/badge.svg)](https://github.com/ywl-ozon-track/ozon-api-doc/actions/workflows/cron-sync-pr.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> 🚀 **在线镜像访问入口**: [https://ywl-ozon-track.github.io/ozon-api-doc/](https://ywl-ozon-track.github.io/ozon-api-doc/)

本项目是 **Ozon 官方开发者 API 文档（Seller API & Performance API）** 的开源规范镜像站。采用 **VitePress + Redocly 虚拟滚动混合架构**，提供无缝的国内高速访问、全量中英双语搜索、参数模型展开与代码示例演示。

---

## 🌟 核心特色

1. **双规范全量收录**：
   - **📦 Seller API (卖家全量业务)**：商品管理、类目与属性、价格计算与批量改价、FBS/FBO履约、仓库发货、退换货管理等。
   - **🚀 Performance API (广告营销推广)**：CPC竞价、广告计划创建与管理、关键词调价、投放数据转化统计。
2. **Redocly 三栏虚拟滚动**：
   - 彻底突破超大规模 OpenAPI 规范（数万行 JSON / 上千个 Schema）的页面渲染卡顿瓶颈，秒开响应。
3. **GitHub Actions 每日对账 Bot (PR 审批驱动)**：
   - 定时巡检 Ozon 官方文档站，任何字段增删均通过 `peter-evans/create-pull-request` 自动提交变更提案，**严禁直接 commit 到主分支**，保障规范变动清晰可溯。

---

## 🛠️ 本地开发与预览

```bash
# 1. 安装依赖
npm install

# 2. 启动本地开发服务
npm run docs:dev

# 3. 生产打包构建
npm run docs:build
```

---

## 📄 官方文档溯源

- **Ozon Seller API 官方主站**: [https://docs.ozon.ru/api/seller/](https://docs.ozon.ru/api/seller/)
- **Ozon Performance API 官方主站**: [https://docs.ozon.ru/api/performance/](https://docs.ozon.ru/api/performance/)
- **Ozon 官方 OpenAPI 规范源**:
  - `https://docs.ozon.ru/api/seller/swagger.json`
  - `https://docs.ozon.ru/api/performance/swagger.json`

---

## ⚖️ 免责声明与开源协议

本项目提供的规范数据来源于 Ozon 官方公开技术文档，仅供跨国跨境电商开发者学习、接口调试与对接参考。所有商标与官方接口版权归 Ozon 所有。本项目采用 [MIT License](LICENSE) 开源协议。
