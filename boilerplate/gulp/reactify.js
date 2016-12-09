var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('browserify');

gulp.task('reactify', function() {
  return gulp.src(['public/src/**/*.js'])
    .pipe(babel({
        presets: ['es2015', 'react']
    }))
    .pipe(gulp.dest('public/dist'));
});
