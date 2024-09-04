<template>
  <div class="web-pagination-wrap">
    <div class="total">共 {{ $attrs.total }} 条数据</div>
    <el-pagination
      class="web-pagination"
      popper-class="web-pagination-popper"
      background
      layout="prev, pager, next, sizes, jumper"
      v-bind="$attrs"
    >
    </el-pagination>
  </div>
</template>
<script lang='ts'>
export default {
  name: "WebPagination"
}
</script>
<style lang="scss">
.web-pagination-wrap {
  display: flex;
  justify-content: space-between;
  line-height: 32px;
  padding: 24px 0;
  .total {
    color: var(--color-86868b);
    font-size: var(--pagination-total-font-size);
  }
}
.web-pagination {
  .el-pagination__sizes {
    margin-left: 16px;
  }
  &.el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: var(--color-white);
    color: var(--color-primary);
    border: var(--pagination-pages-active-border);
    border-radius: var(--pagination-pages-border-radius);
  }
  &.el-pagination.is-background .btn-next:disabled,
  &.el-pagination.is-background .btn-prev:disabled {
    color: var(--pagination-prev-next-disabled-color);
    background-color: var(--pagination-prev-next-disabled-bg);
  }
  &.el-pagination.is-background .btn-next,
  &.el-pagination.is-background .btn-prev,
  &.el-pagination.is-background .el-pager li {
    background-color: var(--color-white);
    color: var(--color-86868b);
    border: var(--pagination-pages-border);
    border-radius: var(--pagination-pages-border-radius);
  }
  &.el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: var(--color-primary);
  }
  .el-select .el-input.is-focus .el-input__inner {
    border-color: var(--color-primary) !important;
  }
  .el-select .el-input__inner:focus,
  .el-input__inner:focus {
    border-color: var(--color-primary) !important;
  }
  &.el-pagination.is-background .btn-next:hover:not([disabled]),
  &.el-pagination.is-background .btn-prev:hover:not([disabled]) {
    color: var(--color-primary);
  }
  .el-select .el-input.is-focus .el-input__inner,
  .el-select .el-input__inner:focus {
    box-shadow: 0 0 0 1px var(--color-primary) inset !important;
  }
}
.web-pagination-popper {
  .el-select-dropdown__item.hover,
  .el-select-dropdown__item:hover {
    background-color: var(--color-help);
  }
  .el-select-dropdown .el-select-dropdown__item.selected {
    color: var(--color-primary);
    background-color: var(--color-help);
  }
}
</style>
