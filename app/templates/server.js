'use strict';

var PORT = 3000;

var app = require('connect')();

var serve_static = require('serve-static');
app.use(serve_static('public'));

var cat = require('./gcat.js')(process.argv[2] === 'release');
app.use(cat.getMiddleware());
cat.events.on('ready', function () {
    var logger = cat.locator.resolve('logger');
    logger.info('Catberry is ready on ' + PORT);
});

var error_handler = require('errorhandler');
app.use(error_handler());

require('http').createServer(app).listen(PORT);
