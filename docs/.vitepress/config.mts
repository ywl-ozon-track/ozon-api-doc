import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// 安全读取动态生成的侧边栏配置
function loadSidebar(lang: string) {
  const filePath = path.join(__dirname, `sidebar-${lang}.json`)
  if (fs.existsSync(filePath)) {
    try {
      return JSON.parse(fs.readFileSync(filePath, 'utf8'))
    } catch (e) {
      console.warn(`Failed to parse sidebar-${lang}.json`, e)
    }
  }
  return {}
}

const sidebarZh = loadSidebar('zh')
const sidebarRu = loadSidebar('ru')
const sidebarEn = loadSidebar('en')

export default defineConfig({
  title: 'Ozon API 镜像交互文档',
  description: 'Ozon 官方 Seller API & Performance API 全量镜像与原生交互参考 (纯 VitePress 渲染 · 默认中文 · 多语言支持)',
  base: '/ozon-api-doc/',
  head: [
    ['link', { rel: 'icon', href: 'https://docs.ozon.ru/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#0284c7' }]
  ],
  themeConfig: {
    siteTitle: 'Ozon API 镜像站',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ywl-ozon-track/ozon-api-doc' }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索接口与参数', buttonAriaLabel: '搜索接口与参数' },
              modal: {
                noResultsText: '未找到相关接口',
                resetButtonTitle: '清除搜索条件',
                footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
              }
            }
          },
          ru: {
            translations: {
              button: { buttonText: 'Поиск методов API', buttonAriaLabel: 'Поиск методов API' },
              modal: { noResultsText: 'Ничего не найдено' }
            }
          },
          en: {
            translations: {
              button: { buttonText: 'Search API Endpoints', buttonAriaLabel: 'Search API Endpoints' }
            }
          }
        }
      }
    },
    footer: {
      message: '数据源直连 Ozon 官方公开 OpenAPI 3.0 规范 · 纯 VitePress 原生矩阵渲染',
      copyright: 'Copyright © 2026 YWL Ozon Track Team'
    }
  },
  locales: {
    // 默认语言：简体中文
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '📦 Seller API (卖家核心)', link: '/seller/' },
          { text: '🚀 Performance API (广告营销)', link: '/performance/' },
          { text: '📝 对账流水', link: '/changelog' },
          {
            text: '🔗 官方官方入口',
            items: [
              { text: 'Seller API 官方文档', link: 'https://docs.ozon.ru/api/seller/' },
              { text: 'Performance API 官方文档', link: 'https://docs.ozon.ru/api/performance/' },
              { text: 'Ozon 卖家登录中心', link: 'https://seller.ozon.ru/' }
            ]
          }
        ],
        sidebar: sidebarZh,
        outline: {
          level: [2, 3],
          label: '本页接口大纲'
        }
      }
    },
    // 俄语原版
    ru: {
      label: 'Русский',
      lang: 'ru-RU',
      link: '/ru/',
      themeConfig: {
        nav: [
          { text: 'Главная', link: '/ru/' },
          { text: '📦 Seller API', link: '/ru/seller/' },
          { text: '🚀 Performance API', link: '/ru/performance/' },
          { text: '📝 Изменения', link: '/ru/changelog' },
          {
            text: '🔗 Официальные ссылки',
            items: [
              { text: 'Официальная документация Seller API', link: 'https://docs.ozon.ru/api/seller/' },
              { text: 'Официальная документация Performance API', link: 'https://docs.ozon.ru/api/performance/' },
              { text: 'Кабинет продавца Ozon', link: 'https://seller.ozon.ru/' }
            ]
          }
        ],
        sidebar: sidebarRu,
        outline: {
          level: [2, 3],
          label: 'На этой странице'
        }
      }
    },
    // 英语版
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: '📦 Seller API', link: '/en/seller/' },
          { text: '🚀 Performance API', link: '/en/performance/' },
          { text: '📝 Changelog', link: '/en/changelog' },
          {
            text: '🔗 Official Links',
            items: [
              { text: 'Official Seller API Docs', link: 'https://docs.ozon.ru/api/seller/' },
              { text: 'Official Performance API Docs', link: 'https://docs.ozon.ru/api/performance/' },
              { text: 'Ozon Seller Portal', link: 'https://seller.ozon.ru/' }
            ]
          }
        ],
        sidebar: sidebarEn,
        outline: {
          level: [2, 3],
          label: 'On this page'
        }
      }
    }
  }
})
