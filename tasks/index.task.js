//gulp.task的参数中的回调函数在引用路径时，是以项目的根目录为基准的
var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require("../rollup.config.js");
var rollup = require('gulp-rollup');
var del = require('del');
var rename = require("gulp-rename");

gulp.task("commonjsTest",function(){
  config.entry="./src/baseTest/commonjsTest.js";
  config.format="cjs";
	return gulp.src('./src/baseTest/commonjsTest.js')
	.pipe(rollup(config))
  .pipe(rename("commonjsTest.bundle.js"))
	.pipe(gulp.dest('./dist'));
});

gulp.task('del-commonjsTest',function(callback){
    return del("./dist/commonjsTest.bundle.js");
})

gulp.task('build-index',function(){
  config.entry="./src/baseTest/index.js";
	return gulp.src('./src/baseTest/index.js')
	.pipe(rollup(config))
  .pipe(rename("index.bundle.js"))
	.pipe(gulp.dest('./dist'));
})

gulp.task('del-index',function(callback){
    return del("./dist/index.bundle.js");
})

gulp.task("index",function(callback){
    return  runSequence('commonjsTest',"index",callback);
});


gulp.task("rebuild-index",function(callback){
    return  runSequence(['del-index','del-commonjsTest'],'commonjsTest',"index",callback);
});
