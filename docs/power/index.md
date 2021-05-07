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
