### 权限配置(数据库设计)

权限配置的数据库设计可以参考以下结构

包含字段 `type`,`name`

```sql
CREATE TABLE `power` (
  `type` varchar(255) NOT NULL COMMENT '权限类型',
  `name` varchar(255) NOT NULL COMMENT '权限简称',
  PRIMARY KEY (`type`)
)
```
