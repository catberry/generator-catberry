'use strict';

module.exports = function (isRelease) {
    var cat = require('catberry').create({
        isRelease: isRelease
    });
    require('<%=te.package%>').register(cat.locator);
    return cat;
};
