'use strict';

// Create the skills module
var app = angular.module('skills', ['myApp']);

// Controller for the skills view
app.controller('skillsCtrl', function($scope, $filter,  shared) {
    $scope.searchText = '';

    $scope.languages = ['Java', 'Javascript', 'Python', 'Groovy', 'C', 'C#', 'MatLab', 'Lua', 'CSS', 'HTML'];
    $scope.frameworks = ['AngularJS', 'Node.js', 'Express', 'Grails', 'Foundation', 'Materialize', 'Mongoose'];
    $scope.tools = ['Eclipse', 'IntelliJ', 'Visual Studio', 'Xcode', 'Android Studio', 'Sublime', 'Atom', 'Nodepad++', 'GNU', 'Vim', 'NPM', 'Bower', 'Gradle', 'Gulp', 'MongoDB', 'PuTTY'];
    $scope.oss = ['Android', 'OS X', 'Windows 7', 'Windows 8', 'Windows 10', 'Linux', 'Redhat', 'CentOS', 'Debian', 'Ubuntu'];
    $scope.skills = ['JUnit', 'REST API', 'Git', 'Version Control', 'GitHub', 'GitLab', 'JSON', 'XML', 'Object Oriented Principles (OOP)', 'Object Oriented Design (OOD)', 'MEAN Stack Development', 'Full Stack Development', 'UML', 'Agile'];

    /**
     * Called on page load.
     */
    $scope.pageInit = function() {
        shared.setMain();
        shared.about = false;
        shared.skills = true;
    };

    /**
     * Checks if an array contains any items that contain
     * searchText. Returns true if at least one item contains
     * it.
     * @param array
     * @returns {boolean}
     */
    $scope.hasMatches = function(array) {
        return $filter('filter')(array, $scope.searchText).length > 0;
    };

    $scope.pageInit();
});
