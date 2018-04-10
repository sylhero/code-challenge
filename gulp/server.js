/** gulp server task */
module.exports = (function() {
    'use strict';
    var gulp = require('gulp');
    var config = require('./configuration.js');
    var browserSync = require('browser-sync').create();
    //var runSequence = require('run-sequence');
    var $ = require('gulp-load-plugins')({
        lazy: true
    });
    return {
        buildServer: buildServer,
        reloadServer: reloadServer
    };

    function buildServer(callback) {
        browserSync.init(config.browserSync, watchTask(callback));
    }

    function reloadServer() {
        browserSync.reload();
    }

    function watchTask(callback) {
        return function() {
            $.watch(
                config.html.indexSource,
                $.batch(function(events, callback) {
                    gulp.start('html:index:watch', callback);
                })
            );
            $.watch(
                config.html.templateSource,
                $.batch(function(events, callback) {
                    gulp.start('html:templates:watch', callback);
                })
            );

            $.watch(
                config.css.appSource,
                $.batch(function(events, callback) {
                    gulp.start('style:watch', callback);
                })
            );

            $.watch(
                config.staticConfig.assetSource,
                $.batch(function(events, callback) {
                    gulp.start('static:watch', callback);
                })
            );

            $.watch(
                config.javascript.appSource,
                $.batch(function(events, callback) {
                    gulp.start('js:watch', callback);
                })
            );
            callback();
        };
    }

})();
