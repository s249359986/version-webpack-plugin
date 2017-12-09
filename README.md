# version-webpack-plugin
## install
npm run install version-webpack-plugin --save-dev
## use
```
webpack 配置文件中引入插件
const sVersionPlugin = require('version-webpack-plugin')
plugins: [
     new sVersionPlugin({
            enable: true // 临时版本插件false
        })
]
```
## eg

- 每次打包会生成新的递增的版本号，可在控制台查看
![image](http://static.daojia.com/assets/project/tosimple-pic/console123_1512788951737.jpeg)

- 页面效果，单击icon展示版本，点击其他区域关闭
![image](http://static.daojia.com/assets/project/tosimple-pic/console246_1512788951721.jpeg)
