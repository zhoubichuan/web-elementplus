import{_ as a,c as t,I as o,aR as s,D as c,o as r}from"./chunks/framework.DzKfhdjc.js";const B=JSON.parse('{"title":"五.Card 卡片","description":"","frontmatter":{"lang":"zh-CN","sidebarDepth":2,"meta":[{"name":"description","content":"个人总结的vuepress学习技术文档-语法"},{"name":"keywords","content":"vuepress,最新技术文档,vuepress语法,markdown语法"}]},"headers":[],"relativePath":"element-package/others/card.md","filePath":"element-package/others/card.md","lastUpdated":1718973097000}'),d={name:"element-package/others/card.md"},n=s('<h1 id="五-card-卡片" tabindex="-1">五.Card 卡片 <a class="header-anchor" href="#五-card-卡片" aria-label="Permalink to &quot;五.Card 卡片&quot;">​</a></h1><p>通过基础的 24 分栏，迅速简便地创建布局。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>组件默认使用 Flex 布局，不需要手动设置 type=&quot;flex&quot;。</p><p>请注意父容器避免使用 inline 相关样式，会导致组件宽度不能撑满。</p></div><h2 id="基础布局" tabindex="-1">基础布局 <a class="header-anchor" href="#基础布局" aria-label="Permalink to &quot;基础布局&quot;">​</a></h2><p>使用列创建基础网格布局。</p><p>通过 <code>row</code> 和 <code>col</code> 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。</p><h6 id="输入" tabindex="-1">输入 <a class="header-anchor" href="#输入" aria-label="Permalink to &quot;输入&quot;">​</a></h6><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;demo src=&quot;./card.vue&quot; desc=&quot;通过 `row` 和 `col` 组件，并通过 col 组件的 `span` 属性我们就可以自由地组合布局。&quot;&gt;&lt;/demo&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h6 id="输出" tabindex="-1">输出 <a class="header-anchor" href="#输出" aria-label="Permalink to &quot;输出&quot;">​</a></h6>',9);function l(p,i,E,m,h,u){const e=c("demo");return r(),t("div",null,[n,o(e,{src:"./card.vue",desc:"通过 `row` 和 `col` 组件，并通过 col 组件的 `span` 属性我们就可以自由地组合布局。",codeStr:"%3Ctemplate%3E%0D%0A%20%20%3Cweb-card%20style%3D%22max-width%3A%20480px%22%3E%0D%0A%20%20%20%20%3Ctemplate%20%23header%3E%0D%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22card-header%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%3ECard%20name%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Cp%20v-for%3D%22o%20in%204%22%20%3Akey%3D%22o%22%20class%3D%22text%20item%22%3E%7B%7B%20'List%20item%20'%20%2B%20o%20%7D%7D%3C%2Fp%3E%0D%0A%20%20%20%20%3Ctemplate%20%23footer%3EFooter%20content%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fweb-card%3E%0D%0A%3C%2Ftemplate%3E",htmlStr:"undefined",description:"%E9%80%9A%E8%BF%87%20%3Ccode%3Erow%3C%2Fcode%3E%20%E5%92%8C%20%3Ccode%3Ecol%3C%2Fcode%3E%20%E7%BB%84%E4%BB%B6%EF%BC%8C%E5%B9%B6%E9%80%9A%E8%BF%87%20col%20%E7%BB%84%E4%BB%B6%E7%9A%84%20%3Ccode%3Espan%3C%2Fcode%3E%20%E5%B1%9E%E6%80%A7%E6%88%91%E4%BB%AC%E5%B0%B1%E5%8F%AF%E4%BB%A5%E8%87%AA%E7%94%B1%E5%9C%B0%E7%BB%84%E5%90%88%E5%B8%83%E5%B1%80%E3%80%82",codePath:"../../element-package/others/card.vue"})])}const _=a(d,[["render",l]]);export{B as __pageData,_ as default};