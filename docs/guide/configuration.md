--- 
title: react-ant-admin 文件配置
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
├─ .env.mock          环境变量配置文件   文件
├─ .gitignore         git忽略配置文件   文件
├─ color.config.js    主题色启用文件    文件
├─ color.js           主题色脚本文件    文件
├─ README.md          使用文档         文件
└─ package.json       包管理文件        文件
```

接下来主要介绍**src**文件夹

```bash
src
 ├─ api
 │   └─ index.js    网络API接口文件
 ├─ asset           静态文件资源
 ├─ common          配置信息
 │    ├─ index.js   主要信息配置文件
 │    └─ ajax.js    网络请求库配置文件
 ├─ components      组件库
 ├─ layout          项目页面布局
 │    ├─ footer.js  项目页面底部布局
 │    ├─ header.js  项目页面头部布局
 │    ├─ index.js   项目页面主题布局
 │    ├─ siderMenu.js 项目页面侧边栏菜单布局
 │    └─ topMenu.js  项目页面顶部栏菜单布局
 ├─ mock
 │   └─ index.js    本地模拟数据文件
 ├─ pages           项目页面文件夹
 ├─ router             项目路由
 │    ├─ intercept     路由拦截
 │    │    └─ index.js
 │    ├─ route         页面路由列表
 │    │    └─ index.js
 │    ├─ appRouter.js  项目App主要路由
 │    └─ index.js      项目页面信息，菜单信息组成渲染
 ├─ store           redux全局数据管理
 ├─ utils           工具库
 ├─ App.js          项目渲染主入口
 └─ index.js        项目启动主入口
```