'use strict';

// Create the about module
var app = angular.module('about', ['myApp']);

// Controller for the about view
app.controller('aboutCtrl', function($scope, shared) {
    /**
     * Called on page load.
     */
    $scope.pageInit = function() {
        shared.setMain();
        shared.about = true;
        shared.skills = false;
    };

    $scope.pageInit();
});
