import demoblock from '../src/demoblock';
import nav from './nav'
import sidebar from './sidebar'
export default {
    srcDir: "./",
    outDir: './docs',
    base: '/web-elementplus',
    lang: 'zh-CN',
    title: 'web-elementplus',    // 标题
    description: '基于vitepress最新版的组件库代码示例插件',    // 描述
    lastUpdated: true, // 上次更新时间
    markdown: {
        headers: {
            level: [0, 0]
        },
        config: (md) => {
            md.use(demoblock)
        }
    },
    themeConfig: {
        // 顶部导航
        nav,
        sidebar,
        // 社交信息栏
        socialLinks: [
            { icon: 'github', link: 'https://github.com/zhoubichuan/web-elementplus' }
        ],
        // 底部信息栏
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Wang Yongcun'
        },
        // 广告栏
        // carbonAds: {
        //     code: 'CEBDT27Y',
        //     placement: 'vuejsorg'
        // }
    }
}