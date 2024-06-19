<template>
  <el-button class="my-button" :style="buttonStyle" v-bind="newAttrs">
    <slot></slot>
  </el-button>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue'
export default defineComponent({
  name: 'WebButton',
  setup(props, { attrs }) {
    const state = reactive({})
    interface Attrs {
      size: string
      color?: string
    }
    const defaultAttrs: Attrs = {
      size: 'default'
    }

    let newAttrs: Attrs = {
      ...defaultAttrs,
      ...attrs
    }
    switch (attrs.type) {
      case 'success':
        newAttrs.color = '#2FB755'
        break
      case 'primary':
        break
      default:
        break
    }
    if (attrs.plain) {
      newAttrs.color = '#ffffff'
    }
    if (attrs.icon) {
      // newAttrs.plain = true
    }
    const buttonStyle = computed(() => {
      interface Styles {
        padding: string
        color?: string
        border?: string
        backgroundColor?: string
      }
      let styles: Styles = {
        padding: '10px 15px'
      }
      if (attrs.disabled === undefined || attrs.disabled === false) {
        switch (
          attrs.type //按钮类型
        ) {
          case 'success':
            // styles.color = '#2FB755'
            break
          case 'primary':
            break
          default:
            styles.color = '#2FB755'
            styles.border = '1px solid #2FB755'
            styles.backgroundColor = '#ffffff'
            break
        }
      }

      switch (
        attrs.size //按钮尺寸
      ) {
        case 'small':
          styles.padding = '7px 8px'
          break
        case 'middle':
          break
        default:
          break
      }
      if (attrs.icon) {
        styles.padding = '10px 15px 10px 11px'
      }
      return styles
    })
    return {
      ...toRefs(state),
      newAttrs,
      buttonStyle
    }
  }
})
</script>
<style lang="less">
.my-button {
  &.is-disabled {
    background-color: #f2f2f2;
    color: #a5a5a5;
    border: 1px solid #e9e9e9;
  }
  &.el-button--large {
    height: var(--button-large-height);
    padding: var(--button-large-padding) !important;
  }
  &.el-button--default {
    height: var(--button-default-height);
    padding: var(--button-default-padding) !important;
  }
  &.el-button--small {
    height: var(--button-small-height);
    padding: var(--button-small-padding) !important;
  }
  &.el-button--info {
    background-color: var(--color-cancel-btn-bg) !important;
    color: var(--color-cancel-btn-text) !important;
    border: none !important;
  }
}
</style>
