<template>
  <el-breadcrumb class="web-breadcrumb" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
    <template v-if="slots.loading" #loading="scoped">
      <slot name="loading" v-bind="scoped"></slot>
    </template>
    <template v-if="slots.icon" #icon="scoped">
      <slot name="icon" v-bind="scoped"></slot>
    </template>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { useSlots } from 'vue'
const slots = useSlots()
defineOptions({
  name: 'WebBreadcrumb'
})
</script>

<style lang="scss">
// @import '../../index.scss';

.web-breadcrumb {
  &.is-disabled {
    color: var(--web-color-text-disabled);
    background-color: var(--web-color-disabled);
    // border: 1px solid #e9e9e9;
  }

  &.el-breadcrumb {
    height: var(--web-breadcrumb-default-height);
    padding: var(--web-breadcrumb-default-padding);

    // 类型
    &--default {
      color: var(--web-color-text-default);
      // border: 1px solid var(--web-color-border);
      background-color: var(--web-color-default);
    }

    &--primary {
      color: var(--web-color-white);
      // border: 1px solid var(--web-color-border);
      background-color: var(--web-color-primary);
    }

    &--success {
      color: var(--web-color-white);
      background-color: var(--web-color-success);
      border: 1px solid var(--web-color-border);
    }

    &--info {
      color: var(--web-color-white);
      background-color: var(--web-color-info);
      border: 1px solid var(--web-color-info);
    }

    &--warning {
      color: var(--web-color-white);
      background-color: var(--web-color-warning);
      border: 1px solid var(--web-color-warning);
    }

    &--danger {
      color: var(--web-color-white);
      background-color: var(--web-color-danger);
      border: 1px solid var(--web-color-danger);
    }

    // 尺寸
    &--large {
      height: var(--web-breadcrumb-large-height);
      padding: var(--web-breadcrumb-large-padding);
    }

    &--small {
      height: var(--web-breadcrumb-small-height);
      padding: var(--web-breadcrumb-small-padding);
    }
  }
}
</style>
