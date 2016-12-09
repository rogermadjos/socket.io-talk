var gulp = require('gulp');

gulp.task('jquery-lib', function() {
  return gulp.src([
      'node_modules/jquery/dist/**/*'
    ])
    .pipe(gulp.dest('public/dist/jquery'));
});
