'use strict';

// Create the contact module
var app = angular.module('contact', ['myApp']);

// Controller for the contact view
app.controller('contactCtrl', function($scope, shared) {
    /**
     * Called on page load.
     */
    $scope.pageInit = function() {
        shared.about = false;
        shared.skills = false;
    };
    
    $scope.pageInit()
});