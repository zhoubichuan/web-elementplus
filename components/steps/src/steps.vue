<template>
  <el-steps class="web-steps" v-bind="$attrs" finish-status="success" simple>
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-steps>
</template>

<script lang="ts"  setup name="WebSteps">
import { defineComponent, ref, onMounted } from 'vue'
import { useSlots } from 'vue'
const slots = useSlots()
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
