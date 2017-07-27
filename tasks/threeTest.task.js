//gulp.task的参数中的回调函数在引用路径时，是以项目的根目录为基准的
var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require("../rollup.config.js");
var rollup = require('gulp-rollup');
var del = require('del');
var rename = require("gulp-rename");

gulp.task('threeTest',function(){
  config.entry="./src/three/threeTest.js";
	return gulp.src('./src/three/threeTest.js')
	.pipe(rollup(config))
  .pipe(rename("three/threeTest.bundle.js"))
	.pipe(gulp.dest('./dist'));
})

gulp.task('del-threeTest',function(callback){
    return del("./dist/threeTest.bundle.js");
})

gulp.task("rebuild-threeTest",function(callback){
    return  runSequence('del-threeTest',["threeTest"],callback);
});
