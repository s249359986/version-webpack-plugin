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
        let dateObj = new Date()
        let versionFirst = dateObj.getFullYear() - 2017
        let versionSecond = dateObj.getMonth() + 1
        let versionThree = dateObj.getDate()
        let versionFour = dateObj.getHours() * 60 + dateObj.getMinutes()
        let versionNumber = versionFirst + "." + versionSecond + "." + versionThree + "." + versionFour
        let sversionTime = (dateObj.getMonth()+1) + '月' + dateObj.getDate() + '日' + dateObj.getHours() + '时' + dateObj.getMinutes() + '分'
        let versionStr = "window.sversionId=" + String('"'+versionNumber+'"') + "\n" + "window.sversionTime=" + String('"'+sversionTime+'"')        
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
