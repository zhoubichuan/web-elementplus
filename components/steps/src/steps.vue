<template>
  <el-steps class="web-steps" v-bind="$attrs" finish-status="success" simple>
    <slot></slot>
  </el-steps>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
const childrenRef = ref(null)
defineOptions({
  name: 'WebSteps'
});
</script>

<style lang="scss">
.web-steps {
  .el-step__title.is-success {
    color: var(--color-primary);
  }

  &.el-steps--simple {
    background: var(--color-white);
  }

  &.el-step.is-simple .el-step__icon {
    width: var(--steps-icon-width);
    height: var(--steps-icon-height);
  }

  .el-step__title.is-process {
    color: var(--color-text-primary);
  }

  .el-step__title.is-wait {
    color: var(--color-placeholder);
  }
}
</style>
