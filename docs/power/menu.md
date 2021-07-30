---
title: 菜单如何关联用户权限 react-ant-admin
head:
  - - meta
    - name: description
      content: react-ant-admin 菜单如何关联用户权限，详细讲解此框架的文件部署，教你如何掌握框架的工作流程，快速上手。
  - - meta
    - name: keywords
      content: react react-ant react-admin react-ant-admin 菜单如何关联用户权限
---

# 菜单如何关联用户权限

在权限表里有`menu_id`这一属性，它就是用来关联菜单的，在数据库存储它是一条字符串，把关联的菜单 id 用逗号隔开存储。如：`1,2,3,4,5,6,7,8,9`。

- 举例

```js
// 假设现在有两个权限
var powers = [
  {
    type_id: 1,
    name: "管理员",
    menu_id: "1,2,3,4,5,6,7,8,9,10",
  },
  {
    type_id: 1,
    name: "用户",
    menu_id: "8,9,10",
  },
];

// 假设现在有两个用户信息
var user1 = {
  // ... 省略其他信息
  username: "user1",
  type_id: 1, // 权限标识为 管理员
};

var user2 = {
  username: "user2",
  // ... 省略其他信息
  type_id: 2, // 权限标识为 用户
};

// 假设现在有个菜单信息是这样的
var menu = {
  menu_id: 1,
  title: "详情页",
  path: "/details",
  key: "details",
  parentKey: "",
  icon: "icon_edit",
};

// 只有标识为 管理员 权限的用户才可以看见 菜单 menu_id: 1的信息
```
