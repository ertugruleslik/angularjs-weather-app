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