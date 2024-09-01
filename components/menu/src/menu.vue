<template>
  <el-menu v-bind="$attrs" class="my-menu">
    <slot></slot>
  </el-menu>
</template>

<style lang="scss">
.my-menu {
  &.el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 2px solid var(--color-primary);
    color: var(--color-primary) !important;
  }
}
</style>
