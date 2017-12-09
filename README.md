# version-webpack-plugin
## install
npm run install version-webpack-plugin --save-dev
## use
```
enable:插件是否可用。默认为false
options:{enable:Boolean}

webpack 配置文件中引入插件
const sVersionPlugin = require('version-webpack-plugin')
plugins: [
     new sVersionPlugin({
            enable: true // 根据环境动态修改可用性
        })
]
```
## eg

- 每次打包会生成新的递增的版本号，可在控制台查看
<img src="https://github.com/s249359986/version-webpack-plugin/blob/master/demo/img/console123.jpeg" width="500px">

- 页面效果，单击icon展示版本，点击其他区域关闭
<img src="https://github.com/s249359986/version-webpack-plugin/blob/master/demo/img/console246.jpeg" width="500px">
