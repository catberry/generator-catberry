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
    var pasName = pascase(this.componentName);
    var parName = parcase(this.componentName);
    this.fs.copy(
      this.templatePath('component-' + this.options.preset + '/**/*'),
      this.destinationPath('catberry_components/' + parName),
      {
        process: function (buf) { // TODO: extract and optimize
          return buf.toString().replace(/__pascalName__/g, pasName).replace(/__name__/g, parName);
        }
      }
    );
  }

});
