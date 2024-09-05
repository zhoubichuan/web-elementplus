# Button 按钮

:::tip 前言
组件默认使用 Flex 布局，不需要手动设置 type="flex"。

请注意父容器避免使用 inline 相关样式，会导致组件宽度不能撑满。
:::

## 基础用法

###### 输入

```
<preview path="./button.vue" desc="使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。"></preview>
```

###### 输出

<preview path="./button.vue" desc="使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。"></preview>

## 禁用状态

###### 输入

```
<preview path="./button-disabled.vue" desc="使用 `disabled`来定义按钮的禁用。"></preview>
```

###### 输出

<preview path="./button-disabled.vue" desc="使用 `disabled`来定义按钮的禁用。"></preview>

## 链接按钮

:::warning
`type="text"` 已被 废弃，将于版本
3.0.0 时 移除，请考虑切换至新的 API。

新的 API `link` 于
2.2.1 版本添加，同时可以使用 type API 设置链接按钮的主题样式。
:::

###### 输入

```
<preview path="./button-link.vue"></preview>
```

###### 输出

<preview path="./button-link.vue"></preview>

## 自定义颜色

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 `size` 属性额外配置尺寸，可使用 `large`和`small`两种值。

###### 输入

```
<preview path="./button-size.vue"></preview>
```

###### 输出

<preview path="./button-size.vue"></preview>

## Button 属性

| 属性名        | 说明           | 类型  |可选值  |默认值  |
| :------------- |:-------------| :-----|:-----|:-----|
| size     | 尺寸 | string|large / default /small|—|
| type     | 类型 | string|primary / success / warning / danger / info / text|—|
| round     | 是否为圆角按钮 | boolean|—|false|
| circle     | 是否为圆形按钮 | boolean|—|false|
