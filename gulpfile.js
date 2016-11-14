var gulp = require('gulp');
var webpack = require('webpack-stream');
var sass = require('gulp-sass');
var webpackConfig = require("./webpack.config.js");
var gls = require('gulp-live-server');
var exec = require('gulp-exec');
livereload = require('gulp-livereload');
var server = gls.new(['--harmony', './app/server/index.js']);

gulp.task('default', ['connect', 'watchfile'], function() {
  // 将你的默认的任务代码放在这
});

gulp.task('connect', function() {
  server.start();
});

gulp.task('reload', function() {
  server.start.bind(server);
});

// gulp.task('sass', function () {
//   return gulp.src('./app/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./app'));
// });


// gulp.task("webpack", function() {
//   // return gulp.src('app/client/entry.ts')
//   // .pipe(webpack( webpackConfig ,null ,function(err, stats){
//   // }))
//   // .on('error',function(){
//   //   console.log('error ok');
//   //   process.exit(1);
//   // })
//   // .pipe(gulp.dest('build/'));
//   return gulp.src('app/client/entry.ts')
//    .pipe(exec('webpack -w'))
//    .pipe(exec.reporter());
// });


gulp.task('watchfile', function() {
  var server = livereload();
  gulp.watch('./app/server/**', ['reload'], function(){
  });
});