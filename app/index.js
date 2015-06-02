var yg = require('yeoman-generator');

var tpls = {
    hbs: {
        name: 'Handlebars',
        package: 'catberry-handlebars',
        suffix: '.hbs'
    },
    dust: {
        name: 'Dust',
        package: 'catberry-dust',
        suffix: '.dust'
    },
    jade: {
        name: 'Jade',
        package: 'catberry-jade',
        suffix: '.jade'
    }
};

module.exports = yg.Base.extend({
    constructor: function () {
        yg.Base.apply(this, arguments);
        this.option('tpl', {type: String, defaults: 'hbs', desc: 'Template engine to use'});
    },
    prompting: function () {
        this.answers = {
            tpl: this.options.tpl
        };
    },
    writing: function () {
        var TO = this.destinationRoot();
        this.fs.copy(this.templatePath('copy'), TO);
        var tplSuffix = tpls[this.answers.tpl].suffix;
        this.fs.copy(this.templatePath('tpls/**/*' + tplSuffix), TO);
        var tplPackage = tpls[this.answers.tpl].package;
        var context = {suffix: tplSuffix, package: tplPackage};
        this.fs.copyTpl(this.templatePath('copyTpl'), TO, context);
    },
    install: function () {
        var npmDeps = [
            'connect', 'serve-static', 'errorhandler',
            'catberry', tpls[this.answers.tpl].package
        ];
        this.npmInstall(npmDeps, {save: true});
    }
});
