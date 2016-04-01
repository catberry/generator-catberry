'use strict';

var BaseGenerator = require('yeoman-generator').Base;
var pascase = require('pascal-case');
var parcase = require('param-case');

module.exports = BaseGenerator.extend({

  constructor: function () {
    BaseGenerator.apply(this, arguments);
    this.argument('componentName', {type: String, required: true});
    this.option('preset', {type: String, defaults: 'handlebars'});
  },

  writing: function () {
    var className = pascase(this.componentName);
    var name = parcase(this.componentName);
    this.fs.copyTpl(
      this.templatePath('component-' + this.options.preset + '/**/*'),
      this.destinationPath('catberry_components/' + name),
      {
        __pascalName__: className,
        __name__: name
      }
    );
  }

});
