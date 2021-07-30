---
title: 菜单配置 react-ant-admin
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
在后台返回菜单列表信息的时候，希望按照以下格式，这样前端不需要做太对的处理。
:::

```js
const menu = [
  {
    menu_id: 1,
    title: "主菜单", // 菜单栏标题 => 页面标题 string
    icon: "", // 菜单显示的图标 string
    keepAlive: "false", // 是否打开页面之后缓存页面 string
    key: "result", // 唯一值 string
    parentKey: "", // 父级菜单的key值 string or empty string
    path: "/result", // 路由地址 string
    order: 0, // 菜单排序 数字越小越靠前 范围 0 - 10000 number
    children: [
      // 是否存在子菜单 若有 为 array 形式 ，没有直接忽略 children 属性
      {
        menu_id: 2,
        title: "子菜单",
        icon: "",
        keepAlive: "false",
        key: "result",
        parentKey: "", // 父级菜单的key值 string or empty string
        path: "/result",
        order: 22,
      },
    ],
  },
  {
    //.............
    //.............
  },
];
```

单条的菜单路由信息从数据库取出是这样的。

```json
{
  "menu_id" : 1,
  "title": "详情页",
  "path": "/details",
  "key": "details",
  "parentKey": "",
  "icon": "icon_edit",
  "keepAlive": "false",
  "order":1
}
```

对应的数据库设计可以参考此结构。

```sql{7,9}
CREATE TABLE `menu`  (
  `menu_id` int(4) NOT NULL AUTO_INCREMENT COMMENT '菜单id',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '菜单名称',
  `path` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '菜单路由',
  `key` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '菜单唯一key',
  `parentKey` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '菜单父级key',
  `icon` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '菜单图标',
  `keepAlive` enum('true','false') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'false' COMMENT '页面是否保持状态',
  `order` int(8) NOT NULL DEFAULT 10000 COMMENT '菜单排序',
  PRIMARY KEY (`menu_id`, `key`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = COMPACT;
```
