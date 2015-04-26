var gulp = require('gulp'),
concat = require ('gulp-concat');

gulp.task('default', function() {
  return gulp.src(['./bower_components/jquery/dist/jquery.js', './bower_components/bootstrap/dist/js/bootstrap.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./build'));
});