var yg = require('yeoman-generator');

module.exports = yg.Base.extend({
    constructor: function () {
        yg.Base.apply(this, arguments);
        var cfg = require('../cfg.json');
        this.option('tpl', {
            type: String,
            defaults: Object.keys(cfg.tes)[0],
            desc: 'Template engine to use'
        });
        var tpl = this.options.tpl;
        this.te = cfg.tes[tpl]; //TODO: cfg.tes[tpl]?
        this.config.set({tpl: tpl});
    },
    //see issue #5
    writing: function () {
        var from = this.sourceRoot() + '/';
        var to = this.destinationRoot() + '/';
        this.fs.copy(from + '_gitignore', to + '.gitignore');
        this.fs.copyTpl(from + 'gcat.js', to + 'gcat.js', {te: this.te});
        this.fs.copy(from + '{browser.js,build.js,package.json,README.md,routes.js,server.js}', to);
        // document
        this.fs.copy(from + 'catberry_components/document/index.js', to + 'catberry_components/document/index.js');
        this.fs.copy(from + 'catberry_components/document/template' + this.te.suffix, to + 'catberry_components/document/template' + this.te.suffix);
        this.fs.writeJSON(to + 'catberry_components/document/cat-component.json', {template: 'template' + this.te.suffix});
        // head
        this.fs.copy(from + 'catberry_components/head/index.js', to + 'catberry_components/head/index.js');
        this.fs.copy(from + 'catberry_components/head/template' + this.te.suffix, to + 'catberry_components/head/template' + this.te.suffix);
        this.fs.writeJSON(to + 'catberry_components/head/cat-component.json', {template: 'template' + this.te.suffix});
    },
    install: function () {
        var npmDeps = [
            'connect', 'serve-static', 'errorhandler',
            'catberry', this.te.package
        ];
        this.npmInstall(npmDeps, {save: true});
    }
});
