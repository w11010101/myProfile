var combiner = require('stream-combiner2');
var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('js',function(){
    console.log('this is gulp');
    gulp.src('./js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
});

gulp.task('combiner',function(){
    var combined = combiner.obj([
        gulp.src('./js/*.js'),
        uglify(),
        gulp.dest('./dist')
    ]);
    combined.on('error',console.error.bind(console));
    return combined;
})