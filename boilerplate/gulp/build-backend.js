var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('build-backend', ['clean-backend'], function() {
  return gulp.src('src/**/*.js')
    .pipe(babel({
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }))
    .pipe(gulp.dest('dist'));
});