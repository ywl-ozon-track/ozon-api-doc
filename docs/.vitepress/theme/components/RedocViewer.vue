<template>
  <div class="redoc-wrapper">
    <div class="action-bar">
      <div class="info">
        <span class="badge">SSG 预渲染引擎</span>
        <span class="title">{{ title }}</span>
      </div>
      <div class="actions">
        <a :href="src" target="_blank" rel="noopener noreferrer" class="btn">
          在新标签页全屏打开 ↗
        </a>
        <a :href="specUrl" download class="btn">
          下载 OpenAPI JSON ⬇
        </a>
      </div>
    </div>
    <div v-if="loading" class="redoc-loading">
      <div class="spinner"></div>
      <p>正在载入预渲染三栏文档...</p>
    </div>
    <iframe
      :src="src"
      class="redoc-iframe"
      :style="{ opacity: loading ? 0 : 1 }"
      @load="onIframeLoad"
    ></iframe>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  specUrl: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: 'Ozon API'
  }
})

const loading = ref(true)

const onIframeLoad = () => {
  loading.value = false
}
</script>

<style scoped>
.redoc-wrapper {
  position: relative;
  width: 100%;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
}

.action-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 13px;
}

.action-bar .info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.action-bar .badge {
  background: rgba(0, 91, 255, 0.1);
  color: #005bff;
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 11px;
}

.action-bar .title {
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.action-bar .actions {
  display: flex;
  gap: 12px;
}

.action-bar .btn {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
}

.action-bar .btn:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.redoc-loading {
  position: absolute;
  top: 140px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--vp-c-text-2);
  font-size: 14px;
  z-index: 10;
}

.spinner {
  width: 36px;
  height: 36px;
  border: 3px solid rgba(0, 91, 255, 0.15);
  border-top-color: #005bff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-bottom: 12px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.redoc-iframe {
  flex: 1;
  width: 100%;
  height: 100%;
  border: none;
  background: #ffffff;
  transition: opacity 0.3s ease;
}
</style>
