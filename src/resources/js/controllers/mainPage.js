/*This is the directive for the panels tobe displayed on the homepage*/
app.directive('descriptivePanel', function () {
    return{
        /*Restrict to an element*/
        restrict: 'E',
        /*Assign attributes*/
        scope: {
            panelName: '@',
            url: '@',
            description: '@',
            js: '@',
            template:'@'
        },
        templateUrl: 'partials/templates/descriptive_panel.html',
        controller:'MainPageCtrl'
    }
});
app.controller('MainPageCtrl', ['$scope', function ($scope) {

}]);