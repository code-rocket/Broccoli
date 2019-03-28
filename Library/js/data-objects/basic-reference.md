## 一、JS基本数据类型：
### 1、基本数据类型的值是不可变的
任何方法都无法改变一个基本类型的值，比如一个字符串：  

````
var name = "change";
name.substr();//hang
console.log(name);//change

var s = "hello";
s.toUpperCase()//HELLO;
console.log(s)//hello
````
原先定义的变量name的值始终没有发生改变，而调用substr()和toUpperCase()方法后返回的是一个新的字符串，跟原先定义的变量name并没有关系。
````
var name = "change";
name = "change1";
console.log(name)//change1
````
这里的基础类型指的是"change"，而不是name，改变只是“指针的指向改变”。 
### 2、基本数据类型不可以添加属性和方法
````
var p = "change";
p.age = 29;
p.method = function(){console.log(name)};
console.log(p.age)//undefined
console.log(p.method)//undefined
````
### 3、基本数据类型的赋值是简单赋值
````
var a = 10;
var b = a;
a++;
console.log(a)//11
console.log(b)//10
````
如果从一个变量向另一个变量赋值基本类型的值，会在变量对象上创建一个新值，然后把该值复制到为新变量分配的位置上
### 4、基本数据类型的比较是值的比较
````
var person1 = '{}';
var person2 = '{}';
console.log(person1 == person2); // true
```` 
### 5. 基本数据类型是存放在栈区的
```` 
var name = "gcx";
var city = "hangzhou";
var age = 28;
```` 
存储结构如下:  

键|值|
:--|:--|
name|gcx|
city|hangzhou|
age|28|

栈区包括了变量的标识符和变量的值
## 二、JS引用类型：
JS引用类型也就是对象，比如：**`Object,Array,Function,Data`**等
### 1. 引用类型的值是可以改变的
````
var o = {x:1};
o.x = 2;//通过修改对象属性值更改对象
o.y = 3;再次更改对象，给它增加一个属性
var a = [1,2,3];
a[0] = 0;//更改数组的一个元素
a[3] = 4;//给数组增加一个元素
````
### 2. 引用类型可以添加属性和方法
````
var person = {};
person.name = "gcx";
person.say = function(){alert("hello");}
console.log(person.name)//gcx
console.log(person.say)//function(){alert("hello");}
````
### 3. 引用类型的赋值是对象引用
如下代码：
````
var a = {};
var b= a;
a.name = "gcx";
console.log(a.name)//gcx;
console.log(b.name)//gcx
b.age = 28;
console.log(a.age)//28
console.log(b.age)//28
````
当从一个变量向另一个变量赋值引用类型的值时，同样也会将储存在变量中的对象的值复制一份放到为新变量分配的空间中。引用类型保存在变量中的是对象在**`堆内存`**中的地址，所以，与基本数据类型的简单赋值不同，这个值的副本实际上是一个指针，而这个指针**`指向存储在堆内存的一个对象`**.那么赋值操作后，两个变量都保存了同一个对象地址，而这两个地址指向了同一个对象.因此，**`改变其中任何一个变量，都会互相影响`**。
### 4. 引用类型的比较是引用的比较
````
var person1 = {};
var person2 = {};
console.log(person1 == person2)//false
````
因为引用类型的比较是**`引用的比较`**，换句话说，就是比较两个对象保存在栈区的**`指向堆内存的地址是否相同`**，此时，虽然p1和p2看起来都是一个"{}"，但是他们保存在栈区中的指向堆内存的地址却是不同的，所以两个对象不相等。
### 5. 引用类型是同时保存在栈区和堆区中的
引用类型的存储需要在内存的栈区和堆区共同完成，**`栈区保存变量标识符和指向堆内存的地址`**。  
假如有以下几个对象：
````
var person1 = {name:"change1"};
var person2 = {name:"change2"};
var person3 = {name:"change3"};
````
则这三个对象在内存中保存的情况如下图：

栈区（标识符）|栈区（值）|    |堆区|
:--|:--|:--|:--|
name1|gcx|=>| object1 |
name2|gcx2|   =>   | object2 |
name3|gcx3|   =>   | object3 |

<br/>   
#### 相关链接
<a href="https://segmentfault.com/a/1190000008472264" target="_blank">基本数据类型和引用类型的区别详解</a>  
