### 用户权限设置

用户权限仅需要拥有一个*type*值即可。

用户信息配置的数据库设计可以参考以下结构

```sql
CREATE TABLE `user_info` (
  `user_id` int(8) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` varchar(255) NOT NULL COMMENT '用户名',
  `account` varchar(20) NOT NULL COMMENT '登录账号',
  `pswd` varchar(64) NOT NULL COMMENT '登录密码',
  `type` varchar(255) NOT NULL COMMENT '用户权限',
  PRIMARY KEY (`user_id`) USING BTREE,
  KEY `fk_type` (`type`),
  CONSTRAINT `fk_type` FOREIGN KEY (`type`) REFERENCES `power` (`type`)
)
```
