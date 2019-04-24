var
gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars');

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


// GULP HTML
gulp.task('html', html);
function html(done) {
    console.log('HTML is running, Biyatch!');
    if(done) done();
};
// GULP CSS
gulp.task('styles', styles);
function styles(done) {
    gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssvars, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
    
    console.log("Post CSS is running correctly BIYATCH!");
    if(done) done();
}