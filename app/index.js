var yg = require('yeoman-generator');

module.exports = yg.Base.extend({
    constructor: function () {
        yg.Base.apply(this, arguments);
        var cfg = this.cfg = require('../cfg.json');
        this.option('tpl', {
            type: String,
            defaults: Object.keys(cfg.tes)[0],
            desc: 'Template engine to use'
        });
        this.config.set('tpl', this.options.tpl);
    },
    writing: function () {
        //
        var SRC = this.sourceRoot() + '/';
        var DEST = this.destinationRoot() + '/';
        //
        this.fs.copy(SRC + '_gitignore', DEST + '.gitignore');
        this.fs.copy(SRC + '{browser.js,build.js,package.json,README.md,routes.js,server.js}', DEST);
        this.fs.copyTpl(SRC + 'gcat.js', DEST + 'gcat.js', {te: this.cfg.tes[this.config.get('tpl')]});
        this._generateComponents();
    },
    _generateComponents: function () {
        //
        var SRC = this.sourceRoot() + '/' + this.cfg.dirs.components + '/';
        var DEST = this.destinationRoot() + '/' + this.cfg.dirs.components + '/';
        var logic = this.cfg.component.logic;
        var template = this.cfg.component.template_ + this.cfg.tes[this.config.get('tpl')].suffix;
        var descriptor = this.cfg.component.descriptor;
        var catComponent = {template: template};
        // document
        this.fs.copy(SRC + 'document/' + logic, DEST + 'document/' + logic);
        this.fs.copy(SRC + 'document/' + template, DEST + 'document/' + template);
        this.fs.writeJSON(DEST + 'document/' + descriptor, catComponent);
        // head
        this.fs.copy(SRC + 'head/' + logic, DEST + 'head/' + logic);
        this.fs.copy(SRC + 'head/' + template, DEST + 'head/' + template);
        this.fs.writeJSON(DEST + 'head/' + descriptor, catComponent);
    },
    install: function () {
        var npmDeps = [
            'connect', 'serve-static', 'errorhandler',
            'catberry', this.cfg.tes[this.config.get('tpl')].package
        ];
        this.npmInstall(npmDeps, {save: true});
    }
});
