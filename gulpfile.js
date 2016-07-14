var gulp = require('gulp');
var browserSync = require('browser-sync').create();


//----------------------------------------------------------------------------------------------------------------------
// tasks to update all connected browsers when
//   the html is changed
// used for development

gulp.task('watch', ['browserSync'], function() {
    gulp.watch('public/**/*', browserSync.reload);
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
});