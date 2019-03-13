module.exports = '## 纯函数介绍\n' +
  '简单来说，一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用，我们就把这个函数叫做纯函数。这么说肯定比较抽象，我们把它掰开来看：\n' +
  '*  函数的返回结果只依赖于它的参数。\n' +
  '*  函数执行过程里面没有副作用。\n' +
  '\n' +
  '### 代码示例\n' +
  '\n' +
  '```  \n' +
  'const a = 1  \n' +
  'const foo = (b) => a + b  \n' +
  'foo(2) // => 3 \n' +
  '不是纯函数\n' +
  '\n' +
  'const a = 1  \n' +
  'const foo = (x, b) => x + b   \n' +
  'foo(1, 2) // => 3   \n' +
  '是纯函数\n' +
  '   \n' +
  'const a = 1   \n' +
  'const foo = (obj, b) => {  \n' +
  '  return obj.x + b  \n' +
  '}   \n' +
  'const counter = { x: 1 }  \n' +
  'foo(counter, 2) // => 3  \n' +
  'counter.x // => 1  \n' +
  '是纯函数\n' +
  '    \n' +
  'const a = 1  \n' +
  'const foo = (obj, b) => {  \n' +
  '  obj.x = 2  \n' +
  '  return obj.x + b     \n' +
  '}   \n' +
  'const counter = { x: 1 }    \n' +
  'foo(counter, 2) // => 4    \n' +
  'counter.x // => 2    \n' +
  '不是纯函数\n' +
  '    \n' +
  'const foo = (b) => {     \n' +
  '  const obj = { x: 1 }          \n' +
  '  obj.x = 2        \n' +
  '  return obj.x + b     \n' +
  '}    \n' +
  '是纯函数     \n' +
  '```\n' +
  '<br/>\n' +
  '\n' +
  '除了修改外部的变量，一个函数在执行过程中还有很多方式产生外部可观察的变化，比如说调用 **`DOM API`** 修改页面，或者你发送了  **`Ajax`**  请求，还有调用 **`Ajax`** **`window.reload`**  刷新浏览器，甚至是 **`console.log`**  往控制台打印数据也是副作用。纯函数很严格，也就是说你几乎除了计算数据以外什么都不能干，计算的时候还不能依赖除了函数参数以外的数据。\n';
