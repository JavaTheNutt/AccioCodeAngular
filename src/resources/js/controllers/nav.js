/*This is the directive to place the navbar on the screen*/
app.directive('navDirective', function () {
    return{
        restrict: 'E',
        templateUrl: 'partials/templates/nav.html',
        controller: 'NavCtrl',
        scope: {}
    }
});
/*This controller holds the array of items to be displayed in the dropdown menu of the nav bar*/
app.controller('NavCtrl', ['$scope', function ($scope) {
    $scope.items = [
        {
            name: "Directive Restrictions",
            url: "#/contact"
        },
        {
            name: "Binding",
            url: "#/about"
        },
        {
            name: "The Shield",
            url: "#/second"
        },
        {
            name: "Ravens",
            url: "#/ravens"
        },
        {
            name: "Transclude",
            url: "#/transclude"
        },
        {
            name: "Providers",
            url: "#/provide"
        },
        {
            name: "Compile",
            url: "#/compile"
        },
        {
            name: "Annotation",
            url: "#/anno"
        },
        {
            name: "Scope",
            url: "#/scope"
        }

    ];

}]);