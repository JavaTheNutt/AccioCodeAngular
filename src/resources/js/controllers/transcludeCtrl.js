app.directive('buttonDirective', function () {
    return{
        restrict:'AE',
        /*This will allow us to put what is contained within this element into
        * our template*/
        transclude: true,
        template: '<button class="btn btn-primary" type="button">' +
        'Joes Button <data-ng-transclude></data-ng-transclude>' +
        '</button>'
    }
});