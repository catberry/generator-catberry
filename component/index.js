var yg = require('yeoman-generator');

module.exports = yg.NamedBase.extend({
    constructor: function () {
        yg.NamedBase.apply(this, arguments);
        var tes = require('../app/tes.js');
        this.te = tes.known[this.config.get('tpl') || tes.default];
    },
    writing: function () {
        var TO = this.destinationPath('catberry_components/' + this.name + '/');
        var template = 'template' + this.te.suffix;
        var catComponent = {template: template};
        this.fs.writeJSON(TO + 'cat-component.json', catComponent);
        this.fs.write(TO + template, '.');
        this.fs.copy(this.templatePath('index.js'), TO + 'index.js');
    }
});
