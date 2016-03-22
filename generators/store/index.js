'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({

  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
    this.argument('storeName', {type: String, required: true});
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('Store.js'),
      this.destinationPath('catberry_stores/' + this.storeName + '.js')
    );
  }

});
