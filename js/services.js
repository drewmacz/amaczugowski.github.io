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

    data.languages = ['Java', 'Javascript', 'Python', 'Go', 'Kotlin', 'Groovy', 'C', 'C#', 'MatLab', 'Lua', 'SCSS', 'CSS', 'HTML'];
    data.frameworks = ['Angular', 'Node.js', 'Express', 'Socket.IO', 'Mongoose', 'jQuery', 'Spring', 'NumPy', 'SciPy', 'OpenCV', 'Grails', 'Bootstrap', 'Foundation', 'Materialize', 'Ionic', 'Cordova', 'Cucumber'];
    data.tools = ['Unity', 'NPM', 'Nginx', 'Webpack', 'Bower', 'Maven', 'Gulp', 'MongoDB', 'Firebase', 'Google Maps API'];
    data.oss = ['Hololens', 'Android', 'MacOS', 'Windows', 'Linux', 'Redhat', 'CentOS', 'Debian', 'Ubuntu'];
    data.skills = ['API Development', 'REST', 'Unit Testing', 'Git', 'Version Control', 'GitHub', 'GitLab', 'UML', 'Agile', 'Algorithm Analysis', 'Object Oriented Principles (OOP)', 'Object Oriented Design (OOD)', 'MEAN Stack Development', 'Full Stack Development'];

    return data;
});

app.factory('projectsList', function() {
    var data = {};

    data.projects = [
        {
            title: 'HUD for First Responders',
            description: 'A heads-up display developed to work on Microsoft Hololens that aims to help first responders in the field. This project was part of my undergraduate research, where I worked on a team of nine students. The goal of this project was to study how users interact with augmented reality interfaces, and in particular, how these interfaces can help first responders in emergency situations. This research won first place at the 2017 ISE Research Symposium at Virginia Tech.',
            tags: [
                'Research',
                'Hololens',
                'Unity',
                'C#'
            ],
            url: ''
        },
        {
            title: 'Socket Chat',
            description: 'An instant messaging application created from scratch to become familiar with Socket.IO.',
            image: './assets/socket-chat.png',
            tags: [
                'Personal',
                'Socket.IO',
                'Node.js',
                'Express',
                'AngularJS',
                'Materialize',
                'Javascript',
                'HTML',
                'CSS'
            ],
            url: 'http://github.com/amaczugowski/socket-chat/'
        },
        {
            title: 'Rights App',
            description: 'Application for iOS and Android using Ionic framework to help users learn their rights.',
            image: './assets/rights.png',
            tags: [
                'Personal',
                'Ionic',
                'Cordova',
                'AngularJS',
                'Javascript',
                'HTML',
                'CSS'
            ],
            url: 'http://github.com/amaczugowski/rights/'
        },
        {
            title: 'iMap App',
            description: 'Cross-platform mobile app with Firebase and the Google Maps API to share locations between users.',
            image: './assets/imap.png',
            tags: [
                'Personal',
                'Ionic',
                'Cordova',
                'Firebase',
                'Google Maps API',
                'AngularJS',
                'Javascript',
                'HTML',
                'CSS'
            ],
            url: 'http://github.com/amaczugowski/rights/'
        },
        {
            title: 'Harris Project Server',
            description: 'Web based tool for Harris Corporation to be utilized by multidisciplinary user base to digitalize tracking of company savings. Project consisted of frontend AngularJS webpage and a Node.js server to track submitted projects. Assumed leading role on project architecture to meet requirements on schedule and within budget. Created by a team of 2.',
            tags: [
                'Work',
                'Node.js',
                'Express',
                'MongoDB',
                'Mongoose',
                'REST API',
                'AngularJS',
                'Foundation',
                'Javascript',
                'HTML',
                'CSS'
            ],
            url: ''
        }
    ];

    return data;
});
