'use strict';

module.exports = AStore;

/**
 * @constructor
 * @param {UHR} $uhr
 */
function AStore($uhr) {
    this._uhr = $uhr;
}

/**
 * @type {UHR}
 * @private
 */
AStore.prototype._uhr = null;

/**
 * @type {number}
 */
AStore.prototype.$lifetime = 60000;

/**
 * @returns Remote data
 */
AStore.prototype.load = function () {
    //
};

/**
 * @returns Action response
 */
AStore.prototype.handleSomeAction = function () {
    //
};
