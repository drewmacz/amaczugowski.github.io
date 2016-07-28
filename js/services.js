'use strict';

var app = angular.module('myApp');

app.factory('shared', function($window, $timeout) {
    var data = {};

    data.go = function(url) {
        $window.location.href = url;
    };

    data.waitAndGo = function(url) {
        $timeout(function() {
            data.go(url);
        }, 250);
    };

    data.about = false;
    data.skills = false;

    return data;
});
