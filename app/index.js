var yg = require('yeoman-generator');

module.exports = yg.Base.extend({
    constructor: function () {
        yg.Base.apply(this, arguments);
        var tes = require('./tes.js');
        this.option('tpl', {
            type: String,
            defaults: tes.default,
            desc: 'Template engine to use'
        });
        var tpl = this.options.tpl;
        this.te = tes.known[tpl];
        this.config.set({tpl: tpl});
    },
    writing: function () {
        var TO = this.destinationRoot();
        this.fs.copy(this.templatePath('copy'), TO);
        this.fs.copy(this.templatePath('tpls/**/*' + this.te.suffix), TO);
        this.fs.copyTpl(this.templatePath('copyTpl'), TO, {te: this.te});
    },
    install: function () {
        var npmDeps = [
            'connect', 'serve-static', 'errorhandler',
            'catberry', this.te.package
        ];
        this.npmInstall(npmDeps, {save: true});
    }
});
