---
title: 文件配置
head:
  - - meta
    - name: description
      content: react-ant-admin 文件配置，详细讲解此框架的文件部署，教你如何掌握框架的工作流程，快速上手。
  - - meta
    - name: keywords
      content: react react-ant react-admin react-ant-admin.
---

# 三.Button

- 组件介绍

[Layout 布局](https://element-plus.gitee.io/#/zh-CN/component/layout)

## index.ts

```js
import { withInstall } from "@element-plus/utils/with-install"
import Button from "./src/button.vue"
import ButtonGroup from "./src/button-group.vue"

export const ElButton = withInstall(Button, {
  ButtonGroup,
})
export const ElButtonGroup = ButtonGroup
export default ElButton

export * from "./src/button"
```

## button.vue

```vue
<template>
  <el-button
    :class="[
      'el-button',
      type ? 'el-button--' + type : '',
      buttonSize ? 'el-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      },
    ]"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    @click="handleClick"
  >
    <i v-if="loading" class="el-icon-loading"></i>
    <i v-if="icon && !loading" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </el-button>
</template>

<script lang="ts">
import { computed, inject, defineComponent } from 'vue'
import { elFormKey, elFormItemKey } from '@element-plus/tokens'
import { useGlobalConfig } from '@element-plus/utils/util'
import { elButtonGroupKey } from '@element-plus/tokens'

import { buttonEmits, buttonProps } from './button'

import type { ElFormContext, ElFormItemContext } from '@element-plus/tokens'

export default defineComponent({
  name: 'ElButton',

  props: buttonProps,
  emits: buttonEmits,

  setup(props, { emit }) {
    const $ELEMENT = useGlobalConfig()

    const elForm = inject<ElFormContext>(elFormKey)
    const elFormItem = inject<ElFormItemContext>(elFormItemKey)
    const elBtnGroup = inject(elButtonGroupKey)

    const buttonSize = computed(
      () => props.size || elBtnGroup?.size || elFormItem?.size || $ELEMENT.size
    )
    const buttonDisabled = computed(() => props.disabled || elForm?.disabled)

    const handleClick = (evt: MouseEvent) => emit('click', evt)

    return {
      buttonSize,
      buttonDisabled,
      handleClick,
    }
  },
})
</script>
```

## button.ts

```js
import { buildProp } from '@element-plus/utils/props'

import type { ExtractPropTypes } from 'vue'

export const buttonType = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  'text',
] as const
export const buttonSize = ['', 'large', 'medium', 'small', 'mini'] as const
export const buttonNativeType = ['button', 'submit', 'reset'] as const

export const buttonProps = {
  type: buildProp({
    type: String,
    values: buttonType,
    default: 'default',
  } as const),
  size: buildProp({
    type: String,
    values: buttonSize,
    default: '',
  } as const),
  icon: {
    type: String,
    default: '',
  },
  nativeType: buildProp({
    type: String,
    values: buttonNativeType,
    default: 'button',
  } as const),
  loading: Boolean,
  disabled: Boolean,
  plain: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
} as const

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits

export type ButtonType = ButtonProps['type']
export type ButtonNativeType = ButtonProps['nativeType']
```

## button-group.vue

主要作用是通过 provide 向其以下组件提供响应式 size 值

```vue {23-28}
<template>
  <div class="el-button-group">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, provide, reactive, toRef } from 'vue'
import { elButtonGroupKey } from '@element-plus/tokens'
import { isValidComponentSize } from '@element-plus/utils/validators'

import type { PropType } from 'vue'
import type { ComponentSize } from '@element-plus/utils/types'

export default defineComponent({
  name: 'ElButtonGroup',
  props: {
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
  },
  setup(props) {
    provide(                            // 主要是通过provide向其以下组件提供响应式size值
      elButtonGroupKey,
      reactive({
        size: toRef(props, 'size'),
      })
    )
  },
})
</script>
```
