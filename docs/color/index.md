---
title: 主题色配置
head:
  - - meta
    - name: description
      content: react-ant-admin 主题色配置，详细讲解此框架的文件部署，教你如何掌握框架的工作流程，快速上手。
  - - meta
    - name: keywords
      content: react react-ant react-admin react-ant-admin 主题色配置
---

# 主题色配置

本项目使用了两种主题色，`默认`和`暗黑`模式。

- 默认主题色

![默认主题](https://raw.githubusercontent.com/kongyijilafumi/my-image/master/doc-theme01.png)

- 暗黑主题色

![暗黑主题](https://raw.githubusercontent.com/kongyijilafumi/my-image/master/doc-theme02.png)

## 根据项目启动脚本显示主题

在这里你可以自定义启动方式[点击这里查看文件配置](/guide/configuration)

```json
{
  "scripts": {
    "start": "node color && env-cmd --verbose -e development node scripts/start.js",
    "start:color": "env-cmd --verbose -e development_color node color && env-cmd --verbose -e development_color node scripts/start.js",
    "start:mock": "node color && env-cmd --verbose -e development_mock node scripts/start.js",
    "start:mock_color": "env-cmd --verbose -e development_color_mock node color && env-cmd --verbose -e development_color_mock node scripts/start.js",
    "build": "node color && env-cmd --verbose -e production node scripts/build.js",
    "build:color": "env-cmd --verbose -e production_color node color && env-cmd --verbose -e production_color node scripts/build.js",
    "build:github-pages": "env-cmd --verbose -e production_github node color && env-cmd --verbose -e production_github node scripts/build.js"
  }
}
```

- npm run start

请求接口数据，通过后台返回数据显示项目信息

- npm run "start:color"

请求接口数据，通过后台返回数据显示项目信息，并且开启主题色配置。

- npm run "start:mock"

本地模拟数据，假数据来显示项目信息

- npm run "start:mock_color"

本地模拟数据，假数据来显示项目信息，并且开启主题色配置。

- npm run build

普通打包模式。

- npm run "build:color"

打包主题色。项目体积会有所增加。

