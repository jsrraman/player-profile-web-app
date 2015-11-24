"use strict";

let gulp = require('gulp');
let connect = require('gulp-connect'); // Runs a local web server
let open = require('gulp-open'); // Opens a url in the web browser
let browserify = require('browserify'); // Bundles JS
let reactify = require('reactify'); // Transforms React JSX
let babelify = require('babelify'); // Used to convert ES5 to ES6, JSX to JS
let source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
let concat = require('gulp-concat'); // Concatenates files
let lint = require('gulp-eslint'); // Lints the JS, JSX files
let sass = require('gulp-sass'); // Converts sass to css

let config = {
    devBaseUrl: 'http://localhost',
    port: 4000,
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        images: './src/images/*',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            './src/temp/*.css'
        ],
        temp: './src/temp',
        sass: [
            'node_modules/toastr/toastr.scss'
        ],
        mainJs: './src/main.js',
        dist: './dist'
    }
};

// Task to start a local development server
gulp.task('connect', function () {
    connect.server({
        root: ['dist'],
        base: config.devBaseUrl,
        port: config.port,
        livereload: true
    });
});

// Task to open the url in the development server
gulp.task('open', ['connect'], function () {
    gulp.src('dist/index.html')
        .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('js', function () {
    browserify(config.paths.mainJs)
        //.transform(reactify, {es6: true})
        .transform(babelify, {presets: ["es2015", "react"]})
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
});

gulp.task('css', function () {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'))
});

gulp.task('sass', function () {
    gulp.src(config.paths.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.paths.temp))
});

gulp.task('images', function () {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload());
});

gulp.task('lint', function () {
    return gulp.src(config.paths.js)
        .pipe(lint({config: '.eslintrc'}))
        .pipe(lint.format());
});

gulp.task('watch', function () {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'lint']);
});

gulp.task('default', ['html', 'js', 'sass', 'css', 'images', 'lint', 'open', 'watch']);