// Karma configuration
// Generated on Thu Jun 25 2015 10:01:23 GMT-0400 (EDT)

module.exports = function(config) {
    'use strict';
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../../',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            //'src/tests/custom-matchers.js',
            '.tmp/js/libraries*.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/angular-material/angular-material-mocks.js',
            'src/app/**/*.module.js',
            'src/app/**/*.js',
            'src/tests/unit/**/*.spec.js'
        ],

        // list of files to exclude
        exclude: ['src/app/widgets/webchat/webchat.controller.js'],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/app/**/*.js': ['coverage']
        },

        /*proxies: {
            '/static/': '/base/src/static/'
        },*/

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage', 'junit'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        //logLevel: 'debug',

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // JUnit tests reports
        junitReporter: {
            useBrowserName: false,
            outputDir: 'reports/junit',
            outputFile: 'TESTS-results.xml'
        },

        // Code coverage test reports
        coverageReporter: {
            type: 'lcov',
            dir: 'reports',
            subdir: 'coverage'
        },

        plugins: [
            'karma-coverage',
            'karma-junit-reporter',
            'karma-jasmine',
            'karma-phantomjs-launcher'
        ],
        browserConsoleLogOptions: {
            terminal: true,
            level: ""
        },
        // Retries 5 times after 10 seconds of inactivity
        browserDisconnectTimeout: 10000,
        browserNoActivityTimeout: 10000,
        browserDisconnectTolerance: 5
    });
};
