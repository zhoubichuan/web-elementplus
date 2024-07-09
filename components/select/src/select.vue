<template>
  <el-select class="web-select" popper-class="web-select-popper" v-bind="$attrs" :suffix-icon="CaretTop">
    <el-option v-for="(item, index) in options" :key="index" :value="item.value" :label="item.label">
      {{ item.label }}
    </el-option>
  </el-select>
</template>

<script setup lang="ts" name="WebSelect">
import { CaretTop } from '@element-plus/icons-vue'
import { defineProps, toRefs, PropType } from "vue"
const props = defineProps({
  options: {
    type: Array as PropType<{ label: string, value: string }[]>,
    default: [{}]
  }
})
const { options } = toRefs(props)
</script>

<style lang="scss">
// .web-select {
//   &.el-select {
//     width: var(--select-width-default);
//   }

//   .el-input__inner {
//     height: var(--select-input-height);
//   }

//   &.el-select .el-input.is-focus input.el-input__inner {
//     border-color: var(--color-primary) !important;
//   }

//   &.el-select .el-input.is-focus .el-input__inner,
//   &.el-select .el-input__inner:focus {
//     border-color: var(--color-primary) !important;
//   }

//   &.el-select .el-select__tags .el-tag--info {
//     background-color: var(--color-f2f2f2);
//   }

//   &.el-select .el-select__tags-text {
//     color: var(--color-text-primary);
//   }
// }

// .web-select-popper {
//   .el-select .el-input__inner {
//     border-color: var(--select-border-color-default);

//     &:hover {
//       border-color: var(--select-border-color-hover);
//     }
//   }

//   .el-select-dropdown__item.selected {
//     color: var(--color-primary);
//     background: var(--color-help);
//   }

//   .el-select-dropdown__item.hover,
//   .el-select-dropdown__item:hover {
//     background: var(--color-help);
//   }

//   .el-select-dropdown.is-multiple .el-select-dropdown__item.selected {
//     color: var(--color-primary);
//     background-color: none;

//     &::after {
//       display: inline-block;
//       content: '';
//       width: 10px;
//       height: 10px;
//     }
//   }

//   .el-input.is-disabled .el-input__inner {
//     background-color: var(--select-bg-color-disabled);
//   }
// }
</style>
