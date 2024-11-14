<template>
  <el-button class="web-button" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
    <template v-if="slots.loading" #loading="scoped">
      <slot name="loading" v-bind="scoped"></slot>
    </template>
    <template v-if="slots.icon" #icon="scoped">
      <slot name="icon" v-bind="scoped"></slot>
    </template>
  </el-button>
</template>

<script lang="ts" setup>
import { useSlots } from 'vue'
import { ElButton } from 'element-plus';
const slots = useSlots()
defineOptions({
  name: 'WebButton'
})
</script>

<style lang="scss">
@import url(../../index.scss);

.web-button {
  &.is-disabled {
    background-color: var(--color-disabled);
    color: var(--color-text-disabled);
    border: 1px solid #e9e9e9;
  }

  &.el-button {
    height: var(--button-default-height);
    padding: var(--button-default-padding);

    // 类型
    &--default {
      color: var(--color-text-default);
      border: 1px solid var(--color-border);
      background-color: var(--color-default);
    }

    &--primary {
      color: var(--color-white);
      border: 1px solid var(--color-border);
      background-color: var(--color-primary);
    }

    &--success {
      color: var(--color-white);
      border: 1px solid var(--color-border);
      background-color: var(--color-success);
    }

    &--info {
      color: var(--color-white);
      border: 1px solid var(--color-info);
      background-color: var(--color-info);
    }

    &--warning {
      color: var(--color-white);
      border: 1px solid var(--color-warning);
      background-color: var(--color-warning);
    }

    &--danger {
      color: var(--color-white);
      border: 1px solid var(--color-danger);
      background-color: var(--color-danger);
    }

    // 尺寸
    &--large {
      height: var(--button-large-height);
      padding: var(--button-large-padding);
    }

    &--small {
      height: var(--button-small-height);
      padding: var(--button-small-padding);
    }
  }
}
</style>
