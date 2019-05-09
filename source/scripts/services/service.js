'use strict';

/**
 * # Services
 * services in the weather app
 */

app.factory('Location', ['$resource','config', function($resource,config) {
    var apiKey = config.ipGeolocationAPIKEY;
    return $resource(config.addressUrl + '?apiKey=:apikey', {apikey:apiKey}, {
        'query': { method: 'GET', params: { action: 'read', format: '.json' } , isArray : true }
    });
}]);


app.factory('Weather', ['$resource','config', function($resource,config) {
    var apiKey = config.openWeatherMapAPIKey;
    return $resource(config.weatherUrl + '?q=:city&APPID=:api', {api:apiKey}, {
        'query': { method: 'GET', params: { action: 'read', format: '.json' } , isArray : false }
    });
}]);


app.factory('Forecast', ['$resource','config', function($resource,config) {
    var apiKey = config.openWeatherMapAPIKey;
    return $resource(config.forecastUrl + '?id=:cities&APPID=:api', {api:apiKey}, {
        'query': { method: 'GET', params: { action: 'read', format: '.json' } , isArray : false }
    });
}]);
