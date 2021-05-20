const { src, dest, parallel, series, watch } = require('gulp');

const browserSync = require('browser-sync').create();

const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;

const sass = require('gulp-sass');

const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
let preprocessor = 'sass';

function browsersync() {
    browserSync.init({
        server: { baseDir: 'app/' },
        notify: false,
        online: true
    });
}

function scripts(){
    return src([
        'app/scripts/*.js'
    ])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(dest('app/script_min'))
    .pipe(browserSync.stream())
}
function styles(){
    return src([
        'app/style/**/*.scss'
    ])
    .pipe(eval(preprocessor)())
    .pipe(concat('app.min.css'))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 10 versions'], grid: true 
    }))
    .pipe(cleancss({
        level: { 1: { specialComments: 0 }}
    }))
    .pipe(dest('app/style/css'))
    .pipe(browserSync.stream())
}

function startWatch(){
    watch(['app/**/script.js'], scripts);
    watch('app/**/*.scss', styles);
    watch('app/**/*.html').on('change', browserSync.reload);
};

exports.scripts = scripts;
exports.browsersync = browsersync;
exports.styles = styles;

exports.default = parallel(styles, scripts, browsersync, startWatch);