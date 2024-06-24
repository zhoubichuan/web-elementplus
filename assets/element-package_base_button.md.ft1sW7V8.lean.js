import{_ as n,c as o,I as a,aR as t,D as b,o as s}from"./chunks/framework.DzKfhdjc.js";const g=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"element-package/base/button.md","filePath":"element-package/base/button.md","lastUpdated":1718893095000}'),l={name:"element-package/base/button.md"},i=t("",6),r=t("",4),d=t("",5),u=t("",6),c=t("",2);function D(p,C,A,E,h,w){const e=b("demo");return s(),o("div",null,[i,a(e,{src:"./button.vue",desc:"使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。",codeStr:"%3Ctemplate%3E%0D%0A%20%20%3Cweb-row%20class%3D%22mb-4%22%3E%0D%0A%20%20%20%20%3Cweb-button%3EDefault%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22primary%22%3EPrimary%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22success%22%3ESuccess%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22info%22%3EInfo%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22warning%22%3EWarning%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22danger%22%3EDanger%3C%2Fweb-button%3E%0D%0A%20%20%3C%2Fweb-row%3E%0D%0A%0D%0A%20%20%3Cweb-row%20class%3D%22mb-4%22%3E%0D%0A%20%20%20%20%3Cweb-button%20plain%3EPlain%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22primary%22%20plain%3EPrimary%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22success%22%20plain%3ESuccess%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22info%22%20plain%3EInfo%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22warning%22%20plain%3EWarning%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22danger%22%20plain%3EDanger%3C%2Fweb-button%3E%0D%0A%20%20%3C%2Fweb-row%3E%0D%0A%0D%0A%20%20%3Cweb-row%20class%3D%22mb-4%22%3E%0D%0A%20%20%20%20%3Cweb-button%20round%3ERound%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22primary%22%20round%3EPrimary%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22success%22%20round%3ESuccess%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22info%22%20round%3EInfo%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22warning%22%20round%3EWarning%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22danger%22%20round%3EDanger%3C%2Fweb-button%3E%0D%0A%20%20%3C%2Fweb-row%3E%0D%0A%0D%0A%20%20%3Cweb-row%3E%0D%0A%20%20%20%20%3Cweb-button%20%3Aicon%3D%22Search%22%20circle%20%2F%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22primary%22%20%3Aicon%3D%22Edit%22%20circle%20%2F%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22success%22%20%3Aicon%3D%22Check%22%20circle%20%2F%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22info%22%20%3Aicon%3D%22Message%22%20circle%20%2F%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22warning%22%20%3Aicon%3D%22Star%22%20circle%20%2F%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22danger%22%20%3Aicon%3D%22Delete%22%20circle%20%2F%3E%0D%0A%20%20%3C%2Fweb-row%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aimport%20%7B%20Check%2C%20Delete%2C%20Edit%2C%20Message%2C%20Search%2C%20Star%20%7D%20from%20%22%40element-plus%2Ficons-vue%22%3B%0D%0A%3C%2Fscript%3E%0D%0A%0D%0A%3Cstyle%3E%0D%0A.mb-4%20%7B%0D%0A%20%20margin-bottom%3A%201rem%3B%0D%0A%7D%0D%0A%3C%2Fstyle%3E%0D%0A",htmlStr:"undefined",description:"%E4%BD%BF%E7%94%A8%20%3Ccode%3Etype%3C%2Fcode%3E%E3%80%81%3Ccode%3Eplain%3C%2Fcode%3E%E3%80%81%3Ccode%3Eround%3C%2Fcode%3E%20%E5%92%8C%20%3Ccode%3Ecircle%3C%2Fcode%3E%20%E6%9D%A5%E5%AE%9A%E4%B9%89%E6%8C%89%E9%92%AE%E7%9A%84%E6%A0%B7%E5%BC%8F%E3%80%82",codePath:"../../element-package/base/button.vue"}),r,a(e,{src:"./button-disabled.vue",desc:"使用 `disabled`来定义按钮的禁用。",codeStr:"%3Ctemplate%3E%0D%0A%20%20%3Cweb-row%20class%3D%22mb-4%22%3E%0D%0A%20%20%20%20%3Cweb-button%20disabled%3EDefault%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22primary%22%20disabled%3EPrimary%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22success%22%20disabled%3ESuccess%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22info%22%20disabled%3EInfo%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22warning%22%20disabled%3EWarning%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22danger%22%20disabled%3EDanger%3C%2Fweb-button%3E%0D%0A%20%20%3C%2Fweb-row%3E%0D%0A%0D%0A%20%20%3Cweb-row%3E%0D%0A%20%20%20%20%3Cweb-button%20plain%20disabled%3EPlain%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22primary%22%20plain%20disabled%3EPrimary%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22success%22%20plain%20disabled%3ESuccess%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22info%22%20plain%20disabled%3EInfo%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22warning%22%20plain%20disabled%3EWarning%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20type%3D%22danger%22%20plain%20disabled%3EDanger%3C%2Fweb-button%3E%0D%0A%20%20%3C%2Fweb-row%3E%0D%0A%3C%2Ftemplate%3E%0D%0A",htmlStr:"undefined",description:"%E4%BD%BF%E7%94%A8%20%3Ccode%3Edisabled%3C%2Fcode%3E%E6%9D%A5%E5%AE%9A%E4%B9%89%E6%8C%89%E9%92%AE%E7%9A%84%E7%A6%81%E7%94%A8%E3%80%82",codePath:"../../element-package/base/button-disabled.vue"}),d,a(e,{src:"./button-link.vue",codeStr:"%3Ctemplate%3E%0D%0A%20%20%3Cp%3EBasic%20link%20button%3C%2Fp%3E%0D%0A%20%20%3Cdiv%20class%3D%22flex%20justify-space-between%20mb-4%20flex-wrap%20gap-4%22%3E%0D%0A%20%20%20%20%3Cweb-button%20v-for%3D%22button%20in%20buttons%22%20%3Akey%3D%22button.text%22%20%3Atype%3D%22button.type%22%20link%3E%7B%7B%0D%0A%20%20%20%20%20%20button.text%0D%0A%20%20%20%20%7D%7D%3C%2Fweb-button%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%0D%0A%20%20%3Cp%3EDisabled%20link%20button%3C%2Fp%3E%0D%0A%20%20%3Cdiv%20class%3D%22flex%20justify-space-between%20flex-wrap%20gap-4%22%3E%0D%0A%20%20%20%20%3Cweb-button%0D%0A%20%20%20%20%20%20v-for%3D%22button%20in%20buttons%22%0D%0A%20%20%20%20%20%20%3Akey%3D%22button.text%22%0D%0A%20%20%20%20%20%20%3Atype%3D%22button.type%22%0D%0A%20%20%20%20%20%20link%0D%0A%20%20%20%20%20%20disabled%0D%0A%20%20%20%20%20%20%3E%7B%7B%20button.text%20%7D%7D%3C%2Fweb-button%0D%0A%20%20%20%20%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aconst%20buttons%20%3D%20%5B%0D%0A%20%20%7B%20type%3A%20%22%22%2C%20text%3A%20%22plain%22%20%7D%2C%0D%0A%20%20%7B%20type%3A%20%22primary%22%2C%20text%3A%20%22primary%22%20%7D%2C%0D%0A%20%20%7B%20type%3A%20%22success%22%2C%20text%3A%20%22success%22%20%7D%2C%0D%0A%20%20%7B%20type%3A%20%22info%22%2C%20text%3A%20%22info%22%20%7D%2C%0D%0A%20%20%7B%20type%3A%20%22warning%22%2C%20text%3A%20%22warning%22%20%7D%2C%0D%0A%20%20%7B%20type%3A%20%22danger%22%2C%20text%3A%20%22danger%22%20%7D%2C%0D%0A%5D%20as%20const%3B%0D%0A%3C%2Fscript%3E%0D%0A",htmlStr:"undefined",description:"",codePath:"../../element-package/base/button-link.vue"}),u,a(e,{src:"./button-size.vue",codeStr:"%3Ctemplate%3E%0D%0A%20%20%3Cweb-row%3E%0D%0A%20%20%20%20%3Cweb-button%20size%3D%22large%22%3ELarge%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%3EDefault%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20size%3D%22small%22%3ESmall%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20size%3D%22large%22%20%3Aicon%3D%22Search%22%3ESearch%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20%3Aicon%3D%22Search%22%3ESearch%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20size%3D%22small%22%20%3Aicon%3D%22Search%22%3ESearch%3C%2Fweb-button%3E%0D%0A%20%20%3C%2Fweb-row%3E%0D%0A%20%20%3Cweb-row%20class%3D%22my-4%22%3E%0D%0A%20%20%20%20%3Cweb-button%20size%3D%22large%22%20round%3ELarge%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20round%3EDefault%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20size%3D%22small%22%20round%3ESmall%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20size%3D%22large%22%20%3Aicon%3D%22Search%22%20round%3ESearch%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20%3Aicon%3D%22Search%22%20round%3ESearch%3C%2Fweb-button%3E%0D%0A%20%20%20%20%3Cweb-button%20size%3D%22small%22%20%3Aicon%3D%22Search%22%20round%3ESearch%3C%2Fweb-button%3E%0D%0A%20%20%3C%2Fweb-row%3E%0D%0A%20%20%3Cweb-row%3E%0D%0A%20%20%20%20%3Cweb-button%20%3Aicon%3D%22Search%22%20size%3D%22large%22%20circle%20%2F%3E%0D%0A%20%20%20%20%3Cweb-button%20%3Aicon%3D%22Search%22%20circle%20%2F%3E%0D%0A%20%20%20%20%3Cweb-button%20%3Aicon%3D%22Search%22%20size%3D%22small%22%20circle%20%2F%3E%0D%0A%20%20%3C%2Fweb-row%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20Search%20%7D%20from%20%22%40element-plus%2Ficons-vue%22%3B%0D%0A%3C%2Fscript%3E%0D%0A",htmlStr:"undefined",description:"",codePath:"../../element-package/base/button-size.vue"}),c])}const y=n(l,[["render",D]]);export{g as __pageData,y as default};