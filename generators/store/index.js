'use strict';

var BaseGenerator = require('yeoman-generator').Base;
var pcase = require('pascal-case');

module.exports = BaseGenerator.extend({

  constructor: function () {
    BaseGenerator.apply(this, arguments);
    this.argument('storeName', {type: String, required: true});
  },

  writing: function () {
    var name = pcase(this.storeName);
    this.fs.copy(
      this.templatePath('Store.js'),
      this.destinationPath('catberry_stores/' + name + '.js'),
      {
        process: function (buf) {
          return buf.toString().replace(/__pascalName__/g, name);
        }
      }
    );
  }

});
