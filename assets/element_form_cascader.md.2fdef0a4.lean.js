import{_ as n,e as s,o as a,aB as t}from"./plugin-vue_export-helper.84d1515a.js";const f='{"title":"\u4E00.Cascader","description":"","frontmatter":{"lang":"zh-CN","sidebarDepth":2,"meta":[{"name":"description","content":"\u4E2A\u4EBA\u603B\u7ED3\u7684vuepress\u5B66\u4E60\u6280\u672F\u6587\u6863-\u8BED\u6CD5"},{"name":"keywords","content":"vuepress,\u6700\u65B0\u6280\u672F\u6587\u6863,vuepress\u8BED\u6CD5,markdown\u8BED\u6CD5"}]},"relativePath":"element/form/cascader.md","lastUpdated":1664207565655}',p={},o=t(`__VP_STATIC_START__<h1 id="\u4E00-cascader">\u4E00.Cascader</h1><ul><li><a href="https://element-plus.gitee.io/zh-CN/component/cascader.html" target="_blank" rel="noopener noreferrer">Cascader \u7EA7\u8054\u9009\u62E9\u5668</a></li></ul><blockquote><ul><li>element-plus <blockquote><ul><li>packages <blockquote><ul><li>components <blockquote><ul><li>cascader <code>\u3010Cascader \u7EA7\u8054\u9009\u62E9\u5668\u3011</code><blockquote><ul><li><p>__tests__</p><blockquote><ul><li><p><code>cascader.spec.ts</code> ::: details \u6D4B\u8BD5\u7528\u4F8B</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> nextTick <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vue/test-utils&quot;</span>
<span class="token keyword">import</span> Cascader <span class="token keyword">from</span> <span class="token string">&quot;../src/index.vue&quot;</span>

<span class="token keyword">const</span> <span class="token constant">OPTIONS</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token string">&quot;zhejiang&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;Zhejiang&quot;</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">&quot;hangzhou&quot;</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">&quot;Hangzhou&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">&quot;ningbo&quot;</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">&quot;Ningbo&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> <span class="token constant">AXIOM</span> <span class="token operator">=</span> <span class="token string">&quot;Rem is the best girl&quot;</span>

<span class="token keyword">const</span> <span class="token constant">TRIGGER</span> <span class="token operator">=</span> <span class="token string">&quot;.el-cascader&quot;</span>
<span class="token keyword">const</span> <span class="token constant">DROPDOWN</span> <span class="token operator">=</span> <span class="token string">&quot;.el-cascader__dropdown&quot;</span>
<span class="token keyword">const</span> <span class="token constant">NODE</span> <span class="token operator">=</span> <span class="token string">&quot;.el-cascader-node&quot;</span>
<span class="token keyword">const</span> <span class="token constant">ARROW</span> <span class="token operator">=</span> <span class="token string">&quot;.el-icon-arrow-down&quot;</span>
<span class="token keyword">const</span> <span class="token constant">CLEAR_BTN</span> <span class="token operator">=</span> <span class="token string">&quot;.el-icon-circle-close&quot;</span>
<span class="token keyword">const</span> <span class="token constant">TAG</span> <span class="token operator">=</span> <span class="token string">&quot;.el-tag&quot;</span>
<span class="token keyword">const</span> <span class="token constant">SUGGESTION_ITEM</span> <span class="token operator">=</span> <span class="token string">&quot;.el-cascader__suggestion-item&quot;</span>
<span class="token keyword">const</span> <span class="token constant">CHECK_ICON</span> <span class="token operator">=</span> <span class="token string">&quot;.el-icon-check&quot;</span>

<span class="token keyword">const</span> _mount<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token function-variable function">mount</span> <span class="token operator">=</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token function">mount</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
      components<span class="token operator">:</span> <span class="token punctuation">{</span>
        Cascader<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token operator">...</span>options<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      attachTo<span class="token operator">:</span> <span class="token string">&quot;body&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>

<span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&quot;Cascader.vue&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;toggle popper visible&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> handleVisibleChange <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">_mount</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
       &lt;cascader @visible-change=&quot;handleVisibleChange&quot; /&gt;
     </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      methods<span class="token operator">:</span> <span class="token punctuation">{</span>
        handleVisibleChange<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> trigger <span class="token operator">=</span> wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token constant">TRIGGER</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> dropdown <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>
      <span class="token constant">DROPDOWN</span>
    <span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLDivElement

    <span class="token keyword">await</span> trigger<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>dropdown<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display<span class="token punctuation">)</span><span class="token punctuation">.</span>not<span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&quot;none&quot;</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>handleVisibleChange<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeCalledWith</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> trigger<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>handleVisibleChange<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeCalledWith</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> trigger<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">)</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>handleVisibleChange<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeCalledWith</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;expand and check&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> handleChange <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> handleExpandChange <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">_mount</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
       &lt;cascader
         v-model=&quot;value&quot;
         :options=&quot;options&quot;
         @change=&quot;handleChange&quot;
         @expand-change=&quot;handleExpandChange&quot;
       /&gt;
     </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          options<span class="token operator">:</span> <span class="token constant">OPTIONS</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      methods<span class="token operator">:</span> <span class="token punctuation">{</span>
        handleChange<span class="token punctuation">,</span>
        handleExpandChange<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> trigger <span class="token operator">=</span> wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token constant">TRIGGER</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> dropdown <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>
      <span class="token constant">DROPDOWN</span>
    <span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLDivElement
    <span class="token keyword">const</span> vm <span class="token operator">=</span> wrapper<span class="token punctuation">.</span>vm <span class="token keyword">as</span> <span class="token builtin">any</span>

    <span class="token keyword">await</span> trigger<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">;</span><span class="token punctuation">(</span>dropdown<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>
      <span class="token constant">NODE</span>
    <span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLElement<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>handleExpandChange<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeCalledWith</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token string">&quot;zhejiang&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">;</span><span class="token punctuation">(</span>dropdown<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span>
      <span class="token constant">NODE</span>
    <span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token keyword">as</span> HTMLElement<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>handleChange<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeCalledWith</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token string">&quot;zhejiang&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;hangzhou&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;zhejiang&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hangzhou&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span>
      <span class="token string">&quot;Zhejiang / Hangzhou&quot;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;with default value&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">mount</span><span class="token punctuation">(</span>Cascader<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      props<span class="token operator">:</span> <span class="token punctuation">{</span>
        options<span class="token operator">:</span> <span class="token constant">OPTIONS</span><span class="token punctuation">,</span>
        modelValue<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;zhejiang&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hangzhou&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span>
      <span class="token string">&quot;Zhejiang / Hangzhou&quot;</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">await</span> wrapper<span class="token punctuation">.</span><span class="token function">setProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      modelValue<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;zhejiang&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ningbo&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span>
      <span class="token string">&quot;Zhejiang / Ningbo&quot;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;options change&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">mount</span><span class="token punctuation">(</span>Cascader<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      props<span class="token operator">:</span> <span class="token punctuation">{</span>
        options<span class="token operator">:</span> <span class="token constant">OPTIONS</span><span class="token punctuation">,</span>
        modelValue<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;zhejiang&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hangzhou&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> wrapper<span class="token punctuation">.</span><span class="token function">setProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span> options<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;disabled&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> handleVisibleChange <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">_mount</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
       &lt;cascader disabled @visible-change=&quot;handleVisibleChange&quot; /&gt;
     </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      methods<span class="token operator">:</span> <span class="token punctuation">{</span>
        handleVisibleChange<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token constant">TRIGGER</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>handleVisibleChange<span class="token punctuation">)</span><span class="token punctuation">.</span>not<span class="token punctuation">.</span><span class="token function">toBeCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>
      wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;input[disabled]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;custom placeholder&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">mount</span><span class="token punctuation">(</span>Cascader<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      props<span class="token operator">:</span> <span class="token punctuation">{</span>
        placeholder<span class="token operator">:</span> <span class="token constant">AXIOM</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>
      wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>placeholder
    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token constant">AXIOM</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;clearable&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">mount</span><span class="token punctuation">(</span>Cascader<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      props<span class="token operator">:</span> <span class="token punctuation">{</span>
        options<span class="token operator">:</span> <span class="token constant">OPTIONS</span><span class="token punctuation">,</span>
        clearable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        modelValue<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;zhejiang&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hangzhou&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> trigger <span class="token operator">=</span> wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token constant">TRIGGER</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token constant">ARROW</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> trigger<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&quot;mouseenter&quot;</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token constant">ARROW</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token constant">CLEAR_BTN</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span>vm <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getCheckedNodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length
    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> trigger<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&quot;mouseleave&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> trigger<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&quot;mouseenter&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token constant">CLEAR_BTN</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span>
      <span class="token boolean">false</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;show last level label&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">mount</span><span class="token punctuation">(</span>Cascader<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      props<span class="token operator">:</span> <span class="token punctuation">{</span>
        options<span class="token operator">:</span> <span class="token constant">OPTIONS</span><span class="token punctuation">,</span>
        showAllLevels<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        modelValue<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;zhejiang&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hangzhou&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span>
      <span class="token string">&quot;Hangzhou&quot;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;multiple mode&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">_mount</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
       &lt;cascader
         v-model=&quot;value&quot;
         :options=&quot;options&quot;
         :props=&quot;props&quot;
       /&gt;
     </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          options<span class="token operator">:</span> <span class="token constant">OPTIONS</span><span class="token punctuation">,</span>
          props<span class="token operator">:</span> <span class="token punctuation">{</span> multiple<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span><span class="token string">&quot;zhejiang&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hangzhou&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string">&quot;zhejiang&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ningbo&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> tags <span class="token operator">=</span> wrapper<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token constant">TAG</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>firstTag<span class="token punctuation">,</span> secondTag<span class="token punctuation">]</span> <span class="token operator">=</span> tags
    <span class="token function">expect</span><span class="token punctuation">(</span>tags<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>firstTag<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&quot;Zhejiang / Hangzhou&quot;</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>secondTag<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&quot;Zhejiang / Ningbo&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> firstTag
      <span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;.el-tag__close&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token constant">TAG</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token punctuation">[</span><span class="token string">&quot;zhejiang&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ningbo&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;collapse tags&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">mount</span><span class="token punctuation">(</span>Cascader<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      props<span class="token operator">:</span> <span class="token punctuation">{</span>
        options<span class="token operator">:</span> <span class="token constant">OPTIONS</span><span class="token punctuation">,</span>
        props<span class="token operator">:</span> <span class="token punctuation">{</span> multiple<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        collapseTags<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        modelValue<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">[</span><span class="token string">&quot;zhejiang&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hangzhou&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">[</span><span class="token string">&quot;zhejiang&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ningbo&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>firstTag<span class="token punctuation">,</span> secondTag<span class="token punctuation">]</span> <span class="token operator">=</span> wrapper<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token constant">TAG</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>firstTag<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&quot;Zhejiang / Hangzhou&quot;</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>secondTag<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&quot;+ 1&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;filterable&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">_mount</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
       &lt;cascader
         v-model=&quot;value&quot;
         :options=&quot;options&quot;
         filterable
       /&gt;
     </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          options<span class="token operator">:</span> <span class="token constant">OPTIONS</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> input <span class="token operator">=</span> wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> dropdown <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token constant">DROPDOWN</span><span class="token punctuation">)</span>
    input<span class="token punctuation">.</span>element<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&quot;Ha&quot;</span>
    <span class="token keyword">await</span> input<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> suggestions <span class="token operator">=</span> dropdown<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span>
      <span class="token constant">SUGGESTION_ITEM</span>
    <span class="token punctuation">)</span> <span class="token keyword">as</span> NodeListOf<span class="token operator">&lt;</span>HTMLElement<span class="token operator">&gt;</span>
    <span class="token keyword">const</span> hzSuggestion <span class="token operator">=</span> suggestions<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>suggestions<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>hzSuggestion<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span>
      <span class="token string">&quot;Zhejiang / Hangzhou&quot;</span>
    <span class="token punctuation">)</span>
    hzSuggestion<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>
      hzSuggestion<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token constant">CHECK_ICON</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token string">&quot;zhejiang&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;hangzhou&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    hzSuggestion<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token string">&quot;zhejiang&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;hangzhou&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;filterable in multiple mode&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">_mount</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
       &lt;cascader
         v-model=&quot;value&quot;
         :options=&quot;options&quot;
         :props=&quot;props&quot;
         filterable
       /&gt;
     </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          options<span class="token operator">:</span> <span class="token constant">OPTIONS</span><span class="token punctuation">,</span>
          props<span class="token operator">:</span> <span class="token punctuation">{</span> multiple<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> input <span class="token operator">=</span> wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>
      <span class="token string">&quot;.el-cascader__search-input&quot;</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">const</span> dropdown <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token constant">DROPDOWN</span><span class="token punctuation">)</span>
    <span class="token punctuation">;</span><span class="token punctuation">(</span>input<span class="token punctuation">.</span>element <span class="token keyword">as</span> HTMLInputElement<span class="token punctuation">)</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&quot;Ha&quot;</span>
    <span class="token keyword">await</span> input<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> hzSuggestion <span class="token operator">=</span> dropdown<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>
      <span class="token constant">SUGGESTION_ITEM</span>
    <span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLElement
    hzSuggestion<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token punctuation">[</span><span class="token string">&quot;zhejiang&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hangzhou&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    hzSuggestion<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;filter method&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> filterMethod <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> keyword<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> text<span class="token punctuation">,</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> node
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        text<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>keyword<span class="token punctuation">)</span> <span class="token operator">||</span>
        value<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>keyword<span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">mount</span><span class="token punctuation">(</span>Cascader<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      props<span class="token operator">:</span> <span class="token punctuation">{</span>
        options<span class="token operator">:</span> <span class="token constant">OPTIONS</span><span class="token punctuation">,</span>
        filterable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        filterMethod<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> input <span class="token operator">=</span> wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> dropdown <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token constant">DROPDOWN</span><span class="token punctuation">)</span>
    input<span class="token punctuation">.</span>element<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&quot;ha&quot;</span>
    <span class="token keyword">await</span> input<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> hzSuggestion <span class="token operator">=</span> dropdown<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>
      <span class="token constant">SUGGESTION_ITEM</span>
    <span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLElement
    <span class="token function">expect</span><span class="token punctuation">(</span>filterMethod<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>hzSuggestion<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span>
      <span class="token string">&quot;Zhejiang / Hangzhou&quot;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>:::</p></li></ul></blockquote></li><li><p>src</p><blockquote><ul><li><p><code>index.vue</code> ::: details \u4EE3\u7801</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-popper</span>
    <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>popper<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>popperVisible<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">manual-mode</span>
    <span class="token attr-name">:append-to-body</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>popperAppendToBody<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom-start<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:popper-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>
      \`el-cascader__dropdown \${popperClass}\`
    <span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:popper-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>popperOptions<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:fallback-placements</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
      &#39;bottom-start&#39;,
      &#39;top-start&#39;,
      &#39;right&#39;,
      &#39;left&#39;,
    ]<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:stop-popper-mouse-event</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">transition</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-zoom-in-top<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:gpu-acceleration</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Effect.LIGHT<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">pure</span>
    <span class="token attr-name">@after-leave</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hideSuggestionPanel<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#trigger</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
        <span class="token attr-name"><span class="token namespace">v-clickoutside:</span>[popperPaneRef]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>
          () =&gt; togglePopperVisible(false)
        <span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
          &#39;el-cascader&#39;,
          realSize &amp;&amp; \`el-cascader--\${realSize}\`,
          { &#39;is-disabled&#39;: isDisabled },
        ]<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>
          () =&gt;
            togglePopperVisible(
              readonly ? undefined : true
            )
        <span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@keydown</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleKeyDown<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@mouseenter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputHover = true<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@mouseleave</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputHover = false<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span>
          <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>input<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">v-model.trim</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputValue<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputPlaceholder<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:readonly</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>readonly<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isDisabled<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:validate-event</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>realSize<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ &#39;is-focus&#39;: popperVisible }<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">@focus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(e) =&gt; $emit(&#39;focus&#39;, e)<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">@blur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(e) =&gt; $emit(&#39;blur&#39;, e)<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleInput<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#suffix</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span>
              <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clearBtnVisible<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clear<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-input__icon el-icon-circle-close<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">@click.stop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClear<span class="token punctuation">&quot;</span></span>
            <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span>
              <span class="token attr-name">v-else</span>
              <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>arrow-down<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
                &#39;el-input__icon&#39;,
                &#39;el-icon-arrow-down&#39;,
                popperVisible &amp;&amp; &#39;is-reverse&#39;,
              ]<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">@click.stop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>togglePopperVisible()<span class="token punctuation">&quot;</span></span>
            <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-input</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
          <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>multiple<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tagWrapper<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-cascader__tags<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tag</span>
            <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tag in presentTags<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tag.key<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tagSize<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:hit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tag.hitState<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:closable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tag.closable<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">disable-transitions</span>
            <span class="token attr-name">@close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>deleteTag(tag)<span class="token punctuation">&quot;</span></span>
          <span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ tag.text }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tag</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
            <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>filterable &amp;&amp; !isDisabled<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">v-model.trim</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>searchInputValue<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-cascader__search-input<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>
              presentText ? &#39;&#39; : inputPlaceholder
            <span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>
              (e) =&gt; handleInput(searchInputValue, e)
            <span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@click.stop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>togglePopperVisible(true)<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@keydown.delete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleDelete<span class="token punctuation">&quot;</span></span>
          <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-cascader-panel</span>
        <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>!filtering<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkedValue<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:props</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>props<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:render-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$slots.default<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@expand-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleExpandChange<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>togglePopperVisible(false)<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-scrollbar</span>
        <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>filterable<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>filtering<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>suggestionPanel<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ul<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-cascader__suggestion-panel<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">view-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-cascader__suggestion-list<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>suggestions.length<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span>
            <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in suggestions<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.uid<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
              &#39;el-cascader__suggestion-item&#39;,
              item.checked &amp;&amp; &#39;is-checked&#39;,
            ]<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>-1<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSuggestionClick(item)<span class="token punctuation">&quot;</span></span>
          <span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ item.text }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span>
              <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.checked<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-icon-check<span class="token punctuation">&quot;</span></span>
            <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">v-else</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>empty<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-cascader__empty-text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            {{ t(&quot;el.cascader.noMatch&quot;) }}
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-scrollbar</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-popper</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  computed<span class="token punctuation">,</span>
  defineComponent<span class="token punctuation">,</span>
  inject<span class="token punctuation">,</span>
  nextTick<span class="token punctuation">,</span>
  onMounted<span class="token punctuation">,</span>
  onBeforeUnmount<span class="token punctuation">,</span>
  Ref<span class="token punctuation">,</span>
  ref<span class="token punctuation">,</span>
  watch<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isPromise <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/shared&#39;</span>
<span class="token keyword">import</span> debounce <span class="token keyword">from</span> <span class="token string">&#39;lodash/debounce&#39;</span>

<span class="token keyword">import</span> ElCascaderPanel<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  CommonProps<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/components/cascader-panel&#39;</span>
<span class="token keyword">import</span> ElInput <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/components/input&#39;</span>
<span class="token keyword">import</span> ElPopper <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/components/popper&#39;</span>
<span class="token keyword">import</span> ElScrollbar <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/components/scrollbar&#39;</span>
<span class="token keyword">import</span> ElTag <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/components/tag&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> elFormKey<span class="token punctuation">,</span> elFormItemKey <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/tokens&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> ClickOutside <span class="token keyword">as</span> Clickoutside <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/directives&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useLocaleInject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/hooks&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">EVENT_CODE</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/aria&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">UPDATE_MODEL_EVENT</span><span class="token punctuation">,</span> <span class="token constant">CHANGE_EVENT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/constants&#39;</span>
<span class="token keyword">import</span> isServer <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/isServer&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useGlobalConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/util&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  addResizeListener<span class="token punctuation">,</span>
  removeResizeListener<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/resize-event&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isValidComponentSize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/validators&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Effect<span class="token punctuation">,</span> Options <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/components/popper&#39;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span> ComputedRef<span class="token punctuation">,</span> PropType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> ElFormContext<span class="token punctuation">,</span> ElFormItemContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/tokens&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span>
  CascaderValue<span class="token punctuation">,</span>
  CascaderNode<span class="token punctuation">,</span>
  Tag<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/components/cascader-panel&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> ComponentSize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/types&#39;</span>

<span class="token keyword">const</span> <span class="token constant">DEFAULT_INPUT_HEIGHT</span> <span class="token operator">=</span> <span class="token number">40</span>

<span class="token keyword">const</span> <span class="token constant">INPUT_HEIGHT_MAP</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">medium</span><span class="token operator">:</span> <span class="token number">36</span><span class="token punctuation">,</span>
  <span class="token literal-property property">small</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mini</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token literal-property property">popperOptions</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Options<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">modifiers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;arrowPosition&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">phase</span><span class="token operator">:</span> <span class="token string">&#39;main&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> state <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> modifiersData<span class="token punctuation">,</span> placement <span class="token punctuation">}</span> <span class="token operator">=</span> state
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;right&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>placement<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
        modifiersData<span class="token punctuation">.</span>arrow<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">35</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">requires</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;arrow&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ElCascader&#39;</span><span class="token punctuation">,</span>

  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ElCascaderPanel<span class="token punctuation">,</span>
    ElInput<span class="token punctuation">,</span>
    ElPopper<span class="token punctuation">,</span>
    ElScrollbar<span class="token punctuation">,</span>
    ElTag<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Clickoutside<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>CommonProps<span class="token punctuation">,</span>
    <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>ComponentSize<span class="token operator">&gt;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">validator</span><span class="token operator">:</span> isValidComponentSize<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">disabled</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">clearable</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">filterable</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">filterMethod</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Function <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>
        <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">node</span><span class="token operator">:</span> CascaderNode<span class="token punctuation">,</span> <span class="token literal-property property">keyword</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> boolean
      <span class="token operator">&gt;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">node</span><span class="token operator">:</span> CascaderNode<span class="token punctuation">,</span> <span class="token literal-property property">keyword</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
        node<span class="token punctuation">.</span>text<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>keyword<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">separator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39; / &#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">showAllLevels</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">collapseTags</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">debounce</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">beforeFilter</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Function <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> boolean <span class="token operator">|</span> Promise<span class="token operator">&lt;</span>any<span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">popperClass</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">popperAppendToBody</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token constant">UPDATE_MODEL_EVENT</span><span class="token punctuation">,</span>
    <span class="token constant">CHANGE_EVENT</span><span class="token punctuation">,</span>
    <span class="token string">&#39;focus&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;blur&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;visible-change&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;expand-change&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;remove-tag&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> emit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> inputInitialHeight <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> pressDeleteCount <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useLocaleInject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> $<span class="token constant">ELEMENT</span> <span class="token operator">=</span> <span class="token function">useGlobalConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> elForm <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>elFormKey<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> ElFormContext<span class="token punctuation">)</span>
    <span class="token keyword">const</span> elFormItem <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>elFormItemKey<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> ElFormItemContext<span class="token punctuation">)</span>

    <span class="token keyword">const</span> popper <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> tagWrapper <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> panel <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> suggestionPanel <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> popperVisible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> inputHover <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> filtering <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> inputValue <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> searchInputValue <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token literal-property property">presentTags</span><span class="token operator">:</span> Ref<span class="token operator">&lt;</span>Tag<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token literal-property property">suggestions</span><span class="token operator">:</span> Ref<span class="token operator">&lt;</span>CascaderNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> isDisabled <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>disabled <span class="token operator">||</span> elForm<span class="token punctuation">.</span>disabled<span class="token punctuation">)</span>
    <span class="token keyword">const</span> inputPlaceholder <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>placeholder <span class="token operator">||</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;el.cascader.placeholder&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token literal-property property">realSize</span><span class="token operator">:</span> ComputedRef<span class="token operator">&lt;</span>ComponentSize<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>size <span class="token operator">||</span> elFormItem<span class="token punctuation">.</span>size <span class="token operator">||</span> $<span class="token constant">ELEMENT</span><span class="token punctuation">.</span>size
    <span class="token punctuation">)</span>
    <span class="token keyword">const</span> tagSize <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token punctuation">[</span><span class="token string">&#39;small&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mini&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>realSize<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">&#39;mini&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;small&#39;</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">const</span> multiple <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span><span class="token operator">!</span>props<span class="token punctuation">.</span>props<span class="token punctuation">.</span>multiple<span class="token punctuation">)</span>
    <span class="token keyword">const</span> readonly <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span>props<span class="token punctuation">.</span>filterable <span class="token operator">||</span> multiple<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token keyword">const</span> searchKeyword <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      multiple<span class="token punctuation">.</span>value <span class="token operator">?</span> searchInputValue<span class="token punctuation">.</span>value <span class="token operator">:</span> inputValue<span class="token punctuation">.</span>value
    <span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token literal-property property">checkedNodes</span><span class="token operator">:</span> ComputedRef<span class="token operator">&lt;</span>CascaderNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> panel<span class="token punctuation">.</span>value<span class="token operator">?.</span>checkedNodes <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">const</span> clearBtnVisible <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        <span class="token operator">!</span>props<span class="token punctuation">.</span>clearable <span class="token operator">||</span>
        isDisabled<span class="token punctuation">.</span>value <span class="token operator">||</span>
        filtering<span class="token punctuation">.</span>value <span class="token operator">||</span>
        <span class="token operator">!</span>inputHover<span class="token punctuation">.</span>value
      <span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>

      <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span>checkedNodes<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> presentText <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> showAllLevels<span class="token punctuation">,</span> separator <span class="token punctuation">}</span> <span class="token operator">=</span> props
      <span class="token keyword">const</span> nodes <span class="token operator">=</span> checkedNodes<span class="token punctuation">.</span>value
      <span class="token keyword">return</span> nodes<span class="token punctuation">.</span>length
        <span class="token operator">?</span> multiple<span class="token punctuation">.</span>value
          <span class="token operator">?</span> <span class="token string">&#39; &#39;</span>
          <span class="token operator">:</span> nodes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">calcText</span><span class="token punctuation">(</span>showAllLevels<span class="token punctuation">,</span> separator<span class="token punctuation">)</span>
        <span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> checkedValue <span class="token operator">=</span> computed<span class="token operator">&lt;</span>CascaderValue<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> props<span class="token punctuation">.</span>modelValue
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">set</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">emit</span><span class="token punctuation">(</span><span class="token constant">UPDATE_MODEL_EVENT</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>
        <span class="token function">emit</span><span class="token punctuation">(</span><span class="token constant">CHANGE_EVENT</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>
        elFormItem<span class="token punctuation">.</span>formItemMitt<span class="token operator">?.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;el.form.change&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>val<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> popperPaneRef <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> popper<span class="token punctuation">.</span>value<span class="token operator">?.</span>popperRef
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">togglePopperVisible</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">visible<span class="token operator">?</span><span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>isDisabled<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span>

      visible <span class="token operator">=</span> visible <span class="token operator">??</span> <span class="token operator">!</span>popperVisible<span class="token punctuation">.</span>value

      <span class="token keyword">if</span> <span class="token punctuation">(</span>visible <span class="token operator">!==</span> popperVisible<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        popperVisible<span class="token punctuation">.</span>value <span class="token operator">=</span> visible
        input<span class="token punctuation">.</span>value<span class="token punctuation">.</span>input<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;aria-expanded&#39;</span><span class="token punctuation">,</span> visible<span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>visible<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">updatePopperPosition</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token function">nextTick</span><span class="token punctuation">(</span>panel<span class="token punctuation">.</span>value<span class="token punctuation">.</span>scrollToExpandingNode<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>filterable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> presentText
          inputValue<span class="token punctuation">.</span>value <span class="token operator">=</span> value
          searchInputValue<span class="token punctuation">.</span>value <span class="token operator">=</span> value
        <span class="token punctuation">}</span>

        <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;visible-change&#39;</span><span class="token punctuation">,</span> visible<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">updatePopperPosition</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">nextTick</span><span class="token punctuation">(</span>popper<span class="token punctuation">.</span>value<span class="token punctuation">.</span>update<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">hideSuggestionPanel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      filtering<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> genTag <span class="token operator">=</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> CascaderNode<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">Tag</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> showAllLevels<span class="token punctuation">,</span> separator <span class="token punctuation">}</span> <span class="token operator">=</span> props
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> node<span class="token punctuation">.</span>uid<span class="token punctuation">,</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> node<span class="token punctuation">.</span><span class="token function">calcText</span><span class="token punctuation">(</span>showAllLevels<span class="token punctuation">,</span> separator<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">hitState</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">closable</span><span class="token operator">:</span> <span class="token operator">!</span>isDisabled<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>node<span class="token punctuation">.</span>isDisabled<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">deleteTag</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">tag</span><span class="token operator">:</span> Tag</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> node <span class="token punctuation">}</span> <span class="token operator">=</span> tag
      node<span class="token punctuation">.</span><span class="token function">doCheck</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
      panel<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">calculateCheckedValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;remove-tag&#39;</span><span class="token punctuation">,</span> node<span class="token punctuation">.</span>valueByOption<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">calculatePresentTags</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>multiple<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span>

      <span class="token keyword">const</span> nodes <span class="token operator">=</span> checkedNodes<span class="token punctuation">.</span>value
      <span class="token keyword">const</span> <span class="token literal-property property">tags</span><span class="token operator">:</span> Tag<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>nodes<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">[</span>first<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">]</span> <span class="token operator">=</span> nodes
        <span class="token keyword">const</span> restCount <span class="token operator">=</span> rest<span class="token punctuation">.</span>length

        tags<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">genTag</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>restCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>collapseTags<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tags<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">+ </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>restCount<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
              <span class="token literal-property property">closable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            rest<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> tags<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">genTag</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      presentTags<span class="token punctuation">.</span>value <span class="token operator">=</span> tags
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">calculateSuggestions</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> filterMethod<span class="token punctuation">,</span> showAllLevels<span class="token punctuation">,</span> separator <span class="token punctuation">}</span> <span class="token operator">=</span> props
      <span class="token keyword">const</span> res <span class="token operator">=</span> panel<span class="token punctuation">.</span>value
        <span class="token punctuation">.</span><span class="token function">getFlattedNodes</span><span class="token punctuation">(</span><span class="token operator">!</span>props<span class="token punctuation">.</span>props<span class="token punctuation">.</span>checkStrictly<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>isDisabled<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
          node<span class="token punctuation">.</span><span class="token function">calcText</span><span class="token punctuation">(</span>showAllLevels<span class="token punctuation">,</span> separator<span class="token punctuation">)</span>
          <span class="token keyword">return</span> <span class="token function">filterMethod</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> searchKeyword<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>multiple<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        presentTags<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          tag<span class="token punctuation">.</span>hitState <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      filtering<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
      suggestions<span class="token punctuation">.</span>value <span class="token operator">=</span> res
      <span class="token function">updatePopperPosition</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">focusFirstNode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> firstNode <span class="token operator">=</span> <span class="token keyword">null</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>filtering<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> suggestionPanel<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        firstNode <span class="token operator">=</span> suggestionPanel<span class="token punctuation">.</span>value<span class="token punctuation">.</span>$el<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>
          <span class="token string">&#39;.el-cascader__suggestion-item&#39;</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        firstNode <span class="token operator">=</span> panel<span class="token punctuation">.</span>value<span class="token operator">?.</span>$el<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>
          <span class="token string">&#39;.el-cascader-node[tabindex=&quot;-1&quot;]&#39;</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>firstNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        firstNode<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token operator">!</span>filtering<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> firstNode<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">updateStyle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> inputInner <span class="token operator">=</span> input<span class="token punctuation">.</span>value<span class="token punctuation">.</span>input
      <span class="token keyword">const</span> tagWrapperEl <span class="token operator">=</span> tagWrapper<span class="token punctuation">.</span>value
      <span class="token keyword">const</span> suggestionPanelEl <span class="token operator">=</span> suggestionPanel<span class="token punctuation">.</span>value<span class="token operator">?.</span>$el

      <span class="token keyword">if</span> <span class="token punctuation">(</span>isServer <span class="token operator">||</span> <span class="token operator">!</span>inputInner<span class="token punctuation">)</span> <span class="token keyword">return</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>suggestionPanelEl<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> suggestionList <span class="token operator">=</span> suggestionPanelEl<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>
          <span class="token string">&#39;.el-cascader__suggestion-list&#39;</span>
        <span class="token punctuation">)</span>
        suggestionList<span class="token punctuation">.</span>style<span class="token punctuation">.</span>minWidth <span class="token operator">=</span> inputInner<span class="token punctuation">.</span>offsetWidth <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>tagWrapperEl<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> offsetHeight <span class="token punctuation">}</span> <span class="token operator">=</span> tagWrapperEl
        <span class="token keyword">const</span> height <span class="token operator">=</span>
          presentTags<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span>
            <span class="token operator">?</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>offsetHeight <span class="token operator">+</span> <span class="token number">6</span><span class="token punctuation">,</span> inputInitialHeight<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span>
            <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>inputInitialHeight<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span>
        inputInner<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> height
        <span class="token function">updatePopperPosition</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">getCheckedNodes</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">leafOnly</span><span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> panel<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">getCheckedNodes</span><span class="token punctuation">(</span>leafOnly<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleExpandChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> CascaderValue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">updatePopperPosition</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;expand-change&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleKeyDown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> KeyboardEvent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>code<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token constant">EVENT_CODE</span><span class="token punctuation">.</span>enter<span class="token operator">:</span>
          <span class="token function">togglePopperVisible</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token constant">EVENT_CODE</span><span class="token punctuation">.</span>down<span class="token operator">:</span>
          <span class="token function">togglePopperVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
          <span class="token function">nextTick</span><span class="token punctuation">(</span>focusFirstNode<span class="token punctuation">)</span>
          e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token constant">EVENT_CODE</span><span class="token punctuation">.</span>esc<span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token constant">EVENT_CODE</span><span class="token punctuation">.</span>tab<span class="token operator">:</span>
          <span class="token function">togglePopperVisible</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
          <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleClear</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      panel<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">clearCheckedNodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">togglePopperVisible</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleSuggestionClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">node</span><span class="token operator">:</span> CascaderNode</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> checked <span class="token punctuation">}</span> <span class="token operator">=</span> node

      <span class="token keyword">if</span> <span class="token punctuation">(</span>multiple<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        panel<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">handleCheckChange</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> <span class="token operator">!</span>checked<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token operator">!</span>checked <span class="token operator">&amp;&amp;</span> panel<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">handleCheckChange</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
        <span class="token function">togglePopperVisible</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleDelete</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> tags <span class="token operator">=</span> presentTags<span class="token punctuation">.</span>value
      <span class="token keyword">const</span> lastTag <span class="token operator">=</span> tags<span class="token punctuation">[</span>tags<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
      pressDeleteCount <span class="token operator">=</span> searchInputValue<span class="token punctuation">.</span>value <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> pressDeleteCount <span class="token operator">+</span> <span class="token number">1</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>lastTag <span class="token operator">||</span> <span class="token operator">!</span>pressDeleteCount<span class="token punctuation">)</span> <span class="token keyword">return</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>lastTag<span class="token punctuation">.</span>hitState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">deleteTag</span><span class="token punctuation">(</span>lastTag<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        lastTag<span class="token punctuation">.</span>hitState <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> handleFilter <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> searchKeyword

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span>

      <span class="token keyword">const</span> passed <span class="token operator">=</span> props<span class="token punctuation">.</span><span class="token function">beforeFilter</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPromise</span><span class="token punctuation">(</span>passed<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        passed<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>calculateSuggestions<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">/* prevent log error */</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>passed <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">calculateSuggestions</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">hideSuggestionPanel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>debounce<span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleInput</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">val</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">e</span><span class="token operator">:</span> KeyboardEvent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token operator">!</span>popperVisible<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> <span class="token function">togglePopperVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token operator">?.</span>isComposing<span class="token punctuation">)</span> <span class="token keyword">return</span>

      val <span class="token operator">?</span> <span class="token function">handleFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">hideSuggestionPanel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">watch</span><span class="token punctuation">(</span>filtering<span class="token punctuation">,</span> updatePopperPosition<span class="token punctuation">)</span>

    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span>checkedNodes<span class="token punctuation">,</span> isDisabled<span class="token punctuation">]</span><span class="token punctuation">,</span> calculatePresentTags<span class="token punctuation">)</span>

    <span class="token function">watch</span><span class="token punctuation">(</span>presentTags<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">nextTick</span><span class="token punctuation">(</span>updateStyle<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token function">watch</span><span class="token punctuation">(</span>presentText<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>inputValue<span class="token punctuation">.</span>value <span class="token operator">=</span> val<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> inputEl <span class="token operator">=</span> input<span class="token punctuation">.</span>value<span class="token punctuation">.</span>$el
      inputInitialHeight <span class="token operator">=</span>
        inputEl<span class="token operator">?.</span>offsetHeight <span class="token operator">||</span>
        <span class="token constant">INPUT_HEIGHT_MAP</span><span class="token punctuation">[</span>realSize<span class="token punctuation">.</span>value<span class="token punctuation">]</span> <span class="token operator">||</span>
        <span class="token constant">DEFAULT_INPUT_HEIGHT</span>
      <span class="token function">addResizeListener</span><span class="token punctuation">(</span>inputEl<span class="token punctuation">,</span> updateStyle<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">removeResizeListener</span><span class="token punctuation">(</span>input<span class="token punctuation">.</span>value<span class="token punctuation">.</span>$el<span class="token punctuation">,</span> updateStyle<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      Effect<span class="token punctuation">,</span>
      popperOptions<span class="token punctuation">,</span>
      popper<span class="token punctuation">,</span>
      popperPaneRef<span class="token punctuation">,</span>
      input<span class="token punctuation">,</span>
      tagWrapper<span class="token punctuation">,</span>
      panel<span class="token punctuation">,</span>
      suggestionPanel<span class="token punctuation">,</span>
      popperVisible<span class="token punctuation">,</span>
      inputHover<span class="token punctuation">,</span>
      inputPlaceholder<span class="token punctuation">,</span>
      filtering<span class="token punctuation">,</span>
      presentText<span class="token punctuation">,</span>
      checkedValue<span class="token punctuation">,</span>
      inputValue<span class="token punctuation">,</span>
      searchInputValue<span class="token punctuation">,</span>
      presentTags<span class="token punctuation">,</span>
      suggestions<span class="token punctuation">,</span>
      isDisabled<span class="token punctuation">,</span>
      realSize<span class="token punctuation">,</span>
      tagSize<span class="token punctuation">,</span>
      multiple<span class="token punctuation">,</span>
      readonly<span class="token punctuation">,</span>
      clearBtnVisible<span class="token punctuation">,</span>
      t<span class="token punctuation">,</span>
      togglePopperVisible<span class="token punctuation">,</span>
      hideSuggestionPanel<span class="token punctuation">,</span>
      deleteTag<span class="token punctuation">,</span>
      focusFirstNode<span class="token punctuation">,</span>
      getCheckedNodes<span class="token punctuation">,</span>
      handleExpandChange<span class="token punctuation">,</span>
      handleKeyDown<span class="token punctuation">,</span>
      handleClear<span class="token punctuation">,</span>
      handleSuggestionClick<span class="token punctuation">,</span>
      handleDelete<span class="token punctuation">,</span>
      handleInput<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>:::</p></li></ul></blockquote></li><li><p>style</p><blockquote><ul><li><code>css.ts</code> ::: details \u4EE3\u7801<div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token string">&quot;@element-plus/components/base/style/css&quot;</span>
<span class="token keyword">import</span> <span class="token string">&quot;@element-plus/theme-chalk/el-cascader.css&quot;</span>
<span class="token keyword">import</span> <span class="token string">&quot;@element-plus/components/input/style/css&quot;</span>
<span class="token keyword">import</span> <span class="token string">&quot;@element-plus/components/popper/style/css&quot;</span>
<span class="token keyword">import</span> <span class="token string">&quot;@element-plus/components/tag/style/css&quot;</span>
<span class="token keyword">import</span> <span class="token string">&quot;@element-plus/components/cascader-panel/style/css&quot;</span>
</code></pre></div>:::</li><li><code>index.ts</code> ::: details \u4EE3\u7801<div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token string">&quot;@element-plus/components/base/style&quot;</span>
<span class="token keyword">import</span> <span class="token string">&quot;@element-plus/theme-chalk/src/cascader.scss&quot;</span>
<span class="token keyword">import</span> <span class="token string">&quot;@element-plus/components/input/style/index&quot;</span>
<span class="token keyword">import</span> <span class="token string">&quot;@element-plus/components/popper/style/index&quot;</span>
<span class="token keyword">import</span> <span class="token string">&quot;@element-plus/components/tag/style/index&quot;</span>
<span class="token keyword">import</span> <span class="token string">&quot;@element-plus/components/cascader-panel/style/index&quot;</span>
</code></pre></div>:::</li></ul></blockquote></li><li><p><code>index.ts</code> ::: details \u7EC4\u4EF6\u5165\u53E3</p><div class="language-ts"><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><div class="highlighted">\xA0</div><br></div><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> App <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> SFCWithInstall <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/types&#39;</span>
<span class="token keyword">import</span> Cascader <span class="token keyword">from</span> <span class="token string">&#39;./src/index.vue&#39;</span>

Cascader<span class="token punctuation">.</span>install <span class="token operator">=</span> <span class="token punctuation">(</span>app<span class="token operator">:</span> App<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>Cascader<span class="token punctuation">.</span>name<span class="token punctuation">,</span> Cascader<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> _Cascader <span class="token operator">=</span> Cascader <span class="token keyword">as</span> SFCWithInstall<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Cascader<span class="token operator">&gt;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> _Cascader
<span class="token keyword">export</span> <span class="token keyword">const</span> ElCascader <span class="token operator">=</span> _Cascader
</code></pre></div><p>:::</p></li></ul></blockquote></li></ul></blockquote></li></ul></blockquote></li></ul></blockquote></li></ul></blockquote>__VP_STATIC_END__`,3),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{f as __pageData,y as default};
