(function() {
    'use strict';
    var path = require('path');

    var rootPath = path.normalize(__dirname + '/../../');

    module.exports = {
        development: {
            rootPath: rootPath,
            db: 'mongodb://127.0.0.1/brandnewskeleton',
            port: process.env.PORT || 3033
        },
        testing: {
            rootPath: rootPath,
            db: 'mongodb://127.0.0.1/brandnewskeleton',
            port: process.env.PORT || 3033
        },
        production: {
            rootPath: rootPath,
            db: 'mongodb://127.0.0.1/brandnewskeleton',
            port: process.env.PORT || 3033
        }
    }
}());