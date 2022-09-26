import{_ as n,e as s,o as a,aB as p}from"./plugin-vue_export-helper.84d1515a.js";const y='{"title":"\u56DB.InputNumber","description":"","frontmatter":{"lang":"zh-CN","sidebarDepth":2,"meta":[{"name":"description","content":"\u4E2A\u4EBA\u603B\u7ED3\u7684vuepress\u5B66\u4E60\u6280\u672F\u6587\u6863-\u8BED\u6CD5"},{"name":"keywords","content":"vuepress,\u6700\u65B0\u6280\u672F\u6587\u6863,vuepress\u8BED\u6CD5,markdown\u8BED\u6CD5"}]},"headers":[{"level":2,"title":"index.ts","slug":"index-ts"},{"level":2,"title":"src","slug":"src"},{"level":3,"title":"index.vue","slug":"index-vue"}],"relativePath":"element/form/inputnumber.md","lastUpdated":1664207565655}',t={},o=p(`<h1 id="\u56DB-inputnumber">\u56DB.InputNumber</h1><ul><li>\u7EC4\u4EF6\u4ECB\u7ECD<a href="https://element-plus.gitee.io/#/zh-CN/component/input-number" target="_blank" rel="noopener noreferrer">InputNumber \u8BA1\u6570\u5668</a></li></ul><h2 id="index-ts">index.ts</h2><div class="language-js"><pre><code><span class="token keyword">import</span> InputNumber <span class="token keyword">from</span> <span class="token string">&#39;./src/index.vue&#39;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span> App <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> SFCWithInstall <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/types&#39;</span>

InputNumber<span class="token punctuation">.</span>install <span class="token operator">=</span> <span class="token punctuation">(</span>app<span class="token operator">:</span> App<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>InputNumber<span class="token punctuation">.</span>name<span class="token punctuation">,</span> InputNumber<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> _InputNumber <span class="token operator">=</span> InputNumber <span class="token keyword">as</span> SFCWithInstall<span class="token operator">&lt;</span><span class="token keyword">typeof</span> InputNumber<span class="token operator">&gt;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> _InputNumber
<span class="token keyword">export</span> <span class="token keyword">const</span> ElInputNumber <span class="token operator">=</span> _InputNumber
</code></pre></div><h2 id="src">src</h2><h3 id="index-vue">index.vue</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
      &#39;el-input-number&#39;,
      inputNumberSize ? &#39;el-input-number--&#39; + inputNumberSize : &#39;&#39;,
      { &#39;is-disabled&#39;: inputNumberDisabled },
      { &#39;is-without-controls&#39;: !controls },
      { &#39;is-controls-right&#39;: controlsAtRight },
    ]<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@dragstart.prevent</span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>
      <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>controls<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">v-repeat-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>decrease<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-input-number__decrease<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ &#39;is-disabled&#39;: minDisabled }<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@keydown.enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>decrease<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\`el-icon-\${controlsAtRight ? &#39;arrow-down&#39; : &#39;minus&#39;}\`<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>
      <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>controls<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">v-repeat-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>increase<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-input-number__increase<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ &#39;is-disabled&#39;: maxDisabled }<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@keydown.enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>increase<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\`el-icon-\${controlsAtRight ? &#39;arrow-up&#39; : &#39;plus&#39;}\`<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span>
      <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>input<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:model-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>displayValue<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>placeholder<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputNumberDisabled<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputNumberSize<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>max<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>min<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>label<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@keydown.up.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>increase<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@keydown.down.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>decrease<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@blur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(event) =&gt; $emit(&#39;blur&#39;, event)<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@focus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(event) =&gt; $emit(&#39;focus&#39;, event)<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleInput<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleInputChange<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  computed<span class="token punctuation">,</span>
  defineComponent<span class="token punctuation">,</span>
  reactive<span class="token punctuation">,</span>
  ref<span class="token punctuation">,</span>
  watch<span class="token punctuation">,</span>
  inject<span class="token punctuation">,</span>
  onMounted<span class="token punctuation">,</span>
  onUpdated<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> toRawType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/shared&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> RepeatClick <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/directives&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> elFormKey<span class="token punctuation">,</span> elFormItemKey <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/tokens&#39;</span>
<span class="token keyword">import</span> ElInput <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/components/input&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useGlobalConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/util&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isValidComponentSize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/validators&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> debugWarn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/error&#39;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span> PropType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> ElFormContext<span class="token punctuation">,</span> ElFormItemContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/tokens&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> ComponentSize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/types&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">IData</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">currentValue</span><span class="token operator">:</span> number <span class="token operator">|</span> string
  <span class="token literal-property property">userInput</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> number <span class="token operator">|</span> string
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ElInputNumber&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ElInput<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    RepeatClick<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">step</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">stepStrictly</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">modelValue</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>ComponentSize<span class="token operator">&gt;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">validator</span><span class="token operator">:</span> isValidComponentSize<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">controls</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">controlsPosition</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">placeholder</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">precision</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">val</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> val <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> val <span class="token operator">===</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>val <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;update:modelValue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;blur&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;focus&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> emit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token constant">ELEMENT</span> <span class="token operator">=</span> <span class="token function">useGlobalConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> elForm <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>elFormKey<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> ElFormContext<span class="token punctuation">)</span>
    <span class="token keyword">const</span> elFormItem <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>elFormItemKey<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> ElFormItemContext<span class="token punctuation">)</span>

    <span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>IData<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">currentValue</span><span class="token operator">:</span> props<span class="token punctuation">.</span>modelValue<span class="token punctuation">,</span>
      <span class="token literal-property property">userInput</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> minDisabled <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">_decrease</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>modelValue<span class="token punctuation">)</span> <span class="token operator">&lt;</span> props<span class="token punctuation">.</span>min
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> maxDisabled <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">_increase</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>modelValue<span class="token punctuation">)</span> <span class="token operator">&gt;</span> props<span class="token punctuation">.</span>max
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> numPrecision <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> stepPrecision <span class="token operator">=</span> <span class="token function">getPrecision</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>step<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>precision <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>stepPrecision <span class="token operator">&gt;</span> props<span class="token punctuation">.</span>precision<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">debugWarn</span><span class="token punctuation">(</span>
            <span class="token string">&#39;InputNumber&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;precision should not be less than the decimal places of step&#39;</span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> props<span class="token punctuation">.</span>precision
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token function">getPrecision</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>modelValue<span class="token punctuation">)</span><span class="token punctuation">,</span> stepPrecision<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> controlsAtRight <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> props<span class="token punctuation">.</span>controls <span class="token operator">&amp;&amp;</span> props<span class="token punctuation">.</span>controlsPosition <span class="token operator">===</span> <span class="token string">&#39;right&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> inputNumberSize <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> props<span class="token punctuation">.</span>size <span class="token operator">||</span> elFormItem<span class="token punctuation">.</span>size <span class="token operator">||</span> <span class="token constant">ELEMENT</span><span class="token punctuation">.</span>size
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> inputNumberDisabled <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> props<span class="token punctuation">.</span>disabled <span class="token operator">||</span> elForm<span class="token punctuation">.</span>disabled
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> displayValue <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>userInput <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> data<span class="token punctuation">.</span>userInput
      <span class="token punctuation">}</span>
      <span class="token keyword">let</span> currentValue <span class="token operator">=</span> data<span class="token punctuation">.</span>currentValue
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> currentValue <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>precision <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          currentValue <span class="token operator">=</span> currentValue<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>precision<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> currentValue
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token function-variable function">toPrecision</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num<span class="token punctuation">,</span> pre<span class="token operator">?</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>pre <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> pre <span class="token operator">=</span> numPrecision<span class="token punctuation">.</span>value
      <span class="token keyword">return</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>
        Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>num <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> pre<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> pre<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;&#39;</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> <span class="token function-variable function">getPrecision</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
      <span class="token keyword">const</span> valueString <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> dotPosition <span class="token operator">=</span> valueString<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">let</span> precision <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>dotPosition <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        precision <span class="token operator">=</span> valueString<span class="token punctuation">.</span>length <span class="token operator">-</span> dotPosition <span class="token operator">-</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> precision
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> <span class="token function-variable function">_increase</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> val <span class="token operator">!==</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">&amp;&amp;</span> val <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token keyword">return</span> data<span class="token punctuation">.</span>currentValue
      <span class="token keyword">const</span> precisionFactor <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> numPrecision<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
      <span class="token comment">// Solve the accuracy problem of JS decimal calculation by converting the value to integer.</span>
      <span class="token keyword">return</span> <span class="token function">toPrecision</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span>precisionFactor <span class="token operator">*</span> val <span class="token operator">+</span> precisionFactor <span class="token operator">*</span> props<span class="token punctuation">.</span>step<span class="token punctuation">)</span> <span class="token operator">/</span> precisionFactor
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> <span class="token function-variable function">_decrease</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> val <span class="token operator">!==</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">&amp;&amp;</span> val <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token keyword">return</span> data<span class="token punctuation">.</span>currentValue
      <span class="token keyword">const</span> precisionFactor <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> numPrecision<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
      <span class="token comment">// Solve the accuracy problem of JS decimal calculation by converting the value to integer.</span>
      <span class="token keyword">return</span> <span class="token function">toPrecision</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span>precisionFactor <span class="token operator">*</span> val <span class="token operator">-</span> precisionFactor <span class="token operator">*</span> props<span class="token punctuation">.</span>step<span class="token punctuation">)</span> <span class="token operator">/</span> precisionFactor
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> <span class="token function-variable function">increase</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>inputNumberDisabled<span class="token punctuation">.</span>value <span class="token operator">||</span> maxDisabled<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span>
      <span class="token keyword">const</span> value <span class="token operator">=</span> props<span class="token punctuation">.</span>modelValue <span class="token operator">||</span> <span class="token number">0</span>
      <span class="token keyword">const</span> newVal <span class="token operator">=</span> <span class="token function">_increase</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
      <span class="token function">setCurrentValue</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> <span class="token function-variable function">decrease</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>inputNumberDisabled<span class="token punctuation">.</span>value <span class="token operator">||</span> minDisabled<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span>
      <span class="token keyword">const</span> value <span class="token operator">=</span> props<span class="token punctuation">.</span>modelValue <span class="token operator">||</span> <span class="token number">0</span>
      <span class="token keyword">const</span> newVal <span class="token operator">=</span> <span class="token function">_decrease</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
      <span class="token function">setCurrentValue</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> <span class="token function-variable function">setCurrentValue</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> oldVal <span class="token operator">=</span> data<span class="token punctuation">.</span>currentValue
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> newVal <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">&amp;&amp;</span> props<span class="token punctuation">.</span>precision <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        newVal <span class="token operator">=</span> <span class="token function">toPrecision</span><span class="token punctuation">(</span>newVal<span class="token punctuation">,</span> props<span class="token punctuation">.</span>precision<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> newVal <span class="token operator">&gt;=</span> props<span class="token punctuation">.</span>max<span class="token punctuation">)</span> newVal <span class="token operator">=</span> props<span class="token punctuation">.</span>max
      <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> newVal <span class="token operator">&lt;=</span> props<span class="token punctuation">.</span>min<span class="token punctuation">)</span> newVal <span class="token operator">=</span> props<span class="token punctuation">.</span>min
      <span class="token keyword">if</span> <span class="token punctuation">(</span>oldVal <span class="token operator">===</span> newVal<span class="token punctuation">)</span> <span class="token keyword">return</span>
      data<span class="token punctuation">.</span>userInput <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;update:modelValue&#39;</span><span class="token punctuation">,</span> newVal<span class="token punctuation">)</span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span> newVal<span class="token punctuation">)</span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> newVal<span class="token punctuation">,</span> oldVal<span class="token punctuation">)</span>
      data<span class="token punctuation">.</span>currentValue <span class="token operator">=</span> newVal
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleInput</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>userInput <span class="token operator">=</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleInputChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> newVal <span class="token operator">=</span> value <span class="token operator">===</span> <span class="token string">&#39;&#39;</span> <span class="token operator">?</span> <span class="token keyword">undefined</span> <span class="token operator">:</span> <span class="token function">Number</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isNaN</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token operator">||</span> value <span class="token operator">===</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setCurrentValue</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      data<span class="token punctuation">.</span>userInput <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">focus</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      input<span class="token punctuation">.</span>value<span class="token punctuation">.</span>focus<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">blur</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      input<span class="token punctuation">.</span>value<span class="token punctuation">.</span>blur<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">watch</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>modelValue<span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> newVal <span class="token operator">=</span> value <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> value <span class="token operator">:</span> <span class="token function">Number</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isNaN</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>stepStrictly<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> stepPrecision <span class="token operator">=</span> <span class="token function">getPrecision</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>step<span class="token punctuation">)</span>
            <span class="token keyword">const</span> precisionFactor <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> stepPrecision<span class="token punctuation">)</span>
            newVal <span class="token operator">=</span>
              <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>newVal <span class="token operator">/</span> props<span class="token punctuation">.</span>step<span class="token punctuation">)</span> <span class="token operator">*</span> precisionFactor <span class="token operator">*</span> props<span class="token punctuation">.</span>step<span class="token punctuation">)</span> <span class="token operator">/</span>
              precisionFactor
          <span class="token punctuation">}</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>precision <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            newVal <span class="token operator">=</span> <span class="token function">toPrecision</span><span class="token punctuation">(</span>newVal<span class="token punctuation">,</span> props<span class="token punctuation">.</span>precision<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> newVal <span class="token operator">&gt;=</span> props<span class="token punctuation">.</span>max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          newVal <span class="token operator">=</span> props<span class="token punctuation">.</span>max
          <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;update:modelValue&#39;</span><span class="token punctuation">,</span> newVal<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> newVal <span class="token operator">&lt;=</span> props<span class="token punctuation">.</span>min<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          newVal <span class="token operator">=</span> props<span class="token punctuation">.</span>min
          <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;update:modelValue&#39;</span><span class="token punctuation">,</span> newVal<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        data<span class="token punctuation">.</span>currentValue <span class="token operator">=</span> newVal
        data<span class="token punctuation">.</span>userInput <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> innerInput <span class="token operator">=</span> input<span class="token punctuation">.</span>value<span class="token punctuation">.</span>input
      innerInput<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;role&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;spinbutton&#39;</span><span class="token punctuation">)</span>
      innerInput<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;aria-valuemax&#39;</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>max<span class="token punctuation">)</span>
      innerInput<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;aria-valuemin&#39;</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>min<span class="token punctuation">)</span>
      innerInput<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;aria-valuenow&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>currentValue<span class="token punctuation">)</span>
      innerInput<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;aria-disabled&#39;</span><span class="token punctuation">,</span> inputNumberDisabled<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        <span class="token function">toRawType</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>modelValue<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">&#39;Number&#39;</span> <span class="token operator">&amp;&amp;</span>
        props<span class="token punctuation">.</span>modelValue <span class="token operator">!==</span> <span class="token keyword">undefined</span>
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;update:modelValue&#39;</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">onUpdated</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> innerInput <span class="token operator">=</span> input<span class="token punctuation">.</span>value<span class="token punctuation">.</span>input
      innerInput<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;aria-valuenow&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>currentValue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      input<span class="token punctuation">,</span>
      displayValue<span class="token punctuation">,</span>
      handleInput<span class="token punctuation">,</span>
      handleInputChange<span class="token punctuation">,</span>
      controlsAtRight<span class="token punctuation">,</span>
      decrease<span class="token punctuation">,</span>
      increase<span class="token punctuation">,</span>
      inputNumberSize<span class="token punctuation">,</span>
      inputNumberDisabled<span class="token punctuation">,</span>
      maxDisabled<span class="token punctuation">,</span>
      minDisabled<span class="token punctuation">,</span>
      focus<span class="token punctuation">,</span>
      blur<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,7),e=[o];function c(u,l,k,r,i,d){return a(),s("div",null,e)}var w=n(t,[["render",c]]);export{y as __pageData,w as default};
