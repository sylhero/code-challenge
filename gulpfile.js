(function() {
    'use strict';
    var gulp = require('gulp');
    var common = require('./gulp/common.js');
    var javascript = require('./gulp/javascript.js');
    var html = require('./gulp/html.js');
    var server = require('./gulp/server.js');
    var style = require('./gulp/style.js');
    var test = require('./gulp/test.js');
    var staticTasks = require('./gulp/static.js');
    var runSequence = require('run-sequence');

    // =========================================================================
    // Default tasks
    // =========================================================================
    /**stylesheet tasks */
    gulp.task('default', ['build']);
    gulp.task('clean', common.deleteAll);
    gulp.task('style:buildApplication', style.buildApplication);
    gulp.task('style:buildLibraries', style.buildLibraries);
    gulp.task('style', ['style:buildApplication', 'style:buildLibraries']);
    gulp.task('style:watch', ['style:buildApplication'], server.reloadServer);

    /**html tasks */
    gulp.task('html:index', html.buildIndex);
    gulp.task('html:templates', html.validateTemplates);
    gulp.task('html:index:watch', ['html:index'], server.reloadServer);
    gulp.task('html:templates:watch', ['html:templates'], server.reloadServer);
    gulp.task('html', ['html:index', 'html:templates']);
    gulp.task('html:watch', ['html'], server.reloadServer);

    /** javascript tasks */
    gulp.task('js:validateApplication', javascript.validateApplication);
    gulp.task('js:application', ['js:validateApplication'], javascript.buildApplication);
    gulp.task('js:libraries', javascript.buildLibraries);
    gulp.task('js', ['js:application', 'js:libraries']);
    gulp.task('js:watch', ['js:application'], server.reloadServer);

    /** static tasks **/

    gulp.task('static:assets', staticTasks.buildAssets);
    gulp.task('static', ['static:assets']);
    gulp.task('static:watch', ['static'], server.reloadServer);

    /** server tasks */
    gulp.task('server:reload', server.reloadServer);
    gulp.task('server', server.buildServer);

    /** test tasks */
    gulp.task('test', test.unit);

    /** build tasks*/
    gulp.task('build', function(callback) {
        runSequence('js', 'style', 'static', 'html', 'server', callback);
    });



    // =========================================================================
    // Production tasks
    // =========================================================================
    // export NODE_ENV=prod
    gulp.task('production', function(callback) {
        runSequence('html', 'js', 'js', 'style', 'static', 'html', callback);
    });
})();
