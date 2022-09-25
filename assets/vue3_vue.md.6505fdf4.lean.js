import{_ as b,aC as g,e as V,z as C,H as m,aB as _,E as h,o as q,j as n,g as s}from"./plugin-vue_export-helper.84d1515a.js";const N={name:"component-doc",components:{"render-demo-0":function(){const{toDisplayString:c,createElementVNode:F,createTextVNode:u,resolveComponent:l,withCtx:k,createVNode:o,openBlock:i,createElementBlock:e}=g,r=u("push\u6DFB\u52A0\u6570\u636E"),v=u("\u8D4B\u503C\u6DFB\u52A0\u6570\u636E");function B(t,a){const p=l("el-button");return i(),e("div",null,[F("div",null,"\u4FEE\u6539\u7684\u6570\u503C\uFF1A"+c(t.data.list),1),o(p,{onClick:t.handleClick},{default:k(()=>[r]),_:1},8,["onClick"]),o(p,{onClick:t.handleClick2},{default:k(()=>[v]),_:1},8,["onClick"])])}const{defineComponent:D,reactive:f,watch:y}=g,A=D({setup(t){const a=f({list:[]}),p=()=>{a.list.push(1)},E=()=>{a.list=[2]};return y(()=>a.list,(d,w)=>{alert(JSON.stringify({newVal:d,oldVal:w}))}),{data:a,handleClick:p,handleClick2:E}}});return{render:B,...A}}(),"render-demo-1":function(){const{createTextVNode:c,resolveComponent:F,withCtx:u,createVNode:l,toDisplayString:k,createElementVNode:o,openBlock:i,createElementBlock:e}=g,r=c("\u51CF 1"),v={style:{color:"red",padding:"6px"}},B=c("\u52A0 1");function D(t,a){const p=F("el-button");return i(),e("div",null,[o("div",null,[l(p,{onClick:a[0]||(a[0]=E=>t.increase(-1))},{default:u(()=>[r]),_:1}),o("span",v,k(t.propsMessage),1),l(p,{onClick:a[1]||(a[1]=E=>t.increase(1))},{default:u(()=>[B]),_:1})])])}const{defineComponent:f,computed:y}=g,A=f({name:"InputNumber",props:{modelValue:{type:String,default:"0"}},emits:["update:modelValue"],setup(t,{emit:a}){const p=y({get:()=>t.modelValue,set:d=>{a("update:modelValue",d)}});return{propsMessage:p,increase:d=>{p.value+=d}}}});return{render:D,...A}}()}},$='{"title":"Vue3.x\uFF08\u57FA\u7840\uFF09","description":"","frontmatter":{"lang":"zh-CN","sidebarDepth":2,"meta":[{"name":"description","content":"\u4E2A\u4EBA\u603B\u7ED3\u7684vuepress\u5B66\u4E60\u6280\u672F\u6587\u6863-\u8BED\u6CD5"},{"name":"keywords","content":"vuepress,\u6700\u65B0\u6280\u672F\u6587\u6863,vuepress\u8BED\u6CD5,markdown\u8BED\u6CD5"}]},"headers":[{"level":2,"title":"1. template","slug":"_1-template"},{"level":2,"title":"2. ref \u76F8\u5173","slug":"_2-ref-\u76F8\u5173"},{"level":2,"title":"3. \u81EA\u5B9A\u4E49 Hooks","slug":"_3-\u81EA\u5B9A\u4E49-hooks"},{"level":2,"title":"4. Teleport","slug":"_4-teleport"},{"level":2,"title":"5. Suspense","slug":"_5-suspense"},{"level":2,"title":"6. \u6570\u7EC4\u4E2D push","slug":"_6-\u6570\u7EC4\u4E2D-push"},{"level":2,"title":"7. keycode","slug":"_7-keycode"},{"level":2,"title":"8. \u5168\u5C40 api","slug":"_8-\u5168\u5C40-api"},{"level":2,"title":"9. setup","slug":"_9-setup"},{"level":2,"title":"10. \u5168\u5C40\u6302\u8F7D","slug":"_10-\u5168\u5C40\u6302\u8F7D"},{"level":2,"title":"11. render","slug":"_11-render"},{"level":2,"title":"12. \u5B9A\u4E49\u5F02\u6B65\u7EC4\u4EF6","slug":"_12-\u5B9A\u4E49\u5F02\u6B65\u7EC4\u4EF6"},{"level":2,"title":"13. \u6307\u4EE4\u751F\u547D\u5468\u671F\u4FEE\u6539","slug":"_13-\u6307\u4EE4\u751F\u547D\u5468\u671F\u4FEE\u6539"},{"level":2,"title":"14. watch \u65B9\u6CD5","slug":"_14-watch-\u65B9\u6CD5"},{"level":2,"title":"15.onRenderTriggered","slug":"_15-onrendertriggered"},{"level":2,"title":"16.\u6307\u4EE4 v-memo","slug":"_16-\u6307\u4EE4-v-memo"},{"level":2,"title":"17.v-model \u8BED\u6CD5\u7CD6","slug":"_17-v-model-\u8BED\u6CD5\u7CD6"}],"relativePath":"vue3/vue.md","lastUpdated":1664119937282}',x=_(`<h1 id="vue3-x\uFF08\u57FA\u7840\uFF09">Vue3.x\uFF08\u57FA\u7840\uFF09</h1><div class="tip custom-block"><p class="custom-block-title">\u524D\u8A00</p><p>\u8865\u5145\u4E00\u4E9B\u5B98\u65B9\u6587\u6863\u4E2D\u6CA1\u6709\u7684\uFF0C\u4F46\u662F\u5B9E\u9645\u5F00\u53D1\u4E2D\u6700\u597D\u9700\u8981\u4E86\u89E3\u7684\u5185\u5BB9</p></div><h2 id="_1-template">1. template</h2><p>\u53EF\u4EE5\u4E0D\u518D\u9700\u8981\u9876\u5C42\u8282\u70B9</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Header</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Footer</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="_2-ref-\u76F8\u5173">2. ref \u76F8\u5173</h2><ul><li>ref</li></ul><p>\u63A5\u53D7\u4E00\u4E2A\u5185\u90E8\u503C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u54CD\u5E94\u5F0F\u4E14\u53EF\u53D8\u7684 ref \u5BF9\u8C61\u3002ref \u5BF9\u8C61\u4EC5\u6709\u4E00\u4E2A <code>.value</code> property\uFF0C\u6307\u5411\u8BE5\u5185\u90E8\u503C\u3002</p><p>\u5982\u679C\u5C06\u5BF9\u8C61\u5206\u914D\u4E3A ref \u503C\uFF0C\u5219\u5B83\u5C06\u88AB <code>reactive</code> \u51FD\u6570\u5904\u7406\u4E3A\u6DF1\u5C42\u7684\u54CD\u5E94\u5F0F\u5BF9\u8C61\u3002</p><p>template \u5185\u4F7F\u7528 ref \u5BF9\u8C61\uFF0C\u4F1A\u81EA\u52A8\u89E3\u5305</p><ul><li>unref</li></ul><p>\u5982\u679C\u53C2\u6570\u662F\u4E00\u4E2A ref\uFF0C\u5219\u8FD4\u56DE\u5185\u90E8\u503C\uFF0C\u5426\u5219\u8FD4\u56DE\u53C2\u6570\u672C\u8EAB\u3002\u8FD9\u662F val = isRef(val) ? val.value : val \u7684\u8BED\u6CD5\u7CD6\u51FD\u6570\u3002</p><p>\u57FA\u4E8E ref \u4E00\u4E2A {} \uFF0C {} \u4F1A\u88AB reactive \u4E8C\u6B21\u5904\u7406\uFF0Cunref(ref({})) \u8FD4\u56DE\u7684\u662F\u54CD\u5E94\u5F0F\u7684 {}</p><ul><li>toRef</li></ul><p>\u53C2\u6570\uFF1A <code>(\u6E90\u5BF9\u8C61 , \u6E90\u5BF9\u8C61\u5C5E\u6027)</code></p><p>\u53EF\u4EE5\u7528\u6765\u4E3A\u6E90\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4E0A\u7684\u67D0\u4E2A property \u65B0\u521B\u5EFA\u4E00\u4E2A ref\u3002\u7136\u540E\uFF0Cref \u53EF\u4EE5\u88AB\u4F20\u9012\uFF0C\u5B83\u4F1A\u4FDD\u6301\u5BF9\u5176\u6E90 property \u7684\u54CD\u5E94\u5F0F\u8FDE\u63A5\u3002</p><p>\u7528\u4EBA\u8BDD\u8BB2\u5C31\u662F\u4E3A \u6E90\u54CD\u5E94\u5F0F\u5BF9\u8C61(toRef \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570) \u4E0A\u7684\u67D0\u4E2A property \u65B0\u521B\u5EFA\u4E00\u4E2A ref</p><ul><li>toRefs</li></ul><p>\u5C06\u54CD\u5E94\u5F0F\u5BF9\u8C61\u8F6C\u6362\u4E3A\u666E\u901A\u5BF9\u8C61\uFF0C\u5176\u4E2D\u7ED3\u679C\u5BF9\u8C61\u7684\u6BCF\u4E2A property \u90FD\u662F\u6307\u5411\u539F\u59CB\u5BF9\u8C61\u76F8\u5E94 property \u7684 ref\u3002</p><p>\u4E3B\u8981\u529F\u80FD\uFF1A\u5F53\u4ECE\u7EC4\u5408\u5F0F\u51FD\u6570 (.js) \u8FD4\u56DE\u54CD\u5E94\u5F0F\u5BF9\u8C61\u65F6\uFF0C\u7528 toRefs \u5C31\u53EF\u4EE5\u5728\u4E0D\u4E22\u5931\u54CD\u5E94\u6027\u7684\u60C5\u51B5\u4E0B\u5BF9\u8FD4\u56DE\u7684\u5BF9\u8C61\u8FDB\u884C\u89E3\u6784/\u5C55\u5F00\u3002</p><p>toRef \u662F\u8F6C\u5355\u4E2A\uFF0C toRefs \u5168\u8F6C\u3002</p><p>\u539F\u7406\uFF1AtoRefs \u4F1A\u5C06 reactive \u751F\u6210\u7684\u5BF9\u8C61\u7684\u6839\u7EA7\u5C5E\u6027\u5168\u90FD\u7528 ref \u8F6C\u6210 ref \u5BF9\u8C61\uFF0C\u7136\u540E\u89E3\u6784\u51FA\u6765\u7684\u90FD\u662F ref \u5BF9\u8C61\uFF0C\u4ECE\u800C\u4E0D\u4E22\u5931\u54CD\u5E94\u5F0F</p><ul><li>isRef</li></ul><p>\u68C0\u67E5\u503C\u662F\u5426\u4E3A\u4E00\u4E2A ref \u5BF9\u8C61</p><ul><li>customRef</li></ul><p>\u521B\u5EFA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684 ref\uFF0C\u5E76\u5BF9\u5176\u4F9D\u8D56\u9879\u8DDF\u8E2A\u548C\u66F4\u65B0\u89E6\u53D1\u8FDB\u884C\u663E\u5F0F\u63A7\u5236\u3002\u5B83\u9700\u8981\u4E00\u4E2A\u5DE5\u5382\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u63A5\u6536 track \u548C trigger \u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5E76\u4E14\u5E94\u8BE5\u8FD4\u56DE\u4E00\u4E2A\u5E26\u6709 get \u548C set \u7684\u5BF9\u8C61\u3002</p><p>\u81EA\u5B9A\u4E49 ref \u7684 get set\uFF0C\u7528\u4E8E\u67D0\u4E9B\u6570\u636E\u53D8\u66F4\u64CD\u4F5C\u7684\u989D\u5916\u529F\u80FD\u5C01\u88C5\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A computed \u6307\u4EE4\u7C7B\u4F3C\u7684\u529F\u80FD\u4E4B\u7C7B\u7684</p><ul><li>shallowRef</li></ul><p>\u5982\u5B57\u9762\u610F\u601D\uFF0C\u6D45\u54CD\u5E94\u5F0F\uFF0C\u5982\u679C\u4F20\u5165\u7684\u662F\u57FA\u672C\u7C7B\u578B\u8DDF ref \u6CA1\u533A\u522B\u3002</p><p>\u5982\u679C\u4F20\u5165\u7684\u662F\u5F15\u7528\u7C7B\u578B\uFF0C.value \u503C\u5C06\u4E0D\u4F1A\u662F\u54CD\u5E94\u5F0F\u7684\u6570\u636E\uFF0Cref \u7684 value \u5C5E\u6027\u5219\u4F1A\u662F\u54CD\u5E94\u5F0F\u7684</p><ul><li>triggerRef</li></ul><p>\u624B\u52A8\u6267\u884C\u4E0E shallowRef \u5173\u8054\u7684\u4EFB\u4F55\u4F5C\u7528 (effect)\u3002</p><p>\u7B80\u5355\u8BB2\u5C31\u662F\u914D\u5408 shallowRef \u7528\u7684\uFF0C\u5E76\u4E14 shallowRef \u4F20\u5165\u7684\u662F\u4E2A\u5F15\u7528\u7C7B\u578B</p><h2 id="_3-\u81EA\u5B9A\u4E49-hooks">3. \u81EA\u5B9A\u4E49 Hooks</h2><p>Vue3 \u81EA\u5B9A\u4E49 Hook</p><p>\u4E3B\u8981\u7528\u6765\u5904\u7406\u590D\u7528\u4EE3\u7801\u903B\u8F91\u7684\u4E00\u4E9B\u5C01\u88C5</p><p>\u8FD9\u4E2A\u5728 vue2 \u5C31\u5DF2\u7ECF\u6709\u4E00\u4E2A\u4E1C\u897F\u662F Mixins</p><h2 id="_4-teleport">4. Teleport</h2><p>\u628A\u8282\u70B9\u6302\u8F7D\u5230\u6307\u5B9A id \u4E0B</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>teleport</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#endofbody<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modal<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
     hello world
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>teleport</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="_5-suspense">5. Suspense</h2><p>\u5C55\u793A\u52A0\u8F7D\u72B6\u6001</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Suspense</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- \u5F02\u6B65\u7EC4\u4EF6 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Suspended-component</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#fallback</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- \u5F02\u6B65\u7EC4\u4EF6\u52A0\u8F7D\u5B8C\u6BD5\u524D\u5C55\u793A\u7684\u5185\u5BB9 --&gt;</span>
    Loading...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Suspense</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="_6-\u6570\u7EC4\u4E2D-push">6. \u6570\u7EC4\u4E2D push</h2>`,44),R=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s("\u4FEE\u6539\u7684\u6570\u503C\uFF1A{{ data.list }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("push\u6DFB\u52A0\u6570\u636E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("handleClick2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u8D4B\u503C\u6DFB\u52A0\u6570\u636E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" reactive"),n("span",{class:"token punctuation"},","),s(" watch "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"props"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"list"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleClick"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      data`),n("span",{class:"token punctuation"},"."),s("list"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleClick2"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      data`),n("span",{class:"token punctuation"},"."),s("list "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s(`
      `),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" data"),n("span",{class:"token punctuation"},"."),s("list"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("newVal"),n("span",{class:"token punctuation"},","),s(" oldVal")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" newVal"),n("span",{class:"token punctuation"},","),s(" oldVal "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      data`),n("span",{class:"token punctuation"},","),s(`
      handleClick`),n("span",{class:"token punctuation"},","),s(`
      handleClick2`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),S=_(`<h2 id="_7-keycode">7. keycode</h2><p>\u952E\u76D8\u7ED1\u5B9A keycode \u65E0\u6548\uFF0C\u7ED1\u5B9A\u522B\u540D\u6709\u6548</p><div class="language-vue"><pre><code><span class="token comment">&lt;!-- \u65E0\u6548 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">v-on:</span>keyup.13</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token comment">&lt;!-- \u6709\u6548 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">v-on:</span>keyup.enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>\u79FB\u9664 on off \u548C $once \u65B9\u6CD5\uFF0C\u4F7F\u7528 mitt \u4EE3\u66FF</p><p>filters \u88AB\u79FB\u9664\uFF0C\u4F7F\u7528 methods \u6216\u8005 computed \u4EE3\u66FF</p><h2 id="_8-\u5168\u5C40-api">8. \u5168\u5C40 api</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="_9-setup">9. setup</h2><div class="language-js"><pre><code><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">333</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_10-\u5168\u5C40\u6302\u8F7D">10. \u5168\u5C40\u6302\u8F7D</h2><div class="language-js"><pre><code>app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span><span class="token function-variable function">http</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$log <span class="token operator">=</span> window<span class="token punctuation">.</span>console<span class="token punctuation">.</span>log
</code></pre></div><h2 id="_11-render">11. render</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> h<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_12-\u5B9A\u4E49\u5F02\u6B65\u7EC4\u4EF6">12. \u5B9A\u4E49\u5F02\u6B65\u7EC4\u4EF6</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineAsyncComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">// one</span>
<span class="token keyword">const</span> asyncPageWithOptions <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">loader</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./NextPage.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">error</span><span class="token operator">:</span> ErrorComponent<span class="token punctuation">,</span>
  <span class="token literal-property property">loading</span><span class="token operator">:</span> LoadingComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// two</span>
<span class="token keyword">const</span> asyncComponent <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">/* ... */</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre></div><h2 id="_13-\u6307\u4EE4\u751F\u547D\u5468\u671F\u4FEE\u6539">13. \u6307\u4EE4\u751F\u547D\u5468\u671F\u4FEE\u6539</h2><div class="language-js"><pre><code>Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;highlight&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">beforeMount</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5BF9\u5E94bind</span>
    el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>background <span class="token operator">=</span> binding<span class="token punctuation">.</span>value
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u5BF9\u5E94inserted</span>
  <span class="token function">beforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u65B0\u589E</span>
  <span class="token function">updated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u5BF9\u5E94update</span>
  <span class="token function">beforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u65B0\u589E</span>
  <span class="token function">unmounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u5BF9\u5E94unbind</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="_14-watch-\u65B9\u6CD5">14. watch \u65B9\u6CD5</h2><div class="language-js"><pre><code><span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// watch vm.e.f&#39;s value: {g: 5}</span>
  <span class="token string-property property">&#39;e.f&#39;</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_15-onrendertriggered">15.onRenderTriggered</h2><h2 id="_16-\u6307\u4EE4-v-memo">16.\u6307\u4EE4 v-memo</h2><p>\u53EF\u4EE5\u7F13\u5B58 html \u6A21\u677F\uFF0C\u6BD4\u5982 v-for \u5217\u8868\u4E0D\u4F1A\u53D8\u5316\u7684\u5C31\u7F13\u5B58\uFF0C\u7B80\u5355\u8BF4\u5C31\u662F\u7528\u5185\u5B58\u6362\u65F6\u95F4</p><h2 id="_17-v-model-\u8BED\u6CD5\u7CD6">17.v-model \u8BED\u6CD5\u7CD6</h2><p>\u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E0A\u4F7F\u7528<code>v-model</code></p>`,24),j=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("increase(-1)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u51CF 1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 6px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("{{ propsMessage }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("el-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("increase(1)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u52A0 1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("el-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" computed "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'InputNumber'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"modelValue"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(" String"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"emits"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'update:modelValue'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("props"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" emit "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" propsMessage "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function-variable function"},"get"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" props"),n("span",{class:"token punctuation"},"."),s(`modelValue
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token function-variable function"},"set"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"emit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'update:modelValue'"),n("span",{class:"token punctuation"},","),s(" val"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"increase"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      propsMessage`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"+="),s(` val
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      propsMessage`),n("span",{class:"token punctuation"},","),s(`
      increase`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),M=_(`<p>props \u4E00\u822C\u4E0D\u80FD\u518D\u7EC4\u4EF6\u5185\u4FEE\u6539\uFF0C\u5B83\u662F\u901A\u8FC7\u7236\u7EA7\u4FEE\u6539\u7684\uFF0C\u56E0\u6B64\u5B9E\u73B0 v-model \u4E00\u822C\u4F1A\u6709\u4E00\u4E2A<code>currentValue</code>\u7684\u5185\u90E8 data,\u521D\u59CB\u65F6\u4ECE value \u83B7\u53D6\u4E00\u6B21\u503C\uFF0C\u5F53 value \u4FEE\u6539\u65F6\uFF0C\u4E5F\u901A\u8FC7 watch \u76D1\u542C\u5230\u53CA\u65F6\u66F4\u65B0\uFF1B\u7EC4\u4EF6\u4E0D\u4F1A\u4FEE\u6539\u7684 value \u7684\u503C\uFF0C\u800C\u662F\u4FEE\u6539 currentValue\uFF0C\u540C\u65F6\u5C06\u4FEE\u6539\u7684\u503C\u901A\u8FC7\u81EA\u5B9A\u4E49\u4E8B\u4EF6<code>input</code>\u6D3E\u53D1\u7ED9\u7236\u7EC4\u4EF6\uFF0C\u7236\u7EC4\u4EF6\u63A5\u6536\u5230\u540E\uFF0C\u7531\u7236\u7EC4\u4EF6\u4FEE\u6539 value\u3002\u6240\u4EE5\uFF0C\u4E0A\u9762\u7684\u6570\u5B57\u9009\u62E9\u5668\u7EC4\u4EF6\u53EF\u4EE5\u6709\u4E0B\u9762\u4E24\u79CD\u65B9\u5F0F\u5B9E\u73B0\u3002</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputNumber</span> <span class="token attr-name"><span class="token namespace">v-model:</span>custom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">@update:</span>custom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> InputNumber <span class="token keyword">from</span> <span class="token string">&#39;../components/input-number/input-number.vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> InputNumber <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> val
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u6216\u8005</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputNumber</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> InputNumber <span class="token keyword">from</span> <span class="token string">&#39;../components/input-number/input-number.vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> InputNumber <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5982\u679C\u4F60\u4E0D\u60F3\u7528<code>value</code>\u548C<code>input</code>\u8FD9\u4E24\u4E2A\u540D\u5B57\uFF0C\u4E5F\u53EF\u4EE5\u7528<code>model</code>\u9009\u9879\u6307\u5B9A\u5B83\u4EEC\u7684\u540D\u5B57</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>increase(-1)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u51CF 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span><span class="token property">padding</span><span class="token punctuation">:</span> 6px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>{{ currentValue }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>increase(1)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u52A0 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;InputNumber&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">currentValue</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>number<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">value</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>currentValue <span class="token operator">=</span> val
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increase</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>currentValue <span class="token operator">+=</span> val
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;number&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>currentValue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,6);function I(c,F,u,l,k,o){const i=h("render-demo-0"),e=h("demo"),r=h("render-demo-1");return q(),V("div",null,[x,C(e,{sourceCode:`<template>
  <div>\u4FEE\u6539\u7684\u6570\u503C\uFF1A{{ data.list }}</div>
  <el-button @click="handleClick">push\u6DFB\u52A0\u6570\u636E</el-button>
  <el-button @click="handleClick2">\u8D4B\u503C\u6DFB\u52A0\u6570\u636E</el-button>
</template>
<script>
import { defineComponent, reactive, watch } from 'vue'
export default defineComponent({
  setup(props) {
    const data = reactive({
      list: [],
    })
    const handleClick = () => {
      data.list.push(1)
    }
    const handleClick2 = () => {
      data.list = [2]
    }
    watch(
      () => data.list,
      (newVal, oldVal) => {
        alert(JSON.stringify({ newVal, oldVal }))
      }
    )
    return {
      data,
      handleClick,
      handleClick2,
    }
  },
})
<\/script>
`},{highlight:m(()=>[R]),default:m(()=>[C(i)]),_:1}),S,C(e,{sourceCode:`<template>
  <div>
    <el-button @click="increase(-1)">\u51CF 1</el-button>
    <span style="color: red; padding: 6px">{{ propsMessage }}</span>
    <el-button @click="increase(1)">\u52A0 1</el-button>
  </div>
</template>
<script>
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'InputNumber',
  props: {
    modelValue: {
      type: String,
      default: '0',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const propsMessage = computed({
      get: () => {
        return props.modelValue
      },
      set: (val) => {
        emit('update:modelValue', val)
      },
    })
    const increase = (val) => {
      propsMessage.value += val
    }
    return {
      propsMessage,
      increase,
    }
  },
})
<\/script>
`},{highlight:m(()=>[j]),default:m(()=>[C(r)]),_:1}),M])}var P=b(N,[["render",I]]);export{$ as __pageData,P as default};
