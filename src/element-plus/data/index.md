---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# 数据部分

1.**table组件表格宽度不支持`rem`响应式**

- 表格内部源码直接在`dom`上添加`width`赋值，如果有传递参数用传递的参数（字符串会转成数字所以rem无效），否则用默认值`80`，外面的业务代码添加`class`使用不会生效
