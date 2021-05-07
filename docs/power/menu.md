# 菜单如何关联用户权限

看完用菜单配置之后，就知道`type`这属性是来控制菜单显示，页面加载。因为`type`属性值为数组类型*Array*，所以只要用户信息的`type`值包含在此，代表有权限访问。

- 举例

```js

// 假设现在有两个用户信息

const user1 ={
  username:"user1",
  // ... 省略其他信息
  type:"admin" // 权限标识为admin
}
const user2 ={
  username:"user2"
   // ... 省略其他信息
  type:"user" // 权限标识为user
}

// 假设现在有个菜单信息是这样的
const menu = {
   title: "详情页",
    path: "/details",
    key: "details",
    parentKey: "",
    icon: "icon_edit",
    type: ["admin"], // user1 通过了权限可以进行访问，而user2会被拦截，页面无法正常显示
}

/**
 * 若type 值为 空数组时， 任何人都无法访问
 * 若用户信息、菜单信息 无type 属性值时， 都可以访问
 * 若type 值为 假值 都可以访问
*/
```

::: tip
在这里，希望`用户信息，菜单信息`里包含**type**字段，不然权限这块相当于没用到！
:::
