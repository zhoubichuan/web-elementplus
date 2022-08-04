import{_ as n,e as s,o as a,aB as t}from"./plugin-vue_export-helper.eeeadc7a.js";const g='{"title":"\u6587\u4EF6\u914D\u7F6E","description":"react-ant-admin \u6587\u4EF6\u914D\u7F6E\uFF0C\u8BE6\u7EC6\u8BB2\u89E3\u6B64\u6846\u67B6\u7684\u6587\u4EF6\u90E8\u7F72\uFF0C\u6559\u4F60\u5982\u4F55\u638C\u63E1\u6846\u67B6\u7684\u5DE5\u4F5C\u6D41\u7A0B\uFF0C\u5FEB\u901F\u4E0A\u624B\u3002","frontmatter":{"title":"\u6587\u4EF6\u914D\u7F6E","head":[["meta",{"name":"description","content":"react-ant-admin \u6587\u4EF6\u914D\u7F6E\uFF0C\u8BE6\u7EC6\u8BB2\u89E3\u6B64\u6846\u67B6\u7684\u6587\u4EF6\u90E8\u7F72\uFF0C\u6559\u4F60\u5982\u4F55\u638C\u63E1\u6846\u67B6\u7684\u5DE5\u4F5C\u6D41\u7A0B\uFF0C\u5FEB\u901F\u4E0A\u624B\u3002"}],["meta",{"name":"keywords","content":"react react-ant react-admin react-ant-admin."}]]},"headers":[{"level":2,"title":"index.ts","slug":"index-ts"},{"level":2,"title":"button.vue","slug":"button-vue"},{"level":2,"title":"button.ts","slug":"button-ts"},{"level":2,"title":"button-group.vue","slug":"button-group-vue"}],"relativePath":"element/base/button.md","lastUpdated":1659615604025}',p={},o=t(`__VP_STATIC_START__<h1 id="\u4E09-button">\u4E09.Button</h1><ul><li>\u7EC4\u4EF6\u4ECB\u7ECD</li></ul><p><a href="https://element-plus.gitee.io/#/zh-CN/component/layout" target="_blank" rel="noopener noreferrer">Layout \u5E03\u5C40</a></p><h2 id="index-ts">index.ts</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> withInstall <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@element-plus/utils/with-install&quot;</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">&quot;./src/button.vue&quot;</span>
<span class="token keyword">import</span> ButtonGroup <span class="token keyword">from</span> <span class="token string">&quot;./src/button-group.vue&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> ElButton <span class="token operator">=</span> <span class="token function">withInstall</span><span class="token punctuation">(</span>Button<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  ButtonGroup<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> ElButtonGroup <span class="token operator">=</span> ButtonGroup
<span class="token keyword">export</span> <span class="token keyword">default</span> ElButton

<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&quot;./src/button&quot;</span>
</code></pre></div><h2 id="button-vue">button.vue</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span>
    <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
      <span class="token punctuation">&#39;</span>el-button<span class="token punctuation">&#39;</span>,
      type ? <span class="token punctuation">&#39;</span>el-button--<span class="token punctuation">&#39;</span> + type : <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span>,
      buttonSize ? <span class="token punctuation">&#39;</span>el-button--<span class="token punctuation">&#39;</span> + buttonSize : <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span>,
      {
        <span class="token punctuation">&#39;</span>is-disabled<span class="token punctuation">&#39;</span>: buttonDisabled,
        <span class="token punctuation">&#39;</span>is-loading<span class="token punctuation">&#39;</span>: loading,
        <span class="token punctuation">&#39;</span>is-plain<span class="token punctuation">&#39;</span>: plain,
        <span class="token punctuation">&#39;</span>is-round<span class="token punctuation">&#39;</span>: round,
        <span class="token punctuation">&#39;</span>is-circle<span class="token punctuation">&#39;</span>: circle,
      },
    ]<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>buttonDisabled || loading<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:autofocus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>autofocus<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nativeType<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-icon-loading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon &amp;&amp; !loading<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$slots.default<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span> inject<span class="token punctuation">,</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> elFormKey<span class="token punctuation">,</span> elFormItemKey <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/tokens&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useGlobalConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/util&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> elButtonGroupKey <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/tokens&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> buttonEmits<span class="token punctuation">,</span> buttonProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./button&#39;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span> ElFormContext<span class="token punctuation">,</span> ElFormItemContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/tokens&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ElButton&#39;</span><span class="token punctuation">,</span>

  <span class="token literal-property property">props</span><span class="token operator">:</span> buttonProps<span class="token punctuation">,</span>
  <span class="token literal-property property">emits</span><span class="token operator">:</span> buttonEmits<span class="token punctuation">,</span>

  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> emit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> $<span class="token constant">ELEMENT</span> <span class="token operator">=</span> <span class="token function">useGlobalConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> elForm <span class="token operator">=</span> inject<span class="token operator">&lt;</span>ElFormContext<span class="token operator">&gt;</span><span class="token punctuation">(</span>elFormKey<span class="token punctuation">)</span>
    <span class="token keyword">const</span> elFormItem <span class="token operator">=</span> inject<span class="token operator">&lt;</span>ElFormItemContext<span class="token operator">&gt;</span><span class="token punctuation">(</span>elFormItemKey<span class="token punctuation">)</span>
    <span class="token keyword">const</span> elBtnGroup <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>elButtonGroupKey<span class="token punctuation">)</span>

    <span class="token keyword">const</span> buttonSize <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>size <span class="token operator">||</span> elBtnGroup<span class="token operator">?.</span>size <span class="token operator">||</span> elFormItem<span class="token operator">?.</span>size <span class="token operator">||</span> $<span class="token constant">ELEMENT</span><span class="token punctuation">.</span>size
    <span class="token punctuation">)</span>
    <span class="token keyword">const</span> buttonDisabled <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>disabled <span class="token operator">||</span> elForm<span class="token operator">?.</span>disabled<span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">evt</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> evt<span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      buttonSize<span class="token punctuation">,</span>
      buttonDisabled<span class="token punctuation">,</span>
      handleClick<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="button-ts">button.ts</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> buildProp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/props&#39;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span> ExtractPropTypes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> buttonType <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;primary&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;warning&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;info&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;danger&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">const</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> buttonSize <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;large&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;medium&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;small&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mini&#39;</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">const</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> buttonNativeType <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;submit&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;reset&#39;</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">const</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> buttonProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token function">buildProp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">values</span><span class="token operator">:</span> buttonType<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token function">buildProp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">values</span><span class="token operator">:</span> buttonSize<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">nativeType</span><span class="token operator">:</span> <span class="token function">buildProp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">values</span><span class="token operator">:</span> buttonNativeType<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;button&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">loading</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
  <span class="token literal-property property">disabled</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
  <span class="token literal-property property">plain</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
  <span class="token literal-property property">autofocus</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
  <span class="token literal-property property">round</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
  <span class="token literal-property property">circle</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token keyword">const</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> buttonEmits <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">click</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">evt</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> evt <span class="token keyword">instanceof</span> <span class="token class-name">MouseEvent</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> type ButtonProps <span class="token operator">=</span> ExtractPropTypes<span class="token operator">&lt;</span><span class="token keyword">typeof</span> buttonProps<span class="token operator">&gt;</span>
<span class="token keyword">export</span> type ButtonEmits <span class="token operator">=</span> <span class="token keyword">typeof</span> buttonEmits

<span class="token keyword">export</span> type ButtonType <span class="token operator">=</span> ButtonProps<span class="token punctuation">[</span><span class="token string">&#39;type&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">export</span> type ButtonNativeType <span class="token operator">=</span> ButtonProps<span class="token punctuation">[</span><span class="token string">&#39;nativeType&#39;</span><span class="token punctuation">]</span>
</code></pre></div><h2 id="button-group-vue">button-group.vue</h2><p>\u4E3B\u8981\u4F5C\u7528\u662F\u901A\u8FC7 provide \u5411\u5176\u4EE5\u4E0B\u7EC4\u4EF6\u63D0\u4F9B\u54CD\u5E94\u5F0F size \u503C</p><div class="language-vue"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br></div><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-button-group<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> provide<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> toRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> elButtonGroupKey <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/tokens&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isValidComponentSize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/validators&#39;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span> PropType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> ComponentSize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/types&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ElButtonGroup&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>ComponentSize<span class="token operator">&gt;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">validator</span><span class="token operator">:</span> isValidComponentSize<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">provide</span><span class="token punctuation">(</span>                            <span class="token comment">// \u4E3B\u8981\u662F\u901A\u8FC7provide\u5411\u5176\u4EE5\u4E0B\u7EC4\u4EF6\u63D0\u4F9B\u54CD\u5E94\u5F0Fsize\u503C</span>
      elButtonGroupKey<span class="token punctuation">,</span>
      <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token function">toRef</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token string">&#39;size&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>__VP_STATIC_END__`,12),e=[o];function c(l,u,k,r,i,d){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{g as __pageData,m as default};
