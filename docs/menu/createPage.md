### 创建一个页面

在`src/pages`文件夹下创建一个`test.js`文件,代码如下

```js
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
```

因为添加了页面文件，需要与菜单路由信息绑定在一起，所以需要手动追加这个页面的路由地址

在`src/router/route/index.js`文件里追加路由信息.代码如下

```js
import loadable from "@loadable/component";
import { Redirect } from "react-router-dom";
// .....
const Test = loadable(() => import("@pages/test")); // 支持路由懒加载减少首页打开的时间
// 路由列表
const routerList = [
  {
    path: "/",
    key: "index",
    to: "/details/person",
    components: Redirect,
  },
  // ....
  {
    path: "/test", // 对应的路由
    key: "test", // 必要
    title: "test页面", // 标题
    components: Test,
  },
];

export default routerList;
```

::: tip
若页面是与菜单栏上的路由信息是一一对应的话，以上的`routerList`添加的信息只需要`path`,`components`属性即可，因为其余属性会与菜单信息一起合并，`key`,`title`等等都会有，不需要添加太多信息，若想覆盖菜单的`title`等信息，可以追加进去，因为**页面路由列表信息**`优先级高于`**菜单配置信息**！
:::

浏览器访问 http://localhost:3000/react-ant-admin/test 即可
