不同标签页间的通讯，本质原理就是去运用一些可以 共享的中间介质，因此比较常用的有以下方法:  
### 一、通过PostMessage    
#### parent页面:
```html
<h1 class="header">parent</h1>
<div class="mb20">
    <textarea name="parent" id="parentdata" cols="30" rows="5">
        我是 parent 信息
    </textarea>
    <button style="font-size:20px;" onclick="send()">
        post message
    </button>
</div>
<!-- 不跨域的情况 -->
<iframe src="child.html" id="child" 
        style="display: block; border: 1px dashed #ccc; height: 300px;">
</iframe>
<!-- 跨域的情况 -->
<!--<iframe src="http://localhost:9022/b.html" id="child" 
            style="display: block; border: 1px dashed #ccc; height: 300px;">
</iframe>-->
```
````
<script>
    function send() {
        var data = document.querySelector('#parentdata').value;

        // 注意: 只会触发当前window对象的message事件
        // 也可以访问子页面的window对象，触发子页面的message事件 (window.frames[0].postMessage(...))
        // window.postMessage(data, '/');
        // data = {name: 'sandy', age: 20, fav: {sing: true, shop: false}}; // 也可以传普通对象
        window.frames[0].postMessage(data, '/'); // 触发同域子页面的message事件
        //window.frames[0].postMessage(data, 'http://localhost:9022/'); // 触发跨域子页面的messag事件
    }

    // 当前页面执行 window.postMessage(..)
    // 或
    // 子页面执行 parent.postMessage(...) 都会触发下面的回调, messageEvent.source不同而已
    window.addEventListener('message', function (messageEvent) {
        var data = messageEvent.data;// messageEvent: {source, currentTarget, data}
        console.info('message from child:', data);
    }, false);

</script>   
````
#### child页面:
````
<h1 class="header">child</h1>
<input type="text" id="inp" value="我是 child 信息">
<button onclick="send()">send</button>
````
````
<script>
    window.addEventListener('message', function(ev) {
        // if (ev.source !== window.parent) {return;}
        var data = ev.data;
        console.info('message from parent:', data);
    }, false);

    function send() {
        var data = document.querySelector('#inp').value;
        // window.postMessage(data, '*'); // 触发当前页面的message事件
        parent.postMessage(data, '*'); // 触发父页面的message事件
        // parent.postMessage(data, 'http://localhost:9011/'); // 若父页面的域名和指定的不一致，则postMessage失败
    }
</script>
````
### 二、使用Websocket协议  
全双工(full-duplex)通信自然可以实现多个标签页之间的通信  
### 三、通过Localstorage
LocalStorage对象在修订过的HTML5规范中作为持久保存在客户端数据的方案取代了globalStorage，它是浏览器多个标签共用的存储空间，所以可以用来实现多标签之间的通信。  
注意:  
* 要访问一个localStorage对象，页面必须来自同一个**`域名`**（子域名无效），使用同一种**`协议`**，在同一个**`端口`**上。
* session是会话级的存储空间，每个标签页都是**`单独`**的。

### 四、使用Webworker
我们都知道JavaScript是单线程的，但是浏览器是拥有过个线程的比如：gui渲染线程、JS引擎线程、事件触发线程、异步http请求线程。  
webworker作为浏览器的一个新特性，可以提供一个额外的线程来执行一些js代码，并且不会影响到浏览器用户界面。  
应用场景：比如页面中包含耗时较大的算法代码时，就会阻塞线程影响浏览器渲染等等。这时候就可把耗时代码，放到webworker(另一个线程)中执行。    
### 五、利用一下第三方封装的插件  
其本质上也是运用了以上几点特性开发而成   
<a href="https://github.com/krasimir/lsbridge" target="_blank">lsbridge-跨页面通信传值</a>  
<br/>
#### 相关链接
<a href="http://www.ruanyifeng.com/blog/2018/07/web-worker.html" target="_blank">阮一峰-Web Worker 使用教程</a>  
<a href="https://www.jianshu.com/p/31facd4934d7" target="_blank">实现多个标签页之间通信的几种方法</a>  
<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage" target="_blank">window.postMessage 使用方法
</a>
