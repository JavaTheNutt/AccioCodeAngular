app.controller('CompileCtrl', ['$scope', function ($scope)
{
    $scope.labelName = 'My Button';
    $scope.newElement = angular.element('<div class="btn btn-default">' + $scope.labelName + '</div>')
}]);
/*This way of using compile is easier than the below method but it allows less control.
* Typically this would be used for a website whereas the below method would be used
 * for web apps where data manipulation is key.*/
app.directive('compileDirective', ['$compile', function ($compile) {
    return{
        restrict: 'E',
        template: '<div>New Compile Template</div>',
        controller: 'CompileCtrl',
        link: function (scope, elem, attrs)
        {
            var compileIt = $compile(scope.newElement);
            var content = compileIt(scope);
            elem.append(content);
        }
    }
}]);
app.directive('pageDirective', function ()
{
    return{
        restrict : 'E',
        template: "<div>Here is a new button</div>",
        controller: 'CompileCtrl',
        scope: '=',
        /*Compile will first run through and place all of the DOM elements on the screen
        * for each directive. Then it will run through and utilise the code in the pre and post
        * sections of each respectively */
        compile: function (tElem, tAttrs)
        {
            console.log('Compile it. This is the original compiled DOM');
            /*debugger is used to pause the JS file at this point. What will happen here is that the
            * above message will be logged and the process will pause. Then when resumed, it will search
            * for any more matching directives and if it finds some, it will log again and pause again. Once all
            * directives have been iterated through, it will then move through the pre function for the first directive
            * and pause again. Then it will log the post and pause again. It will continue this cycle for each matching
            * directive on the page*/
            debugger;
            return {
                pre: function preLink(scope, iElem, iAttrs)
                {
                    console.log('Pre');
                    /*This will change the template above to the html below during the
                    * pre-compile. It is inadvisable to perform DOM manipulation in the pre-compile*/
                    iElem.html('<div class="panel panel-default">Now a panel</div>');
                },
                post: function postLink(scope, iElem, iAttrs)
                {
                    console.log('Post');
                    /*iElem is representative of the element that the directive is attached to*/
                    iElem.append(scope.newElement);
                }
            }
        }
    }
});
app.directive('pageDirectiveTwo', function ()
{
    return{
        restrict : 'E',
        template: "<div>Here is a second button</div>",
        controller: 'CompileCtrl',
        scope: '=',
        compile: function (tElem, tAttrs)
        {
            console.log('2 Compile it. This is the original compiled DOM');
            return {
                pre: function preLink(scope, iElem, iAttrs)
                {
                    console.log('2 Pre');
                },
                post: function postLink(scope, iElem, iAttrs)
                {
                    console.log('2 Post');
                    /*iElem is representative of the element that the directive is attached to*/
                    iElem.append(scope.newElement);
                }
            }
        }
    }
});
app.directive('pageDirectiveThree', function ()
{
    return{
        restrict : 'E',
        template: "<div>Here is a third button</div>",
        controller: 'CompileCtrl',
        scope: '=',
        compile: function (tElem, tAttrs)
        {
            console.log('3 Compile it. This is the original compiled DOM');
            return {
                pre: function preLink(scope, iElem, iAttrs)
                {
                    console.log('3 Pre');
                },
                post: function postLink(scope, iElem, iAttrs)
                {
                    console.log('3 Post');
                    /*iElem is representative of the element that the directive is attached to*/
                    iElem.append(scope.newElement);
                }
            }
        }
    }
});