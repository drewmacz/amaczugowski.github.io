'use strict';

// Create the about module
var app = angular.module('about', ['myApp']);

// Define the view to associate with this module
app.component('about', {
    templateUrl: 'views/about/about.template.html'
});

// Controller for the about view
app.controller('aboutCtrl', function($scope, shared) {
    
    $scope.pageInit = function() {
        shared.about = true;
        shared.skills = false;
    };
    
    $scope.pageInit();
});