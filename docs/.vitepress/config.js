module.exports = {
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
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  title: "react-ant-admin",
  base: "/doc-react-ant-admin/",
  themeConfig: {
    search: true,
    sidebar: [
      {
        text: "文档",
        children: [
          { text: "如何使用", link: "/" },
          {
            text: "权限配置",
            link: "/power/",
            children: [
              {
                text: "菜单权限",
                link: "/power/menu",
              },
              {
                text: "用户权限",
                link: "/power/user",
              },
            ],
          },
          {
            text: "菜单配置",
            link: "/menu/",
            children: [
              {
                text: "创建一个菜单",
                link: "/menu/createMenu",
              },
              {
                text: "创建一个对应页面",
                link: "/menu/createPage",
              },
            ],
          },
          {
            text: "其余配置信息",
            link: "/page/",
          },
        ],
      },
    ],
    author: "kongyijilafumi",
    // nav: [],
  },
  dest: "public",
};
