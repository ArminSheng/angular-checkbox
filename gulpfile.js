'use strict';

// https://github.com/gulpjs/gulp/blob/master/docs/README.md
let gulp = require('gulp');
// https://github.com/shama/webpack-stream
let webpackStream = require('webpack-stream');

let WebpackConfig = require('./WebpackConfig');
let descriptor = require('./package.json');


let config = new WebpackConfig(descriptor, {
  src: './src/',
  dist: './dist/'
});


gulp.task(
  `${config.name}/build`,
  function () {
    return gulp
      .src(config.path.src)
      .pipe(webpackStream(config.get()))
      // .on('error', function(err) {
      //   console.log(err.toString())
      // })
      .pipe(gulp.dest(config.path.dist));
  }
);

gulp.task(
  `${config.name}/watch`, function () {
    return gulp
      .watch(`${config.path.src}**/*.*`, [
        `${config.name}/build`
      ]);
  }
);
gulp.task('default', [`${config.name}/watch`])