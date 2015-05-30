var yg = require('yeoman-generator');

var templaters = {
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
    },
    prompting: function () {
        this.answers = {
            templater: 'hbs'
        };
        this.templater = templaters[this.answers.templater];
    },
    writing: function () {
        var src = this.sourceRoot();
        var dest = this.destinationRoot();
        var ctx = {templater: this.templater};
        this.fs.copyTpl(src, dest, ctx);
    },
    install: function () {
        var npmDeps = [
            'connect', 'serve-static', 'errorhandler',
            'catberry', this.templater.package
        ];
        this.npmInstall(npmDeps, {save: true});
    }
});
