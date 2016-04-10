'use strict';

var BaseGenerator = require('yeoman-generator').Base;

module.exports = BaseGenerator.extend({

  constructor: function () {
    BaseGenerator.apply(this, arguments);
    this.option('preset', {desc: 'App preset', alias: 'p', defaults: 'empty-handlebars'});
    this.argument('appName', {desc: 'App name', required: false, defaults: this.appname});
  },

  writing: function () {
    this.log('App name = ' + this.appName);
    this.fs.copy(
      this.templatePath(this.options.preset + '/**/*'),
      this.destinationRoot()
    );
  },

  install: function () {
    this.installDependencies();
  }

});
