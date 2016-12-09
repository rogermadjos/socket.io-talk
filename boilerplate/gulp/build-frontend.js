var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('build-frontend', ['reactify', 'browserify'], function() {
  return gulp.src(['public/dist/bundle.js'])
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('public/dist'));
});