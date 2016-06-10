'use strict'

var gulp = require('gulp');
var requireDir = require('require-dir')

global.paths = {
  dist: './dist',
  indexSrc: './src/index.html',
}
// Require all tasks in the 'gulpTasks' folder.
requireDir('./gulpTasks', { recurse: false })

// Default task; start local server.
gulp.task('default', ['serve'])

