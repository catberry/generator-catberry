'use strict';

var catberry = require('catberry'),
    cat = catberry.create(),
    catTpl = require('<%=package%>');

catTpl.register(cat.locator);
cat.startWhenReady();
