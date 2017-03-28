'use strict';

var BaseGenerator = require('yeoman-generator').Base;

module.exports = BaseGenerator.extend({

  constructor: function () {
    BaseGenerator.apply(this, arguments);
    this.option('preset', {desc: 'App preset: dust | example | handlebars | pug', alias: 'p', defaults: 'handlebars'});
    this.argument('appName', {desc: 'App name', required: false, defaults: this.appname});
  },

  writing: function () {
    var appName = this.appName;
    var preset = this.options.preset;
    this.log('App name = ' + appName);
    this.config.set('preset', preset);
    this.fs.copy(
      this.templatePath(preset + '/**/*'),
      this.destinationRoot()
    );
    this.fs.extendJSON(this.destinationPath('package.json'), {name: appName});
  },

  install: function () {
    this.installDependencies();
  }

});
