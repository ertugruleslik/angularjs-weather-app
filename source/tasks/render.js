/**
 * @author Bilal Cinarli
 */

var render = function(gulp, options, plugins) {
    var opts = {
            path:       [options.config.paths.tpl],
            envOptions: {
                autoescape:  false,
                lstripBlock: true
            }
        };

    gulp.task('render', function() {
        var data = require('load-data')(options.config.paths.data);

        return gulp.src(options.config.paths.tpl + 'pages/**/*.tpl')
            .pipe(plugins.data(function() {
                return data
            }))
            .pipe(plugins.nunjucksRender(opts))
            .pipe(plugins.notify({message: 'Template files rendered', onLast: true}))
            .pipe(gulp.dest(options.config.paths.html));
    });
};

module.exports = render;