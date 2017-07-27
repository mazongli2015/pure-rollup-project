var gulp = require('gulp');
var gls = require('gulp-live-server');
gulp.task('server', function() {
   //1. serve with default settings
   var server = gls.static(['dist','test','resuorces']); //equals to gls.static('public', 3000);
   server.start();

   //use gulp.watch to trigger server actions(notify, start or stop)
   gulp.watch(['resources/**', 'dist/**','test/**'], function (file) {
     server.notify.apply(server, [file]);
   });
 });
