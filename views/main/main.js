'use strict';

// Create the main module
var app = angular.module('main', ['myApp']);

// Define the view to associate with this module
app.component('main', {
    templateUrl: 'views/main/main.template.html'
});

// Controller for the main view
app.controller('mainCtrl', function($scope, shared) {
    $scope.shared = shared;

    $scope.pageInit = function() {
        shared.about = false;
        shared.skills = false;
    };

    $scope.pageInit()
});