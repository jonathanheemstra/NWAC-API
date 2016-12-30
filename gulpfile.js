'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
const nodemon = require('gulp-nodemon');


gulp.task('lint', function() {
  gulp.src(['**/*.js', '**/*/*.js', '!node_modules'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('test', function() {
  gulp.src(['./test/*.js', '!node_modules'], { read: false })
    .pipe(mocha( { report: 'spec' } ));
});

gulp.task('dev', function() {
  var stream = nodemon({
    script: 'server.js',
    ext: 'js html',
    ignore: ['node_modules'],
    watch: ['*'],
    env: { 'NODE_ENV': 'development' },
    tasks: ['lint', 'test']
  });
  stream
    .on('restart', function() {
      console.log('Restarted Server');
    })
    .on('crash', function() {
      console.error('Applicaiton has crashed');
      stream.emit('restart', 5);
    });
});

gulp.task('default', ['dev']);
