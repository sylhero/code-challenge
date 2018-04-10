module.exports = (function() {
    'use strict';

    // Plugins Dependencies
    var gulp = require('gulp');
    var Server = require('karma').Server;
    var config = require('./configuration');

    // Interface
    return {
        unit: unit
    };

    function unit(callback) {
        var server = new Server({
            configFile: __dirname + '/../src/tests/karma.config.js'
        }, function(code) {
            if (code === 1) {
                callback('Unit Test Failures');
            } else {
                callback();
            }
        });
        server.start();
    }

})();
