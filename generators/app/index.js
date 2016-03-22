'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
    this.argument('appTemplate', {type: String, defaults: 'empty-handlebars'});
  },

  prompting: function () {
    this.log(yosay(
      'Welcome to the scrumtrulescent ' + chalk.red('generator-catberry') + ' generator!'
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
    this.fs.copy(
      this.templatePath(this.appTemplate + '/**/*'),
      this.destinationRoot()
    );
  },

  install: function () {
    this.installDependencies();
  }

});
