/** gulp style task */
module.exports = (function() {
    'use strict';
    var gulp = require('gulp');
    var config = require('./configuration.js');
    var common = require('./common.js');
    var cleanCSS = require('gulp-clean-css');
    var sass = require('gulp-sass');
    var $ = require('gulp-load-plugins')({
        lazy: true
    });

    return {
        buildApplication: buildApplication,
        buildLibraries: buildLibraries
    };

    function buildApplication() {
        common.gulpInfo('Compiling application sass --> CSS');
        common.gulpInfo(config.temp + config.css.appDest);
        return gulp.src(config.css.appSource)
            .pipe($.newer(config.temp + config.css.appDest))
            .pipe($.if(config.environment !== 'prod', $.sourcemaps.init()))
            .pipe(sass().on('error', sass.logError))
            .pipe($.plumber())
            .pipe($.concat(config.css.appDest))
            .pipe(cleanCSS({
                compatibility: 'ie8'
            }))
            .pipe($.if(config.environment !== 'prod', $.sourcemaps.write()))
            .pipe(gulp.dest(config.temp))
            .pipe(gulp.dest(config.dest))

    }

    function buildLibraries() {
        common.gulpInfo('Compiling vendor sass ---> CSS');
        return gulp.src(config.css.vendorSource)
            .pipe($.newer(config.temp + config.css.vendorDest))
            .pipe($.if(config.environment !== 'prod', $.sourcemaps.init({
                loadMaps: true
            })))
            .pipe($.concat(config.css.vendorDest))
            .pipe(cleanCSS())
            .pipe($.if(config.environment !== 'prod', $.sourcemaps.write()))
            .pipe(gulp.dest(config.temp))
            .pipe(gulp.dest(config.dest))
    }

})();
