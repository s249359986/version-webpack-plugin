'use strict';
const path = require('path');
const fs = require('fs');
function sVersionPlugin(options) {
    this.options = Object.assign({
        enable: false // 插件开关，默认“关”
    }, options);
}

sVersionPlugin.prototype.apply = function(compiler) {
    const enable = this.options.enable;
    const _root = module.paths.find(path => fs.existsSync(path));
   const pathVconsole = path.join(_root, '/sversion/dist/sversion.min.js');
const pathTemp = path.resolve(__dirname,'./dist/temp.js');
compiler.plugin('entry-option', function() {
    if (enable) {
        let versionFirst = new Date().getFullYear() - 2017
        let versionSecond = new Date().getMonth() + 1
        let versionThree = new Date().getHours() * 60 + new Date().getMinutes()
        let versionNumber = versionFirst + "." + versionSecond + "." + versionThree
        let versionStr = "window.sversionId=" + String('"'+versionNumber+'"')
        fs.writeFileSync(pathTemp,versionStr, 'utf8');
        console.log("-------临时版本号："+versionNumber +"----------")
        if (Object.prototype.toString.call(this.options.entry) === '[object Array]') {
            this.options.entry.unshift(pathVconsole);
            //this.options.entry.unshift(pathTemp);
        } else if (typeof this.options.entry === 'object') {
            for (let key in this.options.entry) {
                if (Object.prototype.toString.call(this.options.entry[key]) === '[object Array]') {
                    this.options.entry[key].unshift(pathVconsole);
                    this.options.entry[key].unshift(pathTemp);
                } else if (typeof this.options.entry[key] === 'string') {
                    this.options.entry[key] = [pathTemp,pathVconsole, this.options.entry[key]];
                }
            }
        }

    }
});
};

module.exports = sVersionPlugin;
