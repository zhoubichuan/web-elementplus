<template>
  <el-table v-bind="$attrs" class="my-table">
    <slot></slot>
  </el-table>
  <template v-if="$attrs.pagination">
    <my-pagination
      layout="prev, pager, next"
      :total="($attrs.pagination as any)?.total.value || 0"
      @current-change="($attrs.pagination as any)?.currentChange.value"
      @size-change="($attrs.pagination as any)?.sizeChange.value"
      :page-size="($attrs.pagination as any)?.pageSize.value || 10"
      :page-sizes="[10, 20, 50, 100]"
    >
    </my-pagination>
  </template>
</template>

<script setup lang="ts">
import MyPagination from '../my-pagination/index.vue'
</script>

<style lang="less">
.my-table {
  color: var(--color-text-primary);
  &.el-table .el-table__header-wrapper thead {
    color: var(--table-header-color);
    height: var(--table-header-height);
  }
  &.el-table .el-table__header-wrapper th.el-table__cell {
    background-color: var(--table-header-bg);
  }
  &.el-table .el-table__body-wrapper tr {
    height: var(--table-line-height);
  }
}
</style>
