import{_ as s,e as n,o as a,aB as e}from"./plugin-vue_export-helper.84d1515a.js";var t="/web-vue3/assets/1.vue-cli3.1.3435c7ee.png",p="/web-vue3/assets/1.vue-cli3.2.76b836f3.png",o="/web-vue3/assets/1.vue-cli3.3.144d0fb6.png",c="/web-vue3/assets/1.vue-cli3.4.692be88f.png",r="/web-vue3/assets/1.vue-cli3.5.8ae00a98.png",l="/web-vue3/assets/1.vue-cli3.6.f4fb2c9c.png",i="/web-vue3/assets/1.vue-cli3.7.86307899.png",u="/web-vue3/assets/1.vue-cli3.8.3cae1406.png",k="/web-vue3/assets/1.vue-cli3.9.35a27131.png",d="/web-vue3/assets/1.vue-cli3.10.61b1b595.png";const _='{"title":"Vue/cli 3.x","description":"","frontmatter":{"lang":"zh-CN","sidebarDepth":2,"meta":[{"name":"description","content":"\u4E2A\u4EBA\u603B\u7ED3\u7684vuepress\u5B66\u4E60\u6280\u672F\u6587\u6863-\u8BED\u6CD5"},{"name":"keywords","content":"vuepress,\u6700\u65B0\u6280\u672F\u6587\u6863,vuepress\u8BED\u6CD5,markdown\u8BED\u6CD5"}]},"headers":[{"level":2,"title":"1.\u4F7F\u7528 vue-cli3.0 \u521B\u5EFA\u9879\u76EE","slug":"_1-\u4F7F\u7528-vue-cli3-0-\u521B\u5EFA\u9879\u76EE"},{"level":3,"title":"1.1 \u901A\u8FC7\u56FE\u5F62\u754C\u9762\u521B\u5EFA\u9879\u76EE","slug":"_1-1-\u901A\u8FC7\u56FE\u5F62\u754C\u9762\u521B\u5EFA\u9879\u76EE"},{"level":3,"title":"1.2 \u4F7F\u7528 vue-cli3.0 \u521B\u5EFA\u9879\u76EE","slug":"_1-2-\u4F7F\u7528-vue-cli3-0-\u521B\u5EFA\u9879\u76EE"},{"level":3,"title":"1.3 \u542F\u52A8\u9879\u76EE","slug":"_1-3-\u542F\u52A8\u9879\u76EE"},{"level":2,"title":"2.\u9879\u76EE\u4ECB\u7ECD","slug":"_2-\u9879\u76EE\u4ECB\u7ECD"},{"level":3,"title":"1.\u67E5\u770B\u5E2E\u52A9","slug":"_1-\u67E5\u770B\u5E2E\u52A9"},{"level":3,"title":"2.\u914D\u7F6E webpack","slug":"_2-\u914D\u7F6E-webpack"},{"level":3,"title":"3.chainWebpack","slug":"_3-chainwebpack"},{"level":3,"title":"4.configuireWebpack","slug":"_4-configuirewebpack"},{"level":3,"title":"5.\u4EE3\u7406\u8BF7\u6C42","slug":"_5-\u4EE3\u7406\u8BF7\u6C42"},{"level":3,"title":"6.\u7B2C\u4E09\u65B9\u63D2\u4EF6\u914D\u7F6E","slug":"_6-\u7B2C\u4E09\u65B9\u63D2\u4EF6\u914D\u7F6E"}],"relativePath":"vue3/cli.md","lastUpdated":1664207565667}',b={},g=e(`<h1 id="vue-cli-3-x">Vue/cli 3.x</h1><div class="tip custom-block"><p class="custom-block-title">\u524D\u8A00</p><p>\u8865\u5145\u4E00\u4E9B\u5B98\u65B9\u6587\u6863\u4E2D\u6CA1\u6709\u7684\uFF0C\u4F46\u662F\u5B9E\u9645\u5F00\u53D1\u4E2D\u6700\u597D\u9700\u8981\u4E86\u89E3\u7684\u5185\u5BB9</p></div><h2 id="_1-\u4F7F\u7528-vue-cli3-0-\u521B\u5EFA\u9879\u76EE">1.\u4F7F\u7528 vue-cli3.0 \u521B\u5EFA\u9879\u76EE</h2><div class="language-sh"><pre><code><span class="token function">yarn</span> <span class="token function">add</span> @vue/cli <span class="token parameter variable">-g</span>
</code></pre></div><h3 id="_1-1-\u901A\u8FC7\u56FE\u5F62\u754C\u9762\u521B\u5EFA\u9879\u76EE">1.1 \u901A\u8FC7\u56FE\u5F62\u754C\u9762\u521B\u5EFA\u9879\u76EE</h3><div class="language-bash"><pre><code>vue ui
</code></pre></div><p><img src="`+t+'" alt=""></p><p><img src="'+p+'" alt=""></p><p><img src="'+o+'" alt=""></p><p><img src="'+c+'" alt=""></p><p><img src="'+r+'" alt=""></p><p><img src="'+l+'" alt=""></p><p><img src="'+i+'" alt=""></p><p><img src="'+u+'" alt=""></p><p><img src="'+k+'" alt=""></p><p><img src="'+d+`" alt=""></p><h3 id="_1-2-\u4F7F\u7528-vue-cli3-0-\u521B\u5EFA\u9879\u76EE">1.2 \u4F7F\u7528 vue-cli3.0 \u521B\u5EFA\u9879\u76EE</h3><div class="language-sh"><pre><code>vue create my-demo
</code></pre></div><blockquote><ul><li>\u9009\u62E9\u6A21\u677F</li></ul><div class="language-bash"><div class="highlight-lines"><br><br><br><div class="highlighted">\xA0</div><br></div><pre><code>? Please pick a preset:
 Default <span class="token punctuation">(</span><span class="token punctuation">[</span>Vue <span class="token number">2</span><span class="token punctuation">]</span> babel, eslint<span class="token punctuation">)</span>          <span class="token comment"># vue2.x\u6700\u7B80\u914D\u7F6E</span>
 Default <span class="token punctuation">(</span>Vue <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>Vue <span class="token number">3</span><span class="token punctuation">]</span> babel, eslint<span class="token punctuation">)</span>  <span class="token comment"># vue3.x\u6700\u7B80\u914D\u7F6E</span>
\u276F Manually <span class="token keyword">select</span> features                 <span class="token comment"># \u6B64\u5904\u9009\u62E9\u8FD9\u4E2A\uFF0C\u7528\u81EA\u5B9A\u4E49\u914D\u7F6E</span>
</code></pre></div><ul><li>\u9009\u62E9\u90A3\u79CD\u5305\u7BA1\u7406\u5DE5\u5177</li></ul><div class="language-bash"><pre><code>\u276F Use Yarn
 Use NPM
</code></pre></div><ul><li>\u9009\u62E9\u914D\u7F6E</li></ul><div class="language-bash"><pre><code>? Please pick a preset: Manually <span class="token keyword">select</span> features
? Check the features needed <span class="token keyword">for</span> your project:        <span class="token comment"># \u5168\u90E8\u9009\u4E2D\u914D\u7F6E</span>
\u25C9 Choose Vue version                                <span class="token comment"># \u9009\u62E9vue\u7248\u672C</span>
\u25C9 Babel                                             <span class="token comment"># babel\u652F\u6301\uFF0C\u53EF\u4EE5\u5C06es6\u4EE3\u7801\u8F6C\u6362\u6210es5\u4EE3\u7801</span>
\u25C9 TypeScript                                        <span class="token comment"># TypeScript\u652F\u6301\uFF0C\u8BA9vue\u652F\u6301TypeScript\u65B9\u5F0F\u5F00\u53D1</span>
\u25C9 Progressive Web App <span class="token punctuation">(</span>PWA<span class="token punctuation">)</span> Support                 <span class="token comment"># pwa\u652F\u6301\uFF0C\u7F13\u5B58\u76F8\u5173\u8D44\u6E90\uFF0C\u63D0\u9AD8\u9875\u9762\u6027\u80FD</span>
\u25C9 Router                                            <span class="token comment"># \u5B89\u88C5vue-router</span>
\u25C9 Vuex                                              <span class="token comment"># \u5B89\u88C5vue-vuex</span>
\u25C9 CSS Pre-processors                                <span class="token comment"># \u652F\u6301css\u9884\u5904</span>
\u25C9 Linter / Formatter                                <span class="token comment"># \u652F\u6301\u4EE3\u7801\u7684\u683C\u5F0F\u5316</span>
\u25C9 Unit Testing                                      <span class="token comment"># \u652F\u6301\u5355\u5143\u6D4B\u8BD5\uFF0C\u63D0\u9AD8\u4EE3\u7801\u7684\u5065\u58EE\u6027</span>
\u276F\u25C9 E2E Testing                                       <span class="token comment"># \u652F\u6301\u81EA\u52A8\u5316\u6D4B\u8BD5</span>
</code></pre></div><blockquote><p>::: details vue \u7248\u672C</p><div class="language-sh"><div class="highlight-lines"><br><br><br><br><br><div class="highlighted">\xA0</div><br></div><pre><code>? Please pick a preset: Manually <span class="token keyword">select</span> features
? Check the features needed <span class="token keyword">for</span> your project: Choose Vue version, Babel, TS, PWA, Router, Vuex,
CSS Pre-processors, Linter, Unit, E2E
? Choose a version of Vue.js that you want to start the project with
 <span class="token number">2</span>.x
\u276F <span class="token number">3</span>.x                                                <span class="token comment"># \u9009\u62E9\u8FD9\u4E2A</span>
</code></pre></div><p>:::</p><p>::: details style</p><div class="language-sh"><div class="highlight-lines"><br><br><br><br><div class="highlighted">\xA0</div><br></div><pre><code>? Please pick a preset: Manually <span class="token keyword">select</span> features
? Check the features needed <span class="token keyword">for</span> your project: Choose Vue version, Babel, TS, PWA, Router, Vuex,
CSS Pre-processors, Linter, Unit, E2E
? Choose a version of Vue.js that you want to start the project with <span class="token number">3</span>.x
? Use class-style component syntax? <span class="token punctuation">(</span>y/N<span class="token punctuation">)</span> y         <span class="token comment"># \u9009\u62E9y</span>
</code></pre></div><p>::: ::: details babel \u914D\u7F6E</p><div class="language-sh"><div class="highlight-lines"><br><br><br><br><br><br><div class="highlighted">\xA0</div><br></div><pre><code>? Please pick a preset: Manually <span class="token keyword">select</span> features
? Check the features needed <span class="token keyword">for</span> your project: Choose Vue version, Babel, TS, PWA, Router, Vuex,
CSS Pre-processors, Linter, Unit, E2E
? Choose a version of Vue.js that you want to start the project with <span class="token number">3</span>.x
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript <span class="token punctuation">(</span>required <span class="token keyword">for</span> modern mode, auto-detected polyfills, transpiling
JSX<span class="token punctuation">)</span>? <span class="token punctuation">(</span>Y/n<span class="token punctuation">)</span> y                                     <span class="token comment"># \u9009\u62E9y</span>
</code></pre></div><p>:::: ::: details \u662F\u5426\u4F7F\u7528\u8DEF\u7531\u7684 history \u6A21\u5F0F</p><div class="language-sh"><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br></div><pre><code>? Please pick a preset: Manually <span class="token keyword">select</span> features
? Check the features needed <span class="token keyword">for</span> your project: Choose Vue version, Babel, TS, PWA, Router, Vuex,
CSS Pre-processors, Linter, Unit, E2E
? Choose a version of Vue.js that you want to start the project with <span class="token number">3</span>.x
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript <span class="token punctuation">(</span>required <span class="token keyword">for</span> modern mode, auto-detected polyfills, transpiling
JSX<span class="token punctuation">)</span>? Yes
? Use <span class="token function">history</span> mode <span class="token keyword">for</span> router? <span class="token punctuation">(</span>Requires proper server setup <span class="token keyword">for</span> index fallback <span class="token keyword">in</span> production<span class="token punctuation">)</span> <span class="token punctuation">(</span>
Y/n<span class="token punctuation">)</span> y                                            <span class="token comment"># \u9009\u62E9y\uFF08\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u9700\u8981\u9002\u5F53\u7684\u670D\u52A1\u5668\u8BBE\u7F6E\u4EE5\u5907\u7D22\u5F15\uFF09</span>
</code></pre></div><p>::: ::: details \u9009\u62E9 css \u9884\u5904\u7406\u5668</p><div class="language-sh"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br></div><pre><code>? Please pick a preset: Manually <span class="token keyword">select</span> features
? Check the features needed <span class="token keyword">for</span> your project: Choose Vue version, Babel, TS, PWA, Router, Vuex,
CSS Pre-processors, Linter, Unit, E2E
? Choose a version of Vue.js that you want to start the project with <span class="token number">3</span>.x
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript <span class="token punctuation">(</span>required <span class="token keyword">for</span> modern mode, auto-detected polyfills, transpiling
JSX<span class="token punctuation">)</span>? Yes
? Use <span class="token function">history</span> mode <span class="token keyword">for</span> router? <span class="token punctuation">(</span>Requires proper server setup <span class="token keyword">for</span> index fallback <span class="token keyword">in</span> production<span class="token punctuation">)</span> Y
es
? Pick a CSS pre-processor <span class="token punctuation">(</span>PostCSS, Autoprefixer and CSS Modules are supported by default<span class="token punctuation">)</span>: <span class="token punctuation">(</span>Us
e arrow keys<span class="token punctuation">)</span>
\u276F Sass/SCSS <span class="token punctuation">(</span>with dart-sass<span class="token punctuation">)</span>                    <span class="token comment"># \u9009\u62E9\u8FD9\u4E2A</span>
 Sass/SCSS <span class="token punctuation">(</span>with node-sass<span class="token punctuation">)</span>
 Less
 Stylus
</code></pre></div><p>::: ::: details \u9009\u62E9 Eslint \u4EE3\u7801\u9A8C\u8BC1\u89C4\u5219</p><div class="language-sh"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br></div><pre><code>? Please pick a preset: Manually <span class="token keyword">select</span> features
? Check the features needed <span class="token keyword">for</span> your project: Choose Vue version, Babel, TS, PWA, Router, Vuex,
CSS Pre-processors, Linter, Unit, E2E
? Choose a version of Vue.js that you want to start the project with <span class="token number">3</span>.x
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript <span class="token punctuation">(</span>required <span class="token keyword">for</span> modern mode, auto-detected polyfills, transpiling
JSX<span class="token punctuation">)</span>? Yes
? Use <span class="token function">history</span> mode <span class="token keyword">for</span> router? <span class="token punctuation">(</span>Requires proper server setup <span class="token keyword">for</span> index fallback <span class="token keyword">in</span> production<span class="token punctuation">)</span> Y
es
? Pick a CSS pre-processor <span class="token punctuation">(</span>PostCSS, Autoprefixer and CSS Modules are supported by default<span class="token punctuation">)</span>: Sas
s/SCSS <span class="token punctuation">(</span>with dart-sass<span class="token punctuation">)</span>
? Pick a linter / formatter config: <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>
\u276F ESLint with error prevention only            <span class="token comment"># \u9009\u62E9\u8FD9\u4E2A</span>
 ESLint + Airbnb config
 ESLint + Standard config
 ESLint + Prettier
 TSLint <span class="token punctuation">(</span>deprecated<span class="token punctuation">)</span>
</code></pre></div><p>::: ::: details \u9009\u62E9\u4EC0\u4E48\u65F6\u5019\u8FDB\u884C\u4EE3\u7801\u89C4\u5219\u68C0\u6D4B</p><div class="language-sh"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br></div><pre><code>? Please pick a preset: Manually <span class="token keyword">select</span> features
? Check the features needed <span class="token keyword">for</span> your project: Choose Vue version, Babel, TS, PWA, Router, Vuex,
CSS Pre-processors, Linter, Unit, E2E
? Choose a version of Vue.js that you want to start the project with <span class="token number">3</span>.x
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript <span class="token punctuation">(</span>required <span class="token keyword">for</span> modern mode, auto-detected polyfills, transpiling
JSX<span class="token punctuation">)</span>? Yes
? Use <span class="token function">history</span> mode <span class="token keyword">for</span> router? <span class="token punctuation">(</span>Requires proper server setup <span class="token keyword">for</span> index fallback <span class="token keyword">in</span> production<span class="token punctuation">)</span> Y
es
? Pick a CSS pre-processor <span class="token punctuation">(</span>PostCSS, Autoprefixer and CSS Modules are supported by default<span class="token punctuation">)</span>: Sas
s/SCSS <span class="token punctuation">(</span>with dart-sass<span class="token punctuation">)</span>
? Pick a linter / formatter config: Basic
? Pick additional lint features: <span class="token punctuation">(</span>Press <span class="token operator">&lt;</span>space<span class="token operator">&gt;</span> to select, <span class="token operator">&lt;</span>a<span class="token operator">&gt;</span> to toggle all, <span class="token operator">&lt;</span>i<span class="token operator">&gt;</span> to invert sele
ction<span class="token punctuation">)</span>
\u276F\u25C9 Lint on save                               <span class="token comment"># \u4FDD\u5B58\u5C31\u68C0\u6D4B,\u9009\u62E9\u8FD9\u4E2A</span>
\u25EF Lint and fix on commit                     <span class="token comment"># fix\u548Ccommit\u65F6\u5019\u68C0\u67E5</span>
</code></pre></div><p>::: ::: details \u5355\u5143\u6D4B\u8BD5\u914D\u7F6E</p><div class="language-sh"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br></div><pre><code>? Please pick a preset: Manually <span class="token keyword">select</span> features
? Check the features needed <span class="token keyword">for</span> your project: Choose Vue version, Babel, TS, PWA, Router, Vuex,
CSS Pre-processors, Linter, Unit, E2E
? Choose a version of Vue.js that you want to start the project with <span class="token number">3</span>.x
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript <span class="token punctuation">(</span>required <span class="token keyword">for</span> modern mode, auto-detected polyfills, transpiling
JSX<span class="token punctuation">)</span>? Yes
? Use <span class="token function">history</span> mode <span class="token keyword">for</span> router? <span class="token punctuation">(</span>Requires proper server setup <span class="token keyword">for</span> index fallback <span class="token keyword">in</span> production<span class="token punctuation">)</span> Y
es
? Pick a CSS pre-processor <span class="token punctuation">(</span>PostCSS, Autoprefixer and CSS Modules are supported by default<span class="token punctuation">)</span>: Sas
s/SCSS <span class="token punctuation">(</span>with dart-sass<span class="token punctuation">)</span>
? Pick a linter / formatter config: Basic
? Pick additional lint features: Lint on save
? Pick a unit testing solution: <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>
\u276F Mocha + Chai                               <span class="token comment"># \u9009\u62E9\u8FD9\u4E2A</span>
 Jest
</code></pre></div><p>::: ::: details \u9009\u62E9 e2e \u6D4B\u8BD5</p><div class="language-sh"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br></div><pre><code>? Please pick a preset: Manually <span class="token keyword">select</span> features
? Check the features needed <span class="token keyword">for</span> your project: Choose Vue version, Babel, TS, PWA, Router, Vuex,
CSS Pre-processors, Linter, Unit, E2E
? Choose a version of Vue.js that you want to start the project with <span class="token number">3</span>.x
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript <span class="token punctuation">(</span>required <span class="token keyword">for</span> modern mode, auto-detected polyfills, transpiling
JSX<span class="token punctuation">)</span>? Yes
? Use <span class="token function">history</span> mode <span class="token keyword">for</span> router? <span class="token punctuation">(</span>Requires proper server setup <span class="token keyword">for</span> index fallback <span class="token keyword">in</span> production<span class="token punctuation">)</span> Y
es
? Pick a CSS pre-processor <span class="token punctuation">(</span>PostCSS, Autoprefixer and CSS Modules are supported by default<span class="token punctuation">)</span>: Sas
s/SCSS <span class="token punctuation">(</span>with dart-sass<span class="token punctuation">)</span>
? Pick a linter / formatter config: Basic
? Pick additional lint features: Lint on save
? Pick a unit testing solution: Mocha
? Pick an E2E testing solution: <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>
\u276F Cypress <span class="token punctuation">(</span>Chrome only<span class="token punctuation">)</span>                     <span class="token comment"># \u9009\u62E9\u8FD9\u4E2A</span>
 Nightwatch <span class="token punctuation">(</span>WebDriver-based<span class="token punctuation">)</span>
 WebdriverIO <span class="token punctuation">(</span>WebDriver/DevTools based<span class="token punctuation">)</span>
</code></pre></div><p>::: ::: details \u628A babel,postcss,eslint \u8FD9\u4E9B\u914D\u7F6E\u6587\u4EF6\u653E\u54EA</p><div class="language-sh"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br></div><pre><code>? Please pick a preset: Manually <span class="token keyword">select</span> features
? Check the features needed <span class="token keyword">for</span> your project: Choose Vue version, Babel, TS, PWA, Router, Vuex,
CSS Pre-processors, Linter, Unit, E2E
? Choose a version of Vue.js that you want to start the project with <span class="token number">3</span>.x
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript <span class="token punctuation">(</span>required <span class="token keyword">for</span> modern mode, auto-detected polyfills, transpiling
JSX<span class="token punctuation">)</span>? Yes
? Use <span class="token function">history</span> mode <span class="token keyword">for</span> router? <span class="token punctuation">(</span>Requires proper server setup <span class="token keyword">for</span> index fallback <span class="token keyword">in</span> production<span class="token punctuation">)</span> Y
es
? Pick a CSS pre-processor <span class="token punctuation">(</span>PostCSS, Autoprefixer and CSS Modules are supported by default<span class="token punctuation">)</span>: Sas
s/SCSS <span class="token punctuation">(</span>with dart-sass<span class="token punctuation">)</span>
? Pick a linter / formatter config: Basic
? Pick additional lint features: Lint on save
? Pick a unit testing solution: Mocha
? Pick an E2E testing solution: Cypress
? Where <span class="token keyword">do</span> you prefer placing config <span class="token keyword">for</span> Babel, ESLint, etc.? <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>
\u276F In dedicated config files                 <span class="token comment"># \u72EC\u7ACB\u6587\u4EF6\u653E\u7F6E,\u9009\u62E9\u8FD9\u4E2A</span>
 In package.json                           <span class="token comment"># \u5B58\u653E\u5230package.json\u91CC</span>
</code></pre></div><p>::: ::: details \u662F\u5426\u4FDD\u5B58\u672C\u6B21\u7684\u914D\u7F6E</p><div class="language-sh"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br></div><pre><code>? Please pick a preset: Manually <span class="token keyword">select</span> features
? Check the features needed <span class="token keyword">for</span> your project: Choose Vue version, Babel, TS, PWA, Router, Vuex,
CSS Pre-processors, Linter, Unit, E2E
? Choose a version of Vue.js that you want to start the project with <span class="token number">3</span>.x
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript <span class="token punctuation">(</span>required <span class="token keyword">for</span> modern mode, auto-detected polyfills, transpiling
JSX<span class="token punctuation">)</span>? Yes
? Use <span class="token function">history</span> mode <span class="token keyword">for</span> router? <span class="token punctuation">(</span>Requires proper server setup <span class="token keyword">for</span> index fallback <span class="token keyword">in</span> production<span class="token punctuation">)</span> Y
es
? Pick a CSS pre-processor <span class="token punctuation">(</span>PostCSS, Autoprefixer and CSS Modules are supported by default<span class="token punctuation">)</span>: Sas
s/SCSS <span class="token punctuation">(</span>with dart-sass<span class="token punctuation">)</span>
? Pick a linter / formatter config: Basic
? Pick additional lint features: Lint on save
? Pick a unit testing solution: Mocha
? Pick an E2E testing solution: Cypress
? Where <span class="token keyword">do</span> you prefer placing config <span class="token keyword">for</span> Babel, ESLint, etc.? In dedicated config files
? Save this as a preset <span class="token keyword">for</span> future projects? <span class="token punctuation">(</span>y/N<span class="token punctuation">)</span> y   <span class="token comment"># \u662F\u5426\u8BB0\u5F55\u4E00\u4E0B\u4EE5\u4FBF\u4E0B\u6B21\u7EE7\u7EED\u4F7F\u7528\u8FD9\u5957\u914D\u7F6E\uFF0C\u9009\u62E9\u662F(y)</span>
</code></pre></div><p>:::</p><p>::: details \u914D\u7F6E\u540D\u79F0</p><div class="language-sh"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br></div><pre><code>? Please pick a preset: Manually <span class="token keyword">select</span> features
? Check the features needed <span class="token keyword">for</span> your project: Choose Vue version, Babel, TS, PWA, Router, Vuex,
CSS Pre-processors, Linter, Unit, E2E
? Choose a version of Vue.js that you want to start the project with <span class="token number">3</span>.x
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript <span class="token punctuation">(</span>required <span class="token keyword">for</span> modern mode, auto-detected polyfills, transpiling
JSX<span class="token punctuation">)</span>? Yes
? Use <span class="token function">history</span> mode <span class="token keyword">for</span> router? <span class="token punctuation">(</span>Requires proper server setup <span class="token keyword">for</span> index fallback <span class="token keyword">in</span> production<span class="token punctuation">)</span> Y
es
? Pick a CSS pre-processor <span class="token punctuation">(</span>PostCSS, Autoprefixer and CSS Modules are supported by default<span class="token punctuation">)</span>: Sas
s/SCSS <span class="token punctuation">(</span>with dart-sass<span class="token punctuation">)</span>
? Pick a linter / formatter config: Basic
? Pick additional lint features: Lint on save
? Pick a unit testing solution: Mocha
? Pick an E2E testing solution: Cypress
? Where <span class="token keyword">do</span> you prefer placing config <span class="token keyword">for</span> Babel, ESLint, etc.? In dedicated config files
? Save this as a preset <span class="token keyword">for</span> future projects? Yes
? Save preset as: vue3-all                             <span class="token comment"># \u9009\u4FDD\u5B58\u4E4B\u540E\uFF0C\u4F1A\u8BA9\u4F60\u5199\u4E00\u4E2A\u914D\u7F6E\u7684\u540D\u5B57,\u4E0B\u6B21\u8FDB\u5165\u914D\u7F6E\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u4F60\u8FD9\u6B21\u7684\u914D\u7F6E,\u914D\u7F6E\u540D\u79F0vue3-all</span>
</code></pre></div><p>:::</p></blockquote></blockquote><h3 id="_1-3-\u542F\u52A8\u9879\u76EE">1.3 \u542F\u52A8\u9879\u76EE</h3><div class="language-sh"><pre><code><span class="token builtin class-name">cd</span> my-demo <span class="token operator">&amp;&amp;</span> <span class="token function">yarn</span> <span class="token function">install</span>
<span class="token function">yarn</span> run serve
</code></pre></div><h2 id="_2-\u9879\u76EE\u4ECB\u7ECD">2.\u9879\u76EE\u4ECB\u7ECD</h2><h3 id="_1-\u67E5\u770B\u5E2E\u52A9">1.\u67E5\u770B\u5E2E\u52A9</h3><p>1.\u67E5\u770B vue \u4E2D\u76F8\u5173\u7684\u914D\u7F6E</p><div class="language-sh"><pre><code>-- <span class="token builtin class-name">help</span>
</code></pre></div><p>2.\u67E5\u770B webpack \u7684\u76F8\u5173\u914D\u7F6E\uFF0Cvue-cli3.0 \u4E2D\u5C06\u539F\u5148\u7684 webpack \u914D\u7F6E\u9690\u85CF\u8D77\u6765\u4E86</p><div class="language-sh"><pre><code>vue inspect
</code></pre></div><p>cmd \u4E2D\u51FA\u73B0 webpack \u7684\u914D\u7F6E\u4FE1\u606F\uFF1A</p><div class="language-sh"><pre><code> /* config.module.rule<span class="token punctuation">(</span><span class="token string">&#39;css&#39;</span><span class="token punctuation">)</span>.oneOf<span class="token punctuation">(</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">)</span> */
<span class="token punctuation">{</span>
resourceQuery: /<span class="token punctuation">\\</span>?vue/,
use: <span class="token punctuation">[</span>
    /* config.module.rule<span class="token punctuation">(</span><span class="token string">&#39;css&#39;</span><span class="token punctuation">)</span>.oneOf<span class="token punctuation">(</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">)</span>.use<span class="token punctuation">(</span><span class="token string">&#39;vue-style-loader&#39;</span><span class="token punctuation">)</span> */
    <span class="token punctuation">{</span>
    loader: <span class="token string">&#39;vue-style-loader&#39;</span>,
    options: <span class="token punctuation">{</span>
        sourceMap: false,
        shadowMode: <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    /* config.module.rule<span class="token punctuation">(</span><span class="token string">&#39;css&#39;</span><span class="token punctuation">)</span>.oneOf<span class="token punctuation">(</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">)</span>.use<span class="token punctuation">(</span><span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">)</span> */
    <span class="token punctuation">{</span>
    loader: <span class="token string">&#39;css-loader&#39;</span>,
    options: <span class="token punctuation">{</span>
        sourceMap: false,
        importLoaders: <span class="token number">2</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    /* config.module.rule<span class="token punctuation">(</span><span class="token string">&#39;css&#39;</span><span class="token punctuation">)</span>.oneOf<span class="token punctuation">(</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">)</span>.use<span class="token punctuation">(</span><span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">)</span> */
    <span class="token punctuation">{</span>
    loader: <span class="token string">&#39;postcss-loader&#39;</span>,
    options: <span class="token punctuation">{</span>
        sourceMap: <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token punctuation">}</span>,
</code></pre></div><h3 id="_2-\u914D\u7F6E-webpack">2.\u914D\u7F6E webpack</h3><p>1.\u6253\u5305\u9879\u76EE</p><div class="language-sh"><pre><code><span class="token function">yarn</span> run build
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230\u6253\u5305\u540E\u7684\u9879\u76EE\u4E2D\u8D44\u6E90\u8DEF\u5F84\u90FD\u662F\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u5F53\u6211\u4EEC\u9879\u76EE\u4E0A\u7EBF\u7684\u65F6\u5019\u6709\u7684\u8D44\u6E90\u8DEF\u5F84\u662F url \u8DEF\u5F84\uFF0C\u800C\u4E14\u6709\u65F6\u5019\u4F1A\u4FEE\u6539\u9759\u6001\u8D44\u6E90\u7684\u8DEF\u5F84</p><p>2.\u914D\u7F6E\u8D44\u6E90\u8DEF\u5F84</p><p>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u9762\u65B0\u5EFA vue.config.js \u6587\u4EF6,\u914D\u7F6E\u751F\u6210\u73AF\u5883\u7684\u8D44\u6E90\u5730\u5740\uFF0C\u548C\u6587\u4EF6\u8DEF\u5F84</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token literal-property property">publicPath</span><span class="token operator">:</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span><span class="token operator">===</span><span class="token string">&quot;production&quot;</span><span class="token operator">?</span><span class="token string">&#39;http://www.zhufeng.cn&#39;</span><span class="token operator">:</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">assetsDir</span><span class="token operator">:</span><span class="token string">&#39;asserts&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>3.\u914D\u7F6E\u8F93\u51FA\u76EE\u5F55</p><div class="language-sh"><pre><code>outputDir:<span class="token string">&#39;./my-dist&#39;</span>
</code></pre></div><p>\u6253\u5305\u540E\u7684\u8DEF\u5F84\u4E3A <code>my-dist</code></p><p>4.\u4F7F\u7528\u6A21\u677F\u65B9\u5F0F</p><p>vue-cli3.0 \u4E2D main.js \u4E2D\u9ED8\u8BA4\u4F7F\u7528 render \u51FD\u6570\u6E32\u67D3</p><div class="language-js"><pre><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5982\u679C\u8981\u5728 main.js \u4E2D\u914D\u7F6E\u4F7F\u7528 template</p><div class="language-js"><pre><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;&lt;h1&gt;hello&lt;/h1&gt;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5219\u9700\u8981\u914D\u7F6E</p><div class="language-sh"><pre><code>runtimeCompiler:true
</code></pre></div><p>5.sourceMap</p><p>\u9ED8\u8BA4\u4F1A\u6253\u5305 sourceMap \u6587\u4EF6\uFF0C\u751F\u4EA7\u9700\u8981\u53BB\u6389\uFF0C\u53EF\u4EE5\u914D\u7F6E</p><div class="language-sh"><pre><code>productionSourceMap:false
</code></pre></div><h3 id="_3-chainwebpack">3.chainWebpack</h3><p>\u63A7\u5236 webpack \u5185\u90E8\u914D\u7F6E</p><p>\u5982\uFF1A\u914D\u7F6E\u76EE\u5F55\u522B\u540D</p><div class="language-js"><pre><code><span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  config<span class="token punctuation">.</span>resolve<span class="token punctuation">.</span>alias<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;+&quot;</span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;src&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_4-configuirewebpack">4.configuireWebpack</h3><p>\u548C merge \u529F\u80FD\u4E00\u81F4</p><div class="language-json"><pre><code>configureWebpack<span class="token operator">:</span><span class="token punctuation">{</span>
    plugins<span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    module<span class="token operator">:</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_5-\u4EE3\u7406\u8BF7\u6C42">5.\u4EE3\u7406\u8BF7\u6C42</h3><p>\u9879\u76EE\u4E2D\u53D1\u9001\u8BF7\u6C42</p><div class="language-js"><pre><code> <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/getUser&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>\u9879\u76EE\u4E2D\u5199\u4E00\u4E2A\u670D\u52A1 server.js</p><div class="language-js"><pre><code><span class="token keyword">let</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/getUser&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;zfpx&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
</code></pre></div><p>\u51FA\u73B0\u8DE8\u57DF</p><p>\u8FD9\u65F6\u9700\u8981\u4F7F\u7528 webpack \u7684\u4EE3\u7406</p><div class="language-js"><pre><code><span class="token literal-property property">devServer</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token string-property property">&#39;/api/getUser&#39;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">target</span><span class="token operator">:</span><span class="token string">&#39;http://localhost:3000&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_6-\u7B2C\u4E09\u65B9\u63D2\u4EF6\u914D\u7F6E">6.\u7B2C\u4E09\u65B9\u63D2\u4EF6\u914D\u7F6E</h3><p>\u5199\u4E00\u4E2A\u516C\u5171\u7684 less \u6587\u4EF6\uFF0C\u6BCF\u4E2A\u9875\u9762\u90FD\u9700\u8981\u5F15\u5165\uFF0C\u8FD9\u91CC\u4E0D\u7528\u624B\u52A8\u5F15\u5165\u76F4\u63A5\u7528\u63D2\u4EF6 assets \u8DEF\u5F84\u4E0B\u65B0\u5EFA common.less \u6587\u4EF6</p><div class="language-css"><pre><code><span class="token atrule"><span class="token rule">@color</span><span class="token punctuation">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">;</span></span>
</code></pre></div><div class="language-sh"><pre><code>vue <span class="token function">add</span> style-resources-loader
</code></pre></div><p>\u9009\u62E9 less</p><p>\u8FD9\u65F6\u4F1A\u81EA\u52A8\u5728 vue.config.js \u4E2D\u6CE8\u5165\u6587\u4EF6,\u52A0\u5165\u8DEF\u5F84</p><div class="language-js"><pre><code><span class="token literal-property property">patterns</span><span class="token operator">:</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;src/assets/common.less&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre></div><p>\u8FD0\u884C\u9879\u76EE\u4F1A\u770B\u5230\u5B57\u4F53\u53D8\u7EA2</p>`,72),h=[g];function v(y,f,m,S,w,C){return a(),n("div",null,h)}var x=s(b,[["render",v]]);export{_ as __pageData,x as default};
