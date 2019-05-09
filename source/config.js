
(function() {
    'use-strict';

    var config = {};

    config.paths = {
        app:     'app',
        fonts:   'app/assets/fonts/',
        images:  'app/assets/images/',
        scripts: 'app/assets/scripts/',
        styles:  'app/assets/styles/',
        js:      'source/scripts/',
        scss:    'source/styles/',
        tpl:     'source/templates/',
        svg:     'source/svg/',
        data:    'source/data/',
        html:    'app'
    };

    config.banner = [
        '/*! <%= pkg.name %> \n' +
        ' *  <%= pkg.description %> \n' +
        ' *  @author <%= pkg.author %> \n' +
        '<% if (typeof pkg.contributors !== "undefined") { %>' +
        '<% pkg.contributors.forEach(function(contributor) { %>' +
        ' *          <%= contributor.name %> <<%=contributor.email %>> (<%=contributor.url %>)\n' +
        '<% }) %>' +
        '<% } %>' +
        ' *  @version <%= pkg.version %> \n' +
        ' *  @build <%= date %> \n' +
        ' */\n'
    ].join('');

    config.libscripts = [
        'bower_components/angular/angular.min.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'bower_components/angular-resource/angular-resource.min.js'
    ];

    config.scripts = [
        config.paths.js + '**/*.js'
    ];

    config.server = {
        livereload: true,
        port:       3000,
        debug:      false,
        routes:     [
            '^(\/[^\.]+)$ http://localhost:3000$1.html [P NC L]'
        ]
    };

    module.exports = config;
})();