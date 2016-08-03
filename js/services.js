'use strict';

var app = angular.module('myApp');

app.factory('shared', function($window, $state, $timeout, $filter) {
    var data = {};

    data.openInTab = function(url) {
        $window.open(url);
    };

    data.go = function(state) {
        $state.go(state);
    };

    data.waitAndGo = function(state, time) {
        $timeout(function() {
            data.go(state);
        }, time);
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
    };

    /**
     * Checks if an array contains any items that contain
     * searchText. Returns true if at least one item contains
     * it.
     * @param array
     * @returns {boolean}
     */
    data.hasMatches = function(array, searchText) {
        return $filter('filter')(array, searchText).length > 0;
    };

    data.main = true;
    data.about = false;
    data.portfolio = false;
    data.skills = false;
    data.contact = false;

    return data;
});

app.factory('skillsList', function() {
    var data = {};

    data.languages = ['Java', 'Javascript', 'Python', 'Groovy', 'C', 'C#', 'MatLab', 'Lua', 'CSS', 'HTML'];
    data.frameworks = ['AngularJS', 'Node.js', 'Express', 'Grails', 'Foundation', 'Materialize', 'Mongoose'];
    data.tools = ['Eclipse', 'IntelliJ', 'Visual Studio', 'Xcode', 'Android Studio', 'Sublime', 'Atom', 'Nodepad++', 'GNU', 'Vim', 'NPM', 'Bower', 'Gradle', 'Gulp', 'MongoDB', 'PuTTY'];
    data.oss = ['Android', 'OS X', 'Windows 7', 'Windows 8', 'Windows 10', 'Linux', 'Redhat', 'CentOS', 'Debian', 'Ubuntu'];
    data.skills = ['JUnit', 'REST API', 'Git', 'Version Control', 'GitHub', 'GitLab', 'JSON', 'XML', 'UML', 'Object Oriented Principles (OOP)', 'Object Oriented Design (OOD)', 'MEAN Stack Development', 'Full Stack Development', 'Agile'];

    return data;
});

app.factory('projectsList', function() {

});
