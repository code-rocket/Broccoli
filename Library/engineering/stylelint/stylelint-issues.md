### 问题一：
运行：**`stylelint  ' src/ *  * / * .scss --syntax scss ' 后报错 `**
````
> charge-easy@1.0.0 lint:style /Applications/XAMPP/xamppfiles/htdocs/dev-project/newsee/charge-easy/CE-Frontend
> stylelint "src/**/*.scss" --syntax scss

Error: No configuration provided for /Applications/XAMPP/xamppfiles/htdocs/dev-project/newsee/charge-easy/CE-Frontend/src/assets/css/index.scss
    at module.exports (/Applications/XAMPP/xamppfiles/htdocs/dev-project/newsee/charge-easy/CE-Frontend/node_modules/stylelint/lib/utils/configurationError.js:8:28)
    at searchForConfig.then.then.config (/Applications/XAMPP/xamppfiles/htdocs/dev-project/newsee/charge-easy/CE-Frontend/node_modules/stylelint/lib/getConfigForFile.js:55:15)
npm ERR! code ELIFECYCLE
npm ERR! errno 78
npm ERR! charge-easy@1.0.0 lint:style: `stylelint "src/**/*.scss" --syntax scss`
npm ERR! Exit status 78
npm ERR! 
npm ERR! Failed at the charge-easy@1.0.0 lint:style script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/xilanhuadechuntian/.npm/_logs/2019-03-26T02_51_38_248Z-debug.log
npm ERR! code ELIFECYCLE
npm ERR! errno 78
npm ERR! charge-easy@1.0.0 lint:fix: `eslint --fix --ext .js src/main.js && npm run lint:style`
npm ERR! Exit status 78
npm ERR! 
npm ERR! Failed at the charge-easy@1.0.0 lint:fix script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/xilanhuadechuntian/.npm/_logs/2019-03-26T02_51_38_279Z-debug.log
````
解决：
项目根目录缺少配置文件：.stylelintrc.json，需要创建。详细参见：<a href="https://www.cnblogs.com/xiaohuochai/p/9078154.html" target="_blank">CSS代码检查工具stylelint</a>  
