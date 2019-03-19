### 1、使用Websocket协议  
全双工(full-duplex)通信自然可以实现多个标签页之间的通信  
### 2、通过Localstorage
LocalStorage对象在修订过的HTML5规范中作为持久保存在客户端数据的方案取代了globalStorage，它是浏览器多个标签共用的存储空间，所以可以用来实现多标签之间的通信。  
注意:  
* 要访问一个localStorage对象，页面必须来自同一个**`域名`**（子域名无效），使用同一种**`协议`**，在同一个**`端口`**上。
* session是会话级的存储空间，每个标签页都是**`单独`**的。

### 3、使用Webworker
我们都知道JavaScript是单线程的，但是浏览器是拥有过个线程的比如：gui渲染线程、JS引擎线程、事件触发线程、异步http请求线程。  
webworker作为浏览器的一个新特性，可以提供一个额外的线程来执行一些js代码，并且不会影响到浏览器用户界面。  
应用场景：比如页面中包含耗时较大的算法代码时，就会阻塞线程影响浏览器渲染等等。这时候就可把耗时代码，放到webworker(另一个线程)中执行。    
### 4、利用一下第三方封装的插件  
其本质上也是运用了以上几点特性开发而成   
<a href="https://github.com/krasimir/lsbridge" target="_blank">lsbridge-跨页面通信传值</a>  
#### 相关链接
<a href="http://www.ruanyifeng.com/blog/2018/07/web-worker.html" target="_blank">阮一峰-Web Worker 使用教程</a>  
<a href="https://www.jianshu.com/p/31facd4934d7" target="_blank">实现多个标签页之间通信的几种方法</a>

