<template>
  <a :href="link" class="api-card-box">
    <div class="api-card-header">
      <span class="api-card-icon">{{ icon || '📂' }}</span>
      <h3 class="api-card-title">{{ title }}</h3>
    </div>
    <p class="api-card-desc">{{ desc }}</p>
    <div class="api-card-footer">
      <span class="api-card-count">{{ countText }}</span>
      <span class="api-card-arrow">→</span>
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  desc: string
  link: string
  icon?: string
  countText?: string
}>()
</script>

<style scoped>
.api-card-box {
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 16px;
  text-decoration: none !important;
  color: inherit !important;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.api-card-box:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.api-card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.api-card-icon {
  font-size: 20px;
}

.api-card-title {
  margin: 0 !important;
  font-size: 15px !important;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.api-card-desc {
  font-size: 13px;
  color: var(--vp-c-text-2);
  margin: 0 0 12px 0;
  line-height: 1.5;
  flex-grow: 1;
}

.api-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: var(--vp-c-brand-1);
  font-weight: 500;
}

.api-card-arrow {
  transition: transform 0.2s ease;
}

.api-card-box:hover .api-card-arrow {
  transform: translateX(3px);
}
</style>
