# 路径配置

## 如何设置指定某地址为默认打开地址

在项目启动后，默认打开的地址是`/`，若要设置为其他路由地址，可以在`src/router/route/index.js`文件中配置`routerList`变量即可

```js
import loadable from "@loadable/component";
import { Redirect } from "react-router-dom";
const routerList = [
  {
    path: "/", // 首页地址
    key: "index", // 唯一值，不能重复
    to: "/details/person", // 跳转到指定的地址
    components: Redirect, // 使用 重定向组件进行跳转
  },
];
/// ....  下面其余信息省略
```

## 修改项目 base 路由前缀

找到`src/common/index.js`文件进行如下修改即可。

```js
// const RouterBasename = "/react-ant-admin";
//        ||
//        \/
const RouterBasename = "/";
```

## 修改打包生产的文件名字

找到`scripts/build.js`文件，进行如下修改即可。

```js
process.env.BUILD_PATH = "./react-ant-admin";
```

## 打包之后静态资源加载失败

因为`create-react-app`打包，默认把镜头资源指向 `url`的根路径。

- 举例

假设你的网站地址为：https://wwww.xxxxx.com

现在你想把项目放在这个网站的二级域名下如：https://wwww.xxxxx.com/blog 但是你没有修改`package.json`里的*homepage*属性，所以就会发现静态文件 404。因为它们都以根目录去访问。所以会出现上述情况。

解决这种办法去修改`package.json`里的*homepage*属性即可

```json{4}
{
  "name": "react-ant-admin",
  "version": "0.1.0",
  "homepage": "/react-ant-admin", // 你指定的网站路径
  "dependencies": {
    "@babel/core": "7.12.3",
    "@pmmmwh/react-refresh-webpack-plugin": "0.4.3",
    "@svgr/webpack": "5.5.0"
  }
}
```

::: tip
希望`package.json`里的*homepage*属性，`scripts/build.js`文件的 _process.env.BUILD_PATH_，`src/common/index.js`文件的*RouterBasename*，这三个的值相同，否则不管是运行还是打包都会发生意想不到的事情!

:::
