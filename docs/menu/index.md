---
title: 菜单配置
head:
  - - meta
    - name: description
      content: react-ant-admin 菜单配置，详细讲解此框架的文件部署，教你如何掌握框架的工作流程，快速上手。
  - - meta
    - name: keywords
      content: react react-ant react-admin react-ant-admin 菜单配置
---

# 菜单配置

::: tip
菜单信息可以通过修改`package.json`文件的`MENUDATA`中数据格式来转换成自己想要的菜单信息。
注意：`MENU_PATH`等等数据 是可以直接在`src`下全局使用的，利用了[webpack.DefinePlugin](https://www.webpackjs.com/plugins/define-plugin/)变量全局替换使用。
:::

```json
// package.json
{
  "MENUDATA": {
    "MENU_PATH": "path", // 菜单路径 重要
    "MENU_SHOW": "isShowOnMenu", // 是否显示在菜单栏上
    "MENU_KEEPALIVE": "keepAlive", // 页面是否保持状态
    "MENU_KEY": "key", // 菜单唯一值  可以 改成id menu_id ... 重要
    "MENU_ICON": "icon", // 菜单 icon 值 这里需要 搭配 components/icon 去使用
    "MENU_TITLE": "title", // 菜单标题 重要
    "MENU_CHILDREN": "children", // 菜单子集
    "MENU_PARENTKEY": "parentKey", // 父菜单 唯一值 重要
    "MENU_ALLPATH": "allPath",  // 暂无使用
    "MENU_PARENTPATH": "parentPath" // 父菜单 路径
  }
}

// 其实只需要关注 重要的 几个键值
{
  "MENUDATA":{
    "MENU_PATH": "url",
    "MENU_KEY": "id",
    "MENU_PARENTKEY": "parent_id",
    "MENU_TITLE": "name",
  }
}
```

- 当在修改 `MENUDATA` 数据 为以上信息的时候。需要后台返回 对于的菜单信息即可。

```js
const menuList = [
  {
    id: 1,
    name: "主菜单",
    parent_id: 0,
    url: "/parent",
  },
  {
    id: 2,
    name: "子菜单1",
    parent_id: 1,
    url: "/child1",
  },
  {
    id: 3,
    name: "子菜单2",
    parent_id: 1,
    url: "/child2",
  },
];
```

- 数据格式由前端转换自动组成树状结构。使用`src/utils/index.js`里的`formatMenu`方法会自动装换成以下结构。(你可以自己实现)

```json
[
  {
    "id": 1,
    "name": "主菜单",
    "parent_id": 0,
    "url": "/parent",
    "children": [
      // 这里的 children 是通过 MENU_CHILDREN 控制 你可以随意修改成你想要的
      {
        "id": 2,
        "name": "子菜单1",
        "parent_id": 1,
        "url": "/child1"
      },
      {
        "id": 3,
        "name": "子菜单2",
        "parent_id": 1,
        "url": "/child2"
      }
    ]
  }
]
```

::: tip
如果返回的菜单列表，某条菜单信息不存在，则会表示 没有该路径权限。请看下面案例
:::

```json
// 这是 用户 1 的菜单信息 表示 可以访问 /parent/child1  /parent/child2
[
  {
    "id": 1,
    "name": "主菜单",
    "parent_id": 0,
    "url": "/parent"
  },
  {
    "id": 2,
    "name": "子菜单1",
    "parent_id": 1,
    "url": "/child1"
  },
  {
    "id": 3,
    "name": "子菜单2",
    "parent_id": 1,
    "url": "/child2"
  }
]
// 这是 用户 2 的菜单信息 表示 可以访问 /parent/child1  不能访问 /parent/child2  会遭到拦截
[
  {
    "id": 1,
    "name": "主菜单",
    "parent_id": 0,
    "url": "/parent"
  },
  {
    "id": 2,
    "name": "子菜单1",
    "parent_id": 1,
    "url": "/child1"
  },
]
```
