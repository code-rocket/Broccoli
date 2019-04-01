## 一、BFC是什么？
在一个Web页面的CSS渲染中，块级格式化上下文 (Block Fromatting Context)是按照块级盒子布局的。   W3C对BFC的定义如下：  
**`浮动元素和绝对定位元素，非块级盒子的块级容器（例如 inline-blocks, table-cells, 和 table-captions），以及overflow值不为“visiable”的块级盒子，都会为他们的内容创建新的BFC（块级格式上下文）`**。  
BFC布局规则：
* 内部的Box会在垂直方向，一个接一个地放置。
* Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会**`发生重叠`**。
* 每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
* **`BFC的区域不会与float box重叠`**。
* BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
* **`计算BFC的高度时，浮动元素也参与计算`**。

## 二、哪些元素会生成BFC?
一个HTML元素要创建BFC，则满足下列的任意一个或多个条件即可： 
* float的值不是none。
* position的值不是static或者relative。
* display的值是inline-block、table-cell、flex、table-caption或者inline-flex
* overflow的值不是visible  

BFC是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列。
## 三、BFC的作用
### 1. 自适应两栏布局
````
<style>
    body {
        width: 300px;
        position: relative;
    }
 
    .aside {
        width: 100px;
        height: 150px;
        float: left;
        background: #f66;
    }
 
    .main {
        overflow: hidden;
        height: 200px;
        background: #fcc;
    }
</style>
<body>
    <div class="aside"></div>
    <div class="main"></div>
</body>
````
当触发main生成BFC后，这个新的BFC不会与浮动的aside重叠。因此会根据包含块的宽度，和aside的宽度，自动变窄。
### 2. 清除内部浮动
````
<style>
    .par {
        overflow: hidden;
        border: 5px solid #fcc;
        width: 300px;
    }
 
    .child {
        border: 5px solid #f66;
        width:100px;
        height: 100px;
        float: left;
    }
</style>
<body>
    <div class="par">
        <div class="child"></div>
        <div class="child"></div>
    </div>
</body>
````
**`计算BFC的高度时，浮动元素也参与计算`**  
为达到清除内部浮动，我们可以触发par生成BFC，那么par在计算高度时，par内部的浮动元素child也会参与计算。  
### 3. 防止垂直 margin 重叠
````
<style>
    .wrap {
        overflow: hidden;
    }
    p {
        color: #f55;
        background: #fcc;
        width: 200px;
        line-height: 100px;
        text-align:center;
        margin: 100px;
    }
</style>
<body>
    <p>Haha</p>
    <div class="wrap">
        <p>Hehe</p>
    </div>
</body>
````
**`Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠。`**  
我们可以在p外面包裹一层容器，并触发该容器生成一个BFC。那么两个P便不属于同一个BFC，就不会发生margin重叠了。  
#### 相关链接 
<a href="https://www.cnblogs.com/lhb25/p/inside-block-formatting-ontext.html" target="_blank">BFC 神奇背后的原理</a>  
<a href="https://www.cnblogs.com/libin-1/p/7098468.html" target="_blank">什么是BFC</a>