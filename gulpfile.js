const gulp = require('gulp')
const typescript = require('gulp-typescript')

gulp.task('ts', () => {
	return gulp.src('src/**/*.ts')
		.pipe(typescript({
			noImplicitAny: true,
		}))
		.pipe(gulp.dest('dist'))
})

gulp.task('server', () => {
	return require('./dist/app')
})

gulp.task('default', ['ts', 'server'], () => {})
