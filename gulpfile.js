var gulp = require('gulp');
var gutil = require('gulp-util');
var replace = require('gulp-replace');
var notify = require('gulp-notify');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
//var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

const destination = 'generated-theme/';

gulp.task('compile-css', function () {
    return gulp.src('flexmonster.less')
        //.pipe(sourcemaps.init())
        .pipe(less().on('error', gutil.log))
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest(destination))
        .pipe(notify('CSS compiled'));
});

gulp.task('adjust-assets', function(){
  return gulp.src([destination+'flexmonster.css'])
    .pipe(replace('../assets', function(match) {
      return 'https://cdn.flexmonster.com/theme/assets';
    }))
    .pipe(gulp.dest(destination))
    .pipe(notify('Adjusted assets paths'));
});

gulp.task('minify-css',() => {
  return gulp.src(destination+'flexmonster.css')
    //.pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest(destination))
    .pipe(notify('CSS minified'));
});

gulp.task('default', gulp.series(['compile-css', 'adjust-assets', 'minify-css']));

