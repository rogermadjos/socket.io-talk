var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('browserify', ['reactify'], function() {
  process.env.NODE_ENV = 'production';
  return browserify('public/dist/main.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('public/dist'));
});
