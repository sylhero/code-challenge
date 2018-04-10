/** gulp javascript task */
module.exports = (function() {
    'use strict';

    var gulp = require('gulp');
    var common = require('./common.js');
    var config = require('./configuration.js');
    var stylish = require('jshint-stylish');
    var embedTemplates = require('gulp-angular-embed-templates');
    var angularFilesort = require('gulp-angular-filesort');
    var $ = require('gulp-load-plugins')({
        lazy: true
    });

    return {
        buildApplication: buildApplication,
        buildLibraries: buildLibraries,
        validateApplication: validateApplication
    };

    function validateApplication() {
        common.gulpInfo('validating application javascript');
        return gulp.src(config.javascript.appSource)
            .pipe($.newer(config.temp + config.javascript.appDest))
            .pipe($.jshint())
            .pipe($.jshint.reporter(stylish))
            .pipe($.if(config.environment === 'prod', $.jscs.reporter('fail')))
            .pipe($.if(config.environment !== 'prod', $.plumber()))
            .pipe($.jscs())
            .pipe($.jscs.reporter())
            .pipe($.if(config.environment === 'prod', $.jscs.reporter('fail')))
            .pipe($.if(config.environment !== 'prod', $.plumber()));
    }

    function buildApplication() {
        common.gulpInfo('compiling application javascript');
        return gulp.src(config.javascript.appSource)
            .pipe($.newer(config.temp + config.javascript.appDest))
            .pipe(angularFilesort())
            .pipe($.if(config.environment === 'prod', embedTemplates({
                sourceType: 'js'
            })))
            //.pipe($.if(config.environment !== 'prod', $.print()))
            .pipe($.if(config.environment !== 'prod', $.sourcemaps.init({
                loadMaps: true
            })))
            .pipe($.uglify())
            .pipe($.plumber())
            .pipe($.concat(config.javascript.appDest))
            .pipe($.if(config.environment !== 'prod', $.sourcemaps.write()))
            .pipe(gulp.dest(config.temp))
            .pipe(gulp.dest(config.dest))
    }

    function buildLibraries() {
        common.gulpInfo('compiling vendor javascript libraries');
        return gulp.src(config.javascript.venderSource)
            .pipe($.if(config.environment !== 'prod', $.print()))
            .pipe($.newer(config.temp + config.javascript.vendorDest))
            .pipe($.if(config.environment !== 'prod', $.sourcemaps.init({
                loadMaps: true
            })))
            .pipe($.uglify())
            .pipe($.plumber())
            .pipe($.concat(config.javascript.vendorDest))
            .pipe($.if(config.environment !== 'prod', $.sourcemaps.write()))
            .pipe(gulp.dest(config.temp))
            .pipe(gulp.dest(config.dest))
    }
})();
