'use strict'

const gulp = require('gulp')
const replace = require('gulp-replace')
const minify = require('gulp-minify-html')
const runSeq = require('run-sequence')

gulp.task('indexHtml', function () {
  runSeq('buildHtml')
});

gulp.task('buildHtml', function () {
    return gulp.src(global.paths.indexSrc)
        .pipe(gulp.dest(global.paths.dist))
});

