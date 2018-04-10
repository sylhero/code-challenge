/** gulp html task */
module.exports = (function() {
    'use strict';
    var gulp = require('gulp');
    var config = require('./configuration.js');
    var common = require('./common.js');
    var streamSeries = require('stream-series');
    var htmlReplace = require('gulp-html-replace');
    var $ = require('gulp-load-plugins')({
        lazy: true
    });
    return {
        buildIndex: buildIndex,
        validateTemplates: validateTemplates
    };

    function buildIndex() {
        var jsVendorStream = gulp.src(config.dest + config.javascript.vendorDest, {
            read: false
        });
        var jsApplicationStream = gulp.src(config.dest + config.javascript.appDest, {
            read: false
        });
        var cssVendorStream = gulp.src(config.dest + config.css.vendorDest, {
            read: false
        });
        var cssApplicationStream = gulp.src(config.dest + config.css.appDest, {
            read: false
        });
        var injectOptions = {
            ignorePath: 'build',
            addRootSlash: false
        };
        return gulp.src(config.html.indexSource)
            .pipe($.newer(config.temp + '/index.html'))
            .pipe($.htmlhint(config.html.htmlHintFile))
            .on('error', common.quitOnError)
            .pipe($.if(config.environment !== 'prod', $.plumber()))
            .pipe($.htmlhint.failReporter())
            .pipe($.inject(streamSeries(
                cssVendorStream,
                cssApplicationStream,
                jsVendorStream,
                jsApplicationStream), injectOptions))
            .pipe($.if(config.environment !== 'prod', $.sourcemaps.init()))
            .pipe($.htmlmin(config.html.minifyHtml))
            .pipe($.if(config.environment !== 'prod', $.sourcemaps.write()))
            .pipe(gulp.dest(config.temp))
            .pipe(gulp.dest(config.dest));
    }

    function validateTemplates() {
        return gulp.src(config.html.templateSource)
            .pipe($.newer(config.temp + '/*.template.html'))
            .pipe($.htmlhint(config.html.htmlHintFile))
            .on('error', common.quitOnError)
            .pipe($.if(config.environment !== 'prod', $.plumber()))
            .pipe($.htmlhint.failReporter())
            .pipe($.flatten())
            .pipe(gulp.dest(config.temp))
            //prod uses embbedTemplates
            .pipe($.if(config.environment !== 'prod', gulp.dest(config.dest)));
    }
})();
