var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');

function ScssToCss(done) {
     gulp.src("../scss/**/*.scss")
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
     .pipe(sourcemaps.init())
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(rename({
            suffix: '.min'
        }))
    //    .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('../css/'));
    done();
}

function watchSass(){ //Функция отслеживания Sass
    gulp.watch('./scss/**/*', ScssToCss);//смотри за директорией, и по изменению применяй функцию ScssToCss
}

function print(done){
    console.log('Hi');
    done();
}

gulp.task('default', ScssToCss);
gulp.task('watch', function(){
    gulp.watch('../scss/**/*.scss',gulp.series('default'))
})