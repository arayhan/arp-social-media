let gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	rename = require('gulp-rename'),
	plumber = require('gulp-plumber')

let path = {
	sass: './src/assets/sass/',
	css: './src/assets/css/'
}

gulp.task('sass', function(){
	gulp.src(path.sass + '**/*.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(sourcemaps.init())
		.pipe(autoprefixer('last 2 versions'))
		.pipe(rename('app.bundle.css'))
		.pipe(plumber.stop())
		.pipe(sourcemaps.write('/'))
		.pipe(gulp.dest(path.css))
});

gulp.task('watch', function(){
	gulp.watch(path.sass + '**/*.scss', gulp.series('sass'));
});