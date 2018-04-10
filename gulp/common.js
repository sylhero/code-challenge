module.exports = (function() {
    'use strict';
    var gulpUtil = require('gulp-util');
    var config = require('./configuration.js');
    var del = require('del');
    return {
        gulpInfo: gulpInfo,
        gulpError: gulpError,
        deleteFiles: deleteFiles,
        deleteAll: deleteAll,
        quitOnError: quitOnError
    };

    function gulpInfo(msg) {
        gulpUtil.log(gulpUtil.colors.cyan.bold(msg));
    }

    function gulpError(msg) {
        gulpUtil.log(gulpUtil.colors.red.bold(msg));
    }

    function deleteFiles(path, callback) {
        del(path, callback);
    }

    function deleteAll(callback) {
        del(config.temp, callback);
        del(config.dest, callback);
    }

    function quitOnError() {
        process.exit(1);
    }

})();
