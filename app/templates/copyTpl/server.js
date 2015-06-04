'use strict';

var catberry = require('catberry'),
    cat = catberry.create({isRelease: process.argv[2] === 'release'}),
    catTpl = require('<%=package%>');

catTpl.register(cat.locator);

var app = require('connect')();

var serve_static = require('serve-static');
app.use(serve_static('public'));

app.use(cat.getMiddleware());

var error_handler = require('errorhandler');
app.use(error_handler());

cat.events.on('ready', function () {
    var logger = cat.locator.resolve('logger');
    logger.info('Catberry is ready on 3000');
});

require('http')
    .createServer(app)
    .listen(3000);
