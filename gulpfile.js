browserSync = require('browser-sync').create(),
sass = require('gulp-sass');

const gulp = require('gulp')
const { watch, series } = require('gulp');

function init() {
    browserSync.init({
        server: '.'
        });
}

function reload() {
    browserSync.reload();
}

function sass() {
    return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

exports.default = function() {
  init();
  // You can use a single task
  watch('./scss/**/*.scss', series(sass, reload));
  // Or a composed task
  watch('./*.html', series(reload));
  watch('./js/**/*.js', series(reload))
};


