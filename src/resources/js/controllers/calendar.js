/*$routeParams is used to take parameters from the URL and use them in the program*/
app.controller('CalendarCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.model = {
        message: 'Date: ' + $routeParams.day + '/' + $routeParams.month + '/' + $routeParams.year
    }
}]);