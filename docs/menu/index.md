# 菜单配置

::: tip
在后台返回菜单列表信息的时候，希望按照以下格式，这样前端不需要做太对的处理。
:::

```js
const menu = [
  {
    title: "主菜单", // 菜单栏标题 => 页面标题 string
    icon: "", // 菜单显示的图标 string
    keepAlive: "false", // 是否打开页面之后缓存页面 string
    key: "result", // 唯一值 string
    parentKey: "", // 父级菜单的key值 string or empty string
    path: "/result", // 路由地址 string
    type:["1","0"] // 权限查看访问 Array 由数据进行转换而成
    order: 0, // 菜单排序 数字越小越靠前 范围 0 - 10000 number
    children: [
      // 是否存在子菜单 若有 为 array 形式 ，没有直接忽略 children 属性
      {
        title: "子菜单",
        icon: "",
        keepAlive: "false",
        key: "result",
        parentKey: "", // 父级菜单的key值 string or empty string
        path: "/result",
        type:["1"],
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

```json{7}
{
  "title": "详情页",
  "path": "/details",
  "key": "details",
  "parentKey": "",
  "icon": "icon_edit",
  "type": "1,0",
  "order":1
}
```

数据经过处理后应把 **type** 转换为**数组形式**

```json{7}
{
 "title": "详情页",
  "path": "/details",
  "key": "details",
  "parentKey": "",
  "icon": "icon_edit",
  "type": ["1","0"],
  "order":1
}
```

对应的数据库设计可以参考此结构。

```sql{7,9}
CREATE TABLE `menu` (
  `title` varchar(255) NOT NULL COMMENT '菜单名称',
  `path` varchar(255) NOT NULL COMMENT '菜单路由',
  `key` varchar(255) NOT NULL COMMENT '菜单唯一key',
  `parentKey` varchar(255) NOT NULL DEFAULT '' COMMENT '菜单父级key，默认为空字符串',
  `icon` varchar(255) NOT NULL DEFAULT '' COMMENT '菜单图标',
  `type` varchar(255) NOT NULL DEFAULT '' COMMENT '菜单权限',
  `keepAlive` enum('true','false') NOT NULL DEFAULT 'false' COMMENT '页面是否保持状态',
  `order` int(4)  NOT NULL DEFAULT 10000 COMMENT '菜单排序序号，越小越靠前',
  PRIMARY KEY (`key`)
)
```
