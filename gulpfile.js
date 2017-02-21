var
gulp = require('gulp'),
sass = require('gulp-sass'),
watch = require('gulp-watch'),
browserSync = require('browser-sync'),
ts = require('gulp-typescript');


gulp.task('sass',function(){
	return gulp.src('./sass/skp-ui.sass')
		.pipe(sass())
		.pipe(gulp.dest('./dest'))
		.pipe(browserSync.stream());
});


gulp.task('ts', function () {
    return gulp.src('ts/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            out: 'skp-ui.js'
        }))
        .pipe(gulp.dest('./dest'))
        .pipe(browserSync.stream());
});


gulp.task('default', function(){
	browserSync.init({
    server: true
  });

	gulp.watch(['sass/moduls/*.sass', 'sass/util/*.sass'], ['sass']);
});