import{_ as n,e as s,o as a,aB as p}from"./plugin-vue_export-helper.eeeadc7a.js";const m='{"title":"\u4E94.Space","description":"","frontmatter":{"lang":"zh-CN","sidebarDepth":2,"meta":[{"name":"description","content":"\u4E2A\u4EBA\u603B\u7ED3\u7684vuepress\u5B66\u4E60\u6280\u672F\u6587\u6863-\u8BED\u6CD5"},{"name":"keywords","content":"vuepress,\u6700\u65B0\u6280\u672F\u6587\u6863,vuepress\u8BED\u6CD5,markdown\u8BED\u6CD5"}]},"headers":[{"level":2,"title":"index.ts","slug":"index-ts"},{"level":2,"title":"index.ts","slug":"index-ts-1"},{"level":2,"title":"item.vue","slug":"item-vue"},{"level":2,"title":"useSpace.ts","slug":"usespace-ts"}],"relativePath":"element/base/space.md","lastUpdated":1659541246099}',t={},o=p(`__VP_STATIC_START__<h1 id="\u4E94-space">\u4E94.Space</h1><ul><li><p>\u7EC4\u4EF6\u4ECB\u7ECD</p><p><a href="https://element-plus.gitee.io/#/zh-CN/component/layout" target="_blank" rel="noopener noreferrer">Layout \u5E03\u5C40</a></p></li></ul><h2 id="index-ts">index.ts</h2><div class="language-js"><pre><code><span class="token keyword">import</span> Space <span class="token keyword">from</span> <span class="token string">&#39;./src/index&#39;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span> App <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> SFCWithInstall <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/types&#39;</span>

<span class="token keyword">const</span> _Space <span class="token operator">=</span> Space <span class="token keyword">as</span> SFCWithInstall<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Space<span class="token operator">&gt;</span>

_Space<span class="token punctuation">.</span><span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">app</span><span class="token operator">:</span> App</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>_Space<span class="token punctuation">.</span>name<span class="token punctuation">,</span> _Space<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> _Space
<span class="token keyword">export</span> <span class="token keyword">const</span> ElSpace <span class="token operator">=</span> _Space
</code></pre></div><h2 id="index-ts-1">index.ts</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  defineComponent<span class="token punctuation">,</span>
  renderSlot<span class="token punctuation">,</span>
  createVNode<span class="token punctuation">,</span>
  createTextVNode<span class="token punctuation">,</span>
  isVNode<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  PatchFlags<span class="token punctuation">,</span>
  isFragment<span class="token punctuation">,</span>
  isValidElementNode<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/vnode&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isArray <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/util&#39;</span>
<span class="token keyword">import</span> Item <span class="token keyword">from</span> <span class="token string">&#39;./item.vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useSpace<span class="token punctuation">,</span> defaultProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./useSpace&#39;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span> VNode<span class="token punctuation">,</span> ExtractPropTypes<span class="token punctuation">,</span> Slots <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ElSpace&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> defaultProps<span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">useSpace</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">render</span><span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">ctx</span><span class="token operator">:</span> ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> useSpace<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>
      ExtractPropTypes<span class="token operator">&lt;</span><span class="token keyword">typeof</span> defaultProps<span class="token operator">&gt;</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span> <span class="token literal-property property">$slots</span><span class="token operator">:</span> Slots <span class="token punctuation">}</span></span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>
      classes<span class="token punctuation">,</span>
      $slots<span class="token punctuation">,</span>
      containerStyle<span class="token punctuation">,</span>
      itemStyle<span class="token punctuation">,</span>
      spacer<span class="token punctuation">,</span>
      prefixCls<span class="token punctuation">,</span>
      direction<span class="token punctuation">,</span>
    <span class="token punctuation">}</span> <span class="token operator">=</span> ctx

    <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token function">renderSlot</span><span class="token punctuation">(</span>$slots<span class="token punctuation">,</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token comment">// retrieve the children out via a simple for loop</span>
    <span class="token comment">// the edge case here is that when users uses directives like &lt;v-for&gt;, &lt;v-if&gt;</span>
    <span class="token comment">// we need to go one layer deeper</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>

    <span class="token comment">// loop the children, if current children is rendered via \`renderList\` or \`&lt;v-for&gt;\`</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isArray</span><span class="token punctuation">(</span>children<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> extractedChildren <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      children<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">child</span><span class="token operator">:</span> VNode<span class="token punctuation">,</span> loopKey</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isFragment</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isArray</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            child<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">nested<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
              extractedChildren<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
                <span class="token function">createVNode</span><span class="token punctuation">(</span>
                  Item<span class="token punctuation">,</span>
                  <span class="token punctuation">{</span>
                    <span class="token literal-property property">style</span><span class="token operator">:</span> itemStyle<span class="token punctuation">,</span>
                    prefixCls<span class="token punctuation">,</span>
                    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">nested-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">{</span>
                    <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>nested <span class="token keyword">as</span> VNode<span class="token punctuation">]</span><span class="token punctuation">,</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  PatchFlags<span class="token punctuation">.</span><span class="token constant">PROPS</span> <span class="token operator">|</span> PatchFlags<span class="token punctuation">.</span><span class="token constant">STYLE</span><span class="token punctuation">,</span>
                  <span class="token punctuation">[</span><span class="token string">&#39;style&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;prefixCls&#39;</span><span class="token punctuation">]</span>
                <span class="token punctuation">)</span>
              <span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
          <span class="token comment">// if the current child is valid vnode, then append this current vnode</span>
          <span class="token comment">// to item as child node.</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isValidElementNode</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          extractedChildren<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
            <span class="token function">createVNode</span><span class="token punctuation">(</span>
              Item<span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">style</span><span class="token operator">:</span> itemStyle<span class="token punctuation">,</span>
                prefixCls<span class="token punctuation">,</span>
                <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">LoopKey</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>loopKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>child <span class="token keyword">as</span> VNode<span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              PatchFlags<span class="token punctuation">.</span><span class="token constant">PROPS</span> <span class="token operator">|</span> PatchFlags<span class="token punctuation">.</span><span class="token constant">STYLE</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span><span class="token string">&#39;style&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;prefixCls&#39;</span><span class="token punctuation">]</span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>spacer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// track the current rendering index, when encounters the last element</span>
        <span class="token comment">// then no need to add a spacer after it.</span>
        <span class="token keyword">const</span> len <span class="token operator">=</span> extractedChildren<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
        extractedChildren <span class="token operator">=</span> extractedChildren<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> child<span class="token punctuation">,</span> idx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> idx <span class="token operator">===</span> len
            <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token operator">...</span>acc<span class="token punctuation">,</span> child<span class="token punctuation">]</span>
            <span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token operator">...</span>acc<span class="token punctuation">,</span>
                child<span class="token punctuation">,</span>
                <span class="token function">createVNode</span><span class="token punctuation">(</span>
                  <span class="token string">&#39;span&#39;</span><span class="token punctuation">,</span>
                  <span class="token comment">// adding width 100% for vertical alignment,</span>
                  <span class="token comment">// when the spacer inherit the width from the</span>
                  <span class="token comment">// parent, this span&#39;s width was not set, so space</span>
                  <span class="token comment">// might disappear</span>
                  <span class="token punctuation">{</span>
                    <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                      itemStyle<span class="token punctuation">,</span>
                      direction <span class="token operator">===</span> <span class="token string">&#39;vertical&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;width: 100%&#39;</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">key</span><span class="token operator">:</span> idx<span class="token punctuation">,</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">[</span>
                    <span class="token comment">// if spacer is already a valid vnode, then append it to the current</span>
                    <span class="token comment">// span element.</span>
                    <span class="token comment">// otherwise, treat it as string.</span>
                    <span class="token function">isVNode</span><span class="token punctuation">(</span>spacer<span class="token punctuation">)</span>
                      <span class="token operator">?</span> spacer
                      <span class="token operator">:</span> <span class="token function">createTextVNode</span><span class="token punctuation">(</span>spacer <span class="token keyword">as</span> string<span class="token punctuation">,</span> PatchFlags<span class="token punctuation">.</span><span class="token constant">TEXT</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                  <span class="token punctuation">]</span><span class="token punctuation">,</span>
                  PatchFlags<span class="token punctuation">.</span><span class="token constant">STYLE</span>
                <span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// spacer container.</span>
      <span class="token keyword">return</span> <span class="token function">createVNode</span><span class="token punctuation">(</span>
        <span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token keyword">class</span><span class="token operator">:</span> classes<span class="token punctuation">,</span>
          <span class="token literal-property property">style</span><span class="token operator">:</span> containerStyle<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        extractedChildren<span class="token punctuation">,</span>
        PatchFlags<span class="token punctuation">.</span><span class="token constant">STYLE</span> <span class="token operator">|</span> PatchFlags<span class="token punctuation">.</span><span class="token constant">CLASS</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> children<span class="token punctuation">.</span>children
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="item-vue">item.vue</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>classes<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">prefixCls</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;el-space&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">classes</span><span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>props<span class="token punctuation">.</span>prefixCls<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">__item</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="usespace-ts">useSpace.ts</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed<span class="token punctuation">,</span> watch<span class="token punctuation">,</span> isVNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isValidComponentSize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/validators&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isNumber<span class="token punctuation">,</span> isArray<span class="token punctuation">,</span> isString <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/util&#39;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span> PropType<span class="token punctuation">,</span> ExtractPropTypes<span class="token punctuation">,</span> CSSProperties<span class="token punctuation">,</span> VNodeChild <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> ComponentSize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/types&#39;</span>

<span class="token keyword">const</span> <span class="token literal-property property">SizeMap</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>ComponentSize<span class="token punctuation">,</span> number<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mini</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token literal-property property">small</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
  <span class="token literal-property property">medium</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
  <span class="token literal-property property">large</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span><span class="token string">&#39;horizontal&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;vertical&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;horizontal&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token keyword">class</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Object<span class="token punctuation">,</span> Array<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Array<span class="token punctuation">,</span> Object<span class="token punctuation">]</span> <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>
      string <span class="token operator">|</span> Array<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span> <span class="token operator">|</span> CSSProperties
    <span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">alignment</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span><span class="token string">&#39;&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">prefixCls</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">spacer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>Object<span class="token punctuation">,</span> String<span class="token punctuation">,</span> Number<span class="token punctuation">]</span> <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>VNodeChild<span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">val</span><span class="token operator">:</span> unknown</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">isVNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isNumber</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isString</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">wrap</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">fillRatio</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Array<span class="token punctuation">,</span> Number<span class="token punctuation">]</span> <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>
      ComponentSize <span class="token operator">|</span> <span class="token punctuation">[</span>number<span class="token punctuation">,</span> number<span class="token punctuation">]</span> <span class="token operator">|</span> number
    <span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">val</span><span class="token operator">:</span> unknown</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token function">isValidComponentSize</span><span class="token punctuation">(</span>val <span class="token keyword">as</span> string<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isNumber</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isArray</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useSpace</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> ExtractPropTypes<span class="token operator">&lt;</span><span class="token keyword">typeof</span> defaultProps<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> classes <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;el-space&#39;</span><span class="token punctuation">,</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">el-space--</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>props<span class="token punctuation">.</span>direction<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    props<span class="token punctuation">.</span>class<span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> horizontalSize <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> verticalSize <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token function">watch</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>props<span class="token punctuation">.</span>size<span class="token punctuation">,</span> props<span class="token punctuation">.</span>wrap<span class="token punctuation">,</span> props<span class="token punctuation">.</span>direction<span class="token punctuation">,</span> props<span class="token punctuation">.</span>fill<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token punctuation">[</span>size <span class="token operator">=</span> <span class="token string">&#39;small&#39;</span><span class="token punctuation">,</span> wrap<span class="token punctuation">,</span> dir<span class="token punctuation">,</span> fill<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// when the specified size have been given</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isArray</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">[</span>h <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> v <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> size
        horizontalSize<span class="token punctuation">.</span>value <span class="token operator">=</span> h
        verticalSize<span class="token punctuation">.</span>value <span class="token operator">=</span> v
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token literal-property property">val</span><span class="token operator">:</span> number
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isNumber</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          val <span class="token operator">=</span> size <span class="token keyword">as</span> number
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          val <span class="token operator">=</span> SizeMap<span class="token punctuation">[</span>size <span class="token keyword">as</span> string<span class="token punctuation">]</span> <span class="token operator">||</span> SizeMap<span class="token punctuation">.</span>small
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>wrap <span class="token operator">||</span> fill<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> dir <span class="token operator">===</span> <span class="token string">&#39;horizontal&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          horizontalSize<span class="token punctuation">.</span>value <span class="token operator">=</span> verticalSize<span class="token punctuation">.</span>value <span class="token operator">=</span> val
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>dir <span class="token operator">===</span> <span class="token string">&#39;horizontal&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            horizontalSize<span class="token punctuation">.</span>value <span class="token operator">=</span> val
            verticalSize<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">0</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            verticalSize<span class="token punctuation">.</span>value <span class="token operator">=</span> val
            horizontalSize<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">0</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>

  <span class="token keyword">const</span> containerStyle <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token literal-property property">wrapKls</span><span class="token operator">:</span> CSSProperties <span class="token operator">=</span>
      props<span class="token punctuation">.</span>wrap <span class="token operator">||</span> props<span class="token punctuation">.</span>fill
        <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token literal-property property">flexWrap</span><span class="token operator">:</span> <span class="token string">&#39;wrap&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">marginBottom</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>verticalSize<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span>
        <span class="token operator">:</span> <span class="token keyword">null</span>
    <span class="token keyword">const</span> <span class="token literal-property property">alignment</span><span class="token operator">:</span> CSSProperties <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">alignItems</span><span class="token operator">:</span> props<span class="token punctuation">.</span>alignment<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>wrapKls<span class="token punctuation">,</span> alignment<span class="token punctuation">,</span> props<span class="token punctuation">.</span>style<span class="token punctuation">]</span> <span class="token keyword">as</span> Array<span class="token operator">&lt;</span>CSSProperties<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> itemStyle <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> itemBaseStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">paddingBottom</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>verticalSize<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">marginRight</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>horizontalSize<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> fillStyle <span class="token operator">=</span> props<span class="token punctuation">.</span>fill
      <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token literal-property property">flexGrow</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">minWidth</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>props<span class="token punctuation">.</span>fillRatio<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span>
      <span class="token operator">:</span> <span class="token keyword">null</span>

    <span class="token keyword">return</span> <span class="token punctuation">[</span>itemBaseStyle<span class="token punctuation">,</span> fillStyle<span class="token punctuation">]</span> <span class="token keyword">as</span> Array<span class="token operator">&lt;</span>CSSProperties<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    classes<span class="token punctuation">,</span>
    containerStyle<span class="token punctuation">,</span>
    itemStyle<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>__VP_STATIC_END__`,10),e=[o];function c(l,u,r,k,i,d){return a(),s("div",null,e)}var g=n(t,[["render",c]]);export{m as __pageData,g as default};
