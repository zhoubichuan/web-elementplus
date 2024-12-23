<template>
  <el-input-number :class="{ 'web-input-number': true }" v-bind="$attrs"> </el-input-number>
</template>

<script setup lang="ts">
import { ElInputNumber } from 'element-plus'

defineOptions({
  name: 'WebInputNumber'
})
</script>

<style lang="scss">
@import '../../index.scss';

.web-input-number {
  width: 100%;
  .el-input {
    &__wrapper {
      &.is-focus {
        box-shadow: 0 0 0 1px var(--web-input-focus-border-color) inset;
      }
    }
  }
}
</style>
