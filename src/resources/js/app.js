/*
* @ngdoc object
* @name myApp
* @description
* This is the main module for the app. It uses ng-route. This page controls the routing and has the
* MainCtrl linked to the binding.html page*/
var app = angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider', 'boxProvider',  function ($routeProvider, boxProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/templates/main.html'
        })
        .when('/contact', {
            templateUrl: 'partials/templates/directive_restrictions.html'
        })
        .when('/about', {
            templateUrl: 'partials/templates/binding.html',
            controller: 'MainCtrl'
        })
        .when('/second',{
            templateUrl:'partials/templates/second_ctrl.html',
            controller: 'SecondCtrl'
        })
        .when('/ravens', {
            templateUrl: 'partials/templates/ravens.html',
            controller: 'RavensCtrl'
        })
        .when('/compile', {
            templateUrl: 'partials/templates/compile.html',
            controller: 'CompileCtrl'
        })
        .when('/transclude',{
            templateUrl: 'partials/templates/transclude.html'
        })
        /*This shows how to add extra parameters to the url. These parameters
        * can then be extracted in the controller and used*/
        .when('/calendar/:day/:month/:year', {
            templateUrl: 'partials/templates/calendar.html',
            controller: 'CalendarCtrl'
        })
        .when('/provide', {
            templateUrl: 'partials/templates/providers.html',
            controller: 'ProvideCtrl'
        })
        .when('/anno', {
            templateUrl: 'partials/templates/annotate.html',
            controller: 'AnnotateCtrl'
        })
        .when('/scope', {
            templateUrl: 'partials/templates/home.html',
            controller: 'ScopeCtrl'
        })
        .when('/grunt', {
            templateUrl: 'partials/templates/grunt.html'
        })
        .when('/grunt/concat', {
            templateUrl: 'partials/templates/gruntConcat.html'
        })
        .when('/grunt/uglify', {
            templateUrl: 'partials/templates/gruntUglify.html'
        })
        .when('/grunt/cssmin', {
            templateUrl: 'partials/templates/gruntCssMin.html'
        })
        .otherwise({
            templateUrl: 'partials/templates/404.html'
        });
    /*This is the box provider set up in provide.js. It calls
    * the setColor() function and passes in the color red*/
    boxProvider.setColor('#ff0000');
}]);
/*This controller is responsible for the */
app.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.data = {
        label : 'Joe',
        class: 'default',
        edit: 'Edit'
    };
    $scope.toggleHide = function () {
        $('#changeButtonClass').toggleClass('hide');
        $scope.data.edit = checkEdit();

    };
    var checkEdit = function () {
        var item = $('#changeButtonClass');
        if (item.hasClass('hide')) {
            return 'Edit';
        } else {
            return 'Finish';
        }
    }
}]);

