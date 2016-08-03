'use strict';

// Create the main module
var app = angular.module('portfolio', ['myApp']);

// Controller for the main view
app.controller('portfolioCtrl', function($scope, shared) {
    $scope.shared = shared;

    $scope.projects = [
        'coming soon'
    ]

    /**
     * Called on page load.
     */
    $scope.pageInit = function() {
        shared.setMain();
        shared.about = false;
        shared.portfolio = true;
        shared.skills = false;
        shared.contact = false;
    };

    $scope.pageInit()
});
