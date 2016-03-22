'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
    this.argument('storeName', {type: String, required: true});
  },

  prompting: function () {
    this.log(yosay(
      'Welcome to the cat\'s pajamas ' + chalk.red('generator-catberry') + ' generator!'
    ));
    var prompts = [];
    var done = this.async();
    this.prompt(prompts, function (props) {
      // To access props later use this.props.someOption;
      this.props = props;
      done();
    }.bind(this));
  },

  writing: function () {
    // this.fs.copy(
    //   this.templatePath('dummyfile.txt'),
    //   this.destinationPath('dummyfile.txt')
    // );
    this.spawnCommandSync(this.sourceRoot() + '/../../../node_modules/.bin/catberry', ['addstore', this.storeName]);
  },

  install: function () {
    // this.installDependencies();
  }

});
