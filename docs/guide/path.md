---
title: 路径配置 react-ant-admin
head:
  - - meta
    - name: description
      content: react-ant-admin 路径配置，详细讲解此框架的文件部署，教你如何掌握框架的工作流程，快速上手。
  - - meta
    - name: keywords
      content: react react-ant react-admin react-ant-admin 路径配置
---

# 路径配置

## 如何设置指定某地址为默认打开地址

在项目启动后，默认打开的地址是`/`，若要设置为其他路由地址，可以在`src/router/list.js`文件中配置`routerList`变量即可

```js
// ./src/router/list.js
import auto from "./auto";
import loadable from "@loadable/component";
import { Redirect } from "react-router-dom";
const Error = loadable(() => import("@pages/err"));

const defaultArr = [
  {
    path: "/", // 访问地址
    key: "index",
    to: "/details/person", // 重定向到 ....
    components: Redirect, // 重定向组件
  },
  // .......
];
const list = auto.map((c) => ({ ...c, components: loadable(c.components) }));

list.push(...defaultArr);

export default list;
```

## 修改项目 base 路由前缀

找到`.env-cmdrc.js`文件进行如下修改即可。

```js
const devConfig = {
  REACT_APP_ROUTERBASE: "/abc", // react路由基础路径 /abc
};
```

## 修改打包生产的文件夹

找到`.env-cmdrc.js`文件进行如下修改即可。

```js
const productionCfg = {
  BUILD_PATH: "test", // 打包 文件夹名称 test文件夹
};
```

## 打包之后静态资源加载失败

因为`create-react-app`打包，默认把镜头资源指向 `url`的根路径。

- 举例

假设你的网站地址为：https://wwww.xxxxx.com

现在你想把项目放在这个网站的二级域名下如：https://wwww.xxxxx.com/blog 但是你没有修改`.env-cmdrc.js`里的*PUBLIC_URL*属性，所以就会发现静态文件 404。因为它们都以根目录去访问。所以会出现上述情况。

解决这种办法去修改`.env-cmdrc.js`里的*PUBLIC_URL*属性即可

```json{4}
{
  "REACT_APP_ROUTERBASE": "/react-ant-admin", // react路由基础路径
  "REACT_APP_API_BASEURL": "/api/react-ant-admin", //请求地址
  "PUBLIC_URL": "/blog",// 静态文件路径 这个时候你可以 https://wwww.xxxxx.com/blog/xxx.js 正常访问静态资源了
  "NODE_ENV": "production", // 打包模式 生产模式
  "BUILD_PATH": "react-ant-admin", // 打包 文件夹名称
}
```

::: tip
希望`.env-cmdrc.js`里的*PUBLIC_URL*属性,_REACT_APP_ROUTERBASE_，这两个的值相同，否则不管是运行还是打包都会发生意想不到的事情!

:::

## React-Router 使用哈希模式(#)

只需要在`.env-cmdrc.js` 的启动模式下加上`REACT_APP_ROUTER_ISHASH`字段并且值为`1`即可。

```json
{
 "REACT_APP_ROUTER_ISHASH": "1", // 启用哈希模式
}
```
