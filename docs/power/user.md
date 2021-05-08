--- 
title: 用户权限配置 react-ant-admin 
head:
  - - meta
    - name: description
      content: react-ant-admin 用户权限配置，详细讲解此框架的文件部署，教你如何掌握框架的工作流程，快速上手。
  - - meta
    - name: keywords
      content: react react-ant react-admin react-ant-admin 用户权限配置
---
# 用户权限配置

用户信息中仅需要拥有一个*type*值即可。

```json{3}
{
  "user_id":1,
  "username": "xxxx",
  "type": "1",
  "account":"admin",
  "pswd":"admin123"
  //............
}
```

用户信息配置的数据库设计可以参考以下结构

```sql{6}
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
