import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Ozon 开发者 API 交互文档',
  description: 'Ozon 官方 Seller API & Performance API 全量镜像与交互式参考 (每日自动对账同步)',
  base: '/ozon-api-doc/',
  head: [
    ['link', { rel: 'icon', href: 'https://docs.ozon.ru/favicon.ico' }],
    // 引入 Redoc standalone 运行时脚本
    ['script', { src: 'https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js' }]
  ],
  themeConfig: {
    siteTitle: 'Ozon API 镜像站',
    nav: [
      { text: '首页', link: '/' },
      { text: '📦 Seller API (卖家核心)', link: '/seller-api' },
      { text: '🚀 Performance API (广告推广)', link: '/performance-api' },
      { text: '📝 同步对账日志', link: '/changelog' },
      {
        text: '🔗 官方官方入口',
        items: [
          { text: 'Seller API 官方文档', link: 'https://docs.ozon.ru/api/seller/' },
          { text: 'Performance API 官方文档', link: 'https://docs.ozon.ru/api/performance/' },
          { text: 'Ozon 卖家登录中心', link: 'https://seller.ozon.ru/' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ywl-ozon-track/ozon-api-doc' }
    ],
    footer: {
      message: '数据源直连 Ozon 官方公开 OpenAPI 3.0 规范 · 每日自动化巡检与 PR 对账',
      copyright: 'Copyright © 2026 YWL Ozon Track Team'
    },
    outline: {
      level: [2, 3],
      label: '页面导航'
    }
  }
})
