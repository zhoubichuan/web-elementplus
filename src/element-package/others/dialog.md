---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# 一.弹框组件

:::tip 前言

- 1.添加类型`size`
- 2.头部改造
- 3.弹框组件+表单组件

:::

## 默认

<preview path="./dialog-default.vue"></preview>

## 创建

- 通过`type`字段选择不同的组件，内部使用异步组件动态加载

<preview path="./dialog-create.vue" ></preview>

## 编辑

- 通过`init`字段赋给默认值

<preview path="./dialog-edit.vue" ></preview>

## 查看

- 去掉`取消`、`确认`按钮

<preview path="./dialog-view.vue" ></preview>
