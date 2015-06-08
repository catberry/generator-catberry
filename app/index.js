var yg = require('yeoman-generator'),
    cfg = require('../cfg.json');

module.exports = yg.Base.extend({
    constructor: function () {
        yg.Base.apply(this, arguments);
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
        this.fs.copyTpl(SRC + 'gcat.js', DEST + 'gcat.js', {te: cfg.tes[this.config.get('tpl')]});
        this._generateComponents();
    },
    _generateComponents: function () {
        //
        var SRC = this.sourceRoot() + '/' + cfg.dirs.components + '/';
        var DEST = this.destinationRoot() + '/' + cfg.dirs.components + '/';
        var logic = cfg.component.logic;
        var template = cfg.component.template_ + cfg.tes[this.config.get('tpl')].suffix;
        var descriptor = cfg.component.descriptor;
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
            'catberry', cfg.tes[this.config.get('tpl')].package
        ];
        this.npmInstall(npmDeps, {save: true});
    }
});
