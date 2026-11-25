// ============================================================
// Ozon API 文档站全局 TypeScript 类型系统
// ============================================================

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export interface ApiCategory {
  id: string
  zh: string
  ru: string
  en: string
  icon?: string
}

export interface ApiParameter {
  name: string
  in: 'header' | 'query' | 'path' | 'cookie'
  required: boolean
  description?: string
  schema?: Record<string, unknown>
}

export interface ApiResponseDef {
  code: string
  description: string
  schema?: Record<string, unknown>
  example?: unknown
}

export interface ApiOperation {
  path: string
  method: HttpMethod
  summary: string
  description?: string
  tags: string[]
  parameters?: ApiParameter[]
  requestBody?: {
    required?: boolean
    content?: Record<string, { schema?: Record<string, unknown>; example?: unknown }>
  }
  responses?: Record<string, ApiResponseDef>
}

export interface NavItemConfig {
  text: string
  link?: string
  items?: NavItemConfig[]
}

export interface SidebarGroupConfig {
  text: string
  collapsed?: boolean
  items: Array<{ text: string; link: string }>
}

export interface DocStats {
  sellerCount: number
  performanceCount: number
  categoryCount: number
  lastSyncDate: string
}
