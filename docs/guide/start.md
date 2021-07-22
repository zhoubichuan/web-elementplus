--- 
title: 开始使用 react-ant-admin 
head:
  - - meta
    - name: description
      content: react-ant-admin 开始使用，详细讲解此框架的文件部署，教你如何掌握框架的工作流程，快速上手。
  - - meta
    - name: keywords
      content: react react-ant react-admin react-ant-admin 开始使用
---
# 开始使用

一开始我们使用git代码管理工具，拉取[react-ant-admin](https://github.com/kongyijilafumi/react-ant-admin)代码，然后安装依赖，最后开始启动项目，下面会按照顺序来进行。

- 使用**TypeSrcip**t开发请[往这里看](https://gitee.com/kong_yiji_and_lavmi/react-ant-admin-ts#react-ant-admintypescript-%E7%89%88) 

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

### vscode快速启动项目

使用[vscode编辑器](https://code.visualstudio.com/)[下载地址](https://blog.csdn.net/bielaiwuyang1999/article/details/117814237)

把此项目文件夹拖入`vscode编辑器`,找到左下角`npm 脚本栏目`选择快速启动，免命令。
![免命令示例图](https://gitee.com/kong_yiji_and_lavmi/my-image/raw/master/run.png)


## 为什么使用 npm run "start mock"

因为`start mock`是针对本地项目没有后台接口而选择的一种启动模式。

:::  tip
npm run start是根据接口返回的数据来渲染页面，所以需要提前修改接口地址，确保有数据并且数据格式对应，这样项目就可以成功运行起来！菜单数据格式将在[菜单配置](../menu/)这里开始进行讲解！
:::



若会使用 nodejs 的小伙伴，可以自行搭载后台服务。

前端人快速搭载后台服务[express](https://www.expressjs.com.cn/)

**使用nodejs搭载的后台web服务[react-ant-admin-server](https://gitee.com/kong_yiji_and_lavmi/react-ant-admin-server)**

