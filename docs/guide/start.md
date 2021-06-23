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

输入 npm run "start mock" 启动本地 mock 数据

```shell
D:\react-ant-admin> npm run "start mock"
```

启动成功后，会自动打开默认浏览器并跳转到`http://localhost:3000/react-ant-admin/`

首次进入默认需要登录，账号密码随便输入即可！这样一个后台管理系统已经搭载好了！


## 为什么使用 npm run "start mock"

因为`start mock`是针对本地项目没有后台接口而选择的一种启动模式。

:::  tip
npm run start是根据接口返回的数据来渲染页面，所以需要提前修改接口地址，确保有数据并且数据格式对应，这样项目就可以成功运行起来！菜单数据格式将在[菜单配置](../menu/)这里开始进行讲解！
:::



若会使用 nodejs 的小伙伴，可以自行搭载后台服务。

前端人快速搭载后台服务[express](https://www.expressjs.com.cn/)

**使用nodejs搭载的后台web服务[react-ant-admin-server](https://gitee.com/kong_yiji_and_lavmi/react-ant-admin-server)**

