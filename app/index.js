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
        this.option('tpl', {type: String, defaults: 'hbs'});
    },
    prompting: function () {
        this.answers = {
            tpl: this.options.tpl
        };
    },
    writing: function () {
        var tplSuffix = tpls[this.answers.tpl].suffix;
        var tplPackage = tpls[this.answers.tpl].package;
        var context = {
            suffix: tplSuffix,
            package: tplPackage
        };
        this.fs.copy(
            this.templatePath('package.json'),
            this.destinationPath('package.json'));
        // browser
        this.fs.copyTpl(
            this.templatePath('browser.js'),
            this.destinationPath('browser.js'),
            context);
        // document
        this.fs.copyTpl(
            this.templatePath('catberry_components/document/cat-component.json'),
            this.destinationPath('catberry_components/document/cat-component.json'),
            context);
        this.fs.copy(
            this.templatePath('catberry_components/document/document' + tplSuffix),
            this.destinationPath('catberry_components/document/document' + tplSuffix));
        this.fs.copy(
            this.templatePath('catberry_components/document/index.js'),
            this.destinationPath('catberry_components/document/index.js'));
        // head
        this.fs.copyTpl(
            this.templatePath('catberry_components/head/cat-component.json'),
            this.destinationPath('catberry_components/head/cat-component.json'),
            context);
        this.fs.copy(
            this.templatePath('catberry_components/head/head' + tplSuffix),
            this.destinationPath('catberry_components/head/head' + tplSuffix));
        this.fs.copy(
            this.templatePath('catberry_components/head/index.js'),
            this.destinationPath('catberry_components/head/index.js'));
    },
    install: function () {
        var npmDeps = [
            'connect', 'serve-static', 'errorhandler',
            'catberry', tpls[this.answers.tpl].package
        ];
        //this.npmInstall(npmDeps, {save: true});
    }
});
