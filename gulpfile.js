var gulp = require('gulp');
var babel = require('gulp-babel');

var PATHS = {
    src: {
        js: 'src/**/*.jsx',
        html: 'src/**/*.html'
    },
    lib: [
        'node_modules/react/dist/react.js'
    ]
};

gulp.task('clean', function (done) {
    require('del')(['dist'], done);
});

gulp.task('html', function () {
    return gulp.src(PATHS.src.html).pipe(gulp.dest('dist'));
});

gulp.task('libs', function () {
    return gulp.src(PATHS.lib).pipe(gulp.dest('dist'));
});


gulp.task('js', function () {
    return gulp.src(PATHS.src.js)
        .pipe(babel({
            "modules": "system"
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('play', ['html', 'js', 'libs'], function () {
    var httpPlay = require('http-play');

    gulp.watch(PATHS.src.html, ['html']);
    gulp.watch(PATHS.src.js, ['js']);

    httpPlay();
});


