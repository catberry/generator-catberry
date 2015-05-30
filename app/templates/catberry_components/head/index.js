'use strict';

module.exports = Head;

function Head($config) {
    this._config = $config;
}

Head.prototype.render = function () {
    return this._config;
};
