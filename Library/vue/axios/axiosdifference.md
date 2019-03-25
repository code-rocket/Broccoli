### Ajax、Axios、Fetch之间的区别
### 一、jQuery ajax  
传统 Ajax 指的是 XMLHttpRequest（XHR）， 最早出现的发送后端请求技术，隶属于原始js中，核心使用XMLHttpRequest对象，多个请求之间如果有先后关系的话，就会出现**`回调地狱`**。
````
$.ajax({
   type: 'POST',
   url: url,
   data: data,
   dataType: dataType,
   success: function () {},
   error: function () {}
});
````
#### 优点：
基于对原生XHR的封装，以外还增添了对JSONP的支持。经过多年的更新维护，非常稳定和方便。
#### 缺点：
* 本身是针对MVC的编程,不符合现在前端MVVM的浪潮。  
* 基于原生的XHR开发，XHR本身的架构不清晰。  
* JQuery整个项目太大，单纯使用ajax却要引入整个JQuery非常的不合理（采取个性化打包的方案又不能享受CDN服务）。  
* 不符合关注分离（Separation of Concerns）的原则。  
* 配置和调用方式非常混乱，而且基于事件的异步模型不友好。  

### 二、Axios 
axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端，本质上也是对**`原生XHR的封装`**，只不过它是**`Promise的实现版本`**，符合最新的ES规范。
#### 优点： 
* 从浏览器中创建 XMLHttpRequest       
* 支持 Promise API  
* 客户端支持防止CSRF   
* 提供了一些并发请求的接口（重要，方便了很多的操作）  
* 从 node.js 创建 http 请求   
* 支持拦截请求和响应  
* 转换请求和响应数据  
* 取消请求  
* 自动转换JSON数据 

#### 防止CSRF:
就是让你的每个请求都带一个从cookie中拿到的key, 根据浏览器同源策略，假冒的网站是拿不到你cookie中得key的，这样，后台就可以轻松辨别出这个请求是否是用户在假冒网站上的误导输入，从而采取正确的策略。
### 三、Fetch 
fetch号称是AJAX的替代品，是在ES6出现的，使用了ES6中的promise对象。Fetch是**`基于promise设计`**的。Fetch的代码结构比起ajax简单多了，参数有点像jQuery ajax。但是fetch不是ajax的进一步封装，而是原生js，**`没有使用XMLHttpRequest对象`**。
````
try {
  let response = await fetch(url);
  let data = response.json();
  console.log(data);
} catch(e) {
  console.log("Oops, error", e);
}
````
#### 优点：
*  语法简洁，更加语义化
*  基于标准 Promise 实现，支持 async/await
*  同构方便，使用 [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)
* 更加底层，提供的API丰富（request, response）
* 脱离了XHR，是ES规范里新的实现方式
* 符合关注分离，没有将输入、输出和用事件来跟踪的状态混杂在一个对象里。

#### 但是Fetch也有不便之处：
* fetch只对网络请求报错，对400，500都当做成功的请求，服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。
* fetch默认不会带cookie，需要添加配置项： fetch(url, {credentials: 'include'})。
* fetch不支持abort，不支持超时控制，使用setTimeout及Promise.reject的实现的超时控制并不能阻止请求过程继续在后台运行，造成了流量的浪费。
* fetch没有办法原生监测请求的进度，而XHR可以。

fetch是一个低层次的API，和原生的XHR层级类似，所以使用起来并不是那么舒服，但是也更加灵活，**`一般使用需要根据需求进行封装`**。

<br/>
#### 相关链接   

<a href="https://www.jianshu.com/p/8bc48f8fde75" target="_blank">ajax和axios、fetch的区别</a>  
