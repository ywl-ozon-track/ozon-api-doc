<template>
  <span :class="['custom-method-badge', method.toLowerCase()]">
    {{ method.toUpperCase() }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | string
}>()
</script>

<style scoped>
.custom-method-badge {
  display: inline-block;
  padding: 2px 8px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.4;
  border-radius: 4px;
  color: #ffffff;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-family: var(--vp-font-family-mono);
}

.custom-method-badge.post {
  background-color: #16a34a;
}

.custom-method-badge.get {
  background-color: #0284c7;
}

.custom-method-badge.put {
  background-color: #d97706;
}

.custom-method-badge.delete {
  background-color: #dc2626;
}

.custom-method-badge.patch {
  background-color: #7c3aed;
}
</style>
