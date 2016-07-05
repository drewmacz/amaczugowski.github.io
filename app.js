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
            template: '<main></main>'
        })
        .when('/about', {
            template: '<about></about>'
        })
        .when('/skills', {
            template: '<skills></skills>'
        })
        .when('/portfolio', {
            template: '<portfolio></portfolio>'
        })
        .when('/contact', {
            template: '<contact></contact>'
        })
        .otherwise('/main');
}]);

app.controller('myAppCtrl', function($scope, shared) {
    $scope.shared = shared;
});
