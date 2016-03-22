'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({

  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
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
