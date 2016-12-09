var gulp = require('gulp');
var fs = require('fs');

fs.readdirSync('./gulp').forEach(function (file) {
  require('./gulp/' + file);
});

gulp.task('default', ['build-backend', 'build-frontend']);
gulp.watch('public/src/**/*.js', ['build-frontend']);
