/**
 * @author Bilal Cinarli
 */

var fs   = require('fs'),
    path = require('path');

var listPages = function(gulp, options, plugins) {
    gulp.task('list-pages', function() {
        var data = {},
            opts = {
                path:       [options.config.paths.tpl],
                envOptions: {
                    autoescape:  false,
                    lstripBlock: true
                }
            };

        var readDir = function(dir, parent) {
            fs.readdirSync(dir).forEach(function(filename) {
                var file = path.join(dir, filename),
                    stat = fs.statSync(file),
                    _key = filename;


                if(stat.isDirectory()) {
                    data[_key] = [];
                    readDir(dir + filename, data[_key]);
                }

                else {
                    if(!stat.isFile()) {
                        return;
                    }

                    if(parent) {
                        parent.push(filename.slice(0, -4));
                    }

                    else {
                        console.log(filename);
                        data.push(filename.slide(0, -4));

                    }
                }
            });
        };

        readDir(options.config.paths.tpl + 'pages/');

        return gulp.src(options.config.paths.tpl + 'index.tpl')
            .pipe(plugins.data(function() {
                return {pages: data}
            }))
            .pipe(plugins.nunjucksRender(opts))
            .pipe(plugins.notify({message: 'Template files rendered', onLast: true}))
            .pipe(gulp.dest(options.config.paths.html));
    });
};

module.exports = listPages;