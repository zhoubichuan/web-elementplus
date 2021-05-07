# 什么是react-ant-admin

react-ant-admin适用于后台管理web项目的二次开发。让开发人员快速搭建后台管理项目。

## 需掌握的东西

在使用此框架进行二次开发之前，你需要了解一下内容

- [nodejs](http://nodejs.cn/)
- [git](https://git-scm.com/)
- [webpack](https://webpack.docschina.org/)
- [react](https://react.docschina.org/),[react-router-cache-route](https://github.com/CJY0208/react-router-cache-route),[redux](https://www.redux.org.cn/)
- [axios](http://www.axios-js.com/)
- [ant-desgin](https://ant.design/index-cn)

使用 react-ant-admin 可以快速搭建后台管理系统。

菜单配置:扁平化数据组织，方便编写，存库，页面菜单，排序，标题，侧边栏，顶部导航栏同步。

页面懒加载:来解决首次打开页面过慢的问题。

Ajax 请求：restful 规范，自动错误提示，提示可配置，自动打断未完成的请求。

权限控制: 根据不用角色的功能类型显示菜单,路由页面拦截。

## 动机

看了很多开源的中后台管理web项目，找一个使用简单，方便，易懂的框架非常难找，为什么选择[react文档](https://react.docschina.org/)作为技术栈，是因为react给了开发者更多的自由，而且react的社区非常活跃，在解决业务上的需求时，总有一款已经开发好的**轮子**适合你，搭配``ant-design``UI框架完全符合开发的美观。


在使用后台管理系统，无非就是几个最基础的功能：**菜单可定义、用户分权限、页面与导航栏同步**等。其余的功能功能不太必要，只需业务需求往上开发即可。

## 优化


使用了[@loadable/component](https://loadable-components.com/docs/getting-started/)插件，对页面级组件进行懒加载，解决了首次打开页面加载过慢问题。

拆分reducer，让单独的功能使用单独的reducer。



