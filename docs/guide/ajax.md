---
title: react-ant-admin ajax配置
head:
  - - meta
    - name: description
      content: react-ant-admin ajax配置，详细讲解此框架ajax设置，教你解决前端请求问题。
  - - meta
    - name: keywords
      content: react react-ant react-admin react-ant-admin ajax.
---

# 请求配置（ajax）

根据现有的[axios](http://www.axios-js.com/)配置快速解决业务上的请求设置

## 使用 src/setupProxy.js 解决 前端跨域问题。

该项目下的`src/setupProxy.js`配置是用来解决跨域问题。

```js
const { createProxyMiddleware } = require("http-proxy-middleware");

const matchUrl = "/api"; // 请求是匹配的地址
const target = "https://azhengpersonalblog.top/"; // 目标网址
const prevUrl = "^/api"; // 以/api路径截取
const writeUlr = "/api/react-ant-admin"; // 重写请求路径
/**
 * 在使用 本地代理转发 请将 src/common/ajax.js axios的config baseURL 置为"/"
 * 假设本地 ajax 请求以/api开头，将去请求 目标网址 target
 * ajax.post("/api/getlist") 将/api 重写为 /api/react-ant-admin
 * 然后拼接 https://azhengpersonalblog.top/
 * 如：ajax.post("/api/getlist") => https://azhengpersonalblog.top/api/react-ant-admin/getlist
 */

module.exports = function (app) {
  app.use(
    createProxyMiddleware(matchUrl, {
      target,
      changeOrigin: true,
      secure: true, // https
      pathRewrite: { [prevUrl]: writeUlr },
    })
  );
};
```

::: warning
注意两点：

1. axios 的`BASE_URL`只能为`/`或者不填。不能为某一地址如：`http://xxx.xxx:xxx/xxx`
2. 如果以上的`prevUrl`为`^/api`的时候，使用 axios 调用`post,get,等等`请求时，必须加上前缀`/api`,例如：`axios.post("/api/login")`
   :::

- 多个前缀拦截

在`src/setupProxy.js`中，你可以使用多个前缀拦截，或者转发到多个目标网站上。

```js
const { createProxyMiddleware } = require("http-proxy-middleware");

const matchUrl = "/api"; // 请求是匹配的地址
const target = "https://azhengpersonalblog.top/"; // 目标网址
const prevUrl = "^/api"; // 以/api路径截取
const writeUlr = "/api/react-ant-admin"; // 重写请求路径

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://azhengpersonalblog.top/",
      changeOrigin: true,
      secure: true, // https
      pathRewrite: {
        "^/api/get": "/getData",
        "^/api/post": "/postData",
      },
    })
  );
  // 以上的拦截请求的结果为
  // ajax.get("/api/get/userInfo") => https://azhengpersonalblog.top/getData/userInfo
  // ajax.post("/api/post/dologin") => https://azhengpersonalblog.top/postData/dologin
};
```

更多说明请看[http-proxy-middleware 文档](https://www.npmjs.com/package/http-proxy-middleware)

## 自定义请求拦截

因为`src/common/ajax.js`是根据博主的请求逻辑进行拦截，请根据自己项目的请求参数进行配置。

```js
import axios from "axios";
const config = {
  // ....
};
const instance = axios.create(config);
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    //let token = getToken();
    //if (token) {
    //  config.headers["authorization"] = token;
    //}
   return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    // if (response.data) {
    //   let { msg, status } = response.data;
    //   if (status === 1) {
    //     message.error(msg);
    //   }
    // }
    return response && response.data;
  },
  function (error) {
    // const { response, message } = error;
    // if (response && response.status) {
    //   const errorText = codeMessage[response.status] || response.statusText;
    //   const { status, config } = response;
    //   notification.error({
    //     message: `请求错误 ${status}: ${config.url}`,
    //     description: errorText,
    //   });
    //   if (response.status === 401 || response.status === 403) {
    //     clearLocalDatas([USER_INFO, TOKEN, MENU]);
    //     setTimeout(() => {
    //       window.location.reload();
    //     }, 1000);
    //   }
    // } else if (!response) {
    //   let description =
    //     message === "Network Error"
    //       ? "网络错误，请检查客户端是否存在网络故障或服务端无法响应"
    //       : "客户端出现错误";
    //   clearLocalDatas(["token"]);
    //   notification.error({
    //     description,
    //     message: "状态异常",
    //   });
    // }
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
```

## get 请求支持自动拼接 url

因为使用[qs](https://www.npmjs.com/package/qs)这个库,在 get 请求上可以直接使用`Object`类型转化为 url 的拼接参数

```js
import ajax from "@/common/ajax";

const data = {
  name: "kongyijilafumi",
  age: 22,
};
ajax.get("/getUserInfo", data); // /getUserInfo?name=kongyijilafumi&age=22
```

更多信息请查看[qs 文档](https://www.npmjs.com/package/qs)
