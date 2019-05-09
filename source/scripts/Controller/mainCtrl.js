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
