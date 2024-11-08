<template>
  <el-radio class="web-radio" v-bind="$attrs">
    <slot></slot>
  </el-radio>
</template>
<script lang='ts'>
export default {
  name: "WebRadio"
}
</script>
<style lang="scss">
.web-radio {
  .el-radio__inner {
    border: var(--radio-circle-not-checked-border);
  }
  &:hover {
    .el-radio__input:not(.is-disabled) .el-radio__inner {
      border: var(--radio-circle-not-checked-border-hover);
    }
  }
  .el-radio__input.is-checked:not(.is-disabled) .el-radio__inner {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
  }
  .el-radio__input.is-checked:not(.is-disabled) + .el-radio__label {
    color: var(--color-primary);
  }
  &.el-radio.is-bordered.is-disabled {
    background-color: var(--color-placeholder-bg);
    border-color: var(--radio-disabled-boder-color);
  }
  &.el-radio.is-bordered.is-checked:not(.is-disabled) {
    border-color: var(--color-primary);
  }
  .el-radio__input.is-disabled.is-checked .el-radio__inner {
    border: var(--radio-circle-checked-disabled-border);
    &::after {
      display: none;
    }
  }
}
</style>
