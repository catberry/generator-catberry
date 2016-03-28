'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var test = require('yeoman-test');

describe('generator-catberry:component', function () {
  before(function (done) {
    test.run(path.join(__dirname, '../generators/component'))
      .withArguments(['i_like.SNAKES'])
      .withOptions({})
      .withPrompts({})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'catberry_components/i-like-snakes/index.js'
    ]);
  });
});
