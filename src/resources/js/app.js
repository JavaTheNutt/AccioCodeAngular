var app = angular.module('myApp', []);
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
