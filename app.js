'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'main',
    'about',
    'skills',
    'portfolio',
    'contact'
]);

// Define the routes for the application
app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/main', {
            templateUrl: 'views/main/main.html',
            controller: 'mainCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about/about.html',
            controller: 'aboutCtrl'
        })
        .when('/skills', {
            templateUrl: 'views/skills/skills.html',
            controller: 'skillsCtrl'
        })
        .when('/portfolio', {
            templateUrl: 'views/portfolio/portfolio.html',
            controller: 'portfolioCtrl'
        })
        .when('/contact', {
            templateUrl: 'views/contact/contact.html',
            controller: 'contactCtrl'
        })
        .otherwise('/main');
}]);

app.controller('myAppCtrl', function($scope, shared) {
    $scope.shared = shared;
});
