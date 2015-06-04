'use strict';

var catberry = require('catberry'),
    cat = catberry.create({isRelease: process.argv[2] === 'release'}),
    catTpl = require('<%=package%>');

catTpl.register(cat.locator);
cat.build();
