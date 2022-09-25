import{_ as n,e as s,o as a,aB as t}from"./plugin-vue_export-helper.84d1515a.js";const g='{"title":"\u4E03.Config Provider","description":"","frontmatter":{"lang":"zh-CN","sidebarDepth":2,"meta":[{"name":"description","content":"\u4E2A\u4EBA\u603B\u7ED3\u7684vuepress\u5B66\u4E60\u6280\u672F\u6587\u6863-\u8BED\u6CD5"},{"name":"keywords","content":"vuepress,\u6700\u65B0\u6280\u672F\u6587\u6863,vuepress\u8BED\u6CD5,markdown\u8BED\u6CD5"}]},"headers":[{"level":2,"title":"index.ts","slug":"index-ts"},{"level":2,"title":"config-provider.ts","slug":"config-provider-ts"}],"relativePath":"element/base/config-provider.md","lastUpdated":1664119937266}',o={},p=t(`__VP_STATIC_START__<h1 id="\u4E03-config-provider">\u4E03.Config Provider</h1><ul><li><p>\u7EC4\u4EF6\u4ECB\u7ECD</p><p><a href="https://element-plus.gitee.io/#/zh-CN/component/layout" target="_blank" rel="noopener noreferrer">Layout \u5E03\u5C40</a></p></li></ul><h2 id="index-ts">index.ts</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> withInstall <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@element-plus/utils/with-install&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./config-provider&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> ElConfigProvider <span class="token operator">=</span> <span class="token function">withInstall</span><span class="token punctuation">(</span>ConfigProvider<span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> ElConfigProvider
</code></pre></div><h2 id="config-provider-ts">config-provider.ts</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useLocaleProps<span class="token punctuation">,</span> useLocale <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@element-plus/hooks&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> ConfigProvider <span class="token operator">=</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;ElConfigProvider&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>useLocaleProps<span class="token punctuation">,</span>
    <span class="token comment">// Add more configs</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> <span class="token punctuation">{</span> slots <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">useLocale</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> slots<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>__VP_STATIC_END__`,6),e=[p];function c(r,l,i,u,k,d){return a(),s("div",null,e)}var m=n(o,[["render",c]]);export{g as __pageData,m as default};
