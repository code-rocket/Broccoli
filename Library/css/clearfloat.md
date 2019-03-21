### 1、父级div定义伪类：after和zoom
````
@mixin clearFloat {
  zoom:1;
  &:after {
    clear: both;
  }
  &:after, &:before {
    display: table;
    content: "";
  }
}

````
* 原理：IE8以上和非IE浏览器才支持:after，zoom(IE转有属性)可解决ie6,ie7浮动问题。   
* 优点：浏览器支持好，不容易出现问题。

### 2、在结尾处添加空div标签clear:both
````
/*清除浮动*/
.clearfloat{clear:both}
/*在结尾处添加*/
<div class="clearfloat"></div>
````
* 原理：添加一个空div，利用css提高的clear:both清除浮动，让父级div能自动获取到高度  。
* 优缺点：简单，代码少，浏览器支持好，不容易出现怪问题，但是增加很多空div。

### 3、.父级div定义overflow:hidden
* 原理：使用overflow:hidden时，浏览器会自动检查浮动区域的高度。
* 优缺点：代码少，浏览器支持好，不能和position配合使用，因为超出的尺寸的会被隐藏。

### 4、父级div也一起浮动
* 原理：所有代码一起浮动，就变成了一个整体。   
* 优缺点：没有优点，会产生新的浮动问题。

### 5、父级div定义height
* 原理：父级div手动定义height，就解决了父级div无法自动获取到高度的问题。   
* 优缺点：简单，代码少，只适合高度固定的布局，要给出精确的高度，不适用于高度不确定的情况。
<br/>  

#### 相关链接
<a href="https://www.cnblogs.com/nxl0908/p/7245460.html" target="_blank">几种常用的清除浮动方法</a>
