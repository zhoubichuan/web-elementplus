# web-elementplus

基于 elementplus 二次封装的业务组件库。

[查看组件 demo](https://zhoubichuan.com/web-elementplus/element-package/base/1.index.html)

## 1.使用方法

### 1.1 安装

以 yarn 为例

```sh
yarn add web-elementplus
```

### 1.2 配置

main.js

```js
import Webelementplus from 'web-elementplus'
...
Vue.use(Webelementplus) // 全局引入
```

### 1.3 使用

- 全局引入可以直接使用，需要先在此组件前面先配置好`elementplus`