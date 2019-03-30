### Vue.delete 用法
Vue.delete( target, key )
参数：
* target - {Object | Array}
* key/index - {string | number}   
仅在 2.2.0+ 版本中支持 Array + index 用法。

删除对象的属性。如果对象是响应式的，确保删除能触发更新视图。这个方法主要用于避开 Vue 不能检测到属性被删除的限制。
**`目标对象不能是一个 Vue 实例或 Vue 实例的根数据对象。`**
### Vue.delete 和 delete 删除数组的区别
* delete只是被删除的元素变成了 empty/undefined 其他的元素的键值还是不变。
* Vue.delete直接删除了数组 改变了数组的键值。

```  
    const a=[1,2,3,4]
    const b=[1,2,3,4]
    delete a[1]
    console.log(a)
    this.$delete(b,1)
    console.log(b)
```  
#### delete a[1] 结果
```  
(4) [1, empty, 3, 4]
  0: 1
  2: 3
  3: 4
length: 4
__proto__: Array(0)
```  
#### this.$delete(b,1) 结果
```  
(3) [1, 3, 4]
  0: 1
  1: 3
  2: 4
length: 3
__proto__: Array(0)
```  
<br/>
#### 相关链接  

<a href="https://cn.vuejs.org/v2/api/#Vue-delete" target="_blank">VUE-API</a>  
