---
title: 权限类别配置
head:
  - - meta
    - name: description
      content: react-ant-admin 权限类别配置，详细讲解此框架的文件部署，教你如何掌握框架的工作流程，快速上手。
  - - meta
    - name: keywords
      content: react react-ant react-admin react-ant-admin 权限类别配置
---

# 权限类别配置

本项目权限单条数据展示：JSON 格式

```json{2}
{
  "type_id": 1,
  "name": "超级权限",
  "menu_id":"1,2,3,4,5,6,7,8,9,10"
}
```

权限配置的数据库设计可以参考以下结构

包含字段 `type_id`,`name`,`menu_id`

```sql{2-4}
CREATE TABLE `power`  (
  `type_id` int(4) NOT NULL AUTO_INCREMENT COMMENT '权限id',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '权限简称',
  `menu_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '显示菜单列表id',
  PRIMARY KEY (`type_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = COMPACT;
```
::: tip
若你有更好的权限设计完全可以自主设计。以上是[react-ant-admin-server后台设计](https://gitee.com/kong_yiji_and_lavmi/react-ant-admin-server)
:::