'use strict';

// Create the about module
var app = angular.module('about', ['myApp']);

// Controller for the about view
app.controller('aboutCtrl', function($scope, shared) {
    /**
     * Called on page load.
     */
    $scope.pageInit = function() {
        shared.about = true;
        shared.skills = false;

        Materialize.toast('click my name to go back', 2500);
    };

    $scope.pageInit();
});
