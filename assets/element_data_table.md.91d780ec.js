import{_ as n,e as s,o as a,aB as p}from"./plugin-vue_export-helper.eeeadc7a.js";const w='{"title":"\u4E00.Table","description":"","frontmatter":{"lang":"zh-CN","sidebarDepth":2,"meta":[{"name":"description","content":"\u4E2A\u4EBA\u603B\u7ED3\u7684vuepress\u5B66\u4E60\u6280\u672F\u6587\u6863-\u8BED\u6CD5"},{"name":"keywords","content":"vuepress,\u6700\u65B0\u6280\u672F\u6587\u6863,vuepress\u8BED\u6CD5,markdown\u8BED\u6CD5"}]},"headers":[{"level":2,"title":"index.ts","slug":"index-ts"},{"level":2,"title":"store","slug":"store"},{"level":2,"title":"table","slug":"table"},{"level":2,"title":"table-body","slug":"table-body"},{"level":2,"title":"table-column","slug":"table-column"},{"level":2,"title":"table-footer","slug":"table-footer"},{"level":2,"title":"table-header","slug":"table-header"},{"level":2,"title":"config.ts","slug":"config-ts"},{"level":2,"title":"filter-panel.vue","slug":"filter-panel-vue"},{"level":2,"title":"h-helper.ts","slug":"h-helper-ts"},{"level":2,"title":"layout-observer.ts","slug":"layout-observer-ts"},{"level":2,"title":"table-layout.ts","slug":"table-layout-ts"},{"level":2,"title":"table.vue","slug":"table-vue"},{"level":2,"title":"tableColumn.ts","slug":"tablecolumn-ts"},{"level":2,"title":"util.ts","slug":"util-ts"}],"relativePath":"element/data/table.md","lastUpdated":1659615604029}',t={},o=p(`<h1 id="\u4E00-table">\u4E00.Table</h1><ul><li>\u7EC4\u4EF6\u4ECB\u7ECD<a href="https://element-plus.gitee.io/#/zh-CN/component/layout" target="_blank" rel="noopener noreferrer">Layout \u5E03\u5C40</a></li></ul><h2 id="index-ts">index.ts</h2><div class="language-js"><pre><code><span class="token keyword">import</span> Table <span class="token keyword">from</span> <span class="token string">&#39;./src/table.vue&#39;</span>
<span class="token keyword">import</span> TableColumn <span class="token keyword">from</span> <span class="token string">&#39;./src/tableColumn&#39;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span> App <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> SFCWithInstall <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/types&#39;</span>

Table<span class="token punctuation">.</span>install <span class="token operator">=</span> <span class="token punctuation">(</span>app<span class="token operator">:</span> App<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>Table<span class="token punctuation">.</span>name<span class="token punctuation">,</span> Table<span class="token punctuation">)</span>
  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>TableColumn<span class="token punctuation">.</span>name<span class="token punctuation">,</span> TableColumn<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

Table<span class="token punctuation">.</span>TableColumn <span class="token operator">=</span> TableColumn

<span class="token keyword">const</span> _Table <span class="token operator">=</span> Table <span class="token keyword">as</span> any <span class="token keyword">as</span> SFCWithInstall<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Table<span class="token operator">&gt;</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">TableColumn</span><span class="token operator">:</span> <span class="token keyword">typeof</span> TableColumn
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> _Table
<span class="token keyword">export</span> <span class="token keyword">const</span> ElTable <span class="token operator">=</span> _Table
<span class="token keyword">export</span> <span class="token keyword">const</span> ElTableColumn <span class="token operator">=</span> TableColumn
</code></pre></div><h2 id="store">store</h2><h2 id="table">table</h2><h2 id="table-body">table-body</h2><h2 id="table-column">table-column</h2><h2 id="table-footer">table-footer</h2><h2 id="table-header">table-header</h2><h2 id="config-ts">config.ts</h2><h2 id="filter-panel-vue">filter-panel.vue</h2><h2 id="h-helper-ts">h-helper.ts</h2><h2 id="layout-observer-ts">layout-observer.ts</h2><h2 id="table-layout-ts">table-layout.ts</h2><h2 id="table-vue">table.vue</h2><h2 id="tablecolumn-ts">tableColumn.ts</h2><h2 id="util-ts">util.ts</h2><p>::: details \u4EE3\u7801</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> hasOwn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/shared&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createPopper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@popperjs/core&#39;</span>
<span class="token keyword">import</span> PopupManager <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/popup-manager&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getValueByPath <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/util&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> off<span class="token punctuation">,</span> on <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/dom&#39;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span>
  PopperInstance<span class="token punctuation">,</span>
  IPopperOptions<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/components/popper&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> Indexable<span class="token punctuation">,</span> Nullable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/utils/types&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> TableColumnCtx <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./table-column/defaults&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getCell</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> Event</span><span class="token punctuation">)</span><span class="token operator">:</span> HTMLElement <span class="token punctuation">{</span>
  <span class="token keyword">let</span> cell <span class="token operator">=</span> event<span class="token punctuation">.</span>target <span class="token keyword">as</span> HTMLElement

  <span class="token keyword">while</span> <span class="token punctuation">(</span>cell <span class="token operator">&amp;&amp;</span> cell<span class="token punctuation">.</span>tagName<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">&#39;HTML&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cell<span class="token punctuation">.</span>tagName<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;TD&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> cell
    <span class="token punctuation">}</span>
    cell <span class="token operator">=</span> cell<span class="token punctuation">.</span>parentNode <span class="token keyword">as</span> HTMLElement
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">isObject</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">obj</span><span class="token operator">:</span> unknown</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean <span class="token punctuation">{</span>
  <span class="token keyword">return</span> obj <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">orderBy</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token literal-property property">array</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sortKey</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">reverse</span><span class="token operator">:</span> string <span class="token operator">|</span> number<span class="token punctuation">,</span>
  sortMethod<span class="token punctuation">,</span>
  <span class="token literal-property property">sortBy</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token punctuation">(</span>string <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> array<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> number<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    <span class="token operator">!</span>sortKey <span class="token operator">&amp;&amp;</span>
    <span class="token operator">!</span>sortMethod <span class="token operator">&amp;&amp;</span>
    <span class="token punctuation">(</span><span class="token operator">!</span>sortBy <span class="token operator">||</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>sortBy<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>sortBy<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> array
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> reverse <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    reverse <span class="token operator">=</span> reverse <span class="token operator">===</span> <span class="token string">&#39;descending&#39;</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    reverse <span class="token operator">=</span> reverse <span class="token operator">&amp;&amp;</span> reverse <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> getKey <span class="token operator">=</span> sortMethod
    <span class="token operator">?</span> <span class="token function-variable function">null</span>
    <span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>sortBy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>sortBy<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sortBy <span class="token operator">=</span> <span class="token punctuation">[</span>sortBy<span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">return</span> sortBy<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">by</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> by <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token function">getValueByPath</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> by<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token function">by</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> index<span class="token punctuation">,</span> array<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>sortKey <span class="token operator">!==</span> <span class="token string">&#39;$key&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&#39;$value&#39;</span> <span class="token keyword">in</span> value<span class="token punctuation">)</span> value <span class="token operator">=</span> value<span class="token punctuation">.</span>$value
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token function">isObject</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">getValueByPath</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> sortKey<span class="token punctuation">)</span> <span class="token operator">:</span> value<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token function-variable function">compare</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>sortMethod<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">sortMethod</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>value<span class="token punctuation">,</span> b<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> a<span class="token punctuation">.</span>key<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>key<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>key<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>key<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> b<span class="token punctuation">.</span>key<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> array
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        value<span class="token punctuation">,</span>
        index<span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> getKey <span class="token operator">?</span> <span class="token function">getKey</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> order <span class="token operator">=</span> <span class="token function">compare</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>order<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// make stable https://en.wikipedia.org/wiki/Sorting_algorithm#Stability</span>
        order <span class="token operator">=</span> a<span class="token punctuation">.</span>index <span class="token operator">-</span> b<span class="token punctuation">.</span>index
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> order <span class="token operator">*</span> <span class="token operator">+</span>reverse
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getColumnById</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token literal-property property">table</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">columns</span><span class="token operator">:</span> TableColumnCtx<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">columnId</span><span class="token operator">:</span> string
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> TableColumnCtx<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> column <span class="token operator">=</span> <span class="token keyword">null</span>
  table<span class="token punctuation">.</span>columns<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>id <span class="token operator">===</span> columnId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      column <span class="token operator">=</span> item
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> column
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getColumnByKey</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token literal-property property">table</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">columns</span><span class="token operator">:</span> TableColumnCtx<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">columnKey</span><span class="token operator">:</span> string
<span class="token punctuation">)</span><span class="token operator">:</span> TableColumnCtx<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> column <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> table<span class="token punctuation">.</span>columns<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> item <span class="token operator">=</span> table<span class="token punctuation">.</span>columns<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>columnKey <span class="token operator">===</span> columnKey<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      column <span class="token operator">=</span> item
      <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> column
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getColumnByCell</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token literal-property property">table</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">columns</span><span class="token operator">:</span> TableColumnCtx<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">cell</span><span class="token operator">:</span> HTMLElement
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> TableColumnCtx<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> matches <span class="token operator">=</span> <span class="token punctuation">(</span>cell<span class="token punctuation">.</span>className <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">el-table_[^\\s]+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gm</span></span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>matches<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">getColumnById</span><span class="token punctuation">(</span>table<span class="token punctuation">,</span> matches<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> getRowIdentity <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token literal-property property">row</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rowKey</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">row</span><span class="token operator">:</span> <span class="token constant">T</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>row<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;row is required when get row identity&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> rowKey <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rowKey<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> row<span class="token punctuation">[</span>rowKey<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> rowKey<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> current <span class="token operator">=</span> row
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> key<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      current <span class="token operator">=</span> current<span class="token punctuation">[</span>key<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> current <span class="token operator">+</span> <span class="token string">&#39;&#39;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> rowKey <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">rowKey</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> row<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getKeysMap</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token literal-property property">array</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rowKey</span><span class="token operator">:</span> string
<span class="token punctuation">)</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">row</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span> index<span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> arrayMap <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">;</span><span class="token punctuation">(</span>array <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">row<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    arrayMap<span class="token punctuation">[</span><span class="token function">getRowIdentity</span><span class="token punctuation">(</span>row<span class="token punctuation">,</span> rowKey<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> row<span class="token punctuation">,</span> index <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> arrayMap
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> mergeOptions<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>defaults<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">&amp;</span> <span class="token constant">K</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token constant">T</span> <span class="token operator">&amp;</span> <span class="token constant">K</span>
  <span class="token keyword">let</span> key
  <span class="token keyword">for</span> <span class="token punctuation">(</span>key <span class="token keyword">in</span> defaults<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    options<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> defaults<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>key <span class="token keyword">in</span> config<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>config <span class="token keyword">as</span> unknown <span class="token keyword">as</span> Indexable<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> value <span class="token operator">=</span> config<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        options<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> options
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">parseWidth</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">width</span><span class="token operator">:</span> number <span class="token operator">|</span> string</span><span class="token punctuation">)</span><span class="token operator">:</span> number <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>width <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    width <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>width <span class="token keyword">as</span> string<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isNaN</span><span class="token punctuation">(</span>width<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      width <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token operator">+</span>width
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">parseMinWidth</span><span class="token punctuation">(</span><span class="token parameter">minWidth</span><span class="token punctuation">)</span><span class="token operator">:</span> number <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> minWidth <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    minWidth <span class="token operator">=</span> <span class="token function">parseWidth</span><span class="token punctuation">(</span>minWidth<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isNaN</span><span class="token punctuation">(</span>minWidth<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      minWidth <span class="token operator">=</span> <span class="token number">80</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> minWidth
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">parseHeight</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">height</span><span class="token operator">:</span> number <span class="token operator">|</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> height <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> height
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> height <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\d+(?:px)?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>height<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>height<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> height
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token comment">// https://github.com/reduxjs/redux/blob/master/src/compose.js</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">compose</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>funcs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>funcs<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> arg
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>funcs<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> funcs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> funcs<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
        <span class="token function">a</span><span class="token punctuation">(</span><span class="token function">b</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> toggleRowStatus<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token literal-property property">statusArr</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">row</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span>
  <span class="token literal-property property">newVal</span><span class="token operator">:</span> boolean
<span class="token punctuation">)</span><span class="token operator">:</span> boolean <span class="token punctuation">{</span>
  <span class="token keyword">let</span> changed <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token keyword">const</span> index <span class="token operator">=</span> statusArr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span>
  <span class="token keyword">const</span> included <span class="token operator">=</span> index <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span>

  <span class="token keyword">const</span> <span class="token function-variable function">addRow</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    statusArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span>
    changed <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token function-variable function">removeRow</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    statusArr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    changed <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> newVal <span class="token operator">===</span> <span class="token string">&#39;boolean&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>included<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">addRow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>newVal <span class="token operator">&amp;&amp;</span> included<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">removeRow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>included<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">removeRow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">addRow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> changed
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">walkTreeNode</span><span class="token punctuation">(</span>
  root<span class="token punctuation">,</span>
  cb<span class="token punctuation">,</span>
  childrenKey <span class="token operator">=</span> <span class="token string">&#39;children&#39;</span><span class="token punctuation">,</span>
  lazyKey <span class="token operator">=</span> <span class="token string">&#39;hasChildren&#39;</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">isNil</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">)</span>

  <span class="token keyword">function</span> <span class="token function">_walker</span><span class="token punctuation">(</span><span class="token parameter">parent<span class="token punctuation">,</span> children<span class="token punctuation">,</span> level</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">cb</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> children<span class="token punctuation">,</span> level<span class="token punctuation">)</span>
    children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">[</span>lazyKey<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">cb</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> level <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> children <span class="token operator">=</span> item<span class="token punctuation">[</span>childrenKey<span class="token punctuation">]</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isNil</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">_walker</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> children<span class="token punctuation">,</span> level <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  root<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">[</span>lazyKey<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">cb</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> children <span class="token operator">=</span> item<span class="token punctuation">[</span>childrenKey<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isNil</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">_walker</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> children<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">let</span> removePopper

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createTablePopper</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">trigger</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span>
  <span class="token literal-property property">popperContent</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">popperOptions</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IPopperOptions<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">tooltipEffect</span><span class="token operator">:</span> string</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">renderContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> HTMLDivElement <span class="token punctuation">{</span>
    <span class="token keyword">const</span> isLight <span class="token operator">=</span> tooltipEffect <span class="token operator">===</span> <span class="token string">&#39;light&#39;</span>
    <span class="token keyword">const</span> content <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
    content<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">el-popper </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>isLight <span class="token operator">?</span> <span class="token string">&#39;is-light&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;is-dark&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    content<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> popperContent
    content<span class="token punctuation">.</span>style<span class="token punctuation">.</span>zIndex <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>PopupManager<span class="token punctuation">.</span><span class="token function">nextZIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span>
    <span class="token keyword">return</span> content
  <span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function">renderArrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> HTMLDivElement <span class="token punctuation">{</span>
    <span class="token keyword">const</span> arrow <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
    arrow<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">&#39;el-popper__arrow&#39;</span>
    arrow<span class="token punctuation">.</span>style<span class="token punctuation">.</span>bottom <span class="token operator">=</span> <span class="token string">&#39;-4px&#39;</span>
    <span class="token keyword">return</span> arrow
  <span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function">showPopper</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    popperInstance <span class="token operator">&amp;&amp;</span> popperInstance<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function-variable function">removePopper</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">removePopper</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      popperInstance <span class="token operator">&amp;&amp;</span> popperInstance<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      content <span class="token operator">&amp;&amp;</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span>
      <span class="token function">off</span><span class="token punctuation">(</span>trigger<span class="token punctuation">,</span> <span class="token string">&#39;mouseenter&#39;</span><span class="token punctuation">,</span> showPopper<span class="token punctuation">)</span>
      <span class="token function">off</span><span class="token punctuation">(</span>trigger<span class="token punctuation">,</span> <span class="token string">&#39;mouseleave&#39;</span><span class="token punctuation">,</span> removePopper<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> <span class="token literal-property property">popperInstance</span><span class="token operator">:</span> Nullable<span class="token operator">&lt;</span>PopperInstance<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">const</span> content <span class="token operator">=</span> <span class="token function">renderContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> arrow <span class="token operator">=</span> <span class="token function">renderArrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  content<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>arrow<span class="token punctuation">)</span>

  popperInstance <span class="token operator">=</span> <span class="token function">createPopper</span><span class="token punctuation">(</span>trigger<span class="token punctuation">,</span> content<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">modifiers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;offset&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;arrow&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">element</span><span class="token operator">:</span> arrow<span class="token punctuation">,</span>
          <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>popperOptions<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token function">on</span><span class="token punctuation">(</span>trigger<span class="token punctuation">,</span> <span class="token string">&#39;mouseenter&#39;</span><span class="token punctuation">,</span> showPopper<span class="token punctuation">)</span>
  <span class="token function">on</span><span class="token punctuation">(</span>trigger<span class="token punctuation">,</span> <span class="token string">&#39;mouseleave&#39;</span><span class="token punctuation">,</span> removePopper<span class="token punctuation">)</span>
  <span class="token keyword">return</span> popperInstance
<span class="token punctuation">}</span>
</code></pre></div><p>:::</p>`,21),e=[o];function c(l,u,k,r,i,y){return a(),s("div",null,e)}var m=n(t,[["render",c]]);export{w as __pageData,m as default};
