app.directive('gruntPanel', function () {
    return{
        restrict: 'E',
        scope:{
            name:'@',
            url:'@',
            description: '@'
        },
        templateUrl: 'partials/templates/gruntPanel.html'
    }
});