'use strict';

/**
 * # Weather App
 */

var app = angular.module('weather',['ui.router','ngResource']);

app.config(['$stateProvider','$urlRouterProvider','$locationProvider', function ($stateProvider,$urlRouterProvider,$locationProvider) {

   $locationProvider.html5Mode(true);

   $stateProvider
       .state('home', {
           url: '/',
           templateUrl: './assets/Views/home.html',
           controller: 'mainCtrl'
       })
       .state('main', {
           url: '/:id',
           templateUrl: './assets/Views/home.html',
           controller: 'mainCtrl',
           params: {
               id:{
                    value: null,
                    squash: true
               },
               ci:{
                   value: null,
                   squash: true
               }
           }
       })
        .state('list', {
            url: '/list',
            templateUrl: './assets/Views/cityList.html',
            controller: 'listCtrl'
        });

       $urlRouterProvider.otherwise('/');

}]);

'use strict';

app.controller('listCtrl',['$scope','Forecast','Utils','config', function($scope,Forecast,Utils,config){

    $scope.cityArray = [];

    angular.forEach(config.cityList, function(value, key) {
        $scope.cityArray.push(value.id);
    });

    $scope.getForecast = function (city) {
        return Forecast.get({cities:city}).$promise
            .then(function (data) {
                $scope.cities = data;
            });
    };

    $scope.getForecast($scope.cityArray.join(','));

    $scope.setClass = function (code) {
        return Utils.setClass(code);
    };

}]);
'use strict';

app.controller('mainCtrl',['$scope','Location','$stateParams','Weather','Forecast','Utils', function($scope,Location,$stateParams,Weather,Forecast,Utils){

    $scope.getLocation = function () {
        return Location.get().$promise
            .then(function (data) {
                $scope.getWeather(data.city);
            });
    };

    $scope.getWeather = function (city) {
        return Weather.get({city:city}).$promise
            .then(function (data) {
                $scope.weather = data;
            });
    };

    if($stateParams.id){
        $scope.getWeather($stateParams.id)
    } else {
        $scope.getLocation();
    }


    $scope.setClass = function (code) {
        return Utils.setClass(code);
    };

    $scope.setBackground = function (code) {
        return Utils.setBackground(code);
    };

}]);

'use strict';

/**
 * # CONFIG
 * constant in the weather app
 */

app.constant('config', {
    addressUrl: 'https://api.ipgeolocation.io/ipgeo',
    forecastUrl: 'http://api.openweathermap.org/data/2.5/group',
    weatherUrl: 'http://api.openweathermap.org/data/2.5/weather',
    openWeatherMapAPIKey: '306fe08f984a42954813ce9d05ee0af4',
    ipGeolocationAPIKEY: '099f5c9e000f4b9896790b416e93259f',
    cityList: [
        {
            "id": 745044,
            "name": "Istanbul"
        },
        {
            "id": 323786,
            "name": "Ankara"
        },
        {
            "id": 306571,
            "name": "Konya"
        },
        {
            "id": 2643743,
            "name": "London"
        },
        {
            "id": 304183,
            "name": "Muğla"
        },
        {
            "id": 323777,
            "name": "Antalya"
        },
        {
            "id": 5128581,
            "name": "New York"
        },
        {
            "id": 524901,
            "name": "Moscow"
        },
        {
            "id": 2964574,
            "name": "Dublin"
        },
        {
            "id": 292223,
            "name": "Dubai"
        },
        {
            "id": 2761369,
            "name": "Vienna"
        }
    ],
    codeList: [
        {
            code: '01d',
            iconClass: 'icon icon-sunny',
            backgroundClass: 'day-clear'
        },
        {
            code: '01n',
            iconClass: 'icon icon-night-clear',
            backgroundClass: 'night-clear'
        },
        {
            code: '02d',
            iconClass: 'icon icon-cloudy',
            backgroundClass: 'day-clear'
        },
        {
            code: '02n',
            iconClass: 'icon icon-partly-cloudy',
            backgroundClass: 'night-cloudy'
        },
        {
            code: '03d',
            iconClass: 'icon icon-cloudy',
            backgroundClass: 'cloudy'
        },
        {
            code: '03n',
            iconClass: 'icon icon-cloudy',
            backgroundClass: 'night-cloudy'
        },
        {
            code: '04d',
            iconClass: 'icon icon-cloudy',
            backgroundClass: 'cloudy'
        },
        {
            code: '04n',
            iconClass: 'icon icon-cloudy',
            backgroundClass: 'night-cloudy'
        },
        {
            code: '09d',
            iconClass: 'icon icon-thundery-showers',
            backgroundClass: 'rainy'
        },
        {
            code: '09n',
            iconClass: 'icon icon-thundery-showers',
            backgroundClass: 'rainy'
        },
        {
            code: '10d',
            iconClass: 'icon icon-rainy',
            backgroundClass: 'rainy'
        },
        {
            code: '10n',
            iconClass: 'icon icon-rainy',
            backgroundClass: 'rainy'
        },
        {
            code: '11d',
            iconClass: 'icon icon-thunderstorm',
            backgroundClass: 'thunderstorm'
        },
        {
            code: '11n',
            iconClass: 'icon icon-thunderstorm',
            backgroundClass: 'thunderstorm'
        },
        {
            code: '13d',
            iconClass: 'icon icon-snowy',
            backgroundClass: 'snowy'
        },
        {
            code: '13n',
            iconClass: 'icon icon-snowy',
            backgroundClass: 'snowy'
        },
        {
            code: '50d',
            iconClass: 'icon icon-foggy',
            backgroundClass: 'foggy'
        },
        {
            code: '50n',
            iconClass: 'icon icon-foggy',
            backgroundClass: 'foggy'
        }
    ]
});
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
//# sourceMappingURL=weather.js.map
