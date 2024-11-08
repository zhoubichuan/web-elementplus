<template>
  <el-tabs v-bind="$attrs" class="web-tabs">
    <slot></slot>
  </el-tabs>
</template>
<script lang='ts'>
export default {
  name: "WebTabs"
}
</script>
<style lang="scss">
.web-tabs {
  .el-tabs__item.is-active,
  .el-tabs__item:hover {
    color: var(--color-primary);
  }
  .el-tabs__active-bar {
    display: none;
  }
  .el-tabs__item.is-active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: calc(50% - var(--tabs-after-width) / 2);
    width: var(--tabs-after-width) !important;
    height: var(--tabs-after-height);
    border-radius: 2px;
    background-color: var(--color-primary);
    z-index: 1;
    list-style: none;
  }
  #tab-first.is-active::after {
    left: calc(50% - var(--tabs-after-width) / 2 - 10px);
  }
  .el-tabs__item:last-child.is-active::after {
    left: calc(50% - var(--tabs-after-width) / 2 + 10px);
  }
  .el-tabs__nav-wrap::after {
    display: none;
  }
}
</style>
