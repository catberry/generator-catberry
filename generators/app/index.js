'use strict';

var BaseGenerator = require('yeoman-generator').Base;

module.exports = BaseGenerator.extend({

  constructor: function () {
    BaseGenerator.apply(this, arguments);
    this.argument('appTemplate', {type: String, defaults: 'empty-handlebars'});
  },

  writing: function () {
    this.fs.copy(
      this.templatePath(this.appTemplate + '/**/*'),
      this.destinationRoot()
    );
  },

  install: function () {
    this.installDependencies();
  }

});
