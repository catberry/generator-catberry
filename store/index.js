var yg = require('yeoman-generator');

module.exports = yg.NamedBase.extend({
    constructor: function () {
        yg.NamedBase.apply(this, arguments);
    },
    writing: function () {
        this.fs.copy(
            this.templatePath('AStore.js'),
            this.destinationPath('catberry_stores/' + this.name + '.js'));
    }
});
