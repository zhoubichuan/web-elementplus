import { defineConfig } from 'vitepress'
// @vitepress-demo-preview/plugin: 支持区块内的方式展示 demo 和示例代码
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import { fileURLToPath, URL } from 'node:url'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import nav from './nav'
import timeline from "vitepress-markdown-timeline";
import sidebar from './sidebar'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/web-elementplus/", // 部署站点的基础路径
  srcDir: "./",
  srcExclude: ['vue/**', '**/README.md'],
  outDir: '../web-elementplus',
  lang: 'zh-CN',
  title: 'web-elementplus',    // 标题
  description: '基于vitepress最新版的组件库代码示例插件',    // 描述
  lastUpdated: true, // 上次更新时间
  // #region fav
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  vite: {
    resolve: {
      alias: {
        'web-components': fileURLToPath(new URL('../../components', import.meta.url)),
        'components': fileURLToPath(new URL('../../components', import.meta.url)),
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    },
    plugins: [VueSetupExtend()],
  },
  markdown: {
    headers: {
      level: [0, 0]
    },
    //行号显示
    lineNumbers: true,

    //时间线 
    // @vitepress-demo-preview的配置
    config(md) {
      // 支持区块内的方式展示 demo 和示例代码
      md.use(timeline);
      md.use(containerPreview)
      md.use(componentPreview)
    },
    // 开启图片懒加载
    image: {
      lazyLoading: true
    },
  },
  //主题配置
  themeConfig: {
    lastUpdatedText: '最后更新',
    //左上角logo
    logo: '/logo.png',
    siteTitle: false, //标题隐藏

    //设置站点标题 会覆盖title
    // siteTitle: 'Hello World',

    //导航栏
    nav,

    //侧边栏
    sidebar,

    //本地搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                },
              },
            },
          },
        },
      },
    },

    //社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhoubichuan/web-elementplus' },
    ],

    //手机端深浅模式文字修改
    darkModeSwitchLabel: '深浅模式',
    //页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-2024 备案号：<a href="https://beian.miit.gov.cn/">鄂ICP备2022012824号-1</a>',
    },

    //侧边栏文字更改(移动端)
    sidebarMenuLabel: '目录',

    //返回顶部文字修改(移动端)
    returnToTopLabel: '返回顶部',

    //大纲显示2-3级标题
    outline: {
      level: [2, 3],
      label: '当前页大纲'
    },


    //编辑本页
    editLink: {
      pattern: 'https://github.com/zhoubichuan/web-elementplus/edit/master/src/:path',
      text: '在GitHub编辑本页'
    },

    //自定义上下页名
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

  },

})

