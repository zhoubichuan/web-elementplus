import{_ as n,e as s,o as a,aB as t}from"./plugin-vue_export-helper.eeeadc7a.js";var p="/web-elementplus/assets/1.1.7af57d4a.png",o="/web-elementplus/assets/1.2.e72f23fd.png",e="/web-elementplus/assets/1.3.89f926b4.png";const w='{"title":"\u4E00.Radio","description":"","frontmatter":{"lang":"zh-CN","sidebarDepth":2,"meta":[{"name":"description","content":"\u4E2A\u4EBA\u603B\u7ED3\u7684vuepress\u5B66\u4E60\u6280\u672F\u6587\u6863-\u8BED\u6CD5"},{"name":"keywords","content":"vuepress,\u6700\u65B0\u6280\u672F\u6587\u6863,vuepress\u8BED\u6CD5,markdown\u8BED\u6CD5"}]},"headers":[{"level":2,"title":"index.ts","slug":"index-ts"},{"level":3,"title":"radio.vue","slug":"radio-vue"},{"level":3,"title":"radio-button.vue","slug":"radio-button-vue"},{"level":3,"title":"radio-group.vue","slug":"radio-group-vue"},{"level":3,"title":"useRadio.ts","slug":"useradio-ts"},{"level":3,"title":"token.ts","slug":"token-ts"}],"relativePath":"element/form/radio.md","lastUpdated":1659538911508}',c={},l=t(`<h1 id="\u4E00-radio">\u4E00.Radio</h1><ul><li>\u7EC4\u4EF6\u4ECB\u7ECD<a href="https://element-plus.gitee.io/zh-CN/component/radio.html" target="_blank" rel="noopener noreferrer">Radio \u5355\u9009\u6846</a></li></ul><h2 id="index-ts">index.ts</h2><div class="language-js"><pre><code><span class="token keyword">import</span> Radio <span class="token keyword">from</span> <span class="token string">&#39;./src/radio.vue&#39;</span>
<span class="token keyword">import</span> RadioButton <span class="token keyword">from</span> <span class="token string">&#39;./src/radio-button.vue&#39;</span>
<span class="token keyword">import</span> RadioGroup <span class="token keyword">from</span> <span class="token string">&#39;./src/radio-group.vue&#39;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span> App <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> SFCWithInstall <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/types&#39;</span>

Radio<span class="token punctuation">.</span>install <span class="token operator">=</span> <span class="token punctuation">(</span>app<span class="token operator">:</span> App<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>Radio<span class="token punctuation">.</span>name<span class="token punctuation">,</span> Radio<span class="token punctuation">)</span>
 app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>RadioButton<span class="token punctuation">.</span>name<span class="token punctuation">,</span> RadioButton<span class="token punctuation">)</span>
 app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>RadioGroup<span class="token punctuation">.</span>name<span class="token punctuation">,</span> RadioGroup<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

Radio<span class="token punctuation">.</span>RadioButton <span class="token operator">=</span> RadioButton
Radio<span class="token punctuation">.</span>RadioGroup <span class="token operator">=</span> RadioGroup

<span class="token keyword">const</span> _Radio <span class="token operator">=</span> Radio <span class="token keyword">as</span> any <span class="token keyword">as</span> SFCWithInstall<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Radio<span class="token operator">&gt;</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">RadioButton</span><span class="token operator">:</span> <span class="token keyword">typeof</span> RadioButton
 <span class="token literal-property property">RadioGroup</span><span class="token operator">:</span> <span class="token keyword">typeof</span> RadioGroup
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> _Radio
<span class="token keyword">export</span> <span class="token keyword">const</span> ElRadio <span class="token operator">=</span> _Radio
<span class="token keyword">export</span> <span class="token keyword">const</span> ElRadioGroup <span class="token operator">=</span> RadioGroup
<span class="token keyword">export</span> <span class="token keyword">const</span> ElRadioButton <span class="token operator">=</span> RadioButton

<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;./src/token&#39;</span>
</code></pre></div><h3 id="radio-vue">radio.vue</h3><p><img src="`+p+'" alt=""></p><div class="tip custom-block"><p class="custom-block-title">\u4E3B\u8981\u601D\u8DEF</p><p>\u4ECE\u56FE\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0Cradio \u7EC4\u4EF6\u4F7F\u7528\u7684\u6D41\u7A0B</p><ul><li>\u4E3B\u7EBF\u4E0A\u901A\u8FC7 vue \u5C06\u672C\u7EC4\u4EF6\u6CE8\u518C\u5230 vue \u4E2D</li><li>\u7528\u6237\u4F7F\u7528\u672C\u7EC4\u4EF6\uFF0C\u8FDB\u884C\u76F8\u5173\u5C5E\u6027\u4F20\u9012\u53CA\u4E8B\u4EF6\u64CD\u4F5C</li><li>\u6E90\u7801\u5185\u90E8\u5BF9\uFF0C\u7528\u6237\u4F20\u9012\u7684\u5C5E\u6027/\u4E8B\u4EF6\u8FDB\u884C\u5904\u7406</li></ul></div><ul><li>Radio Attributes <ul><li>model-value / v-model\uFF1A\u5C5E\u6027\u4F20\u9012\uFF0C\u52A8\u6001\u4FEE\u6539</li><li>label\uFF1A\u5C5E\u6027\u4F20\u9012\uFF0C\u4F5C\u4E3A\u672C\u7EC4\u4EF6\u7684\u4E00\u4E2A\u6807\u8BC6\u4E0E\u5176\u4ED6\u5B57\u6BB5\u8FDB\u884C\u6BD4\u8F83</li><li>disabled:\u5C5E\u6027\u4F20\u9012\uFF0C\u901A\u8FC7\u6837\u5F0F\u63A7\u5236</li><li>border:\u5C5E\u6027\u4F20\u9012\uFF0C\u901A\u8FC7\u6837\u5F0F\u63A7\u5236 <blockquote><p><img src="'+o+`" alt=""></p></blockquote></li><li>size:\u5C5E\u6027\u4F20\u9012\u8BA1\u7B97\u540E\uFF0C\u901A\u8FC7\u6837\u5F0F\u63A7\u5236</li><li>name:\u5C5E\u6027\u4F20\u9012</li></ul></li><li>Radio Events <ul><li>change\uFF1A\u6570\u636E\u53D1\u751F\u53D8\u5316\u5185\u90E8\u5411\u5916\u90E8\u53D1\u9001\u6700\u65B0\u6570\u636E</li></ul></li></ul><p>::: details \u7B80\u5316\u540E\u7684\u4EE3\u7801</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-radio<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      [\`el-radio--\${radioSize || <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span>}\`]: radioSize,
      <span class="token punctuation">&#39;</span>is-disabled<span class="token punctuation">&#39;</span>: isDisabled,
      <span class="token punctuation">&#39;</span>is-focus<span class="token punctuation">&#39;</span>: focus,
      <span class="token punctuation">&#39;</span>is-bordered<span class="token punctuation">&#39;</span>: border,
      <span class="token punctuation">&#39;</span>is-checked<span class="token punctuation">&#39;</span>: model === label,
    }<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@keydown.space.stop.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>model = isDisabled ? model : label<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-radio__input<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
        <span class="token punctuation">&#39;</span>is-disabled<span class="token punctuation">&#39;</span>: isDisabled,
        <span class="token punctuation">&#39;</span>is-checked<span class="token punctuation">&#39;</span>: model === label,
      }<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-radio__inner<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
        <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radioRef<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>model<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-radio__original<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>label<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isDisabled<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>-1<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@focus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>focus = true<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@blur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>focus = false<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-radio__label<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@keydown.stop</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span>
        {{ label }}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> computed<span class="token punctuation">,</span> nextTick<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">UPDATE_MODEL_EVENT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/constants&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isValidComponentSize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/validators&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRadio<span class="token punctuation">,</span> useRadioAttrs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./useRadio&#39;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span> PropType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> ComponentSize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/types&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
 <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ElRadio&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">componentName</span><span class="token operator">:</span> <span class="token string">&#39;ElRadio&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">modelValue</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token literal-property property">disabled</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
   <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token literal-property property">border</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
   <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> <span class="token punctuation">{</span> isGroup<span class="token punctuation">,</span> radioGroup<span class="token punctuation">,</span> elFormItemSize<span class="token punctuation">,</span> <span class="token constant">ELEMENT</span><span class="token punctuation">,</span> focus<span class="token punctuation">,</span> elForm <span class="token punctuation">}</span> <span class="token operator">=</span>
     <span class="token function">useRadio</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

   <span class="token keyword">const</span> radioRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token keyword">const</span> model <span class="token operator">=</span> computed<span class="token operator">&lt;</span>string <span class="token operator">|</span> number <span class="token operator">|</span> boolean<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
     <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> isGroup<span class="token punctuation">.</span>value <span class="token operator">?</span> radioGroup<span class="token punctuation">.</span>modelValue <span class="token operator">:</span> props<span class="token punctuation">.</span>modelValue
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token function">set</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">if</span> <span class="token punctuation">(</span>isGroup<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         radioGroup<span class="token punctuation">.</span><span class="token function">changeEvent</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
       <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
         ctx<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token constant">UPDATE_MODEL_EVENT</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>
       <span class="token punctuation">}</span>
       radioRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>checked <span class="token operator">=</span> props<span class="token punctuation">.</span>modelValue <span class="token operator">===</span> props<span class="token punctuation">.</span>label
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>

   <span class="token keyword">const</span> <span class="token punctuation">{</span> tabIndex<span class="token punctuation">,</span> isDisabled <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRadioAttrs</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token punctuation">{</span>
     isGroup<span class="token punctuation">,</span>
     radioGroup<span class="token punctuation">,</span>
     elForm<span class="token punctuation">,</span>
     model<span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>

   <span class="token keyword">const</span> radioSize <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
     <span class="token keyword">const</span> temRadioSize <span class="token operator">=</span> props<span class="token punctuation">.</span>size <span class="token operator">||</span> elFormItemSize<span class="token punctuation">.</span>value <span class="token operator">||</span> <span class="token constant">ELEMENT</span><span class="token punctuation">.</span>size
     <span class="token keyword">return</span> isGroup<span class="token punctuation">.</span>value
       <span class="token operator">?</span> radioGroup<span class="token punctuation">.</span>radioGroupSize <span class="token operator">||</span> temRadioSize
       <span class="token operator">:</span> temRadioSize
   <span class="token punctuation">}</span><span class="token punctuation">)</span>

   <span class="token keyword">function</span> <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
       ctx<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> model<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">return</span> <span class="token punctuation">{</span>
     focus<span class="token punctuation">,</span>
     isGroup<span class="token punctuation">,</span>
     isDisabled<span class="token punctuation">,</span>
     model<span class="token punctuation">,</span>
     tabIndex<span class="token punctuation">,</span>
     radioSize<span class="token punctuation">,</span>
     handleChange<span class="token punctuation">,</span>
     radioRef<span class="token punctuation">,</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>::: <a href="https://github.com/zhoubichuan/element-plus/blob/dev/packages/components/radio/src/radio.vue" target="_blank" rel="noopener noreferrer">\u6E90\u7801\u67E5\u770B</a></p><h3 id="radio-button-vue">radio-button.vue</h3><p><img src="`+e+`" alt=""></p><div class="tip custom-block"><p class="custom-block-title">\u4E3B\u8981\u601D\u8DEF</p><p>\u4ECE\u56FE\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0Cradio \u7EC4\u4EF6\u4F7F\u7528\u7684\u6D41\u7A0B</p><ul><li>radio-button \u4F5C\u4E3A radio-group \u7684\u63D2\u69FD\u4F7F\u7528</li><li>\u6E90\u7801\u5185\u90E8\u5BF9\uFF0C\u7528\u6237\u4F20\u9012\u7684\u5C5E\u6027/\u4E8B\u4EF6\u8FDB\u884C\u5904\u7406</li></ul></div><p>Radio-button Attributes</p><ul><li>label</li><li>disabled</li><li>name</li></ul><p>::: details \u7B80\u5316\u540E\u7684\u4EE3\u7801</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-radio-button<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
      size ? <span class="token punctuation">&#39;</span>el-radio-button--<span class="token punctuation">&#39;</span> + size : <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span>,
      {
        <span class="token punctuation">&#39;</span>is-active<span class="token punctuation">&#39;</span>: value === label,
        <span class="token punctuation">&#39;</span>is-disabled<span class="token punctuation">&#39;</span>: isDisabled,
        <span class="token punctuation">&#39;</span>is-focus<span class="token punctuation">&#39;</span>: focus,
      },
    ]<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:aria-checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value === label<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:aria-disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isDisabled<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tabIndex<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@keydown.space.stop.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value = isDisabled ? value : label<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
      <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radioRef<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-radio-button__original-radio<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>label<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isDisabled<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>-1<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@focus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>focus = true<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@blur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>focus = false<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-radio-button__inner<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value === label ? activeStyle : null<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@keydown.stop</span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span>
        {{ label }}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRadio<span class="token punctuation">,</span> useRadioAttrs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./useRadio&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;ElRadioButton&quot;</span><span class="token punctuation">,</span>

  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Number<span class="token punctuation">,</span> Boolean<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">disabled</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>
      isGroup<span class="token punctuation">,</span>
      radioGroup<span class="token punctuation">,</span>
      elFormItemSize<span class="token punctuation">,</span>
      <span class="token constant">ELEMENT</span><span class="token punctuation">,</span>
      focus<span class="token punctuation">,</span>
      elForm<span class="token punctuation">,</span>
    <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRadio</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> size <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> radioGroup<span class="token punctuation">.</span>radioGroupSize <span class="token operator">||</span> elFormItemSize<span class="token punctuation">.</span>value <span class="token operator">||</span> <span class="token constant">ELEMENT</span><span class="token punctuation">.</span>size
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> radioRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> value <span class="token operator">=</span> computed<span class="token operator">&lt;</span>boolean <span class="token operator">|</span> string <span class="token operator">|</span> number<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> radioGroup<span class="token punctuation">.</span>modelValue
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        radioGroup<span class="token punctuation">.</span><span class="token function">changeEvent</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>

        radioRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>checked <span class="token operator">=</span> radioGroup<span class="token punctuation">.</span>modelValue <span class="token operator">===</span> props<span class="token punctuation">.</span>label
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> isDisabled<span class="token punctuation">,</span> tabIndex <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRadioAttrs</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">model</span><span class="token operator">:</span> value<span class="token punctuation">,</span>
      elForm<span class="token punctuation">,</span>
      radioGroup<span class="token punctuation">,</span>
      isGroup<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> activeStyle <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> radioGroup<span class="token punctuation">.</span>fill <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> radioGroup<span class="token punctuation">.</span>fill <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">boxShadow</span><span class="token operator">:</span> radioGroup<span class="token punctuation">.</span>fill <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">-1px 0 0 0 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>radioGroup<span class="token punctuation">.</span>fill<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> radioGroup<span class="token punctuation">.</span>textColor <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      isGroup<span class="token punctuation">,</span>
      size<span class="token punctuation">,</span>
      isDisabled<span class="token punctuation">,</span>
      tabIndex<span class="token punctuation">,</span>
      value<span class="token punctuation">,</span>
      focus<span class="token punctuation">,</span>
      activeStyle<span class="token punctuation">,</span>
      radioRef<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>:::</p><p><a href="https://github.com/zhoubichuan/element-plus/blob/dev/packages/components/radio/src/radio-button.vue" target="_blank" rel="noopener noreferrer">\u6E90\u7801\u67E5\u770B</a></p><h3 id="radio-group-vue">radio-group.vue</h3><p>Radio-group Attributes</p><ul><li>model-value / v-model</li><li>size</li><li>disabled</li><li>text-color</li><li>fill</li></ul><p>Radio-group Events</p><ul><li>change</li></ul><p>::: details \u7B80\u5316\u540E\u7684\u4EE3\u7801</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radioGroup<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-radio-group<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radiogroup<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@keydown</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleKeydown<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  defineComponent<span class="token punctuation">,</span>
  nextTick<span class="token punctuation">,</span>
  computed<span class="token punctuation">,</span>
  provide<span class="token punctuation">,</span>
  onMounted<span class="token punctuation">,</span>
  inject<span class="token punctuation">,</span>
  ref<span class="token punctuation">,</span>
  reactive<span class="token punctuation">,</span>
  toRefs<span class="token punctuation">,</span>
  watch<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">EVENT_CODE</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/aria&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">UPDATE_MODEL_EVENT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/constants&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isValidComponentSize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/validators&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> elFormItemKey <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/tokens&#39;</span>
<span class="token keyword">import</span> radioGroupKey <span class="token keyword">from</span> <span class="token string">&#39;./token&#39;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span> PropType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> ElFormItemContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/tokens&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> ComponentSize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/types&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ElRadioGroup&#39;</span><span class="token punctuation">,</span>

  <span class="token literal-property property">componentName</span><span class="token operator">:</span> <span class="token string">&#39;ElRadioGroup&#39;</span><span class="token punctuation">,</span>

  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">modelValue</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Number<span class="token punctuation">,</span> Boolean<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>ComponentSize<span class="token operator">&gt;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">validator</span><span class="token operator">:</span> isValidComponentSize<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">textColor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">disabled</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">UPDATE_MODEL_EVENT</span><span class="token punctuation">,</span> <span class="token string">&#39;change&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> radioGroup <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> elFormItem <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>elFormItemKey<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> ElFormItemContext<span class="token punctuation">)</span>

    <span class="token keyword">const</span> radioGroupSize <span class="token operator">=</span> computed<span class="token operator">&lt;</span>ComponentSize<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> props<span class="token punctuation">.</span>size <span class="token operator">||</span> elFormItem<span class="token punctuation">.</span>size
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// methods</span>
    <span class="token keyword">const</span> <span class="token function-variable function">changeEvent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      ctx<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token constant">UPDATE_MODEL_EVENT</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
      <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        ctx<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">provide</span><span class="token punctuation">(</span>
      radioGroupKey<span class="token punctuation">,</span>
      <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ElRadioGroup&#39;</span><span class="token punctuation">,</span>
        <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">,</span>
        radioGroupSize<span class="token punctuation">,</span>
        changeEvent<span class="token punctuation">,</span>
      <span class="token punctuation">}</span> <span class="token keyword">as</span> any<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>

    <span class="token function">watch</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>modelValue<span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        elFormItem<span class="token punctuation">.</span>formItemMitt<span class="token operator">?.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;el.form.change&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>val<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleKeydown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5DE6\u53F3\u4E0A\u4E0B\u6309\u952E \u53EF\u4EE5\u5728radio\u7EC4\u5185\u5207\u6362\u4E0D\u540C\u9009\u9879</span>
      <span class="token keyword">const</span> target <span class="token operator">=</span> e<span class="token punctuation">.</span>target
      <span class="token keyword">const</span> className <span class="token operator">=</span>
        target<span class="token punctuation">.</span>nodeName <span class="token operator">===</span> <span class="token string">&#39;INPUT&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;[type=radio]&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;[role=radio]&#39;</span>
      <span class="token keyword">const</span> radios <span class="token operator">=</span> radioGroup<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span>className<span class="token punctuation">)</span>
      <span class="token keyword">const</span> length <span class="token operator">=</span> radios<span class="token punctuation">.</span>length
      <span class="token keyword">const</span> index <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>radios<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
      <span class="token keyword">const</span> roleRadios <span class="token operator">=</span> radioGroup<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;[role=radio]&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">let</span> nextIndex <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>code<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token constant">EVENT_CODE</span><span class="token punctuation">.</span>left<span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token constant">EVENT_CODE</span><span class="token punctuation">.</span>up<span class="token operator">:</span>
          e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          nextIndex <span class="token operator">=</span> index <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">:</span> index <span class="token operator">-</span> <span class="token number">1</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token constant">EVENT_CODE</span><span class="token punctuation">.</span>right<span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token constant">EVENT_CODE</span><span class="token punctuation">.</span>down<span class="token operator">:</span>
          e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          nextIndex <span class="token operator">=</span> index <span class="token operator">===</span> length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> index <span class="token operator">+</span> <span class="token number">1</span>
          <span class="token keyword">break</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
          <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>nextIndex <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
      roleRadios<span class="token punctuation">[</span>nextIndex<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      roleRadios<span class="token punctuation">[</span>nextIndex<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> radios <span class="token operator">=</span> radioGroup<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;[type=radio]&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> firstLabel <span class="token operator">=</span> radios<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        <span class="token operator">!</span>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>radios<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">radio</span><span class="token operator">:</span> HTMLInputElement</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> radio<span class="token punctuation">.</span>checked<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
        firstLabel
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        firstLabel<span class="token punctuation">.</span>tabIndex <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      handleKeydown<span class="token punctuation">,</span>
      radioGroupSize<span class="token punctuation">,</span>
      radioGroup<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>:::</p><h3 id="useradio-ts">useRadio.ts</h3><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed<span class="token punctuation">,</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> elFormKey<span class="token punctuation">,</span> elFormItemKey <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/tokens&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useGlobalConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/util&#39;</span>
<span class="token keyword">import</span> radioGroupKey <span class="token keyword">from</span> <span class="token string">&#39;./token&#39;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span> ComputedRef<span class="token punctuation">,</span> WritableComputedRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> ElFormContext<span class="token punctuation">,</span> ElFormItemContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/tokens&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> RadioGroupContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./token&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useRadio</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token constant">ELEMENT</span> <span class="token operator">=</span> <span class="token function">useGlobalConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> elForm <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>elFormKey<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> ElFormContext<span class="token punctuation">)</span>
  <span class="token keyword">const</span> elFormItem <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>elFormItemKey<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> ElFormItemContext<span class="token punctuation">)</span>
  <span class="token keyword">const</span> radioGroup <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>radioGroupKey<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> RadioGroupContext<span class="token punctuation">)</span>
  <span class="token keyword">const</span> focus <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> isGroup <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> radioGroup<span class="token operator">?.</span>name <span class="token operator">===</span> <span class="token string">&#39;ElRadioGroup&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> elFormItemSize <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> elFormItem<span class="token punctuation">.</span>size <span class="token operator">||</span> <span class="token constant">ELEMENT</span><span class="token punctuation">.</span>size<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    isGroup<span class="token punctuation">,</span>
    focus<span class="token punctuation">,</span>
    radioGroup<span class="token punctuation">,</span>
    elForm<span class="token punctuation">,</span>
    <span class="token constant">ELEMENT</span><span class="token punctuation">,</span>
    elFormItemSize<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IUseRadioAttrsProps</span> <span class="token punctuation">{</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> boolean
  <span class="token literal-property property">label</span><span class="token operator">:</span> string <span class="token operator">|</span> number <span class="token operator">|</span> boolean
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IUseRadioAttrsState</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">isGroup</span><span class="token operator">:</span> ComputedRef<span class="token operator">&lt;</span>boolean<span class="token operator">&gt;</span>
  <span class="token literal-property property">radioGroup</span><span class="token operator">:</span> RadioGroupContext
  <span class="token literal-property property">elForm</span><span class="token operator">:</span> ElFormContext
  <span class="token literal-property property">model</span><span class="token operator">:</span> WritableComputedRef<span class="token operator">&lt;</span>string <span class="token operator">|</span> number <span class="token operator">|</span> boolean<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useRadioAttrs</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> IUseRadioAttrsProps<span class="token punctuation">,</span>
  <span class="token punctuation">{</span> isGroup<span class="token punctuation">,</span> radioGroup<span class="token punctuation">,</span> elForm<span class="token punctuation">,</span> model <span class="token punctuation">}</span><span class="token operator">:</span> IUseRadioAttrsState</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> isDisabled <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> isGroup<span class="token punctuation">.</span>value
      <span class="token operator">?</span> radioGroup<span class="token punctuation">.</span>disabled <span class="token operator">||</span> props<span class="token punctuation">.</span>disabled <span class="token operator">||</span> elForm<span class="token punctuation">.</span>disabled
      <span class="token operator">:</span> props<span class="token punctuation">.</span>disabled <span class="token operator">||</span> elForm<span class="token punctuation">.</span>disabled
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> tabIndex <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> isDisabled<span class="token punctuation">.</span>value <span class="token operator">||</span> <span class="token punctuation">(</span>isGroup<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> model<span class="token punctuation">.</span>value <span class="token operator">!==</span> props<span class="token punctuation">.</span>label<span class="token punctuation">)</span>
      <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span>
      <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    isDisabled<span class="token punctuation">,</span>
    tabIndex<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="token-ts">token.ts</h3><div class="language-js"><pre><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> InjectionKey <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> ComponentSize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/types&#39;</span>

type IModelType <span class="token operator">=</span> boolean <span class="token operator">|</span> string <span class="token operator">|</span> number

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">RadioGroupContext</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ElRadioGroup&#39;</span>
  <span class="token literal-property property">modelValue</span><span class="token operator">:</span> IModelType
  <span class="token literal-property property">fill</span><span class="token operator">:</span> string
  <span class="token literal-property property">textColor</span><span class="token operator">:</span> string
  <span class="token literal-property property">disabled</span><span class="token operator">:</span> boolean
  <span class="token literal-property property">size</span><span class="token operator">:</span> ComponentSize
  <span class="token literal-property property">radioGroupSize</span><span class="token operator">:</span> ComponentSize
  <span class="token function-variable function">changeEvent</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">val</span><span class="token operator">:</span> IModelType</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token literal-property property">radioGroupKey</span><span class="token operator">:</span> InjectionKey<span class="token operator">&lt;</span>RadioGroupContext<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token string">&#39;RadioGroup&#39;</span> <span class="token keyword">as</span> any

<span class="token keyword">export</span> <span class="token keyword">default</span> radioGroupKey
</code></pre></div>`,32),u=[l];function k(r,i,d,m,y,g){return a(),s("div",null,u)}var v=n(c,[["render",k]]);export{w as __pageData,v as default};
