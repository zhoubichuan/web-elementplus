## 需掌握的东西

在使用此框架进行二次开发之前，你需要了解一下内容

- [nodejs](http://nodejs.cn/)
- [git](https://git-scm.com/)
- [webpack](https://webpack.docschina.org/)
- [react](https://react.docschina.org/),[react-router-cache-route](https://github.com/CJY0208/react-router-cache-route),[redux](https://www.redux.org.cn/)
- [axios](http://www.axios-js.com/)
- [ant-desgin](https://ant.design/index-cn)

使用 react-ant-admin 可以快速搭建后台管理系统。

菜单配置:扁平化数据组织,方便编写,存库,页面菜单,标题,侧边栏,顶部导航栏同步

页面懒加载:使用[@loadable/component](https://loadable-components.com/docs/getting-started/)来解决首次打开页面过慢的问题.

Ajax 请求：restful 规范，自动错误提示，提示可配置；自动打断未完成的请求；

权限控制: 根据不用角色的功能类型显示菜单,路由页面拦截.

## 起步

下载

在需要安装的文件夹下，打开 DOS 窗口(cmd)，输入一下内容并回车

```shell
git clone https://github.com/kongyijilafumi/react-ant-admin.git
```

若以上命令执行过慢，推荐使用一下命令(码云国内镜像)

```shell
git clone https://gitee.com/kong_yiji_and_lavmi/react-ant-admin.git
```

安装项目所需依赖

使用 npm 安装或者使用 cnpm

```shell
D:> cd react-ant-admin

D:\react-ant-admin> npm i

D:\react-ant-admin> cnpm i
```

启动

输入 npm run "start mock" 启动本地 mock 数据

```shell
D:\react-ant-admin> npm run "start mock"
```

启动成功后，会自动打开默认浏览器并跳转到`http://localhost:3000/react-ant-admin/`

首次进入默认需要登录，账号密码随便输入即可！这样一个后台管理系统已经搭载好了！

## 为什么使用 npm run "start mock"

因为`start mock`是针对本地项目没有后台接口而选择的一种启动模式。

:::  tip
npm run start是根据接口返回的数据来渲染页面，所以需要提前修改接口地址，确保有数据并且数据格式对应，这样项目就可以成功运行起来！菜单数据格式将在[菜单配置](./menu/)这里开始进行讲解！
:::



若会使用 nodejs 的小伙伴，可以自行搭载后台服务。

前端人快速搭载后台服务[express](https://www.expressjs.com.cn/)
