'use strict';

// https://github.com/gulpjs/gulp/blob/master/docs/README.md
let gulp = require('gulp');
// https://github.com/shama/webpack-stream
let webpackStream = require('webpack-stream');

let WebpackConfig = require('./WebpackConfig');
let descriptor = require('./package.json');


let config = new WebpackConfig(descriptor, {
  src: './src/js/',
  watchSrc: './src/',
  dist: './dist/',
  assets: './src/assets',
  staticDist: './dist/static'
});


gulp.task(
  `${config.name}/build`,
  function () {
    return gulp
      .src(config.path.src)
      .pipe(webpackStream(config.get()))
      .pipe(gulp.dest(config.path.dist));
  }
);

gulp.task(
  `${config.name}/buildStatic`,
  function () {
    gulp
      .src(config.path.assets)
      // .pipe(webpackStream(config.get()))
      .pipe(gulp.dest(config.path.staticDist));
      console.log(config.path.assets)
  }
);

gulp.task(
  `${config.name}/watch`, function () {
    return gulp
      .watch(`${config.path.watchSrc}**/*.*`, [
        `${config.name}/build`,
        `${config.name}/buildStatic`
      ]);
  }
);
gulp.task('default', [`${config.name}/watch`])