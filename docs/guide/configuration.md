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

# 文件配置

使用一个框架，首先熟悉他的项目文件结构，废话不多说，开始往下讲解。

```bash
.
├─ config             webpack配置信息   文件夹
├─ public             静态公共资源      文件夹
├─ scripts            启动配置项        文件夹
├─ src                源码             文件夹
├─ .editorconfig      编辑配置文件      文件
├─ .env-cmdrc.js      启动env变量预设   文件
├─ .gitignore         git忽略配置文件   文件
├─ color.js           主题色脚本文件    文件
├─ LICENSE            项目开源协议      文件
├─ README.md          使用文档         文件
└─ package.json       包管理文件        文件
```

## env 变量预设`.env-cmdrc.js`

```js
const devConfig = {
  PORT: 3000, // 启动端口
  HOST: "0.0.0.0", // 监听地址
  NODE_ENV: "development", // 开发者模式
  REACT_APP_ROUTERBASE: "/react-ant-admin", // react路由基础路径
  REACT_APP_API_BASEURL: "http://127.0.0.1:8081/api/react-ant-admin", //请求地址
  PUBLIC_URL: "/react-ant-admin", // 静态文件路径
};
const productionCfg = {
  REACT_APP_ROUTERBASE: "/react-ant-admin", // react路由基础路径
  REACT_APP_API_BASEURL: "/api/react-ant-admin", //请求地址
  PUBLIC_URL: "/react-ant-admin", // 静态文件路径
  NODE_ENV: "production", // 打包模式 生产模式
  BUILD_PATH: "react-ant-admin", // 打包 文件夹名称
};
module.exports = Promise.resolve({
  // 本地接口正常运行 没有mock 没有 主题色
  development: devConfig,

  // 本地接口  启用主题色运行
  development_color: {
    ...devConfig,
    COLOR: "true", // "true" 为 启动
  },

  // 本地mock  运行
  development_mock: {
    ...devConfig,
    REACT_APP_MOCK: "1", // 1 为开启mock
  },

  // 主题色 和 本地mock  运行
  development_color_mock: {
    ...devConfig,
    COLOR: "true",
    REACT_APP_MOCK: "1",
  },

  // 打包 ：无主题 无mock
  production: productionCfg,

  // 打包 ： 有主题 无mock
  production_color: {
    ...productionCfg,
    COLOR: "true", // "true" 为 启动
  },

  // 打包 ： 有主题 有mock  纯本地模式打包
  production_color_mock: {
    ...productionCfg,
    COLOR: "true",
    REACT_APP_MOCK: "1",
  },

  // GitHub pages 打包  博主使用
  production_github: {
    ...productionCfg,
    COLOR: "true",
    REACT_APP_API_BASEURL: "https://azhengpersonalblog.top/api/react-ant-admin",
    REACT_APP_ROUTER_ISHASH: "1", // 启用哈希模式
    REACT_APP_ROUTERBASE: "/",
  },
});
```

这里的 env 变量预设是用`env-cmd`脚本启动项目。所以通过此文件可以高效自定义 env 变量在项目中使用。以下预设变量是本项目中用到的。

- 开发模式(dev)

```js
const dev = {
  PORT: 3000, // 项目启动端口
  HOST: "0.0.0.0", // 项目监听地址
  NODE_ENV: "development", // 开发者模式
  REACT_APP_ROUTERBASE: "/react-ant-admin", // react路由基础路径
  REACT_APP_API_BASEURL: "http://127.0.0.1:8081/api/react-ant-admin", //api请求基础地址
  PUBLIC_URL: "/react-ant-admin", // 静态文件路径 启动时 默认以 localhost:3000
  REACT_APP_ROUTER_ISHASH: "1", // 不存在 或者 不为 1  使用 history 模式 反之 启用 hash 模式
  COLOR: "true", // 不存在 或者 不为 true 不启用主题色 反之 启用
  REACT_APP_MOCK: "1", // 不存在 或者 不为 1 不启用mock本地模式 反之 启用
};
```

- 打包模式(production)

```js
const pro = {
  REACT_APP_ROUTERBASE: "/react-ant-admin",
  REACT_APP_API_BASEURL: "/api/react-ant-admin",
  PUBLIC_URL: "/react-ant-admin",
  NODE_ENV: "production",
  BUILD_PATH: "react-ant-admin", // 打包文件路径名
  REACT_APP_MOCK: "1",
  COLOR: "true",
  REACT_APP_ROUTER_ISHASH: "1",
};
```

## src 文件夹

```bash
src
 ├─ api
 │   └─ index.js    网络API接口文件
 │
 ├─ asset           静态文件资源
 │
 ├─ common          配置信息
 │    ├─ index.js   主要信息配置文件
 │    └─ ajax.js    网络请求库配置文件
 │
 ├─ components      自定义组件库
 │
 ├─ layout          项目页面布局
 │    ├─ mode       布局模式文件夹
 │    ├─ footer.js  项目页面底部布局
 │    ├─ header.js  项目页面头部布局
 │    ├─ index.js   项目页面主题布局
 │    ├─ index.less 布局样式
 │    ├─ siderMenu.js 项目页面侧边栏菜单布局
 │    └─ topMenu.js  项目页面顶部栏菜单布局
 │
 ├─ mock
 │   └─ index.js    本地模拟数据文件
 │
 ├─ pages           项目页面文件夹
 │
 ├─ router             项目路由文件夹
 │    ├─ appRouter.js  项目App主要路由
 │    ├─ index.js      项目页面信息，菜单信息组成渲染
 │    ├─ intercept.js  路由权限拦截文件
 │    └─ list.js       页面路由列表
 │
 ├─ store           redux全局数据管理
 │    ├─ layout     关于布局模式
 │    ├─ menu       关于菜单
 │    ├─ user       关于用户
 │    ├─ visibel    关于用户显示
 │    └─ index.js   入口文件
 │
 ├─ utils           工具库
 ├─ App.js          项目渲染主入口
 ├─ index.js        项目启动主入口
 └─ setupProxy.js   跨域转发配置文件
```
