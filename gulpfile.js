var
gulp = require('gulp'),
watch = require('gulp-watch');

// GULP TEST
gulp.task('default', function(cb) {
    console.log("Gulp is successfully installed, I hope.");
    cb();
});


// GULP WATCH
gulp.task('watch', function() {
    watch('./app/index.html', function() {
        html();
    });
    watch('./app/assets/styles/**/*.css', function() {
        styles();
    });
});


// GULP HTML & CSS
gulp.task('html', html);
function html(done) {
    console.log('Something useful happening to HTML here');
    if(done) done();
};

gulp.task('styles', styles);
function styles(done) {
    console.log("SASS or Post CSS running here");
    if(done) done();
}