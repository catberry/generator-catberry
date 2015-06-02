var yg = require('yeoman-generator');

var tpls = require('../app/tpls');

module.exports = yg.NamedBase.extend({
    constructor: function () {
        yg.NamedBase.apply(this, arguments);
        this.tpl = tpls.tpls[this.config.get('tpl') || tpls.default];
    },
    writing: function () {
        var TO = this.destinationPath('catberry_components/' + this.name + '/');
        var template = 'template' + this.tpl.suffix;
        var catComponent = {template: template};
        this.fs.writeJSON(TO + 'cat-component.json', catComponent);
        this.fs.write(TO + template, ".");
        this.fs.copy(this.templatePath('index.js'), TO + 'index.js');
    }
});
