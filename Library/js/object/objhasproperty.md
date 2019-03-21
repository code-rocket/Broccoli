判断对象中是否有某属性的常见方式总结，不同的场景要使用不同的方式。创建如下对象：
````
// 创建对象
let gcx = {
    name : '西兰花的春天',
    age:28
}
````
### 一、点( . )或者方括号( [ ] )
可以根据 Obj.x !== undefined 的返回值 来判断Obj是否有x属性。 
 
这种方式很简单方便，局限性就是：**`不能用在x的属性值存在，但可能为 undefined的场景`**。
````
test.un = undefined
test.un              //undefined 不能用在属性值存在，但可能为 undefined的场景
````
 in运算符可以解决这个问题。
### 二、 in 运算符
````
'name' in gcx        //true
'toString' in test    //true
'sex' in test           //false
````
这种方式的局限性就是**`无法区分自身和原型链上的属性`**，在只需要判断自身属性是否存在时，这种方式就不适用了。这时需要hasOwnProperty()
### 三、hasOwnProperty()
````
test.hasOwnProperty('name')        //true   自身属性
test.hasOwnProperty('sex')           //false  不存在
test.hasOwnProperty('toString')    //false  原型链上属性
````
可以看到，只有自身存在该属性时，才会返回true。**`适用于只判断自身属性的场景`**。
<br/>
#### 相关链接      

<a href="https://www.cnblogs.com/shapeY/p/9180908.html" target="_blank">判断对象中是否有某属性</a>  
