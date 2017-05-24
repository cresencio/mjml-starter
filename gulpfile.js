var gulp        = require('gulp');
var mjml        = require('gulp-mjml')
var browserSync = require('browser-sync').create();

gulp.task('mjml', function () {
    return gulp.src('mjml/**/*mjml')
        .pipe(mjml())
        .pipe(gulp.dest('./dist'));
});

gulp.task('mjml-watch', ['mjml'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('default', ['mjml'], function () {

    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    gulp.watch("mjml/**/*.mjml", ['mjml-watch']);
});
