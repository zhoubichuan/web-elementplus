import{_ as n,e as s,o as a,aB as t}from"./plugin-vue_export-helper.eeeadc7a.js";const f='{"title":"\u516D.Scrollbar","description":"","frontmatter":{"lang":"zh-CN","sidebarDepth":2,"meta":[{"name":"description","content":"\u4E2A\u4EBA\u603B\u7ED3\u7684vuepress\u5B66\u4E60\u6280\u672F\u6587\u6863-\u8BED\u6CD5"},{"name":"keywords","content":"vuepress,\u6700\u65B0\u6280\u672F\u6587\u6863,vuepress\u8BED\u6CD5,markdown\u8BED\u6CD5"}]},"headers":[{"level":2,"title":"index.ts","slug":"index-ts"},{"level":2,"title":"index.vue","slug":"index-vue"},{"level":2,"title":"bar.vue","slug":"bar-vue"}],"relativePath":"element/base/scrollbar.md","lastUpdated":1659615604025}',p={},o=t(`__VP_STATIC_START__<h1 id="\u516D-scrollbar">\u516D.Scrollbar</h1><ul><li><p>\u7EC4\u4EF6\u4ECB\u7ECD</p><p><a href="https://element-plus.gitee.io/#/zh-CN/component/layout" target="_blank" rel="noopener noreferrer">Layout \u5E03\u5C40</a></p></li></ul><h2 id="index-ts">index.ts</h2><div class="language-js"><pre><code><span class="token keyword">import</span> Scrollbar <span class="token keyword">from</span> <span class="token string">&#39;./src/index.vue&#39;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span> App <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> SFCWithInstall <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/types&#39;</span>

Scrollbar<span class="token punctuation">.</span>install <span class="token operator">=</span> <span class="token punctuation">(</span>app<span class="token operator">:</span> App<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>Scrollbar<span class="token punctuation">.</span>name<span class="token punctuation">,</span> Scrollbar<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> _Scrollbar <span class="token operator">=</span> Scrollbar <span class="token keyword">as</span> SFCWithInstall<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Scrollbar<span class="token operator">&gt;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> _Scrollbar
<span class="token keyword">export</span> <span class="token keyword">const</span> ElScrollbar <span class="token operator">=</span> _Scrollbar

<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;./src/util&#39;</span>
</code></pre></div><h2 id="index-vue">index.vue</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scrollbar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-scrollbar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
        wrapClass,
        <span class="token punctuation">&#39;</span>el-scrollbar__wrap<span class="token punctuation">&#39;</span>,
        native ? <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span> : <span class="token punctuation">&#39;</span>el-scrollbar__wrap--hidden-default<span class="token punctuation">&#39;</span>,
      ]<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@scroll</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleScroll<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span>
        <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tag<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>resize<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>el-scrollbar__view<span class="token punctuation">&#39;</span>, viewClass]<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewStyle<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>!native<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bar</span> <span class="token attr-name">:move</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>moveX<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:ratio</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ratioX<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sizeWidth<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:always</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>always<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bar</span>
        <span class="token attr-name">:move</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>moveY<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:ratio</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ratioY<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sizeHeight<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">vertical</span>
        <span class="token attr-name">:always</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>always<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  computed<span class="token punctuation">,</span>
  defineComponent<span class="token punctuation">,</span>
  nextTick<span class="token punctuation">,</span>
  onBeforeUnmount<span class="token punctuation">,</span>
  onMounted<span class="token punctuation">,</span>
  provide<span class="token punctuation">,</span>
  ref<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  addResizeListener<span class="token punctuation">,</span>
  removeResizeListener<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/resize-event&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  addUnit<span class="token punctuation">,</span>
  isArray<span class="token punctuation">,</span>
  isNumber<span class="token punctuation">,</span>
  isString<span class="token punctuation">,</span>
  toObject<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/util&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> debugWarn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/error&#39;</span>
<span class="token keyword">import</span> Bar <span class="token keyword">from</span> <span class="token string">&#39;./bar.vue&#39;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span> CSSProperties<span class="token punctuation">,</span> PropType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ElScrollbar&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Bar <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Number<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">maxHeight</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Number<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">native</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">wrapStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Array<span class="token punctuation">]</span> <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>string <span class="token operator">|</span> CSSProperties<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">wrapClass</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Array<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">viewClass</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Array<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">viewStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Array<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">noresize</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span> <span class="token comment">// \u5982\u679C container \u5C3A\u5BF8\u4E0D\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u6700\u597D\u8BBE\u7F6E\u5B83\u53EF\u4EE5\u4F18\u5316\u6027\u80FD</span>
    <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">always</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">minSize</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> emit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> sizeWidth <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> sizeHeight <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> moveX <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> moveY <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> scrollbar <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> wrap <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> resize <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> ratioY <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> ratioX <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token constant">SCOPE</span> <span class="token operator">=</span> <span class="token string">&#39;ElScrollbar&#39;</span>
    <span class="token keyword">const</span> <span class="token constant">GAP</span> <span class="token operator">=</span> <span class="token number">4</span> <span class="token comment">// top 2 + bottom 2 of bar instance</span>

    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;scrollbar&#39;</span><span class="token punctuation">,</span> scrollbar<span class="token punctuation">)</span>
    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;scrollbar-wrap&#39;</span><span class="token punctuation">,</span> wrap<span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleScroll</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>wrap<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> offsetHeight <span class="token operator">=</span> wrap<span class="token punctuation">.</span>value<span class="token punctuation">.</span>offsetHeight <span class="token operator">-</span> <span class="token constant">GAP</span>
        <span class="token keyword">const</span> offsetWidth <span class="token operator">=</span> wrap<span class="token punctuation">.</span>value<span class="token punctuation">.</span>offsetWidth <span class="token operator">-</span> <span class="token constant">GAP</span>

        moveY<span class="token punctuation">.</span>value <span class="token operator">=</span>
          <span class="token punctuation">(</span><span class="token punctuation">(</span>wrap<span class="token punctuation">.</span>value<span class="token punctuation">.</span>scrollTop <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">/</span> offsetHeight<span class="token punctuation">)</span> <span class="token operator">*</span> ratioY<span class="token punctuation">.</span>value
        moveX<span class="token punctuation">.</span>value <span class="token operator">=</span>
          <span class="token punctuation">(</span><span class="token punctuation">(</span>wrap<span class="token punctuation">.</span>value<span class="token punctuation">.</span>scrollLeft <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">/</span> offsetWidth<span class="token punctuation">)</span> <span class="token operator">*</span> ratioX<span class="token punctuation">.</span>value

        <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">scrollTop</span><span class="token operator">:</span> wrap<span class="token punctuation">.</span>value<span class="token punctuation">.</span>scrollTop<span class="token punctuation">,</span>
          <span class="token literal-property property">scrollLeft</span><span class="token operator">:</span> wrap<span class="token punctuation">.</span>value<span class="token punctuation">.</span>scrollLeft<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">setScrollTop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isNumber</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">debugWarn</span><span class="token punctuation">(</span><span class="token constant">SCOPE</span><span class="token punctuation">,</span> <span class="token string">&#39;value must be a number&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      wrap<span class="token punctuation">.</span>value<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> value
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">setScrollLeft</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isNumber</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">debugWarn</span><span class="token punctuation">(</span><span class="token constant">SCOPE</span><span class="token punctuation">,</span> <span class="token string">&#39;value must be a number&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      wrap<span class="token punctuation">.</span>value<span class="token punctuation">.</span>scrollLeft <span class="token operator">=</span> value
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>wrap<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span>

      <span class="token keyword">const</span> offsetHeight <span class="token operator">=</span> wrap<span class="token punctuation">.</span>value<span class="token punctuation">.</span>offsetHeight <span class="token operator">-</span> <span class="token constant">GAP</span>
      <span class="token keyword">const</span> offsetWidth <span class="token operator">=</span> wrap<span class="token punctuation">.</span>value<span class="token punctuation">.</span>offsetWidth <span class="token operator">-</span> <span class="token constant">GAP</span>

      <span class="token keyword">const</span> originalHeight <span class="token operator">=</span> offsetHeight <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">/</span> wrap<span class="token punctuation">.</span>value<span class="token punctuation">.</span>scrollHeight
      <span class="token keyword">const</span> originalWidth <span class="token operator">=</span> offsetWidth <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">/</span> wrap<span class="token punctuation">.</span>value<span class="token punctuation">.</span>scrollWidth
      <span class="token keyword">const</span> height <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>originalHeight<span class="token punctuation">,</span> props<span class="token punctuation">.</span>minSize<span class="token punctuation">)</span>
      <span class="token keyword">const</span> width <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>originalWidth<span class="token punctuation">,</span> props<span class="token punctuation">.</span>minSize<span class="token punctuation">)</span>

      ratioY<span class="token punctuation">.</span>value <span class="token operator">=</span>
        originalHeight <span class="token operator">/</span>
        <span class="token punctuation">(</span>offsetHeight <span class="token operator">-</span> originalHeight<span class="token punctuation">)</span> <span class="token operator">/</span>
        <span class="token punctuation">(</span>height <span class="token operator">/</span> <span class="token punctuation">(</span>offsetHeight <span class="token operator">-</span> height<span class="token punctuation">)</span><span class="token punctuation">)</span>
      ratioX<span class="token punctuation">.</span>value <span class="token operator">=</span>
        originalWidth <span class="token operator">/</span>
        <span class="token punctuation">(</span>offsetWidth <span class="token operator">-</span> originalWidth<span class="token punctuation">)</span> <span class="token operator">/</span>
        <span class="token punctuation">(</span>width <span class="token operator">/</span> <span class="token punctuation">(</span>offsetWidth <span class="token operator">-</span> width<span class="token punctuation">)</span><span class="token punctuation">)</span>

      sizeHeight<span class="token punctuation">.</span>value <span class="token operator">=</span> height <span class="token operator">+</span> <span class="token constant">GAP</span> <span class="token operator">&lt;</span> offsetHeight <span class="token operator">?</span> height <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
      sizeWidth<span class="token punctuation">.</span>value <span class="token operator">=</span> width <span class="token operator">+</span> <span class="token constant">GAP</span> <span class="token operator">&lt;</span> offsetWidth <span class="token operator">?</span> width <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> style <span class="token operator">=</span> props<span class="token punctuation">.</span>wrapStyle <span class="token keyword">as</span> CSSProperties
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isArray</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        style <span class="token operator">=</span> <span class="token function">toObject</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span>
        style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token function">addUnit</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
        style<span class="token punctuation">.</span>maxHeight <span class="token operator">=</span> <span class="token function">addUnit</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>maxHeight<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isString</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        style <span class="token operator">+=</span> <span class="token function">addUnit</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
          <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">height: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">addUnit</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;</span><span class="token template-punctuation string">\`</span></span>
          <span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
        style <span class="token operator">+=</span> <span class="token function">addUnit</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>maxHeight<span class="token punctuation">)</span>
          <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">max-height: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">addUnit</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>maxHeight<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;</span><span class="token template-punctuation string">\`</span></span>
          <span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> style
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>props<span class="token punctuation">.</span>native<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">nextTick</span><span class="token punctuation">(</span>update<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>props<span class="token punctuation">.</span>noresize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">addResizeListener</span><span class="token punctuation">(</span>resize<span class="token punctuation">.</span>value<span class="token punctuation">,</span> update<span class="token punctuation">)</span>
        <span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> update<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>props<span class="token punctuation">.</span>noresize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">removeResizeListener</span><span class="token punctuation">(</span>resize<span class="token punctuation">.</span>value<span class="token punctuation">,</span> update<span class="token punctuation">)</span>
        <span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> update<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      moveX<span class="token punctuation">,</span>
      moveY<span class="token punctuation">,</span>
      ratioX<span class="token punctuation">,</span>
      ratioY<span class="token punctuation">,</span>
      sizeWidth<span class="token punctuation">,</span>
      sizeHeight<span class="token punctuation">,</span>
      style<span class="token punctuation">,</span>
      scrollbar<span class="token punctuation">,</span>
      wrap<span class="token punctuation">,</span>
      resize<span class="token punctuation">,</span>
      update<span class="token punctuation">,</span>
      handleScroll<span class="token punctuation">,</span>
      setScrollTop<span class="token punctuation">,</span>
      setScrollLeft<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="bar-vue">bar.vue</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-scrollbar-fade<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>always || visible<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>instance<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>el-scrollbar__bar<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>is-<span class="token punctuation">&#39;</span> + bar.key]<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@mousedown</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clickTrackHandler<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
        <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>thumb<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-scrollbar__thumb<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>thumbStyle<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@mousedown</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clickThumbHandler<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  computed<span class="token punctuation">,</span>
  defineComponent<span class="token punctuation">,</span>
  inject<span class="token punctuation">,</span>
  onBeforeUnmount<span class="token punctuation">,</span>
  onMounted<span class="token punctuation">,</span>
  ref<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> off<span class="token punctuation">,</span> on <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/dom&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">BAR_MAP</span><span class="token punctuation">,</span> renderThumbStyle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./util&#39;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span> Ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> Nullable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/types&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Bar&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">vertical</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">size</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">move</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token literal-property property">ratio</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token literal-property property">always</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> thumb <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> scrollbar <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;scrollbar&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> Ref<span class="token operator">&lt;</span>Nullable<span class="token operator">&lt;</span>HTMLElement<span class="token operator">&gt;&gt;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> wrap <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;scrollbar-wrap&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> Ref<span class="token operator">&lt;</span>Nullable<span class="token operator">&lt;</span>HTMLElement<span class="token operator">&gt;&gt;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">BAR_MAP</span><span class="token punctuation">[</span>props<span class="token punctuation">.</span>vertical <span class="token operator">?</span> <span class="token string">&#39;vertical&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;horizontal&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">const</span> barStore <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> cursorDown <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> cursorLeave <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> visible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> onselectstartStore <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token keyword">const</span> offsetRatio <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// offsetRatioX = original width of thumb / current width of thumb / ratioX</span>
      <span class="token comment">// offsetRatioY = original height of thumb / current height of thumb / ratioY</span>
      <span class="token comment">// instance height = wrap height - GAP</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        instance<span class="token punctuation">.</span>value<span class="token punctuation">[</span>bar<span class="token punctuation">.</span>value<span class="token punctuation">.</span>offset<span class="token punctuation">]</span> <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">/</span>
        wrap<span class="token punctuation">.</span>value<span class="token punctuation">[</span>bar<span class="token punctuation">.</span>value<span class="token punctuation">.</span>scrollSize<span class="token punctuation">]</span> <span class="token operator">/</span>
        props<span class="token punctuation">.</span>ratio <span class="token operator">/</span>
        thumb<span class="token punctuation">.</span>value<span class="token punctuation">[</span>bar<span class="token punctuation">.</span>value<span class="token punctuation">.</span>offset<span class="token punctuation">]</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">clickThumbHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// prevent click event of middle and right button</span>
      e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>ctrlKey <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>button<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      window<span class="token punctuation">.</span><span class="token function">getSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeAllRanges</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">startDrag</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
      barStore<span class="token punctuation">.</span>value<span class="token punctuation">[</span>bar<span class="token punctuation">.</span>value<span class="token punctuation">.</span>axis<span class="token punctuation">]</span> <span class="token operator">=</span>
        e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">[</span>bar<span class="token punctuation">.</span>value<span class="token punctuation">.</span>offset<span class="token punctuation">]</span> <span class="token operator">-</span>
        <span class="token punctuation">(</span>e<span class="token punctuation">[</span>bar<span class="token punctuation">.</span>value<span class="token punctuation">.</span>client<span class="token punctuation">]</span> <span class="token operator">-</span>
          <span class="token punctuation">(</span>e<span class="token punctuation">.</span>currentTarget <span class="token keyword">as</span> HTMLElement<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>
            bar<span class="token punctuation">.</span>value<span class="token punctuation">.</span>direction
          <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">clickTrackHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> offset <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target <span class="token keyword">as</span> HTMLElement<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>bar<span class="token punctuation">.</span>value<span class="token punctuation">.</span>direction<span class="token punctuation">]</span> <span class="token operator">-</span>
          e<span class="token punctuation">[</span>bar<span class="token punctuation">.</span>value<span class="token punctuation">.</span>client<span class="token punctuation">]</span>
      <span class="token punctuation">)</span>
      <span class="token keyword">const</span> thumbHalf <span class="token operator">=</span> thumb<span class="token punctuation">.</span>value<span class="token punctuation">[</span>bar<span class="token punctuation">.</span>value<span class="token punctuation">.</span>offset<span class="token punctuation">]</span> <span class="token operator">/</span> <span class="token number">2</span>
      <span class="token keyword">const</span> thumbPositionPercentage <span class="token operator">=</span>
        <span class="token punctuation">(</span><span class="token punctuation">(</span>offset <span class="token operator">-</span> thumbHalf<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span> <span class="token operator">*</span> offsetRatio<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">/</span>
        instance<span class="token punctuation">.</span>value<span class="token punctuation">[</span>bar<span class="token punctuation">.</span>value<span class="token punctuation">.</span>offset<span class="token punctuation">]</span>

      wrap<span class="token punctuation">.</span>value<span class="token punctuation">[</span>bar<span class="token punctuation">.</span>value<span class="token punctuation">.</span>scroll<span class="token punctuation">]</span> <span class="token operator">=</span>
        <span class="token punctuation">(</span>thumbPositionPercentage <span class="token operator">*</span> wrap<span class="token punctuation">.</span>value<span class="token punctuation">[</span>bar<span class="token punctuation">.</span>value<span class="token punctuation">.</span>scrollSize<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">100</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">startDrag</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      e<span class="token punctuation">.</span><span class="token function">stopImmediatePropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      cursorDown<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token function">on</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> <span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span> mouseMoveDocumentHandler<span class="token punctuation">)</span>
      <span class="token function">on</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> <span class="token string">&#39;mouseup&#39;</span><span class="token punctuation">,</span> mouseUpDocumentHandler<span class="token punctuation">)</span>
      onselectstartStore <span class="token operator">=</span> document<span class="token punctuation">.</span>onselectstart
      document<span class="token punctuation">.</span><span class="token function-variable function">onselectstart</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">mouseMoveDocumentHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cursorDown<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
      <span class="token keyword">const</span> prevPage <span class="token operator">=</span> barStore<span class="token punctuation">.</span>value<span class="token punctuation">[</span>bar<span class="token punctuation">.</span>value<span class="token punctuation">.</span>axis<span class="token punctuation">]</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>prevPage<span class="token punctuation">)</span> <span class="token keyword">return</span>

      <span class="token keyword">const</span> offset <span class="token operator">=</span>
        <span class="token punctuation">(</span>instance<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>bar<span class="token punctuation">.</span>value<span class="token punctuation">.</span>direction<span class="token punctuation">]</span> <span class="token operator">-</span>
          e<span class="token punctuation">[</span>bar<span class="token punctuation">.</span>value<span class="token punctuation">.</span>client<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">*</span>
        <span class="token operator">-</span><span class="token number">1</span>
      <span class="token keyword">const</span> thumbClickPosition <span class="token operator">=</span> thumb<span class="token punctuation">.</span>value<span class="token punctuation">[</span>bar<span class="token punctuation">.</span>value<span class="token punctuation">.</span>offset<span class="token punctuation">]</span> <span class="token operator">-</span> prevPage
      <span class="token keyword">const</span> thumbPositionPercentage <span class="token operator">=</span>
        <span class="token punctuation">(</span><span class="token punctuation">(</span>offset <span class="token operator">-</span> thumbClickPosition<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span> <span class="token operator">*</span> offsetRatio<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">/</span>
        instance<span class="token punctuation">.</span>value<span class="token punctuation">[</span>bar<span class="token punctuation">.</span>value<span class="token punctuation">.</span>offset<span class="token punctuation">]</span>
      wrap<span class="token punctuation">.</span>value<span class="token punctuation">[</span>bar<span class="token punctuation">.</span>value<span class="token punctuation">.</span>scroll<span class="token punctuation">]</span> <span class="token operator">=</span>
        <span class="token punctuation">(</span>thumbPositionPercentage <span class="token operator">*</span> wrap<span class="token punctuation">.</span>value<span class="token punctuation">[</span>bar<span class="token punctuation">.</span>value<span class="token punctuation">.</span>scrollSize<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">100</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">mouseUpDocumentHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      cursorDown<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
      barStore<span class="token punctuation">.</span>value<span class="token punctuation">[</span>bar<span class="token punctuation">.</span>value<span class="token punctuation">.</span>axis<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token function">off</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> <span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span> mouseMoveDocumentHandler<span class="token punctuation">)</span>
      <span class="token function">off</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> <span class="token string">&#39;mouseup&#39;</span><span class="token punctuation">,</span> mouseUpDocumentHandler<span class="token punctuation">)</span>
      document<span class="token punctuation">.</span>onselectstart <span class="token operator">=</span> onselectstartStore
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cursorLeave<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        visible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> thumbStyle <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token function">renderThumbStyle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">size</span><span class="token operator">:</span> props<span class="token punctuation">.</span>size<span class="token punctuation">,</span>
        <span class="token literal-property property">move</span><span class="token operator">:</span> props<span class="token punctuation">.</span>move<span class="token punctuation">,</span>
        <span class="token literal-property property">bar</span><span class="token operator">:</span> bar<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">mouseMoveScrollbarHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      cursorLeave<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
      visible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>props<span class="token punctuation">.</span>size
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">mouseLeaveScrollbarHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      cursorLeave<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
      visible<span class="token punctuation">.</span>value <span class="token operator">=</span> cursorDown<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span>

    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">on</span><span class="token punctuation">(</span>scrollbar<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span> mouseMoveScrollbarHandler<span class="token punctuation">)</span>
      <span class="token function">on</span><span class="token punctuation">(</span>scrollbar<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token string">&#39;mouseleave&#39;</span><span class="token punctuation">,</span> mouseLeaveScrollbarHandler<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">off</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> <span class="token string">&#39;mouseup&#39;</span><span class="token punctuation">,</span> mouseUpDocumentHandler<span class="token punctuation">)</span>
      <span class="token function">off</span><span class="token punctuation">(</span>scrollbar<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span> mouseMoveScrollbarHandler<span class="token punctuation">)</span>
      <span class="token function">off</span><span class="token punctuation">(</span>scrollbar<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token string">&#39;mouseleave&#39;</span><span class="token punctuation">,</span> mouseLeaveScrollbarHandler<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      instance<span class="token punctuation">,</span>
      thumb<span class="token punctuation">,</span>
      bar<span class="token punctuation">,</span>
      clickTrackHandler<span class="token punctuation">,</span>
      clickThumbHandler<span class="token punctuation">,</span>
      thumbStyle<span class="token punctuation">,</span>
      visible<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>__VP_STATIC_END__`,8),e=[o];function c(u,l,k,r,i,d){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{f as __pageData,m as default};
