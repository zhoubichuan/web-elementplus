<template>
  <el-checkbox class="web-checkbox" v-bind="$attrs">
    <slot></slot>
  </el-checkbox>
</template>
<script setup lang="ts" name="WebCheckbox">
</script>
<script lang='ts'>
export default {
  name: "WebCheckbox"
}
</script>
<style lang="scss">
.web-checkbox {
  .el-checkbox__inner {
    border: var(--radio-circle-not-checked-border);
  }
  &:hover {
    .el-checkbox__input:not(.is-disabled) .el-checkbox__inner {
      border: var(--radio-circle-not-checked-border-hover);
    }
  }
  .el-checkbox__input.is-checked:not(.is-disabled) .el-checkbox__inner {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
  }
  .el-checkbox__input.is-checked:not(.is-disabled) + .el-checkbox__label {
    color: var(--color-primary);
  }
  &.el-checkbox.is-bordered.is-disabled {
    background-color: var(--color-placeholder-bg);
    border-color: var(--radio-disabled-boder-color);
  }
  &.el-checkbox.is-bordered.is-checked:not(.is-disabled) {
    border-color: var(--color-primary);
  }
  .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
    // border: var(--radio-circle-checked-disabled-border);
    &::after {
      // display: none;
    }
  }
  &.web-checkbox .el-checkbox__inner {
    border: 1px solid #dcdfe6;
  }
}
</style>
