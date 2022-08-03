import{_ as n,e as s,o as a,aB as t}from"./plugin-vue_export-helper.eeeadc7a.js";const m='{"title":"\u4E09.Input","description":"","frontmatter":{"lang":"zh-CN","sidebarDepth":2,"meta":[{"name":"description","content":"\u4E2A\u4EBA\u603B\u7ED3\u7684vuepress\u5B66\u4E60\u6280\u672F\u6587\u6863-\u8BED\u6CD5"},{"name":"keywords","content":"vuepress,\u6700\u65B0\u6280\u672F\u6587\u6863,vuepress\u8BED\u6CD5,markdown\u8BED\u6CD5"}]},"headers":[{"level":2,"title":"index.ts","slug":"index-ts"},{"level":2,"title":"src","slug":"src"},{"level":3,"title":"index.vue","slug":"index-vue"},{"level":3,"title":"calcTextareaHeight.ts","slug":"calctextareaheight-ts"}],"relativePath":"element/form/input.md","lastUpdated":1659543370860}',p={},o=t(`<h1 id="\u4E09-input">\u4E09.Input</h1><ul><li>\u7EC4\u4EF6\u4ECB\u7ECD<a href="https://element-plus.gitee.io/#/zh-CN/component/input" target="_blank" rel="noopener noreferrer">Input \u8F93\u5165\u6846</a></li></ul><h2 id="index-ts">index.ts</h2><div class="language-js"><pre><code><span class="token keyword">import</span> Input <span class="token keyword">from</span> <span class="token string">&#39;./src/index.vue&#39;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span> App <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> SFCWithInstall <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/types&#39;</span>

Input<span class="token punctuation">.</span>install <span class="token operator">=</span> <span class="token punctuation">(</span>app<span class="token operator">:</span> App<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>Input<span class="token punctuation">.</span>name<span class="token punctuation">,</span> Input<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> _Input <span class="token operator">=</span> Input <span class="token keyword">as</span> SFCWithInstall<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Input<span class="token operator">&gt;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> _Input
<span class="token keyword">export</span> <span class="token keyword">const</span> ElInput <span class="token operator">=</span> _Input
</code></pre></div><h2 id="src">src</h2><h3 id="index-vue">index.vue</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
      type === <span class="token punctuation">&#39;</span>textarea<span class="token punctuation">&#39;</span> ? <span class="token punctuation">&#39;</span>el-textarea<span class="token punctuation">&#39;</span> : <span class="token punctuation">&#39;</span>el-input<span class="token punctuation">&#39;</span>,
      inputSize ? <span class="token punctuation">&#39;</span>el-input--<span class="token punctuation">&#39;</span> + inputSize : <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span>,
      {
        <span class="token punctuation">&#39;</span>is-disabled<span class="token punctuation">&#39;</span>: inputDisabled,
        <span class="token punctuation">&#39;</span>is-exceed<span class="token punctuation">&#39;</span>: inputExceed,
        <span class="token punctuation">&#39;</span>el-input-group<span class="token punctuation">&#39;</span>: $slots.prepend || $slots.append,
        <span class="token punctuation">&#39;</span>el-input-group--append<span class="token punctuation">&#39;</span>: $slots.append,
        <span class="token punctuation">&#39;</span>el-input-group--prepend<span class="token punctuation">&#39;</span>: $slots.prepend,
        <span class="token punctuation">&#39;</span>el-input--prefix<span class="token punctuation">&#39;</span>: $slots.prefix || prefixIcon,
        <span class="token punctuation">&#39;</span>el-input--suffix<span class="token punctuation">&#39;</span>:
          $slots.suffix || suffixIcon || clearable || showPassword,
        <span class="token punctuation">&#39;</span>el-input--suffix--password-clear<span class="token punctuation">&#39;</span>: clearable &amp;&amp; showPassword,
      },
      $attrs.class,
    ]<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$attrs.style<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@mouseenter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onMouseEnter<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@mouseleave</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onMouseLeave<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>type !== <span class="token punctuation">&#39;</span>textarea<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- \u524D\u7F6E\u5143\u7D20 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$slots.prepend<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-input-group__prepend<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>prepend<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
        <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>type !== <span class="token punctuation">&#39;</span>textarea<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>input<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-input__inner<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>attrs<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showPassword ? (passwordVisible ? <span class="token punctuation">&#39;</span>text<span class="token punctuation">&#39;</span> : <span class="token punctuation">&#39;</span>password<span class="token punctuation">&#39;</span>) : type<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputDisabled<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:readonly</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>readonly<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>autocomplete<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tabindex<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>label<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>placeholder<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputStyle<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@compositionstart</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleCompositionStart<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@compositionupdate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleCompositionUpdate<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@compositionend</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleCompositionEnd<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleInput<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@focus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleFocus<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@blur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleBlur<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@keydown</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleKeydown<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">/&gt;</span></span>
      <span class="token comment">&lt;!-- \u524D\u7F6E\u5185\u5BB9 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$slots.prefix || prefixIcon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-input__prefix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>prefix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>prefixIcon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>el-input__icon<span class="token punctuation">&#39;</span>, prefixIcon]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- \u540E\u7F6E\u5185\u5BB9 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getSuffixVisible()<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-input__suffix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-input__suffix-inner<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>!showClear || !showPwdVisible || !isWordLimitVisible<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>suffix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>suffixIcon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>el-input__icon<span class="token punctuation">&#39;</span>, suffixIcon]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span>
            <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showClear<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-input__icon el-icon-circle-close el-input__clear<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@mousedown.prevent</span>
            <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clear<span class="token punctuation">&quot;</span></span>
          <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span>
            <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showPwdVisible<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-input__icon el-icon-view el-input__clear<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handlePasswordVisible<span class="token punctuation">&quot;</span></span>
          <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isWordLimitVisible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-input__count<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-input__count-inner<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
              {{ textLength }}/{{ maxlength }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span>
          <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>validateState<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>el-input__icon<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>el-input__validateIcon<span class="token punctuation">&#39;</span>, validateIcon]<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- \u540E\u7F6E\u5143\u7D20 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$slots.append<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-input-group__append<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>append<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span>
      <span class="token attr-name">v-else</span>
      <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>textarea<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-textarea__inner<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>attrs<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tabindex<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputDisabled<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:readonly</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>readonly<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>autocomplete<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>computedTextareaStyle<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>label<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>placeholder<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@compositionstart</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleCompositionStart<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@compositionupdate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleCompositionUpdate<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@compositionend</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleCompositionEnd<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleInput<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@focus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleFocus<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@blur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleBlur<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@keydown</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleKeydown<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>
      <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isWordLimitVisible &amp;&amp; type === <span class="token punctuation">&#39;</span>textarea<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-input__count<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>{{ textLength }}/{{ maxlength }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span>
    <span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  defineComponent<span class="token punctuation">,</span>
  inject<span class="token punctuation">,</span>
  computed<span class="token punctuation">,</span>
  watch<span class="token punctuation">,</span>
  nextTick<span class="token punctuation">,</span>
  getCurrentInstance<span class="token punctuation">,</span>
  ref<span class="token punctuation">,</span>
  shallowRef<span class="token punctuation">,</span>
  onMounted<span class="token punctuation">,</span>
  onUpdated<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> elFormKey<span class="token punctuation">,</span> elFormItemKey <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/tokens&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useAttrs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/hooks&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  <span class="token constant">UPDATE_MODEL_EVENT</span><span class="token punctuation">,</span>
  <span class="token constant">VALIDATE_STATE_MAP</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/constants&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isObject<span class="token punctuation">,</span> useGlobalConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/util&#39;</span>
<span class="token keyword">import</span> isServer <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/isServer&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isKorean <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/isDef&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isValidComponentSize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/validators&#39;</span>
<span class="token keyword">import</span> calcTextareaHeight <span class="token keyword">from</span> <span class="token string">&#39;./calcTextareaHeight&#39;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span> PropType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> ElFormContext<span class="token punctuation">,</span> ElFormItemContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/tokens&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> ComponentSize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/types&#39;</span>

type AutosizeProp <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token punctuation">{</span>
      minRows<span class="token operator">?</span><span class="token operator">:</span> number
      maxRows<span class="token operator">?</span><span class="token operator">:</span> number
    <span class="token punctuation">}</span>
  <span class="token operator">|</span> boolean

<span class="token keyword">const</span> <span class="token constant">PENDANT_MAP</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">suffix</span><span class="token operator">:</span> <span class="token string">&#39;append&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">&#39;prepend&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ElInput&#39;</span><span class="token punctuation">,</span>

  <span class="token literal-property property">inheritAttrs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">modelValue</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Number<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>ComponentSize<span class="token operator">&gt;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">validator</span><span class="token operator">:</span> isValidComponentSize<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">resize</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span><span class="token string">&#39;none&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;both&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;horizontal&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;vertical&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">val</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
        <span class="token punctuation">[</span><span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;both&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;horizontal&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;vertical&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">autosize</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>Boolean<span class="token punctuation">,</span> Object<span class="token punctuation">]</span> <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>AutosizeProp<span class="token operator">&gt;</span><span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token keyword">as</span> AutosizeProp<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">autocomplete</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">form</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">readonly</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">clearable</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">showPassword</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">showWordLimit</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">suffixIcon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prefixIcon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tabindex</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>Number<span class="token punctuation">,</span> String<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">validateEvent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">inputStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">maxlength</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>Number<span class="token punctuation">,</span> String<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token constant">UPDATE_MODEL_EVENT</span><span class="token punctuation">,</span>
    <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;focus&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;blur&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;clear&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;mouseleave&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;mouseenter&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;keydown&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> attrs <span class="token operator">=</span> <span class="token function">useAttrs</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> $<span class="token constant">ELEMENT</span> <span class="token operator">=</span> <span class="token function">useGlobalConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> elForm <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>elFormKey<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> ElFormContext<span class="token punctuation">)</span>
    <span class="token keyword">const</span> elFormItem <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>elFormItemKey<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> ElFormItemContext<span class="token punctuation">)</span>

    <span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> textarea <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> focused <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> hovering <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> isComposing <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> passwordVisible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> _textareaCalcStyle <span class="token operator">=</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>inputStyle<span class="token punctuation">)</span>

    <span class="token keyword">const</span> inputOrTextarea <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> input<span class="token punctuation">.</span>value <span class="token operator">||</span> textarea<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token keyword">const</span> inputSize <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>size <span class="token operator">||</span> elFormItem<span class="token punctuation">.</span>size <span class="token operator">||</span> $<span class="token constant">ELEMENT</span><span class="token punctuation">.</span>size
    <span class="token punctuation">)</span>
    <span class="token keyword">const</span> needStatusIcon <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> elForm<span class="token punctuation">.</span>statusIcon<span class="token punctuation">)</span>
    <span class="token keyword">const</span> validateState <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> elFormItem<span class="token punctuation">.</span>validateState <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> validateIcon <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">VALIDATE_STATE_MAP</span><span class="token punctuation">[</span>validateState<span class="token punctuation">.</span>value<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> computedTextareaStyle <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token operator">...</span>props<span class="token punctuation">.</span>inputStyle<span class="token punctuation">,</span>
      <span class="token operator">...</span>_textareaCalcStyle<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
      <span class="token literal-property property">resize</span><span class="token operator">:</span> props<span class="token punctuation">.</span>resize<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> inputDisabled <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>disabled <span class="token operator">||</span> elForm<span class="token punctuation">.</span>disabled<span class="token punctuation">)</span>
    <span class="token keyword">const</span> nativeInputValue <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      props<span class="token punctuation">.</span>modelValue <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> props<span class="token punctuation">.</span>modelValue <span class="token operator">===</span> <span class="token keyword">undefined</span>
        <span class="token operator">?</span> <span class="token string">&#39;&#39;</span>
        <span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>modelValue<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">const</span> showClear <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        props<span class="token punctuation">.</span>clearable <span class="token operator">&amp;&amp;</span>
        <span class="token operator">!</span>inputDisabled<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span>
        <span class="token operator">!</span>props<span class="token punctuation">.</span>readonly <span class="token operator">&amp;&amp;</span>
        nativeInputValue<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span>
        <span class="token punctuation">(</span>focused<span class="token punctuation">.</span>value <span class="token operator">||</span> hovering<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> showPwdVisible <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        props<span class="token punctuation">.</span>showPassword <span class="token operator">&amp;&amp;</span>
        <span class="token operator">!</span>inputDisabled<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span>
        <span class="token operator">!</span>props<span class="token punctuation">.</span>readonly <span class="token operator">&amp;&amp;</span>
        <span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span>nativeInputValue<span class="token punctuation">.</span>value <span class="token operator">||</span> focused<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> isWordLimitVisible <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        props<span class="token punctuation">.</span>showWordLimit <span class="token operator">&amp;&amp;</span>
        props<span class="token punctuation">.</span>maxlength <span class="token operator">&amp;&amp;</span>
        <span class="token punctuation">(</span>props<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;text&#39;</span> <span class="token operator">||</span> props<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;textarea&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
        <span class="token operator">!</span>inputDisabled<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span>
        <span class="token operator">!</span>props<span class="token punctuation">.</span>readonly <span class="token operator">&amp;&amp;</span>
        <span class="token operator">!</span>props<span class="token punctuation">.</span>showPassword
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> textLength <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>nativeInputValue<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span>length
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> inputExceed <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// show exceed style if length of initial value greater then maxlength</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        isWordLimitVisible<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> textLength<span class="token punctuation">.</span>value <span class="token operator">&gt;</span> <span class="token function">Number</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>maxlength<span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">resizeTextarea</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> autosize <span class="token punctuation">}</span> <span class="token operator">=</span> props

      <span class="token keyword">if</span> <span class="token punctuation">(</span>isServer <span class="token operator">||</span> type <span class="token operator">!==</span> <span class="token string">&#39;textarea&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>autosize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> minRows <span class="token operator">=</span> <span class="token function">isObject</span><span class="token punctuation">(</span>autosize<span class="token punctuation">)</span> <span class="token operator">?</span> autosize<span class="token punctuation">.</span>minRows <span class="token operator">:</span> <span class="token keyword">undefined</span>
        <span class="token keyword">const</span> maxRows <span class="token operator">=</span> <span class="token function">isObject</span><span class="token punctuation">(</span>autosize<span class="token punctuation">)</span> <span class="token operator">?</span> autosize<span class="token punctuation">.</span>maxRows <span class="token operator">:</span> <span class="token keyword">undefined</span>
        _textareaCalcStyle<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token operator">...</span><span class="token function">calcTextareaHeight</span><span class="token punctuation">(</span>textarea<span class="token punctuation">.</span>value<span class="token punctuation">,</span> minRows<span class="token punctuation">,</span> maxRows<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        _textareaCalcStyle<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">minHeight</span><span class="token operator">:</span> <span class="token function">calcTextareaHeight</span><span class="token punctuation">(</span>textarea<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span>minHeight<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">setNativeInputValue</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> input <span class="token operator">=</span> inputOrTextarea<span class="token punctuation">.</span>value
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>input <span class="token operator">||</span> input<span class="token punctuation">.</span>value <span class="token operator">===</span> nativeInputValue<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span>
      input<span class="token punctuation">.</span>value <span class="token operator">=</span> nativeInputValue<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">calcIconOffset</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">place</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> el <span class="token punctuation">}</span> <span class="token operator">=</span> instance<span class="token punctuation">.</span>vnode
      <span class="token keyword">const</span> <span class="token literal-property property">elList</span><span class="token operator">:</span> HTMLSpanElement<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>
        el<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">.el-input__</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>place<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
      <span class="token keyword">const</span> target <span class="token operator">=</span> elList<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>parentNode <span class="token operator">===</span> el<span class="token punctuation">)</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>target<span class="token punctuation">)</span> <span class="token keyword">return</span>

      <span class="token keyword">const</span> pendant <span class="token operator">=</span> <span class="token constant">PENDANT_MAP</span><span class="token punctuation">[</span>place<span class="token punctuation">]</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>slots<span class="token punctuation">[</span>pendant<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        target<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">translateX(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>place <span class="token operator">===</span> <span class="token string">&#39;suffix&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>
          el<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">.el-input-group__</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>pendant<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span>offsetWidth
        <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px)</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        target<span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;style&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">updateIconOffset</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">calcIconOffset</span><span class="token punctuation">(</span><span class="token string">&#39;prefix&#39;</span><span class="token punctuation">)</span>
      <span class="token function">calcIconOffset</span><span class="token punctuation">(</span><span class="token string">&#39;suffix&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleInput</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> event<span class="token punctuation">.</span>target

      <span class="token comment">// should not emit input during composition</span>
      <span class="token comment">// see: https://github.com/ElemeFE/element/issues/10516</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>isComposing<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span>

      <span class="token comment">// hack for https://github.com/ElemeFE/element/issues/8548</span>
      <span class="token comment">// should remove the following line when we don&#39;t support IE</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> nativeInputValue<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span>

      <span class="token comment">// if set maxlength</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>maxlength<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> sliceIndex <span class="token operator">=</span> inputExceed<span class="token punctuation">.</span>value
          <span class="token operator">?</span> textLength<span class="token punctuation">.</span>value
          <span class="token operator">:</span> props<span class="token punctuation">.</span>maxlength
        <span class="token comment">//  Convert value to an array for get a right lenght</span>
        value <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">Number</span><span class="token punctuation">(</span>sliceIndex<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      ctx<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token constant">UPDATE_MODEL_EVENT</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
      ctx<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>

      <span class="token comment">// ensure native input value is controlled</span>
      <span class="token comment">// see: https://github.com/ElemeFE/element/issues/12850</span>
      <span class="token function">nextTick</span><span class="token punctuation">(</span>setNativeInputValue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      ctx<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">focus</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// see: https://github.com/ElemeFE/element/issues/18573</span>
      <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        inputOrTextarea<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">blur</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      inputOrTextarea<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">blur</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleFocus</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      focused<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
      ctx<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;focus&#39;</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleBlur</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      focused<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
      ctx<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;blur&#39;</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>validateEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        elFormItem<span class="token punctuation">.</span>formItemMitt<span class="token operator">?.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;el.form.blur&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>props<span class="token punctuation">.</span>modelValue<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">select</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      inputOrTextarea<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleCompositionStart</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      isComposing<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleCompositionUpdate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> text <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
      <span class="token keyword">const</span> lastCharacter <span class="token operator">=</span> text<span class="token punctuation">[</span>text<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">&#39;&#39;</span>
      isComposing<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token operator">!</span><span class="token function">isKorean</span><span class="token punctuation">(</span>lastCharacter<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleCompositionEnd</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>isComposing<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        isComposing<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token function">handleInput</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">clear</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      ctx<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token constant">UPDATE_MODEL_EVENT</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
      ctx<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
      ctx<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;clear&#39;</span><span class="token punctuation">)</span>
      ctx<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handlePasswordVisible</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      passwordVisible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token operator">!</span>passwordVisible<span class="token punctuation">.</span>value
      <span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">getSuffixVisible</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        ctx<span class="token punctuation">.</span>slots<span class="token punctuation">.</span>suffix <span class="token operator">||</span>
        props<span class="token punctuation">.</span>suffixIcon <span class="token operator">||</span>
        showClear<span class="token punctuation">.</span>value <span class="token operator">||</span>
        props<span class="token punctuation">.</span>showPassword <span class="token operator">||</span>
        isWordLimitVisible<span class="token punctuation">.</span>value <span class="token operator">||</span>
        <span class="token punctuation">(</span>validateState<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> needStatusIcon<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">watch</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>modelValue<span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">nextTick</span><span class="token punctuation">(</span>resizeTextarea<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>validateEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          elFormItem<span class="token punctuation">.</span>formItemMitt<span class="token operator">?.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;el.form.change&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>val<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>

    <span class="token comment">// native input value is set explicitly</span>
    <span class="token comment">// do not use v-model / :value in template</span>
    <span class="token comment">// see: https://github.com/ElemeFE/element/issues/14521</span>
    <span class="token function">watch</span><span class="token punctuation">(</span>nativeInputValue<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">setNativeInputValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// when change between &lt;input&gt; and &lt;textarea&gt;,</span>
    <span class="token comment">// update DOM dependent value and styles</span>
    <span class="token comment">// https://github.com/ElemeFE/element/issues/14857</span>
    <span class="token function">watch</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>type<span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">setNativeInputValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token function">resizeTextarea</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token function">updateIconOffset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>

    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">setNativeInputValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">updateIconOffset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">nextTick</span><span class="token punctuation">(</span>resizeTextarea<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">onUpdated</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">nextTick</span><span class="token punctuation">(</span>updateIconOffset<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">onMouseLeave</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      hovering<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
      ctx<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;mouseleave&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">onMouseEnter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      hovering<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
      ctx<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;mouseenter&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleKeydown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      ctx<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;keydown&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      input<span class="token punctuation">,</span>
      textarea<span class="token punctuation">,</span>
      attrs<span class="token punctuation">,</span>
      inputSize<span class="token punctuation">,</span>
      validateState<span class="token punctuation">,</span>
      validateIcon<span class="token punctuation">,</span>
      computedTextareaStyle<span class="token punctuation">,</span>
      resizeTextarea<span class="token punctuation">,</span>
      inputDisabled<span class="token punctuation">,</span>
      showClear<span class="token punctuation">,</span>
      showPwdVisible<span class="token punctuation">,</span>
      isWordLimitVisible<span class="token punctuation">,</span>
      textLength<span class="token punctuation">,</span>
      hovering<span class="token punctuation">,</span>
      inputExceed<span class="token punctuation">,</span>
      passwordVisible<span class="token punctuation">,</span>
      inputOrTextarea<span class="token punctuation">,</span>
      handleInput<span class="token punctuation">,</span>
      handleChange<span class="token punctuation">,</span>
      handleFocus<span class="token punctuation">,</span>
      handleBlur<span class="token punctuation">,</span>
      handleCompositionStart<span class="token punctuation">,</span>
      handleCompositionUpdate<span class="token punctuation">,</span>
      handleCompositionEnd<span class="token punctuation">,</span>
      handlePasswordVisible<span class="token punctuation">,</span>
      clear<span class="token punctuation">,</span>
      select<span class="token punctuation">,</span>
      focus<span class="token punctuation">,</span>
      blur<span class="token punctuation">,</span>
      getSuffixVisible<span class="token punctuation">,</span>
      onMouseLeave<span class="token punctuation">,</span>
      onMouseEnter<span class="token punctuation">,</span>
      handleKeydown<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="calctextareaheight-ts">calcTextareaHeight.ts</h3><div class="language-js"><pre><code><span class="token keyword">let</span> <span class="token literal-property property">hiddenTextarea</span><span class="token operator">:</span> HTMLTextAreaElement

<span class="token keyword">const</span> <span class="token constant">HIDDEN_STYLE</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
</span><span class="token template-punctuation string">\`</span></span>

<span class="token keyword">const</span> <span class="token constant">CONTEXT_STYLE</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;letter-spacing&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;line-height&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;padding-top&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;padding-bottom&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;font-family&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;font-weight&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;font-size&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;text-rendering&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;text-transform&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;width&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;text-indent&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;padding-left&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;padding-right&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;border-width&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;box-sizing&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

type NodeStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">contextStyle</span><span class="token operator">:</span> string
  <span class="token literal-property property">boxSizing</span><span class="token operator">:</span> string
  <span class="token literal-property property">paddingSize</span><span class="token operator">:</span> number
  <span class="token literal-property property">borderSize</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>

type TextAreaHeight <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> string
  minHeight<span class="token operator">?</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">calculateNodeStyling</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">targetElement</span><span class="token operator">:</span> Element</span><span class="token punctuation">)</span><span class="token operator">:</span> NodeStyle <span class="token punctuation">{</span>
  <span class="token keyword">const</span> style <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>targetElement<span class="token punctuation">)</span>

  <span class="token keyword">const</span> boxSizing <span class="token operator">=</span> style<span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token string">&#39;box-sizing&#39;</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> paddingSize <span class="token operator">=</span>
    <span class="token function">parseFloat</span><span class="token punctuation">(</span>style<span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token string">&#39;padding-bottom&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
    <span class="token function">parseFloat</span><span class="token punctuation">(</span>style<span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token string">&#39;padding-top&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> borderSize <span class="token operator">=</span>
    <span class="token function">parseFloat</span><span class="token punctuation">(</span>style<span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token string">&#39;border-bottom-width&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
    <span class="token function">parseFloat</span><span class="token punctuation">(</span>style<span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token string">&#39;border-top-width&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> contextStyle <span class="token operator">=</span> <span class="token constant">CONTEXT_STYLE</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>style<span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;;&#39;</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> contextStyle<span class="token punctuation">,</span> paddingSize<span class="token punctuation">,</span> borderSize<span class="token punctuation">,</span> boxSizing <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">calcTextareaHeight</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">targetElement</span><span class="token operator">:</span> HTMLInputElement<span class="token punctuation">,</span>
  minRows <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  maxRows <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> TextAreaHeight <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>hiddenTextarea<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    hiddenTextarea <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;textarea&#39;</span><span class="token punctuation">)</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>hiddenTextarea<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> paddingSize<span class="token punctuation">,</span> borderSize<span class="token punctuation">,</span> boxSizing<span class="token punctuation">,</span> contextStyle <span class="token punctuation">}</span> <span class="token operator">=</span>
    <span class="token function">calculateNodeStyling</span><span class="token punctuation">(</span>targetElement<span class="token punctuation">)</span>

  hiddenTextarea<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;style&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>contextStyle<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">HIDDEN_STYLE</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  hiddenTextarea<span class="token punctuation">.</span>value <span class="token operator">=</span> targetElement<span class="token punctuation">.</span>value <span class="token operator">||</span> targetElement<span class="token punctuation">.</span>placeholder <span class="token operator">||</span> <span class="token string">&#39;&#39;</span>

  <span class="token keyword">let</span> height <span class="token operator">=</span> hiddenTextarea<span class="token punctuation">.</span>scrollHeight
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> TextAreaHeight

  <span class="token keyword">if</span> <span class="token punctuation">(</span>boxSizing <span class="token operator">===</span> <span class="token string">&#39;border-box&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    height <span class="token operator">=</span> height <span class="token operator">+</span> borderSize
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>boxSizing <span class="token operator">===</span> <span class="token string">&#39;content-box&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    height <span class="token operator">=</span> height <span class="token operator">-</span> paddingSize
  <span class="token punctuation">}</span>

  hiddenTextarea<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  <span class="token keyword">const</span> singleRowHeight <span class="token operator">=</span> hiddenTextarea<span class="token punctuation">.</span>scrollHeight <span class="token operator">-</span> paddingSize

  <span class="token keyword">if</span> <span class="token punctuation">(</span>minRows <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> minHeight <span class="token operator">=</span> singleRowHeight <span class="token operator">*</span> minRows
    <span class="token keyword">if</span> <span class="token punctuation">(</span>boxSizing <span class="token operator">===</span> <span class="token string">&#39;border-box&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      minHeight <span class="token operator">=</span> minHeight <span class="token operator">+</span> paddingSize <span class="token operator">+</span> borderSize
    <span class="token punctuation">}</span>
    height <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>minHeight<span class="token punctuation">,</span> height<span class="token punctuation">)</span>
    result<span class="token punctuation">.</span>minHeight <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>minHeight<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>maxRows <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> maxHeight <span class="token operator">=</span> singleRowHeight <span class="token operator">*</span> maxRows
    <span class="token keyword">if</span> <span class="token punctuation">(</span>boxSizing <span class="token operator">===</span> <span class="token string">&#39;border-box&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      maxHeight <span class="token operator">=</span> maxHeight <span class="token operator">+</span> paddingSize <span class="token operator">+</span> borderSize
    <span class="token punctuation">}</span>
    height <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>maxHeight<span class="token punctuation">,</span> height<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  result<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>height<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span>
  hiddenTextarea<span class="token punctuation">.</span>parentNode<span class="token operator">?.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>hiddenTextarea<span class="token punctuation">)</span>
  hiddenTextarea <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre></div>`,9),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{m as __pageData,y as default};
