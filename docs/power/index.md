--- 
title: 权限类别配置 react-ant-admin 
head:
  - - meta
    - name: description
      content: react-ant-admin 权限类别配置，详细讲解此框架的文件部署，教你如何掌握框架的工作流程，快速上手。
  - - meta
    - name: keywords
      content: react react-ant react-admin react-ant-admin 权限类别配置
---
# 权限类别配置

单条数据展示：JSON 格式

```json{2}
{
  "type": "1",
  "name": "超级权限"
}
```

权限配置的数据库设计可以参考以下结构

包含字段 `type`,`name`

```sql{2}
CREATE TABLE `power` (
  `type` varchar(255) NOT NULL COMMENT '权限类型',
  `name` varchar(255) NOT NULL COMMENT '权限简称',
  PRIMARY KEY (`type`)
)
```
