--- 
title: 创建一个菜单栏 react-ant-admin 
head:
  - - meta
    - name: description
      content: react-ant-admin 创建一个菜单栏，详细讲解此框架的文件部署，教你如何掌握框架的工作流程，快速上手。
  - - meta
    - name: keywords
      content: react react-ant react-admin react-ant-admin 创建一个菜单栏
---
# 创建一个菜单栏

使用`npm run "start mock" `启动的项目

在`src/mock/index.js` 找到`menu`变量,往里添加一条菜单信息.代码如下所示

::: warning
在这里配置相当于服务器从数据查出来的原始数据，并非渲染菜单列表的数据，此中间需要进行数据处理。
:::

```js
import dayjs from "dayjs";
let menu = [
  {
    title: "详情页",
    path: "/details",
    key: "details",
    parentKey: "",
    icon: "icon_edit",
    type: "1,0",
  },
  {
    title: "个人中心",
    path: "/person",
    key: "detailsPerson",
    parentKey: "details",
    icon: "icon_infopersonal",
    type: "0,1",
  },
  // .... 开始添加菜单信息 ....
  {
    title: "test", // 菜单栏标题，页面title 必要
    path: "/test", // 路由路径信息 必要
    key: "test", // 唯一值，必要
    parentKey: "", // 空表示 为主菜单而非子菜单 必要
    icon: "icon_infopersonal", // 菜单图标 非必要
    type: "0,1", // 访问权限,自定义,当前项目 0为管理员,1为普通用户.原始数据为字符串形式,会中途进行转化为数组形式["0","1"] 必要
  },
  // .....
];
```

由于菜单会走本地会话存储`window.sessionStorage`,所以保存代码后需要关闭当前窗口,重新打开页面输入地址 http://localhost:3000/react-ant-admin

打开之后,会发现菜单会多出一个`test`栏目,这样就完成了菜单的添加.

::: tip
若是npm run start 启动模式，后台直接返回添加的菜单栏列表即可
:::
