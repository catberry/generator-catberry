'use strict';

var BaseGenerator = require('yeoman-generator').Base;
var pascalize = require('pascal-case');

module.exports = BaseGenerator.extend({

  constructor: function () {
    BaseGenerator.apply(this, arguments);
    this.argument('name', {type: String, required: true});
  },

  writing: function () {
    var clazz = pascalize(this.name);
    this.fs.copyTpl(
      this.templatePath('Store.ejs'),
      this.destinationPath('catberry_stores/' + clazz + '.js'),
      {
        clazz: clazz
      }
    );
  }

});
