var
gulp = require('gulp'),
sass = require('gulp-sass'),
watch = require('gulp-watch'),
browserSync = require('browser-sync');


gulp.task('sass',function(){
	return gulp.src('./sass/main.sass')
		.pipe(sass())
		.pipe(gulp.dest('./dest'))
		.pipe(browserSync.stream());
})


gulp.task('server', function(){
	browserSync.init({
    server: true
  });

	gulp.watch('sass/**/*.sass', ['sass']);
})