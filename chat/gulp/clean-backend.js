var gulp = require('gulp');
var del = require('del');

gulp.task('clean-backend', function() {
  return del(['dist']);
});