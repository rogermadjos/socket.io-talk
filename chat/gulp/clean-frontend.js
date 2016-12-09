var gulp = require('gulp');
var del = require('del');

gulp.task('clean-frontend', function() {
  return del(['public/dist']);
});