### 指令v-el的作用是什么
被用来给元素或子组件注册引用信息。
````
<div type="text" v-el:elDiv ></div>

this.$els.elDiv  => 获取
````
注意 HTML 不区分大小写，v-el 驼峰格式

但是在Vue 2.0，注意**`v-el 已经废弃了`** 。
### 要使用 ref 特殊属性
ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例：
````
<!-- `vm.$refs.p` will be the DOM node -->
<p ref="p">hello</p>

<!-- `vm.$refs.child` will be the child component instance -->
<child-component ref="child"></child-component>
````
关于 ref 注册时间的重要说明：  
因为 ref 本身是作为渲染结果被创建的**`在初始渲染的时候你不能访问它们 - 它们还不存在`**。$refs 也不是响应式的，因此你不应该试图用它在模板中做数据绑定。
  
<br/>
#### 相关链接   

<a href="https://v1.vuejs.org/api/#v-el" target="_blank">vue-el</a>  
<a href="https://cn.vuejs.org/v2/api/#ref" target="_blank">vue-ref</a>  
