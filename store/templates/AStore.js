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
 * @returns Remote data
 */
AStore.prototype.load = function () {
    //
};
