'use strict';

var BaseGenerator = require('yeoman-generator').Base;

module.exports = BaseGenerator.extend({

  constructor: function () {
    BaseGenerator.apply(this, arguments);
    this.argument('componentName', {type: String, required: true});
    this.option('preset', {type: String, defaults: 'handlebars'});
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('component-' + this.options.preset + '/**/*'),
      this.destinationPath('catberry_components/' + this.componentName)
    );
  }

});
