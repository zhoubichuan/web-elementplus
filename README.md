<div align="center">
	<h1 align="center">web-vue3</h1>
</div>
<p>&emsp;&emsp;为vitepress添加更专业的Demo演示能力，让您在开发vue组件库或者vue相关文档编写时，可以通过引入vue文件的时候结果显示和代码演示。</p>

## 文档

[官方文档](https://1006008051.github.io/web-vue3) | [快速上手](https://1006008051.github.io/web-vue3/demo/guide/quickstart.html) | [组件演示](https://1006008051.github.io/web-vue3/demo/md/button.html)

## 安装

我们建议您使用包管理器 (NPM,[Yarn](https://classic.yarnpkg.com/lang/en/), [pnpm](https://pnpm.io/) 安装  <code>web-vue3</code>
```
# 选择一个你喜欢的包管理器

# NPM
$ npm install web-vue3 --save

# Yarn
$ yarn add web-vue3

# pnpm
$ pnpm install web-vue3
```


## 引入
先注册 `web-vue3` 提供的markdown解析插件
```js
// .vitepress/config.ts or .vitepress/config.js
import demoblock from 'web-vue3';
export default {
    // ...
        markdown: {
            // ...
            config: (md) => {
                md.use(demoblock)
            }
    },
}
```
再引入 `web-vue3` 提供的demo组件
```js
// .vitepress/theme/index.ts or .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'; //引入默认主题
import demo from 'web-vue3/demo.vue'
export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('demo', demo)
    }
```
## 使用

###### 输入
```
<demo src="../component/button.vue" desc="使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。"></demo>
```
###### 输出
![demo演示](https://1006008051.github.io/web-vue3/demo.png)
