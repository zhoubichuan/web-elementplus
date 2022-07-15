---
layout: home
hero:
  name: element-plus学习笔记
  text: 加油～～
  image: /react.svg
  tagline: element-plus
  actions:
    - theme: brand
      text: 开始
      link: /base/
    - theme: alt
      text: 了解更多
      link: /base/start
features:
  - title: 💡 菜单配置
    details: 扁平化数据组织，方便编写，存库，页面菜单，排序，标题，侧边栏，顶部导航栏同步。
  - title: ⚡️ 页面懒加载
    details: 来解决首次打开页面过慢的问题。
  - title: 🛠️ Ajax 请求
    details: restful 规范，自动错误提示，提示可配置，自动打断未完成的请求。
  - title: 📦 自定义主题
    details: 可以自己定义界面颜色。
  - title: 🔩 路由自动化
    details: 使用了webpack-router-generator来直接在定义页面里定义路由信息。
  - title: 🔑 权限控制
    details: 根据不用角色的功能类型显示菜单,路由页面拦截。
# footer: MIT Licensed | Copyright © 2021-present azheng
---


<script setup>
import fetchReleaseTag from './.vitepress/theme/fetchTag.js'

fetchReleaseTag();
</script>
