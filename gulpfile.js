const gulp = require('gulp');
const gutil = require('gulp-util');
const replace = require('gulp-replace');
const notify = require('gulp-notify');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
//const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

const destination = 'generated-theme/';

gulp.task('compile-css', function () {
    return gulp.src('flexmonster.less')
        //.pipe(sourcemaps.init())
        .pipe(less().on('error', gutil.log))
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest(destination));
});

gulp.task('adjust-assets', function(){
  return gulp.src([destination+'flexmonster.css'])
    .pipe(replace('../assets', function(match) {
      return 'https://cdn.flexmonster.com/theme/assets';
    }))
    .pipe(gulp.dest(destination));
});

gulp.task('minify-css',() => {
  return gulp.src(destination+'flexmonster.css')
    //.pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest(destination))
    .pipe(notify('Generated theme in '+destination+' folder'));
});

gulp.task('default', gulp.series(['compile-css', 'adjust-assets', 'minify-css']));

