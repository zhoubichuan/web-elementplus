import{_ as n,e as s,o as a,aB as t}from"./plugin-vue_export-helper.84d1515a.js";var p="/web-vue3/assets/1.4.4d241306.png";const g='{"title":"\u4E8C.Checkbox","description":"","frontmatter":{"lang":"zh-CN","sidebarDepth":2,"meta":[{"name":"description","content":"\u4E2A\u4EBA\u603B\u7ED3\u7684vuepress\u5B66\u4E60\u6280\u672F\u6587\u6863-\u8BED\u6CD5"},{"name":"keywords","content":"vuepress,\u6700\u65B0\u6280\u672F\u6587\u6863,vuepress\u8BED\u6CD5,markdown\u8BED\u6CD5"}]},"headers":[{"level":2,"title":"index.ts","slug":"index-ts"},{"level":2,"title":"src","slug":"src"},{"level":3,"title":"checkbox.vue","slug":"checkbox-vue"},{"level":3,"title":"checkbox-button.vue","slug":"checkbox-button-vue"},{"level":3,"title":"checkbox-group.vue","slug":"checkbox-group-vue"},{"level":3,"title":"checkbox.type.ts","slug":"checkbox-type-ts"},{"level":3,"title":"useCheckbox.ts","slug":"usecheckbox-ts"}],"relativePath":"element/form/checkbox.md","lastUpdated":1664119937270}',o={},e=t(`<h1 id="\u4E8C-checkbox">\u4E8C.Checkbox</h1><ul><li>\u7EC4\u4EF6\u4ECB\u7ECD<a href="https://element-plus.gitee.io/#/zh-CN/component/checkbox" target="_blank" rel="noopener noreferrer">Checkbox \u591A\u9009\u6846</a></li></ul><h2 id="index-ts">index.ts</h2><div class="language-js"><pre><code><span class="token keyword">import</span> Checkbox <span class="token keyword">from</span> <span class="token string">&#39;./src/checkbox.vue&#39;</span>
<span class="token keyword">import</span> CheckboxButton <span class="token keyword">from</span> <span class="token string">&#39;./src/checkbox-button.vue&#39;</span>
<span class="token keyword">import</span> CheckboxGroup <span class="token keyword">from</span> <span class="token string">&#39;./src/checkbox-group.vue&#39;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span> App <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> SFCWithInstall <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/types&#39;</span>

Checkbox<span class="token punctuation">.</span>install <span class="token operator">=</span> <span class="token punctuation">(</span>app<span class="token operator">:</span> App<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>Checkbox<span class="token punctuation">.</span>name<span class="token punctuation">,</span> Checkbox<span class="token punctuation">)</span>
  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>CheckboxButton<span class="token punctuation">.</span>name<span class="token punctuation">,</span> CheckboxButton<span class="token punctuation">)</span>
  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>CheckboxGroup<span class="token punctuation">.</span>name<span class="token punctuation">,</span> CheckboxGroup<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

Checkbox<span class="token punctuation">.</span>CheckboxButton <span class="token operator">=</span> CheckboxButton
Checkbox<span class="token punctuation">.</span>CheckboxGroup <span class="token operator">=</span> CheckboxGroup

<span class="token keyword">const</span> _Checkbox <span class="token operator">=</span> Checkbox <span class="token keyword">as</span> any <span class="token keyword">as</span> SFCWithInstall<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Checkbox<span class="token operator">&gt;</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">CheckboxButton</span><span class="token operator">:</span> <span class="token keyword">typeof</span> CheckboxButton
  <span class="token literal-property property">CheckboxGroup</span><span class="token operator">:</span> <span class="token keyword">typeof</span> CheckboxGroup
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> _Checkbox
<span class="token keyword">export</span> <span class="token keyword">const</span> ElCheckbox <span class="token operator">=</span> _Checkbox
<span class="token keyword">export</span> <span class="token keyword">const</span> ElCheckboxButton <span class="token operator">=</span> CheckboxButton
<span class="token keyword">export</span> <span class="token keyword">const</span> ElCheckboxGroup <span class="token operator">=</span> CheckboxGroup
</code></pre></div><h2 id="src">src</h2><p><img src="`+p+`" alt=""></p><h3 id="checkbox-vue">checkbox.vue</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span>
    <span class="token attr-name">:id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-checkbox<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
      checkboxSize ? &#39;el-checkbox--&#39; + checkboxSize : &#39;&#39;,
      { &#39;is-disabled&#39;: isDisabled },
      { &#39;is-bordered&#39;: border },
      { &#39;is-checked&#39;: isChecked },
    ]<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:aria-controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>indeterminate ? controls : null<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-checkbox__input<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
        &#39;is-disabled&#39;: isDisabled,
        &#39;is-checked&#39;: isChecked,
        &#39;is-indeterminate&#39;: indeterminate,
        &#39;is-focus&#39;: focus,
      }<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>indeterminate ? 0 : undefined<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>indeterminate ? &#39;checkbox&#39; : undefined<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:aria-checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>indeterminate ? &#39;mixed&#39; : false<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-checkbox__inner<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
        <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>trueLabel || falseLabel<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>model<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-checkbox__original<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>indeterminate ? &#39;true&#39; : &#39;false&#39;<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isDisabled<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:true-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>trueLabel<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:false-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>falseLabel<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@focus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>focus = true<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@blur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>focus = false<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
        <span class="token attr-name">v-else</span>
        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>model<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-checkbox__original<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>indeterminate ? &#39;true&#39; : &#39;false&#39;<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isDisabled<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>label<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@focus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>focus = true<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@blur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>focus = false<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$slots.default || label<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-checkbox__label<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>!$slots.default<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ label }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">UPDATE_MODEL_EVENT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/constants&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isValidComponentSize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/validators&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useCheckbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./useCheckbox&#39;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span> PropType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> ComponentSize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/types&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ElCheckbox&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">modelValue</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>Boolean<span class="token punctuation">,</span> Number<span class="token punctuation">,</span> String<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Boolean<span class="token punctuation">,</span> Number<span class="token punctuation">,</span> Object<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">indeterminate</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">disabled</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">checked</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">trueLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Number<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">falseLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Number<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">controls</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>ComponentSize<span class="token operator">&gt;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">validator</span><span class="token operator">:</span> isValidComponentSize<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">UPDATE_MODEL_EVENT</span><span class="token punctuation">,</span> <span class="token string">&#39;change&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">useCheckbox</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="checkbox-button-vue">checkbox-button.vue</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-checkbox-button<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
      size ? &#39;el-checkbox-button--&#39; + size : &#39;&#39;,
      { &#39;is-disabled&#39;: isDisabled },
      { &#39;is-checked&#39;: isChecked },
      { &#39;is-focus&#39;: focus },
    ]<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:aria-checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isChecked<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:aria-disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isDisabled<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
      <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>trueLabel || falseLabel<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>model<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-checkbox-button__original<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isDisabled<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:true-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>trueLabel<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:false-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>falseLabel<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@focus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>focus = true<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@blur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>focus = false<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
      <span class="token attr-name">v-else</span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>model<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-checkbox-button__original<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isDisabled<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>label<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@focus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>focus = true<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@blur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>focus = false<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>
      <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$slots.default || label<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-checkbox-button__inner<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isChecked ? activeStyle : null<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span>{{ label }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">UPDATE_MODEL_EVENT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/constants&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useCheckbox<span class="token punctuation">,</span> useCheckboxGroup<span class="token punctuation">,</span> useCheckboxProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./useCheckbox&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ElCheckboxButton&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> useCheckboxProps<span class="token punctuation">,</span>
  <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">UPDATE_MODEL_EVENT</span><span class="token punctuation">,</span> <span class="token string">&#39;change&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> focus<span class="token punctuation">,</span> isChecked<span class="token punctuation">,</span> isDisabled<span class="token punctuation">,</span> size<span class="token punctuation">,</span> model<span class="token punctuation">,</span> handleChange <span class="token punctuation">}</span> <span class="token operator">=</span>
      <span class="token function">useCheckbox</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> checkboxGroup <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCheckboxGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> activeStyle <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> fillValue <span class="token operator">=</span> checkboxGroup<span class="token operator">?.</span>fill<span class="token operator">?.</span>value <span class="token operator">??</span> <span class="token string">&#39;&#39;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> fillValue<span class="token punctuation">,</span>
        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> fillValue<span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> checkboxGroup<span class="token operator">?.</span>textColor<span class="token operator">?.</span>value <span class="token operator">??</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">boxShadow</span><span class="token operator">:</span> fillValue <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">-1px 0 0 0 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>fillValue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      focus<span class="token punctuation">,</span>
      isChecked<span class="token punctuation">,</span>
      isDisabled<span class="token punctuation">,</span>
      model<span class="token punctuation">,</span>
      handleChange<span class="token punctuation">,</span>
      activeStyle<span class="token punctuation">,</span>
      size<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="checkbox-group-vue">checkbox-group.vue</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-checkbox-group<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>group<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox-group<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  defineComponent<span class="token punctuation">,</span>
  computed<span class="token punctuation">,</span>
  watch<span class="token punctuation">,</span>
  provide<span class="token punctuation">,</span>
  nextTick<span class="token punctuation">,</span>
  toRefs<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">UPDATE_MODEL_EVENT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/constants&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isValidComponentSize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/validators&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useCheckboxGroup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./useCheckbox&#39;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span> PropType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> ComponentSize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/types&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ElCheckboxGroup&#39;</span><span class="token punctuation">,</span>

  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">modelValue</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>Object<span class="token punctuation">,</span> Boolean<span class="token punctuation">,</span> Array<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">disabled</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>ComponentSize<span class="token operator">&gt;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">validator</span><span class="token operator">:</span> isValidComponentSize<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">textColor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">UPDATE_MODEL_EVENT</span><span class="token punctuation">,</span> <span class="token string">&#39;change&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> elFormItem<span class="token punctuation">,</span> elFormItemSize<span class="token punctuation">,</span> <span class="token constant">ELEMENT</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCheckboxGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> checkboxGroupSize <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>size <span class="token operator">||</span> elFormItemSize<span class="token punctuation">.</span>value <span class="token operator">||</span> <span class="token constant">ELEMENT</span><span class="token punctuation">.</span>size
    <span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">changeEvent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      ctx<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token constant">UPDATE_MODEL_EVENT</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
      <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        ctx<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> modelValue <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> props<span class="token punctuation">.</span>modelValue
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">set</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">changeEvent</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;CheckboxGroup&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ElCheckboxGroup&#39;</span><span class="token punctuation">,</span>
      modelValue<span class="token punctuation">,</span>
      <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">,</span>
      checkboxGroupSize<span class="token punctuation">,</span>
      changeEvent<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">watch</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>modelValue<span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        elFormItem<span class="token punctuation">.</span>formItemMitt<span class="token operator">?.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;el.form.change&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>val<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="checkbox-type-ts">checkbox.type.ts</h3><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ComputedRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AnyFunction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/types&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ICheckboxGroupInstance</span> <span class="token punctuation">{</span>
  name<span class="token operator">?</span><span class="token operator">:</span> string
  modelValue<span class="token operator">?</span><span class="token operator">:</span> ComputedRef
  disabled<span class="token operator">?</span><span class="token operator">:</span> ComputedRef<span class="token operator">&lt;</span>boolean<span class="token operator">&gt;</span>
  min<span class="token operator">?</span><span class="token operator">:</span> ComputedRef<span class="token operator">&lt;</span>string <span class="token operator">|</span> number<span class="token operator">&gt;</span>
  max<span class="token operator">?</span><span class="token operator">:</span> ComputedRef<span class="token operator">&lt;</span>string <span class="token operator">|</span> number<span class="token operator">&gt;</span>
  size<span class="token operator">?</span><span class="token operator">:</span> ComputedRef<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span>
  fill<span class="token operator">?</span><span class="token operator">:</span> ComputedRef<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span>
  textColor<span class="token operator">?</span><span class="token operator">:</span> ComputedRef<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span>
  checkboxGroupSize<span class="token operator">?</span><span class="token operator">:</span> ComputedRef<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span>
  changeEvent<span class="token operator">?</span><span class="token operator">:</span> AnyFunction<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="usecheckbox-ts">useCheckbox.ts</h3><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed<span class="token punctuation">,</span> inject<span class="token punctuation">,</span> getCurrentInstance<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> toTypeString <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/shared&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">UPDATE_MODEL_EVENT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/constants&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useGlobalConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/util&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> elFormKey<span class="token punctuation">,</span> elFormItemKey <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/tokens&#39;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span> ExtractPropTypes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> ElFormContext<span class="token punctuation">,</span> ElFormItemContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/tokens&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> PartialReturnType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/types&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> ICheckboxGroupInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./checkbox.type&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useCheckboxProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">modelValue</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>Boolean<span class="token punctuation">,</span> Number<span class="token punctuation">,</span> String<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Boolean<span class="token punctuation">,</span> Number<span class="token punctuation">,</span> Object<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">indeterminate</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
  <span class="token literal-property property">disabled</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
  <span class="token literal-property property">checked</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">trueLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Number<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">falseLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Number<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">size</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> type IUseCheckboxProps <span class="token operator">=</span> ExtractPropTypes<span class="token operator">&lt;</span><span class="token keyword">typeof</span> useCheckboxProps<span class="token operator">&gt;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useCheckboxGroup</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token constant">ELEMENT</span> <span class="token operator">=</span> <span class="token function">useGlobalConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> elForm <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>elFormKey<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> ElFormContext<span class="token punctuation">)</span>
  <span class="token keyword">const</span> elFormItem <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>elFormItemKey<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> ElFormItemContext<span class="token punctuation">)</span>
  <span class="token keyword">const</span> checkboxGroup <span class="token operator">=</span> inject<span class="token operator">&lt;</span>ICheckboxGroupInstance<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string">&#39;CheckboxGroup&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> isGroup <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> checkboxGroup <span class="token operator">&amp;&amp;</span> checkboxGroup<span class="token operator">?.</span>name <span class="token operator">===</span> <span class="token string">&#39;ElCheckboxGroup&#39;</span>
  <span class="token punctuation">)</span>
  <span class="token keyword">const</span> elFormItemSize <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> elFormItem<span class="token punctuation">.</span>size
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    isGroup<span class="token punctuation">,</span>
    checkboxGroup<span class="token punctuation">,</span>
    elForm<span class="token punctuation">,</span>
    <span class="token constant">ELEMENT</span><span class="token punctuation">,</span>
    elFormItemSize<span class="token punctuation">,</span>
    elFormItem<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">useModel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> IUseCheckboxProps</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> selfModel <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> emit <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> isGroup<span class="token punctuation">,</span> checkboxGroup <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCheckboxGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> isLimitExceeded <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    checkboxGroup <span class="token operator">?</span> checkboxGroup<span class="token punctuation">.</span>modelValue<span class="token operator">?.</span>value <span class="token operator">:</span> props<span class="token punctuation">.</span>modelValue
  <span class="token punctuation">)</span>
  <span class="token keyword">const</span> model <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> isGroup<span class="token punctuation">.</span>value <span class="token operator">?</span> store<span class="token punctuation">.</span>value <span class="token operator">:</span> props<span class="token punctuation">.</span>modelValue <span class="token operator">??</span> selfModel<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function">set</span><span class="token punctuation">(</span>val<span class="token operator">:</span> unknown<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>isGroup<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        isLimitExceeded<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>
          checkboxGroup<span class="token punctuation">.</span>min <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span>
          val<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> checkboxGroup<span class="token punctuation">.</span>min<span class="token punctuation">.</span>value
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
          isLimitExceeded<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>
          checkboxGroup<span class="token punctuation">.</span>max <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span>
          val<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> checkboxGroup<span class="token punctuation">.</span>max<span class="token punctuation">.</span>value
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
          isLimitExceeded<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>

        isLimitExceeded<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token boolean">false</span> <span class="token operator">&amp;&amp;</span> checkboxGroup<span class="token operator">?.</span>changeEvent<span class="token operator">?.</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">emit</span><span class="token punctuation">(</span><span class="token constant">UPDATE_MODEL_EVENT</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>
        selfModel<span class="token punctuation">.</span>value <span class="token operator">=</span> val <span class="token keyword">as</span> boolean
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    model<span class="token punctuation">,</span>
    isLimitExceeded<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">useCheckboxStatus</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> IUseCheckboxProps<span class="token punctuation">,</span>
  <span class="token punctuation">{</span> model <span class="token punctuation">}</span><span class="token operator">:</span> PartialReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> useModel<span class="token operator">&gt;</span></span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> isGroup<span class="token punctuation">,</span> checkboxGroup<span class="token punctuation">,</span> elFormItemSize<span class="token punctuation">,</span> <span class="token constant">ELEMENT</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCheckboxGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> focus <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> size <span class="token operator">=</span> computed<span class="token operator">&lt;</span>string <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      checkboxGroup<span class="token operator">?.</span>checkboxGroupSize<span class="token operator">?.</span>value <span class="token operator">||</span>
      elFormItemSize<span class="token punctuation">.</span>value <span class="token operator">||</span>
      <span class="token constant">ELEMENT</span><span class="token punctuation">.</span>size
  <span class="token punctuation">)</span>
  <span class="token keyword">const</span> isChecked <span class="token operator">=</span> computed<span class="token operator">&lt;</span>boolean<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> model<span class="token punctuation">.</span>value
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">toTypeString</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;[object Boolean]&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> value
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> value<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>label<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> value <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> value <span class="token operator">===</span> props<span class="token punctuation">.</span>trueLabel
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span>value
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> checkboxSize <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> temCheckboxSize <span class="token operator">=</span> props<span class="token punctuation">.</span>size <span class="token operator">||</span> elFormItemSize<span class="token punctuation">.</span>value <span class="token operator">||</span> <span class="token constant">ELEMENT</span><span class="token punctuation">.</span>size
    <span class="token keyword">return</span> isGroup<span class="token punctuation">.</span>value
      <span class="token operator">?</span> checkboxGroup<span class="token operator">?.</span>checkboxGroupSize<span class="token operator">?.</span>value <span class="token operator">||</span> temCheckboxSize
      <span class="token operator">:</span> temCheckboxSize
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    isChecked<span class="token punctuation">,</span>
    focus<span class="token punctuation">,</span>
    size<span class="token punctuation">,</span>
    checkboxSize<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">useDisabled</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> IUseCheckboxProps<span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    model<span class="token punctuation">,</span>
    isChecked<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token operator">:</span> PartialReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> useModel<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>
    PartialReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> useCheckboxStatus<span class="token operator">&gt;</span></span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> elForm<span class="token punctuation">,</span> isGroup<span class="token punctuation">,</span> checkboxGroup <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCheckboxGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> isLimitDisabled <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> max <span class="token operator">=</span> checkboxGroup<span class="token punctuation">.</span>max<span class="token operator">?.</span>value
    <span class="token keyword">const</span> min <span class="token operator">=</span> checkboxGroup<span class="token punctuation">.</span>min<span class="token operator">?.</span>value
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">(</span>max <span class="token operator">||</span> min<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> model<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> max <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isChecked<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">||</span>
      <span class="token punctuation">(</span>model<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> min <span class="token operator">&amp;&amp;</span> isChecked<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> isDisabled <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> disabled <span class="token operator">=</span> props<span class="token punctuation">.</span>disabled <span class="token operator">||</span> elForm<span class="token punctuation">.</span>disabled
    <span class="token keyword">return</span> isGroup<span class="token punctuation">.</span>value
      <span class="token operator">?</span> checkboxGroup<span class="token punctuation">.</span>disabled<span class="token operator">?.</span>value <span class="token operator">||</span> disabled <span class="token operator">||</span> isLimitDisabled<span class="token punctuation">.</span>value
      <span class="token operator">:</span> props<span class="token punctuation">.</span>disabled <span class="token operator">||</span> elForm<span class="token punctuation">.</span>disabled
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    isDisabled<span class="token punctuation">,</span>
    isLimitDisabled<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">setStoreValue</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> IUseCheckboxProps<span class="token punctuation">,</span>
  <span class="token punctuation">{</span> model <span class="token punctuation">}</span><span class="token operator">:</span> PartialReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> useModel<span class="token operator">&gt;</span></span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">addToStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>model<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>model<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>label<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      model<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>label<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      model<span class="token punctuation">.</span>value <span class="token operator">=</span> props<span class="token punctuation">.</span>trueLabel <span class="token operator">||</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  props<span class="token punctuation">.</span>checked <span class="token operator">&amp;&amp;</span> <span class="token function">addToStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">useEvent</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> IUseCheckboxProps<span class="token punctuation">,</span>
  <span class="token punctuation">{</span> isLimitExceeded <span class="token punctuation">}</span><span class="token operator">:</span> PartialReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> useModel<span class="token operator">&gt;</span></span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> elFormItem <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCheckboxGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> emit <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">function</span> <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> InputEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isLimitExceeded<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token keyword">const</span> target <span class="token operator">=</span> e<span class="token punctuation">.</span>target <span class="token keyword">as</span> HTMLInputElement
    <span class="token keyword">const</span> value <span class="token operator">=</span> target<span class="token punctuation">.</span>checked
      <span class="token operator">?</span> props<span class="token punctuation">.</span>trueLabel <span class="token operator">??</span> <span class="token boolean">true</span>
      <span class="token operator">:</span> props<span class="token punctuation">.</span>falseLabel <span class="token operator">??</span> <span class="token boolean">false</span>

    <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> e<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">watch</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>modelValue<span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      elFormItem<span class="token punctuation">.</span>formItemMitt<span class="token operator">?.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;el.form.change&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>val<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    handleChange<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useCheckbox</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> IUseCheckboxProps</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> model<span class="token punctuation">,</span> isLimitExceeded <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useModel</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> focus<span class="token punctuation">,</span> size<span class="token punctuation">,</span> isChecked<span class="token punctuation">,</span> checkboxSize <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCheckboxStatus</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    model<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> isDisabled <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useDisabled</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token punctuation">{</span> model<span class="token punctuation">,</span> isChecked <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> handleChange <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useEvent</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token punctuation">{</span> isLimitExceeded <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">setStoreValue</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token punctuation">{</span> model <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    isChecked<span class="token punctuation">,</span>
    isDisabled<span class="token punctuation">,</span>
    checkboxSize<span class="token punctuation">,</span>
    model<span class="token punctuation">,</span>
    handleChange<span class="token punctuation">,</span>
    focus<span class="token punctuation">,</span>
    size<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,16),c=[e];function l(u,k,r,i,d,y){return a(),s("div",null,c)}var b=n(o,[["render",l]]);export{g as __pageData,b as default};
