# Button 按钮

:::tip 前言
组件默认使用 Flex 布局，不需要手动设置 type="flex"。

请注意父容器避免使用 inline 相关样式，会导致组件宽度不能撑满。
:::

## 默认按钮

<preview path="./button-default.vue"></preview>

## 禁用状态


<preview path="./button-disabled.vue"></preview>

## 链接按钮


<preview path="./button-link.vue"></preview>

## 自定义颜色


<preview path="./button-size.vue"></preview>

## Button 属性

| 属性名        | 说明           | 类型  |可选值  |默认值  |
| :------------- |:-------------| :-----|:-----|:-----|
| size     | 尺寸 | string|large / default /small|—|
| type     | 类型 | string|primary / success / warning / danger / info / text|—|
| round     | 是否为圆角按钮 | boolean|—|false|
| circle     | 是否为圆形按钮 | boolean|—|false|
