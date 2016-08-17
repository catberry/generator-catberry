'use strict';

var BaseGenerator = require('yeoman-generator').Base;
var pascalize = require('pascal-case');
var paramCase = require('param-case');

module.exports = BaseGenerator.extend({

  constructor: function () {
    BaseGenerator.apply(this, arguments);
    this.argument('componentName', {type: String, required: true});
    this.option('preset', {type: String, defaults: this.config.get('preset') || 'handlebars'});
  },

  writing: function () {
    var className = pascalize(this.componentName);
    var name = paramCase(this.componentName);
    var preset = this.options.preset;
    var tplPreset = (preset === 'example' ? 'handlebars' : preset);
    this.fs.copyTpl(
      this.templatePath('component-' + tplPreset + '/**/*'),
      this.destinationPath('catberry_components/' + name),
      {
        __pascalName__: className,
        __name__: name
      }
    );
  }

});
