var yg = require('yeoman-generator');

var tpls = require('./tpls');

module.exports = yg.Base.extend({
    constructor: function () {
        yg.Base.apply(this, arguments);
        this.option('tpl', {type: String, defaults: tpls.default, desc: 'Template engine to use'});
        var tpl = this.options.tpl;
        this.tpl = tpls.tpls[tpl];
        this.config.set({tpl: tpl});
    },
    writing: function () {
        var TO = this.destinationRoot();
        this.fs.copy(this.templatePath('copy'), TO);
        this.fs.copy(this.templatePath('tpls/**/*' + this.tpl.suffix), TO);
        this.fs.copyTpl(this.templatePath('copyTpl'), TO, {te: this.tpl});
    },
    install: function () {
        var npmDeps = [
            'connect', 'serve-static', 'errorhandler',
            'catberry', this.tpl.package
        ];
        this.npmInstall(npmDeps, {save: true});
    }
});
