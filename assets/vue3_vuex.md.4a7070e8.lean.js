import{_ as n,e as s,o as a,aB as t}from"./plugin-vue_export-helper.eeeadc7a.js";const m='{"title":"Vuex 4.x","description":"","frontmatter":{"lang":"zh-CN","sidebarDepth":2,"meta":[{"name":"description","content":"\u4E2A\u4EBA\u603B\u7ED3\u7684vuepress\u5B66\u4E60\u6280\u672F\u6587\u6863-\u8BED\u6CD5"},{"name":"keywords","content":"vuepress,\u6700\u65B0\u6280\u672F\u6587\u6863,vuepress\u8BED\u6CD5,markdown\u8BED\u6CD5"}]},"relativePath":"vue3/vuex.md","lastUpdated":1659541246111}',p={},o=t(`__VP_STATIC_START__<h1 id="vuex-4-x">Vuex 4.x</h1><div class="tip custom-block"><p class="custom-block-title">\u524D\u8A00</p><p>\u8865\u5145\u4E00\u4E9B\u5B98\u65B9\u6587\u6863\u4E2D\u6CA1\u6709\u7684\uFF0C\u4F46\u662F\u5B9E\u9645\u5F00\u53D1\u4E2D\u6700\u597D\u9700\u8981\u4E86\u89E3\u7684\u5185\u5BB9</p></div><p>\u5B89\u88C5\u63D2\u4EF6</p><div class="language-sh"><pre><code>npm install vuex-composition-helpers@next -S
</code></pre></div><p>\u76EE\u5F55\u7ED3\u6784</p><div class="language-sh"><pre><code>\u2514\u2500\u2500 store
    \u2514\u2500\u2500 index.ts
\u2514\u2500\u2500 main.ts
</code></pre></div><p>index.ts</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> InjectionKey <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  ActionTree<span class="token punctuation">,</span>
  createStore<span class="token punctuation">,</span>
  GetterTree<span class="token punctuation">,</span>
  MutationTree<span class="token punctuation">,</span>
  Store<span class="token punctuation">,</span>
  StoreOptions<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span>

<span class="token keyword">declare</span> <span class="token keyword">interface</span> <span class="token class-name">globalStore</span> <span class="token punctuation">{</span>
  fakeName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> globalStoreState<span class="token operator">:</span> globalStore <span class="token operator">=</span> <span class="token punctuation">{</span>
  fakeName<span class="token operator">:</span> <span class="token string">&quot;Fake Name&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> globalStoreGetters<span class="token operator">:</span> GetterTree<span class="token operator">&lt;</span>globalStore<span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">fakeName</span><span class="token operator">:</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>fakeName<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> globalStoreMutations<span class="token operator">:</span> MutationTree<span class="token operator">&lt;</span>globalStore<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">UPDATE_FAKE_NAME</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> payload<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>fakeName <span class="token operator">=</span> payload
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> globalStoreActions<span class="token operator">:</span> ActionTree<span class="token operator">&lt;</span>globalStore<span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">updateFakeName</span><span class="token punctuation">(</span><span class="token punctuation">{</span> commit <span class="token punctuation">}</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&quot;UPDATE_FAKE_NAME&quot;</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> globalStoreOption<span class="token operator">:</span> StoreOptions<span class="token operator">&lt;</span>globalStore<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  state<span class="token operator">:</span> globalStoreState<span class="token punctuation">,</span>
  getters<span class="token operator">:</span> globalStoreGetters<span class="token punctuation">,</span>
  mutations<span class="token operator">:</span> globalStoreMutations<span class="token punctuation">,</span>
  actions<span class="token operator">:</span> globalStoreActions<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> globalStoreKey<span class="token operator">:</span> InjectionKey<span class="token operator">&lt;</span>Store<span class="token operator">&lt;</span>globalStore<span class="token operator">&gt;&gt;</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> createStore <span class="token operator">&lt;</span> globalStore <span class="token operator">&gt;</span> globalStoreOption
</code></pre></div><p>main.ts</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App.vue&quot;</span>
<span class="token keyword">import</span> store<span class="token punctuation">,</span> <span class="token punctuation">{</span> globalStoreKey <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./store&quot;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> globalStoreKey<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span>
</code></pre></div><p>component.vue</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ fakeName }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> inject<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> globalStoreKey <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../store&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useActions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex-composition-helpers&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u901A\u8FC7key\u62FF\u5230\u7279\u5B9A\u7684store</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span>globalStoreKey<span class="token punctuation">)</span>
    <span class="token comment">// \u8FD9\u91CC\u7684 useActions \u7C7B\u4F3C\u4E4B\u524Dvuex\u7684mapActions</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> updateFakeName <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useActions</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;updateFakeName&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u8FD9\u91CC\u7684 useState \u7C7B\u4F3C\u4E4B\u524Dvuex\u7684 mapGetters</span>
      <span class="token operator">...</span><span class="token function">useState</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;fakeName&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>__VP_STATIC_END__`,12),e=[o];function c(l,u,k,r,i,d){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{m as __pageData,y as default};
