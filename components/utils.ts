// ============================================================
// Ozon API 文档站通用工具函数库
// ============================================================

import type { HttpMethod } from './types'

export function getMethodColor(method: HttpMethod | string): string {
  switch (method.toUpperCase()) {
    case 'POST':
      return '#16a34a'
    case 'GET':
      return '#0284c7'
    case 'PUT':
      return '#d97706'
    case 'DELETE':
      return '#dc2626'
    case 'PATCH':
      return '#7c3aed'
    default:
      return '#64748b'
  }
}

export function formatEndpointUrl(baseUrl: string, path: string): string {
  const cleanBase = baseUrl.replace(/\/+$/, '')
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${cleanBase}${cleanPath}`
}

export function copyToClipboard(text: string): Promise<boolean> {
  if (navigator?.clipboard?.writeText) {
    return navigator.clipboard.writeText(text).then(() => true).catch(() => false)
  }
  return Promise.resolve(false)
}
