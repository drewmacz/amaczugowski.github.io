'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'ngRoute',
    'main',
    'about',
    'contact',
    'skills'
]);

// Define the routes for the application
app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/main', {
            templateUrl: 'views/main/main.template.html',
            controller: 'mainCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about/about.template.html',
            controller: 'aboutCtrl'
        })
        .when('/skills', {
            templateUrl: 'views/skills/skills.template.html',
            controller: 'skillsCtrl'
        })
        .when('/contact', {
            templateUrl: 'views/contact/contact.template.html',
            controller: 'contactCtrl'
        })
        .otherwise('/main');
}]);

app.controller('myAppCtrl', function($scope, shared) {
    $scope.shared = shared;
});
