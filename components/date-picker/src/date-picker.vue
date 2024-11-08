<template>
  <el-date-picker
    v-bind="$attrs"
    class="web-date-picker"
    popper-class="web-date-picker-popper"
  ></el-date-picker>
</template>
<script lang='ts'>
export default {
  name: "WebDatePicker"
}
</script>
<style lang="scss">
.web-date-picker {
  .el-input__inner:focus,
  &.el-range-editor.is-active,
  &.el-input__inner:focus {
    border-color: var(--color-primary);
  }
  &.el-range-editor.el-input__inner,
  .el-input__inner {
    height: var(--date-picker-input-height);
  }
}
.web-date-picker-popper {
  .el-date-table td.today .el-date-table-cell__text,
  .el-date-table td.available:hover,
  .el-picker-panel__icon-btn:hover,
  .el-date-picker__header-label:hover {
    color: var(--color-primary);
  }
  .el-date-table td.current:not(.disabled) .el-date-table-cell__text,
  .el-date-table td.end-date .el-date-table-cell__text,
  .el-date-table td.start-date .el-date-table-cell__text {
    background-color: var(--color-primary);
  }
}
</style>
