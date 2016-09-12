'use strict';

// Create the main module
var app = angular.module('portfolio', ['myApp']);

// Controller for the main view
app.controller('portfolioCtrl', function($scope, shared, projectsList) {
    $scope.shared = shared;
    $scope.searchText = '';

    $scope.projects = projectsList.projects;

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

    $scope.searchTag = function(tag) {
        $scope.searchText = tag;
    };

    $scope.pageInit()
});
