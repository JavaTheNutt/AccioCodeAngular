
app.controller('ScopeCtrl', ['$scope', function ($scope) {
    $scope.getMove = function (name, movetype, move) {
        console.log('' + name + ' performed a ' + movetype + ' ' + move);

    };
    $scope.movetypes = ['Finisher', 'Offensive Move', 'Defensive Move'];
    $scope.movetype = $scope.movetypes[0];
}]);
app.directive('character', function()
{
    return {
        restrict: 'E',
        /*Here is where we isolate scope for each directive contained
        within this element*/
        scope: {
            /*Using the '@' symbol here will let us take values from the
            * attributes for this element*/
            name: '@',
            image: '@',
            /**/
            movetype: '=',
            /*The ampersand here indicates that the function contained as an argument
            * in this attribute will be called*/
            useMove : '&'
        },
        templateUrl: 'partials/isolate_scope.html',
        controller: 'ScopeCtrl'
    }
});
