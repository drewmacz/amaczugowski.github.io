'use strict';

// Create the skills module
var app = angular.module('skills', ['myApp']);

// Define the view to associate with this module
app.component('skills', {
    templateUrl: 'views/skills/skills.template.html'
});

// Controller for the skills view
app.controller('skillsCtrl', function($scope, shared) {
    $scope.searchText = '';
    $scope.languages = ['Java', 'Javascript', 'Python', 'Groovy', 'C', 'C#', 'MatLab', 'Lua', 'HTML'];
    $scope.frameworks = ['AngularJS', 'Node.js', 'Express', 'Grails', 'Foundation', 'Materialize', 'Mongoose'];
    $scope.tools = ['Eclipse', 'IntelliJ', 'Visual Studio', 'Xcode', 'Android Studio', 'Sublime', 'Atom', 'Nodepad++', 'GNU', 'Vim', 'NPM', 'Bower', 'Gradle', 'MongoDB'];
    $scope.os = ['Android', 'OS X', 'Windows 7', 'Windows 8', 'Windows 10', 'Linux', 'Redhat', 'CentOS', 'Debian', 'Ubuntu'];
    $scope.skills = ['JUnit', 'REST API', 'Git', 'Version Control', 'GitHub', 'GitLab', 'JSON', 'XML', 'Object Oriented Principles (OOP)', 'Object Oriented Design (OOD)', 'UML', 'Agile', 'MEAN Stack Development', 'Full Stack Development'];

    $scope.pageInit = function() {
        shared.about = false;
        shared.skills = true;
    };

    $scope.pageInit();
});