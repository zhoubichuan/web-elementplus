---
title: 开始使用
head:
  - - meta
    - name: description
      content: react-ant-admin 开始使用，详细讲解此框架的文件部署，教你如何掌握框架的工作流程，快速上手。
  - - meta
    - name: keywords
      content: react react-ant react-admin react-ant-admin 开始使用
---

# 开始使用

一开始我们使用 git 代码管理工具，拉取[react-ant-admin](https://github.com/kongyijilafumi/react-ant-admin)代码，然后安装依赖，最后开始启动项目，下面会按照顺序来进行。

- 使用**TypeSrcip**t 开发请[往这里看](https://gitee.com/kong_yiji_and_lavmi/react-ant-admin-ts#react-ant-admintypescript-%E7%89%88)

## **1.** 下载

在需要安装的文件夹下，打开 DOS 窗口(cmd)，输入一下内容并回车

```shell
git clone https://github.com/kongyijilafumi/react-ant-admin.git
```

若以上命令执行过慢，推荐使用一下命令(码云国内镜像)

```shell
git clone https://gitee.com/kong_yiji_and_lavmi/react-ant-admin.git
```

## **2.** 安装项目所需依赖

使用 npm 安装或者使用 cnpm

```shell
#cd dir
D:> cd react-ant-admin
# 安装依赖
D:\react-ant-admin> npm i
# or
D:\react-ant-admin> cnpm i
```

## **3.** 启动

在完成依赖安装之后,有以下几种启动方式。

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

## 自定义启动脚本

使用`npm`脚本启动，其实是寻找的`package.json`里面的`scripts`属性中寻找启动的方式。

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

举例上面`start`命令。分为两个部分，`node color` 提前打包项目 less 变量。`env-cmd --verbose -e development node scripts/start.js` 提前设置`process.env`变量启动 react 运行脚本。

> 若想自定义`env`变量，可以在[文件配置:.env-cmdrc.js](/guide/configuration)中配置信息。 `node color` 命令在没有提前设置`process.env.COLOR`不会打包 less 变量文件，不做任何事情。

- 你可以新建一个运行命令如下

```json
// package.json
{
  "scripts": {
    "start:test": "env-cmd --verbose -e development_test node color && env-cmd --verbose -e development_test node scripts/start.js"
  }
}
```

```js
// .env-cmdrc.js
module.exports = Promise.resolve({
  // 与  env-cmd --verbose -e  后面的单词对应 development_test
  development_test: {
    PORT: 3000, // 项目启动端口
    HOST: "0.0.0.0", // 项目监听地址
    NODE_ENV: "development", // 开发者模式
    REACT_APP_ROUTERBASE: "/test", // react路由基础路径 /test/xxxx
    PUBLIC_URL: "/test", // 静态资源路径 /test/static/js/xxxx.js
    REACT_APP_ROUTER_ISHASH: "1", // 启用React-Router hash路由模式
    COLOR: "true", // 开启主题色
    REACT_APP_API_BASEURL: "/api", // 当为 /api时 会使用本地转发 具体配置请看 src/setupProxy.js
  },
  // 忽略 已经配置好的代码 ...
});
```

这样 只需要 `npm run "start:test"` 就可以启动项目了，会发现请求本地 `http://localhost:3000/api/xxx`接口 转发到博主线上的接口。并且会有主题色配置。

### vscode 快速启动项目

使用[vscode 编辑器](https://code.visualstudio.com/)[下载地址](https://blog.csdn.net/bielaiwuyang1999/article/details/117814237)

把此项目文件夹拖入`vscode编辑器`,找到左下角`npm 脚本栏目`选择快速启动，免命令。
![免命令示例图](https://raw.githubusercontent.com/kongyijilafumi/my-image/master/run.png)

## 为什么使用 npm run "start:mock"

因为`start:mock`是针对本地项目没有后台接口而选择的一种启动模式。

::: tip
npm run start 是根据接口返回的数据来渲染页面，所以需要提前修改接口地址，确保有数据并且数据格式对应，这样项目就可以成功运行起来！菜单数据格式将在[菜单配置](../menu/)这里开始进行讲解！
:::

若会使用 nodejs 的小伙伴，可以自行搭载后台服务。

前端人快速搭载后台服务[express](https://www.expressjs.com.cn/)

**使用 nodejs 搭载的后台 web 服务[react-ant-admin-server](https://gitee.com/kong_yiji_and_lavmi/react-ant-admin-server)**
