'use strict';

var BaseGenerator = require('yeoman-generator').Base;

module.exports = BaseGenerator.extend({

  constructor: function () {
    BaseGenerator.apply(this, arguments);
    this.argument('storeName', {type: String, required: true});
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('Store.js'),
      this.destinationPath('catberry_stores/' + this.storeName + '.js')
    );
  }

});
