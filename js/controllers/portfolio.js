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
        shared.about = false;
        shared.skills = false;

        Materialize.toast('click my name to go back', 2500);
    };

    $scope.pageInit()
});
