var yg = require('yeoman-generator');

module.exports = yg.NamedBase.extend({
    constructor: function () {
        yg.NamedBase.apply(this, arguments);
        var cfg = require('../cfg.json');
        this.te = cfg.tes[this.config.get('tpl') || Object.keys(cfg.tes)[0]];
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
