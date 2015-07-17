var app = angular.module('myApp', ['ui.router']);
app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'partials/templates/home.html',
            controller: 'ScopeCtrl'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'partials/templates/directive_restrictions.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'partials/templates/binding.html',
            controller:'MainCtrl'
        })
        .state('second', {
            url:  '/second',
            templateUrl: 'partials/templates/second_ctrl.html',
            controller: 'SecondCtrl'
        })
        .state('ravens', {
            url: '/ravens',
            templateUrl: 'partials/templates/ravens.html',
            controller: 'RavensCtrl'
        })
        .state('compile', {
            url: '/compile',
            templateUrl: 'partials/templates/compile.html',
            controller: 'CompileCtrl'
        })
        .state('compile2', {
            url: '/compile2',
            templateUrl: 'partials/templates/compile2.html',
            controller: 'Compile2Ctrl'
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
