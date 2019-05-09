/**
 * @author Bilal Cinarli
 */

var proxy = require('http-proxy-middleware');

var connect = function(gulp, options, plugins) {
    gulp.task('connect', function() {
        plugins.connect.server({
            root:       '../akilli-bulut',
            livereload: true,
            port:       3000,
            middleware: function(connect, opt) {
                return [
                    proxy('/uxrocket-akillibulut', {
                        target: 'http://localhost',
                        changeOrigin:true
                    })
                ]
            }
        });
    });
};

module.exports = connect;