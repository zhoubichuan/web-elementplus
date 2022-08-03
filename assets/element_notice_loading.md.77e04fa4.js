import{_ as n,e as s,o as a,aB as t}from"./plugin-vue_export-helper.eeeadc7a.js";const g='{"title":"\u4E8C.Loading \u52A0\u8F7D(\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F)","description":"","frontmatter":{"lang":"zh-CN","sidebarDepth":2,"meta":[{"name":"description","content":"\u4E2A\u4EBA\u603B\u7ED3\u7684vuepress\u5B66\u4E60\u6280\u672F\u6587\u6863-\u8BED\u6CD5"},{"name":"keywords","content":"vuepress,\u6700\u65B0\u6280\u672F\u6587\u6863,vuepress\u8BED\u6CD5,markdown\u8BED\u6CD5"}]},"headers":[{"level":2,"title":"index.js","slug":"index-js"},{"level":2,"title":"index.js","slug":"index-js-1"}],"relativePath":"element/notice/loading.md","lastUpdated":1659541246103}',p={},o=t(`<h1 id="\u4E8C-loading-\u52A0\u8F7D-\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F">\u4E8C.Loading \u52A0\u8F7D(\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F)</h1><ul><li>\u7EC4\u4EF6\u4ECB\u7ECD <a href="https://element-plus.gitee.io/#/zh-CN/component/layout" target="_blank" rel="noopener noreferrer">Layout \u5E03\u5C40</a> \u7EC4\u4EF6\u76EE\u5F55</li></ul><div class="language-bash"><pre><code><span class="token comment"># element-ui</span>
\u251C\u2500\u2500 packages         <span class="token comment"># \u653E\u7F6Eelement\u7684\u7EC4\u4EF6\uFF08css\u6837\u5F0F\u653E\u7F6E\u5728\u8FD9\u4E2A\u76EE\u5F55\u4E0Btheme-chalk\u4E0B\uFF09</span>
\u2502   \u251C\u2500\u2500 alert
\u2502   \u2502  \u251C\u2500\u2500 src          <span class="token comment"># alert\u7EC4\u4EF6</span>
\u2502   \u2502  \u2502 \u2514\u2500\u2500 main.vue     <span class="token comment"># \u7EC4\u4EF6\u6CE8\u518C\u7684\u5165\u53E3\u6587\u4EF6</span>
\u2502   \u2502  \u2514\u2500\u2500 index.js     <span class="token comment"># \u7EC4\u4EF6\u6CE8\u518C\u7684\u5165\u53E3\u6587\u4EF6</span>
</code></pre></div><h2 id="index-js">index.js</h2><div class="language-js"><pre><code><span class="token keyword">import</span> directive <span class="token keyword">from</span> <span class="token string">&quot;./src/directive&quot;</span>
<span class="token keyword">import</span> service <span class="token keyword">from</span> <span class="token string">&quot;./src/index&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>directive<span class="token punctuation">)</span>
    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$loading <span class="token operator">=</span> service
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  directive<span class="token punctuation">,</span>
  service<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728 vue \u9879\u76EE\u4E2D\u901A\u8FC7\u5F15\u7528\u8FD9\u4E2A\u7EC4\u4EF6\uFF0C\u7136\u540E\u901A\u8FC7 vue.use \u52A0\u8F7D\u8FD9\u4E2A\u7EC4\u4EF6\uFF0C\u5185\u90E8\u4F1A\u8C03\u7528 install \u65B9\u6CD5\uFF0C\u5C06\u7EC4\u4EF6\u52A0\u8F7D\u5230 Vue \u5B9E\u4F8B\u5185\u90E8</p><h2 id="index-js-1">index.js</h2><div class="language-js"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> loadingVue <span class="token keyword">from</span> <span class="token string">&quot;./loading.vue&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> addClass<span class="token punctuation">,</span> removeClass<span class="token punctuation">,</span> getStyle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;element-ui/src/utils/dom&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> PopupManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;element-ui/src/utils/popup&quot;</span>
<span class="token keyword">import</span> afterLeave <span class="token keyword">from</span> <span class="token string">&quot;element-ui/src/utils/after-leave&quot;</span>
<span class="token keyword">import</span> merge <span class="token keyword">from</span> <span class="token string">&quot;element-ui/src/utils/merge&quot;</span>

<span class="token keyword">const</span> LoadingConstructor <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>loadingVue<span class="token punctuation">)</span>

<span class="token keyword">const</span> defaults <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fullscreen</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lock</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">customClass</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> fullscreenLoading

<span class="token class-name">LoadingConstructor</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>originalPosition <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
<span class="token class-name">LoadingConstructor</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>originalOverflow <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>

<span class="token class-name">LoadingConstructor</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">close</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>fullscreen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fullscreenLoading <span class="token operator">=</span> <span class="token keyword">undefined</span>
  <span class="token punctuation">}</span>
  <span class="token function">afterLeave</span><span class="token punctuation">(</span>
    <span class="token keyword">this</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">_</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fullscreen <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>body <span class="token operator">?</span> document<span class="token punctuation">.</span>body <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>target
      <span class="token function">removeClass</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token string">&quot;el-loading-parent--relative&quot;</span><span class="token punctuation">)</span>
      <span class="token function">removeClass</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token string">&quot;el-loading-parent--hidden&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">.</span>parentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token number">300</span>
  <span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">addStyle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options<span class="token punctuation">,</span> parent<span class="token punctuation">,</span> instance</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> maskStyle <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>fullscreen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    instance<span class="token punctuation">.</span>originalPosition <span class="token operator">=</span> <span class="token function">getStyle</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">,</span> <span class="token string">&quot;position&quot;</span><span class="token punctuation">)</span>
    instance<span class="token punctuation">.</span>originalOverflow <span class="token operator">=</span> <span class="token function">getStyle</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">,</span> <span class="token string">&quot;overflow&quot;</span><span class="token punctuation">)</span>
    maskStyle<span class="token punctuation">.</span>zIndex <span class="token operator">=</span> PopupManager<span class="token punctuation">.</span><span class="token function">nextZIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>body<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    instance<span class="token punctuation">.</span>originalPosition <span class="token operator">=</span> <span class="token function">getStyle</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">,</span> <span class="token string">&quot;position&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token string">&quot;top&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;left&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">property</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> scroll <span class="token operator">=</span> property <span class="token operator">===</span> <span class="token string">&quot;top&quot;</span> <span class="token operator">?</span> <span class="token string">&quot;scrollTop&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;scrollLeft&quot;</span>
      maskStyle<span class="token punctuation">[</span>property<span class="token punctuation">]</span> <span class="token operator">=</span>
        options<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>property<span class="token punctuation">]</span> <span class="token operator">+</span>
        document<span class="token punctuation">.</span>body<span class="token punctuation">[</span>scroll<span class="token punctuation">]</span> <span class="token operator">+</span>
        document<span class="token punctuation">.</span>documentElement<span class="token punctuation">[</span>scroll<span class="token punctuation">]</span> <span class="token operator">+</span>
        <span class="token string">&quot;px&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token string">&quot;height&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;width&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">property</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      maskStyle<span class="token punctuation">[</span>property<span class="token punctuation">]</span> <span class="token operator">=</span>
        options<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>property<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;px&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    instance<span class="token punctuation">.</span>originalPosition <span class="token operator">=</span> <span class="token function">getStyle</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> <span class="token string">&quot;position&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>maskStyle<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">property</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    instance<span class="token punctuation">.</span>$el<span class="token punctuation">.</span>style<span class="token punctuation">[</span>property<span class="token punctuation">]</span> <span class="token operator">=</span> maskStyle<span class="token punctuation">[</span>property<span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">Loading</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$isServer<span class="token punctuation">)</span> <span class="token keyword">return</span>
  options <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> defaults<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> options<span class="token punctuation">.</span>target <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    options<span class="token punctuation">.</span>target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>target<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  options<span class="token punctuation">.</span>target <span class="token operator">=</span> options<span class="token punctuation">.</span>target <span class="token operator">||</span> document<span class="token punctuation">.</span>body
  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>target <span class="token operator">!==</span> document<span class="token punctuation">.</span>body<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    options<span class="token punctuation">.</span>fullscreen <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    options<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>fullscreen <span class="token operator">&amp;&amp;</span> fullscreenLoading<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> fullscreenLoading
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> parent <span class="token operator">=</span> options<span class="token punctuation">.</span>body <span class="token operator">?</span> document<span class="token punctuation">.</span>body <span class="token operator">:</span> options<span class="token punctuation">.</span>target
  <span class="token keyword">let</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LoadingConstructor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> options<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">addStyle</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> parent<span class="token punctuation">,</span> instance<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    instance<span class="token punctuation">.</span>originalPosition <span class="token operator">!==</span> <span class="token string">&quot;absolute&quot;</span> <span class="token operator">&amp;&amp;</span>
    instance<span class="token punctuation">.</span>originalPosition <span class="token operator">!==</span> <span class="token string">&quot;fixed&quot;</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">addClass</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> <span class="token string">&quot;el-loading-parent--relative&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>fullscreen <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>lock<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">addClass</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> <span class="token string">&quot;el-loading-parent--hidden&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  parent<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>$el<span class="token punctuation">)</span>
  Vue<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    instance<span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>fullscreen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fullscreenLoading <span class="token operator">=</span> instance
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> instance
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Loading
</code></pre></div>`,8),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{g as __pageData,m as default};
