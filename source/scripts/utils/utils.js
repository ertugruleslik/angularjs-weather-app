'use strict';

/**
 * # Utils
 * utils in the weather app
 */

app.factory('Utils', function (config) {

    return {
        setClass: function (code) {
            var iconClass;
            angular.forEach(config.codeList, function (obj) {
                if (obj.code === code) {
                    iconClass = obj.iconClass;
                }
            });
            return iconClass;
        },

        setBackground: function (code) {
            var backgroundClass;
            angular.forEach(config.codeList, function (obj) {
                if (obj.code === code) {
                    backgroundClass = obj.backgroundClass;
                }
            });
            return backgroundClass;
        }
    };

});