/** gulp configuration */
module.exports = (function() {
    'use strict';
    var gulpUtil = require('gulp-util');
    var historyApiFallback = require('connect-history-api-fallback');
    var environment = null;
    var temp = '.tmp';
    var dest = './build';
    var source = 'src/app';
    init();
    return {
        //common config
        temp: temp,
        dest: dest,
        source: source,
        //html config
        html: {
            indexSource: source + '/index.html',
            templateSource: [source + '/**/*.template.html'],
            //http://perfectionkills.com/experimenting-with-html-minifier/#options
            minifyHtml: {
                collapseWhitespace: true,
                removeComments: true
            },
            //https://github.com/yaniswang/HTMLHint/wiki/Rules
            htmlHintFile: '.htmlhintrc',
        },

        //css config
        css: {
            vendorSource: [
                'node_modules/bootstrap/dist/css/bootstrap.min.css',
                'node_modules/angular-loading-bar/build/loading-bar.min.css',
                'node_modules/angular-toastr/dist/angular-toastr.css',
                'node_modules/angular-material/angular-material.min.css',
                'node_modules/angular-material-data-table/dist/md-data-table.min.css'
            ],
            vendorDest: '/styles/libraries_app.css',
            appSource: source + '/**/*.scss',
            appDest: '/styles/application_app.css'
        },
        //javascript config
        javascript: {
            appSource: [source + '/**/*.js', temp + '/templates.js'],
            appDest: '/js/application_app.js',
            vendorDest: '/js/libraries_app.js',
            venderSource: [
                'node_modules/angular/angular.min.js',
                'node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
                'node_modules/angular-animate/angular-animate.min.js',
                'node_modules/angular-load/dist/angular-load.min.js',
                'node_modules/angular-loading-bar/build/loading-bar.min.js',
                'node_modules/angular-messages/angular-messages.min.js',
                'node_modules/angular-resource/angular-resource.min.js',
                'node_modules/angular-sanitize/angular-sanitize.min.js',
                'node_modules/angular-toastr/dist/angular-toastr.tpls.min.js',
                'node_modules/angular-aria/angular-aria.min.js',
                'node_modules/angular-material/angular-material.min.js',
                'node_modules/angular-material-data-table/dist/md-data-table.min.js'
            ]
        },

        // Server configuration
        browserSync: {
            open: false,
            port: 3000,
            server: {
                baseDir: dest,
                middleware: [historyApiFallback()]
            }
        },

        //static config
        staticConfig: {
            assetSource: source + '/**/assets/**/*',
            staticSource: source + '/static/**/*'
        },
        e2e: {
            configPath: 'src/tests/e2e/config.js'
        }
    };

    function init() {
        environment = process.env.ENV || 'dev';
        gulpUtil.log(gulpUtil.colors.cyan.bold('current [ENV] is ' + environment));
    }

})();
