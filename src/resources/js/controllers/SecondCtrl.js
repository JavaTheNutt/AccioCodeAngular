app.controller('SecondCtrl', ['$scope', function ($scope) {

}]);
/*This directive will be an element directive. It will have a template which is
* just a single string. It logs its attributes, element and scope.*/
app.directive('walterwhite', function () {
    return {
        /*Restrict to an element */
        restrict: 'E',
        transclude: true,
        link: function ($scope, $element, $attr) {
            console.log($attr);
            console.log($element);
            console.log($scope);

        },
        template:'<h2>I am Heisenberg</h2>',
        controller: 'SecondCtrl'
    };
});
app.directive('interactiveButton', function () {
    return{
        restrict: 'A',
        link: function ($scope, $element, $attrs) {
            $element.bind('mouseenter', function () {
                console.log($element);
                $element[0].innerText = 'Rolled Over';
            });
            $element.bind('mouseleave', function () {
                $element[0].innerText = 'Rolled Out'
            })
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