'use strict';

// Create the main module
var app = angular.module('main', ['myApp']);

// Controller for the main view
app.controller('mainCtrl', function($scope, shared) {
    $scope.shared = shared;

    /**
     * Called on page load.
     */
    $scope.pageInit = function() {
        shared.main = true;
        shared.about = false;
        shared.skills = false;
    };

    $scope.pageInit()
});
