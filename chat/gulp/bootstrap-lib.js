var gulp = require('gulp');

gulp.task('bootstrap-lib', function() {
  return gulp.src([
      'node_modules/bootstrap/dist/**/*'
    ])
    .pipe(gulp.dest('public/dist/bootstrap'));
});
