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
        var te = cfg.tes[tpl]; //TODO: cfg.tes[tpl]?
        this.ctx = {te: te};
        this.config.set({tpl: tpl});
    },
    //see issue #5
    writing: function () {
        //
        var ctx = this.ctx;
        var aTpl = 'template' + ctx.te.suffix;
        var catComponent = {template: aTpl};
        //
        var from = this.sourceRoot() + '/';
        var to = this.destinationRoot() + '/';
        //
        this.fs.copy(from + '_gitignore', to + '.gitignore');
        this.fs.copyTpl(from + 'gcat.js', to + 'gcat.js', ctx);
        this.fs.copy(from + '{browser.js,build.js,package.json,README.md,routes.js,server.js}', to);
        // document
        this.fs.copy(from + 'catberry_components/document/index.js', to + 'catberry_components/document/index.js');
        this.fs.copy(from + 'catberry_components/document/' + aTpl, to + 'catberry_components/document/' + aTpl);
        this.fs.writeJSON(to + 'catberry_components/document/cat-component.json', catComponent);
        // head
        this.fs.copy(from + 'catberry_components/head/index.js', to + 'catberry_components/head/index.js');
        this.fs.copy(from + 'catberry_components/head/' + aTpl, to + 'catberry_components/head/' + aTpl);
        this.fs.writeJSON(to + 'catberry_components/head/cat-component.json', catComponent);
    },
    install: function () {
        var ctx = this.ctx;
        var npmDeps = [
            'connect', 'serve-static', 'errorhandler',
            'catberry', ctx.te.package
        ];
        this.npmInstall(npmDeps, {save: true});
    }
});
