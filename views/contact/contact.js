'use strict';

// Create the contact module
var app = angular.module('contact', ['myApp']);

// Define the view to associate with this module
app.component('contact', {
    templateUrl: 'views/contact/contact.template.html'
});

// Controller for the contact view
app.controller('contactCtrl', function($scope, shared) {
    $scope.pageInit = function() {
        shared.about = false;
        shared.skills = false;
    };
    
    $scope.pageInit()
});