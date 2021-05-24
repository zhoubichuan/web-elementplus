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

## 是否启用主题色配置

你可以在项目根目录下修改`color.config.js`文件来配置是否启用主题色动态配置。

```js
/**
 *
 * 是否主题可配置
 * true 会执行一些主题色脚本 会增加打包体积
 * false 走原来的webpack 不会增加打包体积
 */
const showColorSet = true;
module.exports = showColorSet;
```

## 主题色打包运行配置

package.json 运行脚本配置

先走主题配置，再走 webpack

```json
{
  "scripts": {
    "start": "node color && node scripts/start.js",
    "start mock": "node color && env-cmd -f .env.mock node scripts/start.js",
    "build": "node color && node scripts/build.js"
  }
}
```

若你完全不需要主题色动态配置可以自行去掉`package.json script项`里的`node color &&`而且请在`color.config.js`修改成 `const showColorSet = false;`

```json
{
  "scripts": {
    "start": "node scripts/start.js",
    "start mock": "env-cmd -f .env.mock node scripts/start.js",
    "build": "node scripts/build.js"
  }
}
```

你可以在项目根目录下修改`color.js`文件来配置主题色打包使用。前提 **启用主题**

```js
// ..........
// 变量文件夹
const varFile = path.join(__dirname, "./src/assets/theme/var.less");
const varJsonPath = path.join(__dirname, "./color.json.js");
const outputFilePath = path.join(__dirname, "./public/color.less");
// antd 默认主题 json 文件
const defaultPath = path.join(__dirname, "./src/assets/theme/default.json");
const darkPath = path.join(__dirname, "./src/assets/theme/dark.json");
// ...........
```
