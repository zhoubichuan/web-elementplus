---
title: 主题色配置 react-ant-admin
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

![默认主题](https://gitee.com/kong_yiji_and_lavmi/my-image/raw/master/doc-theme01.png)

- 暗黑主题色

![暗黑主题](https://gitee.com/kong_yiji_and_lavmi/my-image/raw/master/doc-theme02.png)

## 根据项目启动脚本显示主题

```json
{
  "scripts": {
    "start": "node color && node scripts/start.js",
    "start color": "cross-env COLOR=true node color && cross-env COLOR=true node scripts/start.js",
    "start mock": "node color && cross-env REACT_APP_MOCK=1 node scripts/start.js",
    "start mock color": "cross-env COLOR=true node color && cross-env REACT_APP_MOCK=1 COLOR=true node scripts/start.js",
    "build": "node color && node scripts/build.js",
    "build color": "cross-env COLOR=true node color && cross-env COLOR=true node scripts/build.js"
  }
}
```

- npm run start

请求接口数据，通过后台返回数据显示项目信息

- npm run "start color"

请求接口数据，通过后台返回数据显示项目信息，并且开启主题色配置。

- npm run "start mock"

本地模拟数据，假数据来显示项目信息

- npm run "start mock color"

本地模拟数据，假数据来显示项目信息，并且开启主题色配置。

- npm run build

普通打包模式。

- npm run "build color"

打包主题色。项目体积会有所增加。
