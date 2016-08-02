'use strict';

// Create the main module
var app = angular.module('portfolio', ['myApp']);

// Controller for the main view
app.controller('portfolioCtrl', function($scope, shared) {
    $scope.shared = shared;

    /**
     * Called on page load.
     */
    $scope.pageInit = function() {
        shared.setMain();
        shared.about = false;
        shared.skills = false;
    };

    $scope.pageInit()
});
