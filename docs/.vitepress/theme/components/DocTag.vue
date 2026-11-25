<template>
  <span :class="['doc-tag-pill', type || 'default']">
    <slot />
  </span>
</template>

<script setup lang="ts">
defineProps<{
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'
}>()
</script>

<style scoped>
.doc-tag-pill {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  font-size: 11px;
  font-weight: 600;
  border-radius: 9999px;
  margin: 0 4px;
}

.doc-tag-pill.default {
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-2);
}

.doc-tag-pill.primary {
  background: #e0f2fe;
  color: #0284c7;
}

.doc-tag-pill.success {
  background: #dcfce7;
  color: #15803d;
}

.doc-tag-pill.warning {
  background: #fef3c7;
  color: #b45309;
}

.doc-tag-pill.danger {
  background: #fee2e2;
  color: #b91c1c;
}
</style>
