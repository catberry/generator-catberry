var yg = require('yeoman-generator');

var tpls = require('../app/tpls');

module.exports = yg.NamedBase.extend({
    constructor: function () {
        yg.NamedBase.apply(this, arguments);
        this.tpl = tpls.tpls[this.config.get('tpl') || tpls.default];
    },
    writing: function () {
        this.log(this.tpl);
    }
});
