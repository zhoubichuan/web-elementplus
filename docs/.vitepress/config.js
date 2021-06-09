module.exports = {
  title: "react-ant-admin",
  base: "/doc-react-ant-admin/",
  dest: "public",
  lang: "zh-CN",
  hmr: { overlay: false },
  head: [
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
      },
    ],
    [
      "meta",
      { name: "keywords", content: "react react-admin ant 后台管理系统" },
    ],
    [
      "meta",
      {
        name: "description",
        content:
          "此框架使用与二次开发，前端框架使用react，UI框架使用ant-design，全局数据状态管理使用redux，ajax使用库为axios。用于快速搭建中后台页面。",
      },
    ],
    ["link", { rel: "icon", href: "/doc-react-ant-admin/logo.svg" }],
    // 统计代码
    [
      "script",
      { src: "https://hm.baidu.com/hm.js?3a995a34b126c8652c75166fa2690df9" },
    ],
  ],
 
  themeConfig: {
    sidebar: {
      "/": getSidebar(),
    },
    author: "kongyijilafumi",
    nav: [
      { text: "介绍", link: "/", activeMatch: "^/$|^/guide/" },
      {
        text: "预览地址",
        link: "https://azhengpersonalblog.top/react-ant-admin/",
      },
      {
        text: "更多地址",
        link: "/contact/",
      },
    ],
  },
};

function getSidebar() {
  return [
    {
      text: "介绍",
      children: [
        { text: "什么是react-ant-admin？", link: "/" },
        { text: "开始使用", link: "/guide/start" },
        { text: "文件配置", link: "/guide/configuration" },
        { text: "路径配置", link: "/guide/path" },
      ],
    },
    {
      text: "菜单信息配置",
      children: [
        { text: "菜单配置", link: "/menu/" },
        { text: "创建一个路由", link: "/menu/createMenu" },
        { text: "创建一个页面", link: "/menu/createPage" },
      ],
    },
    {
      text: "用户权限信息配置",
      children: [
        { text: "权限类别配置", link: "/power/" },
        { text: "用户权限配置", link: "/power/user" },
        { text: "菜单如何关联用户权限", link: "/power/menu" },
      ],
    },
    {
      text: "主题色配置",
      link: "/color/",
    },
    {
      text: "留言",
      link: "/feedback/",
    },
  ];
}
