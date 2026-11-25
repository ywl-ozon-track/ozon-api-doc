<template>
  <div class="redoc-wrapper">
    <div v-if="loading" class="redoc-loading">
      <div class="spinner"></div>
      <p>正在载入 Ozon OpenAPI 交互式规范 (虚拟三栏引擎)...</p>
    </div>
    <div ref="container" class="redoc-container" :style="{ opacity: loading ? 0 : 1 }"></div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useData } from 'vitepress'

const props = defineProps({
  specUrl: {
    type: String,
    required: true
  }
})

const container = ref(null)
const loading = ref(true)
const { isDark } = useData()

const renderRedoc = () => {
  if (typeof window === 'undefined' || !container.value) return

  // 等待外部 Redoc standalone 脚本载入
  const init = () => {
    if (!window.Redoc) {
      setTimeout(init, 100)
      return
    }

    const themeOptions = {
      typography: {
        fontSize: '14px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        headings: {
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        }
      },
      colors: {
        primary: {
          main: '#005bff' // Ozon 官方品牌蓝
        }
      },
      sidebar: {
        width: '280px',
        backgroundColor: isDark.value ? '#1b1b1f' : '#f6f8fa'
      },
      rightPanel: {
        backgroundColor: isDark.value ? '#161618' : '#263238'
      }
    }

    try {
      window.Redoc.init(
        props.specUrl,
        {
          scrollYOffset: 64,
          hideDownloadButton: false,
          theme: themeOptions,
          expandResponses: '200',
          pathInMiddlePanel: true,
          requiredPropsFirst: true
        },
        container.value,
        () => {
          loading.value = false
        }
      )
    } catch (e) {
      console.error('Redoc 初始化异常:', e)
      loading.value = false
    }
  }

  init()
}

onMounted(() => {
  renderRedoc()
})

watch(isDark, () => {
  // 主题切换时重新渲染以适配配色
  if (container.value) {
    container.value.innerHTML = ''
    loading.value = true
    renderRedoc()
  }
})
</script>

<style scoped>
.redoc-wrapper {
  position: relative;
  width: 100%;
  min-height: calc(100vh - 64px);
}

.redoc-loading {
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--vp-c-text-2);
  font-size: 14px;
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

.redoc-container {
  width: 100%;
  transition: opacity 0.3s ease;
}

/* 隐藏 VitePress 默认文章内边距以实现全屏沉浸式三栏体验 */
:deep(.redoc-wrap) {
  margin: 0 !important;
}
</style>
