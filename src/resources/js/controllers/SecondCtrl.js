app.controller('SecondCtrl', ['$scope', function ($cope) {

}]);
app.directive('walterwhite', function () {
    return {
        restrict: 'E',
        transclude: true,
        link: function ($scope, $element, $attr) {
            /*console.log($scope);
            console.log($element);
            console.log($attr);*/
        }
    };
    /*return{
        /!*This restricts the directive so that it must be an element*!/
        restrict: 'E',
        /!*This ensures that the directive will be updated in real time*!/
        transclude: true,
        template: '<h2>I am Hisenberg</h2>'

    }*/
});
app.directive('interactiveButton', function () {
    return{
        restrict: 'A',
        link: function ($scope, $element, $attrs) {
            /*$element.bind('mouseenter', function () {
                console.log($element);
                $element[0].innerText = 'Rolled Over';
            });
            $element.bind('mouseleave', function () {
                $element[0].innerText = 'Rolled Out'
            })*/
        }
    };
});
app.directive('theshield', function () {
    return{
        restrict: 'E',
        /*This is to isolate the scope so that it does not
        * get overwritten each time*/
        scope: {},
        controller: 'ShieldCtrl',
        link: function($scope, $element, $attrs){
            $element.bind('mouseenter', function () {
                console.log($scope.shieldNames);
            })
        }
    }
});
app.directive('reigns', function () {
    return{
        require: 'theshield',
        restrict: 'A',
        link: function($scope, $element, $attrs, ShieldCtrl){
            ShieldCtrl.addReigns();
        }
    }
});
app.directive('rollins', function () {
    return{
        require: 'theshield',
        restrict: 'A',
        link: function($scope, $element, $attrs, ShieldCtrl){
            ShieldCtrl.addRollins();
        }
    }
});
app.directive('ambrose', function () {
    return{
        require: 'theshield',
        restrict: 'A',
        link: function($scope, $element, $attrs, ShieldCtrl){
            ShieldCtrl.addAmbrose();
        }
    }
});