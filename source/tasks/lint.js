/**
 * @author Bilal Cinarli
 */

var lint = function(gulp, options, plugins) {
    gulp.task('lint:scss', function() {
        return gulp.src(options.config.paths.scss + '**\/*.scss')
            .pipe(plugins.sassLint())
            .pipe(plugins.sassLint.format())
            .pipe(plugins.sassLint.failOnError())
            .pipe(plugins.notify({message: 'Scss Lint completed', onLast: true}));
    });

    gulp.task('lint:js', function() {
        return gulp.src(options.config.paths.js + '**\/*.js')
        console.log(plugins)
            .pipe(plugins.eslint())
            .pipe(plugins.eslint.format())
            .pipe(plugins.eslint.failAfterError())
            .pipe(plugins.notify({message: 'ESLint completed', onLast: true}));
    });
};

module.exports = lint;