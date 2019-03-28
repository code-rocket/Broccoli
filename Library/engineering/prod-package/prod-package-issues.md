### 问题一：
运行：打包命令后报错
````
ERROR in ./src/packages/base-grid/src/action/actionPanel.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
TypeError: Property elements[2] of ArrayExpression expected node to be of a type ["null","Expression","SpreadElement"] but instead got "JSXEmptyExpression"
    at validate (/Applications/XAMPP/xamppfiles/htdocs/dev-project/CX-UI-Design/CX-UI-Design/packages/cx-grid/node_modules/@babel/types/lib/definitions/utils.js:148:13)
    at validator (/Applications/XAMPP/xamppfiles/htdocs/dev-project/CX-UI-Design/CX-UI-Design/packages/cx-grid/node_modules/@babel/types/lib/definitions/utils.js:97:7)
    at Object.validate (/Applications/XAMPP/xamppfiles/htdocs/dev-project/CX-UI-Design/CX-UI-Design/packages/cx-grid/node_modules/@babel/types/lib/definitions/utils.js:172:7)
    at validate (/Applications/XAMPP/xamppfiles/htdocs/dev-project/CX-UI-Design/CX-UI-Design/packages/cx-grid/node_modules/@babel/types/lib/validators/validate.js:17:9)
    at builder (/Applications/XAMPP/xamppfiles/htdocs/dev-project/CX-UI-Design/CX-UI-Design/packages/cx-grid/node_modules/@babel/types/lib/builders/builder.js:46:27)
    at Object.ArrayExpression (/Applications/XAMPP/xamppfiles/htdocs/dev-project/CX-UI-Design/CX-UI-Design/packages/cx-grid/node_modules/@babel/types/lib/builders/generated/index.js:237:31)
    at transformJSXElement (/Applications/XAMPP/xamppfiles/htdocs/dev-project/CX-UI-Design/CX-UI-Design/packages/cx-grid/node_modules/@vue/babel-plugin-transform-vue-jsx/dist/plugin.js:1:5589)
    at PluginPass.JSXElement (/Applications/XAMPP/xamppfiles/htdocs/dev-project/CX-UI-Design/CX-UI-Design/packages/cx-grid/node_modules/@vue/babel-plugin-transform-vue-jsx/dist/plugin.js:1:6518)
    at newFn (/Applications/XAMPP/xamppfiles/htdocs/dev-project/CX-UI-Design/CX-UI-Design/packages/cx-grid/node_modules/@babel/traverse/lib/visitors.js:193:21)
    at NodePath._call (/Applications/XAMPP/xamppfiles/htdocs/dev-project/CX-UI-Design/CX-UI-Design/packages/cx-grid/node_modules/@babel/traverse/lib/path/context.js:53:20)
    at NodePath.call (/Applications/XAMPP/xamppfiles/htdocs/dev-project/CX-UI-Design/CX-UI-Design/packages/cx-grid/node_modules/@babel/traverse/lib/path/context.js:40:17)
    at NodePath.visit (/Applications/XAMPP/xamppfiles/htdocs/dev-project/CX-UI-Design/CX-UI-Design/packages/cx-grid/node_modules/@babel/traverse/lib/path/context.js:88:12)
    at TraversalContext.visitQueue (/Applications/XAMPP/xamppfiles/htdocs/dev-project/CX-UI-Design/CX-UI-Design/packages/cx-grid/node_modules/@babel/traverse/lib/context.js:118:16)
    at TraversalContext.visitSingle (/Applications/XAMPP/xamppfiles/htdocs/dev-project/CX-UI-Design/CX-UI-Design/packages/cx-grid/node_modules/@babel/traverse/lib/context.js:90:19)
    at TraversalContext.visit (/Applications/XAMPP/xamppfiles/htdocs/dev-project/CX-UI-Design/CX-UI-Design/packages/cx-grid/node_modules/@babel/traverse/lib/context.js:146:19)
    at Function.traverse.node (/Applications/XAMPP/xamppfiles/htdocs/dev-project/CX-UI-Design/CX-UI-Design/packages/cx-grid/node_modules/@babel/traverse/lib/index.js:94:17)
 @ ./src/packages/base-grid/src/ComReg.js 7:0-62 7:0-62
 @ ./node_modules/babel-loader/lib?cacheDirectory!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/base-grid/src/base-grid.vue?vue&type=script&lang=js&
 @ ./src/packages/base-grid/src/base-grid.vue?vue&type=script&lang=js&
 @ ./src/packages/base-grid/src/base-grid.vue
 @ ./src/index.js

  Build failed with errors.

````
注意这句错误：
````
TypeError: Property elements[2] of ArrayExpression expected node to be of a type ["null","Expression","SpreadElement"] but instead got "JSXEmptyExpression"
````
解决：
发现项目 render 函数 中有如下代码：
````
 render(h) {
    return (
      <div class={"panel-page clear"} id={this.gridID + '-panel'}>
        {
          this.panelDescribe ? <span class="panel-pre_text fl">{this.panelDescribe}</span> : null
        }
        {
          <el-pagination class="fl" current-page={this.searchConditions.pageNum} page-sizes={this.pageSizes} page-size={this.searchConditions.pageSize}
                         total={this.total} layout={this.layout} pager-count={this.pagerCount}
                         on-size-change={this.sizeChange} on-current-change={this.currentChange}>
          </el-pagination>
        }
        {/*{*/}
          {/*<div>123</div>*/}
        {/*}*/}
      </div>
    )
  },
````
问题就出在这里，有注释的代码，影响了打包的编译进行。
删除注释代码即可。
