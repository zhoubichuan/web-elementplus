---
title: 分支介绍
head:
  - - meta
    - name: description
      content: react-ant-admin 分支介绍，详细讲解此框架的分支不同，教你如何掌握框架的工作流程，快速上手。
  - - meta
    - name: keywords
      content: react react-ant react-admin react-ant-admin 分支介绍
---

# 分支介绍

本文档所讲解的配置姿势都是按照 `webpack` 默认分支（在[gitee仓库](https://gitee.com/kong_yiji_and_lavmi/react-ant-admin)默认使用`vite`分支） 进行开发。

## webpack

此分支适用于`webpack`构建，熟练使用webpack的，可以使用此分支进行快速开发。纯`hooks`语法开发。

### 包版本介绍

- webpack`v4.*`: 构建工具
- react`v17.*`: 前端框架
- react-dom`v17.*`： 前端框架
- antd`v4.*`：UI 框架
- react-redux`v8.*`：状态库
- ant-theme-generator`v1.*`：主题色插件
- webpack-router-generator`v1.*`：自动生成路由插件
- react-router-dom`v5.*`：路由库
- react-router-cache-route`v1.*`：路由缓存库
- env-cmd`v10.*`预设环境变量工具

结合以上使用版本，支持主题色更改，路由缓存，懒加载页面。

### 文件分布

[点击这里进行跳转](/guide/configuration)


## vite

一种快速开发构建工具。可以值得一试。此分支需要阅读[vite文档](https://cn.vitejs.dev/)来进行开发。因为此分支用的都是新鲜东西，所以有部分功能没有支持（路由缓存），需要开发者自行考量。本分支默认使用了`typescript + hooks`进行开发，*react-router*使用了最新的`v6`版本，需要开发者阅读[文档](https://reactrouterdotcom.fly.dev/docs/en/v6)再去使用，可以参考本博主[总结的路由更新后的写法](https://gitee.com/kong_yiji_and_lavmi/md/blob/master/react/react-router@6%E7%89%88%E6%9C%AC%E5%88%9D%E4%BD%93%E9%AA%8C.md)。




### 包版本介绍

- vite`v2.9.*`：构建工具
- react`v18.*`: 前端框架
- react-dom`v18.*`： 前端框架
- antd`v4.*`：UI 框架
- react-redux`v8.*`：状态库
- ant-theme-generator`v1.*`：主题色插件
- vite-plugin-react-router-generator`v1.*`：自动生成路由插件
- react-router-dom`v6.*`：路由库
- env-cmd`v10.*`：预设环境变量工具
- typescript`v4.*`：JavaScript超集


### 文件分布

```bash
.
├─ public             静态公共资源      文件夹
├─ src                项目入口          文件夹
├─ theme              主题色文件夹      文件夹
├─ .editorconfig      编辑配置文件      文件
├─ .env-cmdrc.js      启动env变量预设   文件
├─ .gitignore         git忽略配置文件   文件
├─ color.js           主题色脚本文件    文件
├─ index.html         页面主入口        文件
├─ LICENSE            项目开源协议      文件
├─ package.json       包管理文件        文件
├─ README.md          使用文档         文件
├─ tsconfig.json      typescript配置   文件
├─ tsconfig.node.json typescript配置   文件
└─ vite.config.ts     构建工具配置      文件
```

