var
gulp = require('gulp'),
sass = require('gulp-sass'),
watch = require('gulp-watch'),
browserSync = require('browser-sync'),
ts = require('gulp-typescript'),
prefix = require('gulp-autoprefixer');


gulp.task('sass',function(){
	return gulp.src('./sass/skp-ui.scss')
		.pipe(sass())
        .pipe(prefix({
            browsers: ['last 2 versions'],
            cascade: false
        }))
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
    server: false
  });

	gulp.watch(['sass/moduls/*.scss', 'sass/util/*.scss'], ['sass']);
	gulp.watch('index.html',function () {
        browserSync.stream()
    })

});