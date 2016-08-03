'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'ui.router',
    'ngAnimate',
    'main',
    'about',
    'skills',
    'portfolio',
    'contact'
]);

// Define the routes for the application
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/main');

    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'templates/main.html',
            controller: 'mainCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'templates/about.html',
            controller: 'aboutCtrl'
        })
        .state('skills', {
            url: '/skills',
            templateUrl: 'templates/skills.html',
            controller: 'skillsCtrl'
        })
        .state('portfolio', {
            url: '/portfolio',
            templateUrl: 'templates/portfolio.html',
            controller: 'portfolioCtrl'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'templates/contact.html',
            controller: 'contactCtrl'
        });

}]);

app.controller('myAppCtrl', function($scope, shared) {
    $scope.shared = shared;

    $scope.closeSideNav = function(state) {
        $('.button-collapse').sideNav('hide');
        shared.waitAndGo(state, 150);
    };
});
