/** gulp static task */
module.exports = (function() {
    'use strict';
    var gulp = require('gulp');
    var config = require('./configuration.js');
    var common = require('./common.js');
    var $ = require('gulp-load-plugins')({
        lazy: true
    });
    return {
        buildAssets: buildAssets,
    };

    function buildAssets() {
        common.gulpInfo('building assets files');
        return gulp.src(config.staticConfig.assetSource)
            .pipe($.newer(config.temp + '/assets/**/*'))
            .pipe(gulp.dest(config.temp))
            .pipe(gulp.dest(config.dest))
    }

})();
