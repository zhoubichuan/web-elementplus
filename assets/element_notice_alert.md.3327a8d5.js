import{_ as n,e as s,o as a,aB as t}from"./plugin-vue_export-helper.eeeadc7a.js";const d='{"title":"\u4E00.Alert \u8B66\u544A\uFF08\u2764\uFE0F\u2764\uFE0F\uFF09","description":"","frontmatter":{"lang":"zh-CN","sidebarDepth":2,"meta":[{"name":"description","content":"\u4E2A\u4EBA\u603B\u7ED3\u7684vuepress\u5B66\u4E60\u6280\u672F\u6587\u6863-\u8BED\u6CD5"},{"name":"keywords","content":"vuepress,\u6700\u65B0\u6280\u672F\u6587\u6863,vuepress\u8BED\u6CD5,markdown\u8BED\u6CD5"}]},"headers":[{"level":2,"title":"index.js","slug":"index-js"},{"level":2,"title":"main.vue","slug":"main-vue"}],"relativePath":"element/notice/alert.md","lastUpdated":1659615604029}',p={},o=t(`<h1 id="\u4E00-alert-\u8B66\u544A\uFF08\u2764\uFE0F\u2764\uFE0F\uFF09">\u4E00.Alert \u8B66\u544A\uFF08\u2764\uFE0F\u2764\uFE0F\uFF09</h1><ul><li>\u7EC4\u4EF6\u4ECB\u7ECD <a href="https://element-plus.gitee.io/#/zh-CN/component/layout" target="_blank" rel="noopener noreferrer">Layout \u5E03\u5C40</a> \u7EC4\u4EF6\u76EE\u5F55</li></ul><div class="language-bash"><pre><code><span class="token comment"># element-ui</span>
\u251C\u2500\u2500 packages         <span class="token comment"># \u653E\u7F6Eelement\u7684\u7EC4\u4EF6\uFF08css\u6837\u5F0F\u653E\u7F6E\u5728\u8FD9\u4E2A\u76EE\u5F55\u4E0Btheme-chalk\u4E0B\uFF09</span>
\u2502   \u251C\u2500\u2500 alert
\u2502   \u2502  \u251C\u2500\u2500 src          <span class="token comment"># alert\u7EC4\u4EF6</span>
\u2502   \u2502  \u2502 \u2514\u2500\u2500 main.vue     <span class="token comment"># \u7EC4\u4EF6\u6CE8\u518C\u7684\u5165\u53E3\u6587\u4EF6</span>
\u2502   \u2502  \u2514\u2500\u2500 index.js     <span class="token comment"># \u7EC4\u4EF6\u6CE8\u518C\u7684\u5165\u53E3\u6587\u4EF6</span>
</code></pre></div><h2 id="index-js">index.js</h2><div class="language-js"><pre><code><span class="token keyword">import</span> Alert <span class="token keyword">from</span> <span class="token string">&quot;./src/main&quot;</span>

<span class="token comment">/* istanbul ignore next */</span>
Alert<span class="token punctuation">.</span><span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>Alert<span class="token punctuation">.</span>name<span class="token punctuation">,</span> Alert<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Alert
</code></pre></div><p>\u5728 vue \u9879\u76EE\u4E2D\u901A\u8FC7\u5F15\u7528\u8FD9\u4E2A\u7EC4\u4EF6\uFF0C\u7136\u540E\u901A\u8FC7 vue.use \u52A0\u8F7D\u8FD9\u4E2A\u7EC4\u4EF6\uFF0C\u5185\u90E8\u4F1A\u8C03\u7528 install \u65B9\u6CD5\uFF0C\u5C06\u7EC4\u4EF6\u52A0\u8F7D\u5230 Vue \u5B9E\u4F8B\u5185\u90E8</p><h2 id="main-vue">main.vue</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-alert-fade<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-alert<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[typeClass, center ? <span class="token punctuation">&#39;</span>is-center<span class="token punctuation">&#39;</span> : <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>is-<span class="token punctuation">&#39;</span> + effect]<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alert<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-alert__icon<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[iconClass, isBigIcon]<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showIcon<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-alert__content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-alert__title<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[isBoldTitle]<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title || $slots.title<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-alert__description<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$slots.default &amp;&amp; !description<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-alert__description<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>description &amp;&amp; !$slots.default<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          {{ description }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-alert__closebtn<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
            <span class="token punctuation">&#39;</span>is-customed<span class="token punctuation">&#39;</span>: closeText !== <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span>,
            <span class="token punctuation">&#39;</span>el-icon-close<span class="token punctuation">&#39;</span>: closeText === <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span>,
          }<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>closable<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>close()<span class="token punctuation">&quot;</span></span>
          <span class="token punctuation">&gt;</span></span>{{ closeText }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span>
        <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/babel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> <span class="token constant">TYPE_CLASSES_MAP</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token string">&quot;el-icon-success&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">warning</span><span class="token operator">:</span> <span class="token string">&quot;el-icon-warning&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">&quot;el-icon-error&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;ElAlert&quot;</span><span class="token punctuation">,</span>

  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">closable</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">closeText</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">showIcon</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">center</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">effect</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;light&quot;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">&quot;light&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dark&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&quot;close&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">typeClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">el-alert--</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function">iconClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token constant">TYPE_CLASSES_MAP</span><span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>type<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">&quot;el-icon-info&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function">isBigIcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>description <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>default <span class="token operator">?</span> <span class="token string">&quot;is-big&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function">isBoldTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>description <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>default <span class="token operator">?</span> <span class="token string">&quot;is-bold&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,8),e=[o];function c(l,u,k,i,r,g){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{d as __pageData,y as default};
