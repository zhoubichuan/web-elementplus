---
title: 创建一个页面
head:
  - - meta
    - name: description
      content: react-ant-admin 创建一个页面，详细讲解此框架的文件部署，教你如何掌握框架的工作流程，快速上手。
  - - meta
    - name: keywords
      content: react react-ant react-admin react-ant-admin 创建一个页面
---

# 创建一个页面

在`src/pages`文件夹下创建一个`test.js`文件,代码如下

```js{20,27}
// 函数组件 or 类组件
import React from "react";
export default function Test() {
  return <div>test页面</div>;
}
// ----------------------------------------------
export default class Test extends React.Component {
  render() {
    return <div>test页面</div>;
  }
}

/**
 * 给 pages 组件追加路由信息
 * export default 组件的原型上添加route信息,或者向外暴露一个 route
 * 会被webpack的webpack-router-generator插件捕获信息
 */

// 1.被捕获 export default 原型上的route
Test.route={
  [MENU_TITLE] : "test页面",
  [MENU_KEY] : "test",
  [MENU_PATH]: "/test"
}

// 2.被捕获 暴露的route信息  优先级比上面高
export const route = {
  [MENU_TITLE] : "test页面",
  [MENU_KEY] : "test",
  [MENU_PATH]: "/test"
}
```

::: tip
若页面是与菜单栏上的路由信息是一一对应的话，以上的`route`添加的信息只需要`MENU_PATH`属性即可，因为其余属性会与菜单信息一起合并，`MENU_KEY`,`MENU_TITLE`等等都会有，不需要添加太多信息，若想覆盖菜单的`title`等信息，可以追加进去，因为**页面路由列表信息**`优先级高于`**菜单配置信息**！
:::

浏览器访问 `http://localhost:3000/react-ant-admin/test` 即可
