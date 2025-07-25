<template>
  <web-dropdown>
    <span class="web-dropdown-link">
      Dropdown List
      <web-icon class="web-icon--right">
        <arrow-down />
      </web-icon>
    </span>
    <template #dropdown>
      <web-dropdown-menu>
        <web-dropdown-item>Action 1</web-dropdown-item>
        <web-dropdown-item>Action 2</web-dropdown-item>
        <web-dropdown-item>Action 3</web-dropdown-item>
        <web-dropdown-item disabled>Action 4</web-dropdown-item>
        <web-dropdown-item divided>Action 5</web-dropdown-item>
      </web-dropdown-menu>
    </template>
  </web-dropdown>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
</script>
<style scoped>
.example-showcase .web-dropdown-link {
  cursor: pointer;
  color: var(--web-color-primary);
  display: flex;
  align-items: center;
}
</style>
