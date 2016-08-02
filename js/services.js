'use strict';

var app = angular.module('myApp');

app.factory('shared', function($window, $state, $timeout) {
    var data = {};

    data.openInTab = function(url) {
        $window.open(url);
    };

    data.go = function(state) {
        $state.go(state);
    };

    data.waitAndGo = function(state) {
        $timeout(function() {
            data.go(state);
        }, 200);
    };

    data.setMain = function() {
        $timeout(function() {
            if ($state.current.name === 'main') {
                data.main = true;
            }
            else {
                data.main = false;
            }
        }, 350);
    }

    data.main = true;
    data.about = false;
    data.skills = false;

    return data;
});
