# Button 按钮

:::tip 前言
组件默认使用 Flex 布局，不需要手动设置 type="flex"。

请注意父容器避免使用 inline 相关样式，会导致组件宽度不能撑满。
:::

## 基础用法

###### 输出

<preview path="./button.vue" desc="使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。"></preview>

## 禁用状态

###### 输出

<preview path="./button-disabled.vue" desc="使用 `disabled`来定义按钮的禁用。"></preview>

## 链接按钮

###### 输出

<preview path="./button-link.vue"></preview>

## 自定义颜色

###### 输出

<preview path="./button-size.vue"></preview>

## Button 属性

| 属性名        | 说明           | 类型  |可选值  |默认值  |
| :------------- |:-------------| :-----|:-----|:-----|
| size     | 尺寸 | string|large / default /small|—|
| type     | 类型 | string|primary / success / warning / danger / info / text|—|
| round     | 是否为圆角按钮 | boolean|—|false|
| circle     | 是否为圆形按钮 | boolean|—|false|
