---
title: 创建一个菜单栏
head:
  - - meta
    - name: description
      content: react-ant-admin 创建一个菜单栏，详细讲解此框架的文件部署，教你如何掌握框架的工作流程，快速上手。
  - - meta
    - name: keywords
      content: react react-ant react-admin react-ant-admin 创建一个菜单栏
---

# 创建一个菜单栏

若使用请求返回菜单信息的直接向后台添加一条菜单信息即可。

以下是使用`mock`模式添加一条数据

在`src/mock/index.js` 找到`menu`变量,往里添加一条菜单信息.代码如下所示

```js
let menu = [
  {
    menu_id: 9,
    [MENU_TITLE]: "列表页",
    [MENU_PATH]: "/list",
    [MENU_KEY]: "list",
    [MENU_PARENTKEY]: "",
    [MENU_ICON]: "icon_list",
    [MENU_KEEPALIVE]: "false",
    order: 1,
  },
  {
    menu_id: 10,
    [MENU_TITLE]: "卡片列表",
    [MENU_PATH]: "/card",
    [MENU_KEY]: "listCard",
    [MENU_PARENTKEY]: "list",
    [MENU_ICON]: "",
    [MENU_KEEPALIVE]: "false",
    order: 5485,
  },
  // .... 开始添加菜单信息 ....
  {
    menu_id: 3, // 菜单id， 必要
    [MENU_TITLE]: "test", // 菜单栏标题，页面title 必要
    [MENU_PATH]: "/test", // 路由路径信息 必要
    [MENU_KEY]: "test", // 唯一值，必要
    [MENU_PARENTKEY]: "", // 空表示 为主菜单而非子菜单 必要
    [MENU_ICON]: "", // 菜单图标 非必要
    order: 3, // 菜单排序 越小越靠前
    [MENU_KEEPALIVE]: "false", // 该页面是否缓存，切换页面时候保存状态
  },
];
```

由于菜单会走本地会话存储`window.sessionStorage`,所以保存代码后需要关闭当前窗口,重新打开页面输入地址 `http://localhost:3000/react-ant-admin`

打开之后,会发现菜单会多出一个`test`栏目,这样就完成了菜单的添加.
