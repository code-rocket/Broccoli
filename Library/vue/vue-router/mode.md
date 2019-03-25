对于 Vue 这类渐进式前端开发框架，为了构建 SPA（单页面应用），需要引入前端路由系统，这也就是 Vue-Router 存在的意义。**`前端路由的核心，就在于 —— 改变视图的同时不会向后端发出请求`**。
为了达到这一目的，浏览器当前提供了以下两种支持：  
#### 1、hash模式： 即地址栏 URL 中的 # 符号
比如这个 URL：http://www.gcx.com/#/gcx ， **`hash 的值为 #/gcx`**。它的特点在于：hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。  
同时，因为hash发生变化的url都会被浏览器记录下来，从而你会发现浏览器的前进后退都可以用。  
onhashchange事件,可以在window对象上监听这个事件:

````
window.onhashchange = function(event) {
    console.log(event.oldURL, event.newURL);
    let hash = loaction.hash  //通过location对象来获取hash地址
    console.log(hash)    // "#/gcx"  从#号开始
}
````
#### 2、history模式
 利用了 HTML5 History Interface 中新增的 **`pushState() `**和 **`replaceState() `**方法。（需要特定浏览器支持）

<br/>
hash模式和history模式方法应用于浏览器的历史记录栈，在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。只是当它们执行修改时，虽然改变了当前的 URL，但浏览器不会立即向后端发送请求。

### 使用场景  
一般场景下，hash 和 history 都可以，但是# 符号夹杂在 URL 里看起来确实有些不太美丽，需要美观可以使用history。  
另外，根据 Mozilla Develop Network 的介绍，调用 history.pushState() 相比于直接修改 hash，存在以下优势：  
* pushState() 设置的新 URL 可以是与当前 URL 同源的任意 URL；**`而 hash 只可修改 # 后面的部分`**，因此只能设置与当前 URL 同文档的 URL；
* pushState() 设置的新 URL 可以与当前 URL 一模一样，这样也会把记录添加到栈中；而 hash 设置的新值必须与原来不一样才会触发动作将记录添加到栈中；
* pushState() 通过 stateObject 参数可以添加任意类型的数据到记录中；**`而 hash 只可添加短字符串`**；
* pushState() 可额外设置 title 属性供后续使用。

当然，history 也不是样样都好。SPA 虽然在浏览器里游刃有余，但真要通过 URL 向后端发起 HTTP 请求时，两者的差异就来了。尤其在用户**`手动输入 URL 后回车，或者刷新（重启）浏览器`**的时候:  

* hash 模式下，仅 hash 符号之前的内容会被包含在请求中，如 http://www.gcx.com ，因此对于后端来说，即使没有做到对路由的全覆盖，也不会返回 404 错误。
* history 模式下，前端的 URL 必须和实际向后端发起请求的 URL 一致，如 http://www.gcx.com/gcx/id 。如果后端缺少对 /gcx/id 的路由处理，将返回 404 错误。

因此，使用history模式需要如下操作：  
* 在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个**` index.html `**页面，这个页面就是你 app 依赖的页面。
* 以上操作后，服务器就不再返回 404 错误页面，因为对于所有路径都会返回 index.html 文件。为了避免这种情况，你应该**`在 Vue 应用里面覆盖所有的路由情况，然后在给出一个 404 页面`**。
````
const router = new VueRouter({
    mode: 'history',
    routes: [
       { path: '*', component: NotFoundComponent }
   ]
})
````

### 小结
* hash 模式和 history 模式都属于浏览器自身的特性，Vue-Router 只是利用了这两个特性（通过调用浏览器提供的接口）来实现前端路由。
* 对于一般的 Vue + Vue-Router + Webpack + XXX 形式的 Web 开发场景，用 **`history `**模式即可，只需在后端（Apache 或 Nginx）进行简单的路由配置，同时搭配前端路由的 404 页面支持。
  
<br/>
#### 相关链接   

<a href="https://router.vuejs.org/zh/guide/essentials/history-mode.html#后端配置例子l" target="_blank">HTML5 History 模式</a>  
<a href="https://www.jianshu.com/p/81ccd1124f48" target="_blank">Vue的两种路由模式</a>  
<a href="https://developer.mozilla.org/zh-CN/docs/Web/API" target="_blank">Mozilla Develop Network </a>  