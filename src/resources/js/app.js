var app = angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/templates/home.html',
            controller: 'ScopeCtrl'
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
        .otherwise({
            templateUrl: 'partials/templates/404.html'
        })
}]);
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
