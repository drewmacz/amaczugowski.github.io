'use strict';

// Create the skills module
var app = angular.module('skills', ['myApp']);

// Controller for the skills view
app.controller('skillsCtrl', function($scope, shared, skillsList) {
    $scope.searchText = '';

    $scope.shared = shared;

    $scope.languages = skillsList.languages;
    $scope.frameworks = skillsList.frameworks;
    $scope.tools = skillsList.tools;
    $scope.oss = skillsList.oss;
    $scope.skills = skillsList.skills;

    /**
     * Called on page load.
     */
    $scope.pageInit = function() {
        shared.setMain();
        shared.about = false;
        shared.portfolio = false;
        shared.skills = true;
        shared.contact = false;
    };

    /**
     * Checks if an array contains any items that contain
     * searchText. Returns true if at least one item contains
     * it.
     * @param array
     * @returns {boolean}
     */
    $scope.hasMatches = function(array) {
        return shared.hasMatches(array, $scope.searchText);
    };

    $scope.pageInit();
});
