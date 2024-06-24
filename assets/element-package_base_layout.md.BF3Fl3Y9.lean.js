import{_ as l,c as o,I as a,aR as t,D as c,o as s}from"./chunks/framework.DzKfhdjc.js";const g=JSON.parse('{"title":"Layout 布局","description":"","frontmatter":{},"headers":[],"relativePath":"element-package/base/layout.md","filePath":"element-package/base/layout.md","lastUpdated":1718893095000}'),p={name:"element-package/base/layout.md"},n=t("",9);function r(d,i,E,D,A,C){const e=c("demo");return s(),o("div",null,[n,a(e,{src:"./layout.vue",desc:"通过 `row` 和 `col` 组件，并通过 col 组件的 `span` 属性我们就可以自由地组合布局。",codeStr:"%3Ctemplate%3E%0D%0A%20%20%3Cel-row%3E%0D%0A%20%20%20%20%3Cel-col%20%3Aspan%3D%2224%22%3E%3Cdiv%20class%3D%22grid-content%20ep-bg-purple-dark%22%20%2F%3E%3C%2Fel-col%3E%0D%0A%20%20%3C%2Fel-row%3E%0D%0A%20%20%3Cel-row%3E%0D%0A%20%20%20%20%3Cel-col%20%3Aspan%3D%2212%22%3E%3Cdiv%20class%3D%22grid-content%20ep-bg-purple%22%20%2F%3E%3C%2Fel-col%3E%0D%0A%20%20%20%20%3Cel-col%20%3Aspan%3D%2212%22%3E%3Cdiv%20class%3D%22grid-content%20ep-bg-purple-light%22%20%2F%3E%3C%2Fel-col%3E%0D%0A%20%20%3C%2Fel-row%3E%0D%0A%20%20%3Cel-row%3E%0D%0A%20%20%20%20%3Cel-col%20%3Aspan%3D%228%22%3E%3Cdiv%20class%3D%22grid-content%20ep-bg-purple%22%20%2F%3E%3C%2Fel-col%3E%0D%0A%20%20%20%20%3Cel-col%20%3Aspan%3D%228%22%3E%3Cdiv%20class%3D%22grid-content%20ep-bg-purple-light%22%20%2F%3E%3C%2Fel-col%3E%0D%0A%20%20%20%20%3Cel-col%20%3Aspan%3D%228%22%3E%3Cdiv%20class%3D%22grid-content%20ep-bg-purple%22%20%2F%3E%3C%2Fel-col%3E%0D%0A%20%20%3C%2Fel-row%3E%0D%0A%20%20%3Cel-row%3E%0D%0A%20%20%20%20%3Cel-col%20%3Aspan%3D%226%22%3E%3Cdiv%20class%3D%22grid-content%20ep-bg-purple%22%20%2F%3E%3C%2Fel-col%3E%0D%0A%20%20%20%20%3Cel-col%20%3Aspan%3D%226%22%3E%3Cdiv%20class%3D%22grid-content%20ep-bg-purple-light%22%20%2F%3E%3C%2Fel-col%3E%0D%0A%20%20%20%20%3Cel-col%20%3Aspan%3D%226%22%3E%3Cdiv%20class%3D%22grid-content%20ep-bg-purple%22%20%2F%3E%3C%2Fel-col%3E%0D%0A%20%20%20%20%3Cel-col%20%3Aspan%3D%226%22%3E%3Cdiv%20class%3D%22grid-content%20ep-bg-purple-light%22%20%2F%3E%3C%2Fel-col%3E%0D%0A%20%20%3C%2Fel-row%3E%0D%0A%20%20%3Cel-row%3E%0D%0A%20%20%20%20%3Cel-col%20%3Aspan%3D%224%22%3E%3Cdiv%20class%3D%22grid-content%20ep-bg-purple%22%20%2F%3E%3C%2Fel-col%3E%0D%0A%20%20%20%20%3Cel-col%20%3Aspan%3D%224%22%3E%3Cdiv%20class%3D%22grid-content%20ep-bg-purple-light%22%20%2F%3E%3C%2Fel-col%3E%0D%0A%20%20%20%20%3Cel-col%20%3Aspan%3D%224%22%3E%3Cdiv%20class%3D%22grid-content%20ep-bg-purple%22%20%2F%3E%3C%2Fel-col%3E%0D%0A%20%20%20%20%3Cel-col%20%3Aspan%3D%224%22%3E%3Cdiv%20class%3D%22grid-content%20ep-bg-purple-light%22%20%2F%3E%3C%2Fel-col%3E%0D%0A%20%20%20%20%3Cel-col%20%3Aspan%3D%224%22%3E%3Cdiv%20class%3D%22grid-content%20ep-bg-purple%22%20%2F%3E%3C%2Fel-col%3E%0D%0A%20%20%20%20%3Cel-col%20%3Aspan%3D%224%22%3E%3Cdiv%20class%3D%22grid-content%20ep-bg-purple-light%22%20%2F%3E%3C%2Fel-col%3E%0D%0A%20%20%3C%2Fel-row%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cstyle%20lang%3D%22scss%22%3E%0D%0A.el-row%20%7B%0D%0A%20%20margin-bottom%3A%2020px%3B%0D%0A%7D%0D%0A.el-row%3Alast-child%20%7B%0D%0A%20%20margin-bottom%3A%200%3B%0D%0A%7D%0D%0A.el-col%20%7B%0D%0A%20%20border-radius%3A%204px%3B%0D%0A%7D%0D%0A%0D%0A.grid-content%20%7B%0D%0A%20%20border-radius%3A%204px%3B%0D%0A%20%20min-height%3A%2036px%3B%0D%0A%7D%0D%0A.ep-bg-purple-dark%20%7B%0D%0A%20%20background%3A%20%2399a9bf%3B%0D%0A%7D%0D%0A.ep-bg-purple%20%7B%0D%0A%20%20background%3A%20%23d3dce6%3B%0D%0A%7D%0D%0A.ep-bg-purple-light%20%7B%0D%0A%20%20background%3A%20%23e5e9f2%3B%0D%0A%7D%0D%0A%3C%2Fstyle%3E%0D%0A",htmlStr:"undefined",description:"%E9%80%9A%E8%BF%87%20%3Ccode%3Erow%3C%2Fcode%3E%20%E5%92%8C%20%3Ccode%3Ecol%3C%2Fcode%3E%20%E7%BB%84%E4%BB%B6%EF%BC%8C%E5%B9%B6%E9%80%9A%E8%BF%87%20col%20%E7%BB%84%E4%BB%B6%E7%9A%84%20%3Ccode%3Espan%3C%2Fcode%3E%20%E5%B1%9E%E6%80%A7%E6%88%91%E4%BB%AC%E5%B0%B1%E5%8F%AF%E4%BB%A5%E8%87%AA%E7%94%B1%E5%9C%B0%E7%BB%84%E5%90%88%E5%B8%83%E5%B1%80%E3%80%82",codePath:"../../element-package/base/layout.vue"})])}const b=l(p,[["render",r]]);export{g as __pageData,b as default};