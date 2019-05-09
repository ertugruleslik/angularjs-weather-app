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
