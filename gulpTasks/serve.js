'use strict'

var gulp = require('gulp')
var runSeq = require('run-sequence')
var browserSync = require('browser-sync')
var path = require('path')
const util = require('gulp-util')
var _browserSync;

// Start local dev server.
gulp.task('serve', function (done) {
  var sequence = [
    'indexHtml'
  ]

  runSeq('clean', sequence, function () {
    _browserSync = browserSync.create('Dev Server')

    // set by the baseUrl task in the indexHtml task
    var serverOptions = {
      open: false,
      ui: false,
      notify: false,
      ghostMode: false,
      port: process.env.PORT || 9000,
      // startPath: '?test=true',
      server: {
        baseDir: global.paths.dist,
      }
    }
    return _browserSync.init(serverOptions, done)
  })
})
