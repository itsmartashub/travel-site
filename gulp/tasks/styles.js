var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

gulp.task('styles', function(){
    console.log("Zamisli da se SASS ili PostCSS running ovde");
    return gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .on('error', function(errorInfo){
        console.log(errorInfo.toString());
        this.emit('end'); // nas watch task zeli da zna kada se neki task, koji je prozvao, zavrsio, tj dosao do kraja
    })
    .pipe(gulp.dest('./app/temp/styles')); // return je jer je gulp.src() asinhrona f-ja, zelimo da gulp postane svestan kada je ova funkcija gotova
});