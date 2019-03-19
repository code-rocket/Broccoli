## 纯函数介绍
简单来说，一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用，我们就把这个函数叫做纯函数。这么说肯定比较抽象，我们把它掰开来看：
*  函数的返回结果只依赖于它的参数。
*  函数执行过程里面没有副作用。

### 代码示例

```  
const a = 1  
const foo = (b) => a + b  
foo(2) // => 3 
不是纯函数

const a = 1  
const foo = (x, b) => x + b   
foo(1, 2) // => 3   
是纯函数
   
const a = 1   
const foo = (obj, b) => {  
  return obj.x + b  
}   
const counter = { x: 1 }  
foo(counter, 2) // => 3  
counter.x // => 1  
是纯函数
    
const a = 1  
const foo = (obj, b) => {  
  obj.x = 2  
  return obj.x + b     
}   
const counter = { x: 1 }    
foo(counter, 2) // => 4    
counter.x // => 2    
不是纯函数
    
const foo = (b) => {     
  const obj = { x: 1 }          
  obj.x = 2        
  return obj.x + b     
}    
是纯函数     
```
<br/>

除了修改外部的变量，一个函数在执行过程中还有很多方式产生外部可观察的变化，比如说调用 **`DOM API`** 修改页面，或者你发送了  **`Ajax`**  请求，还有调用 **`Ajax`** **`window.reload`**  刷新浏览器，甚至是 **`console.log`**  往控制台打印数据也是副作用。纯函数很严格，也就是说你几乎除了计算数据以外什么都不能干，计算的时候还不能依赖除了函数参数以外的数据。
