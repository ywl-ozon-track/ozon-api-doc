<template>
  <div class="api-stats-container">
    <div class="stat-card" v-for="item in stats" :key="item.label">
      <div class="stat-icon">{{ item.icon }}</div>
      <div class="stat-info">
        <div class="stat-value">{{ item.value }}</div>
        <div class="stat-label">{{ item.label }}</div>
        <div class="stat-desc">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  lang?: 'zh' | 'ru' | 'en'
}>(), {
  lang: 'zh'
})

const stats = computed(() => {
  if (props.lang === 'ru') {
    return [
      { icon: '📦', value: '483', label: 'Методов Seller API', desc: 'Основной API продавца' },
      { icon: '🚀', value: '48', label: 'Методов Performance', desc: 'Реклама и продвижение' },
      { icon: '📂', value: '62', label: 'Бизнес-категории', desc: 'Структурированные модули' },
      { icon: '⚡', value: '24/7', label: 'Ежедневная сверка', desc: 'Автоматический аудит' },
    ]
  }
  if (props.lang === 'en') {
    return [
      { icon: '📦', value: '483', label: 'Seller API Endpoints', desc: 'Core Merchant API' },
      { icon: '🚀', value: '48', label: 'Performance Endpoints', desc: 'Ads & Promotion API' },
      { icon: '📂', value: '62', label: 'Business Categories', desc: 'Structured Namespaces' },
      { icon: '⚡', value: 'Daily', label: 'Automated Sync', desc: 'OpenAPI Auto-Inspection' },
    ]
  }
  return [
    { icon: '📦', value: '483', label: 'Seller 卖家核心接口', desc: '商品、库存、订单履约全覆盖' },
    { icon: '🚀', value: '48', label: 'Performance 推广接口', desc: 'CPC 点击与 CPO 成交广告' },
    { icon: '📂', value: '62', label: '标准业务模块', desc: '高内聚业务分类与字典' },
    { icon: '⚡', value: '每日', label: '官方源自动化对账', desc: '无缝跟踪 Ozon 官方版本' },
  ]
})
</script>

<style scoped>
.api-stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin: 24px 0 32px 0;
}

.stat-card {
  display: flex;
  align-items: center;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 16px 20px;
  transition: all 0.25s ease;
}

.stat-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.stat-icon {
  font-size: 32px;
  margin-right: 16px;
  flex-shrink: 0;
}

.stat-info {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 24px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  line-height: 1.2;
}

.stat-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-top: 2px;
}

.stat-desc {
  font-size: 12px;
  color: var(--vp-c-text-2);
  margin-top: 2px;
}
</style>
