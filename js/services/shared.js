'use strict';

var app = angular.module('myApp');

app.factory('shared', function($window) {
    var data = {};

    data.go = function(url) {
        $window.location.href = url;
    };
    
    data.about = false;
    data.skills = false;
    
    return data;
});