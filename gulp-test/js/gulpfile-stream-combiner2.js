var combiner = require('stream-combiner2');
var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('combiner',function(){
    var combined = combiner.obj([
        gulp.src('./js/*.js'),
        uglify(),
        gulp.dest('./dist')
    ]);
    combined.error('error',console.error.bind(console));
    return combined;
})