/*
* @ngdoc object
* @name myApp
* @description
* This is the main module for the app. It uses ng-route. This page controls the routing and has the
* MainCtrl linked to the binding.html page*/
var app = angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider', 'boxProvider',  function ($routeProvider, boxProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/templates/main.html'
        })
        .when('/contact', {
            templateUrl: 'partials/templates/directive_restrictions.html'
        })
        .when('/about', {
            templateUrl: 'partials/templates/binding.html',
            controller: 'MainCtrl'
        })
        .when('/second',{
            templateUrl:'partials/templates/second_ctrl.html',
            controller: 'SecondCtrl'
        })
        .when('/ravens', {
            templateUrl: 'partials/templates/ravens.html',
            controller: 'RavensCtrl'
        })
        .when('/compile', {
            templateUrl: 'partials/templates/compile.html',
            controller: 'CompileCtrl'
        })
        .when('/transclude',{
            templateUrl: 'partials/templates/transclude.html'
        })
        /*This shows how to add extra parameters to the url. These parameters
        * can then be extracted in the controller and used*/
        .when('/calendar/:day/:month/:year', {
            templateUrl: 'partials/templates/calendar.html',
            controller: 'CalendarCtrl'
        })
        .when('/provide', {
            templateUrl: 'partials/templates/providers.html',
            controller: 'ProvideCtrl'
        })
        .when('/anno', {
            templateUrl: 'partials/templates/annotate.html',
            controller: 'AnnotateCtrl'
        })
        .when('/scope', {
            templateUrl: 'partials/templates/home.html',
            controller: 'ScopeCtrl'
        })
        .when('/grunt', {
            templateUrl: 'partials/templates/grunt.html'
        })
        .when('/grunt/concat', {
            templateUrl: 'partials/templates/gruntConcat.html'
        })
        .when('/grunt/uglify', {
            templateUrl: 'partials/templates/gruntUglify.html'
        })
        .when('/grunt/cssmin', {
            templateUrl: 'partials/templates/gruntCssMin.html'
        })
        .otherwise({
            templateUrl: 'partials/templates/404.html'
        });
    /*This is the box provider set up in provide.js. It calls
    * the setColor() function and passes in the color red*/
    boxProvider.setColor('#ff0000');
}]);
/*This controller is responsible for the */
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

/*$routeParams is used to take parameters from the URL and use them in the program*/
app.controller('CalendarCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.model = {
        message: 'Date: ' + $routeParams.day + '/' + $routeParams.month + '/' + $routeParams.year
    }
}]);

app.controller('CompileCtrl', ['$scope', function ($scope)
{
    $scope.labelName = 'My Button';
    $scope.newElement = angular.element('<div class="btn btn-default">' + $scope.labelName + '</div>')
    $scope.showExplanation = function () {
        console.log('test');
        $('#compileExplanation').toggleClass('hide');
    }
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
                    debugger;
                },
                post: function postLink(scope, iElem, iAttrs)
                {
                    console.log('Post');
                    /*iElem is representative of the element that the directive is attached to*/
                    iElem.append(scope.newElement);
                    debugger;
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
            debugger;
            return {
                pre: function preLink(scope, iElem, iAttrs)
                {
                    console.log('2 Pre');
                    debugger;
                },
                post: function postLink(scope, iElem, iAttrs)
                {
                    console.log('2 Post');
                    /*iElem is representative of the element that the directive is attached to*/
                    iElem.append(scope.newElement);
                    debugger;
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
            debugger;
            return {
                pre: function preLink(scope, iElem, iAttrs)
                {
                    console.log('3 Pre');
                    debugger;
                },
                post: function postLink(scope, iElem, iAttrs)
                {
                    console.log('3 Post');
                    /*iElem is representative of the element that the directive is attached to*/
                    iElem.append(scope.newElement);
                    debugger;
                }
            }
        }
    }
});

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

/*@ngdoc object
* @name myApp
* @description
* This where the provide controller and the box provider are written*/
app.controller('ProvideCtrl', ['$scope', '$injector', function ($scope, $injector)
{
    /*This will allow us to inject our box provider into this function
    * for use outside angular*/
    $injector.invoke(['box', function (box) {
        /*This will take the color attribute from the box provider
         * and assign it to the scope*/
        $scope.color = box.color;
    }]);
}]);
/*This is where the box provider is created*/
app.provider('box', function () {
    /*This variable will hold the color passed in by the setColor
    * function that is called in config*/
   var hex;
    return{
        setColor: function (value)
        {
            hex = value;
        },
        $get: function ()
        {
            return{
              color: hex
            }
        }
    }
});

/*This creates a service that will handle collecting the data from the
* json file*/
app.service('ravensService', ['$http', '$q', function ($http, $q)
{
    /*The $q is used to defer promises, which means that the service will
    * complete an action once another action has been completed*/
    var deferred = $q.defer();

    /*$http is used to get a file. In this case it gets the data.json file
    * and then calls a function to resolve the data*/
    $http.get('resources/json/data.json').then(function (data)
    {
        deferred.resolve(data);
    });

    /*This function will return the promise to the controller*/
    this.getPlayers = function ()
    {
        return deferred.promise;
    };
}]);
/*This is the controller that will hndle the json data*/
app.controller('RavensCtrl', ['$scope', 'ravensService', function ($scope, ravensService)
{
    /*This assigns the promise returned by the getPlayers() function to
    * the variable "promise*/
    var promise = ravensService.getPlayers();

    /*This function will add the data to $scope.team once it is resolved*/
    promise.then(function (data)
    {
        $scope.players = data.data;
    })
}]);

app.directive('restrictions', function () {
    return{
        restrict: 'A',
        link: function () {
            console.log('I am an attribute restriction');
        }
    }
});
app.directive('elementrest', function () {
    return {
        restrict: 'E',
        link: function () {
            console.log('I am an element restriction')
        }
    }
});
app.directive('classrest', function () {
    return{
        restrict: 'C',
        link: function () {
            console.log('I am a class restriction');
        }
    }
});
app.directive('commentrest', function () {
    return{
        restrict: 'M',
        link: function () {
            console.log('I am a comment restriction');
        }
    }
});



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


app.controller('ShieldCtrl', ['$scope', function ($scope) {
    $scope.shieldNames = [];
    this.addReigns = function () {
        $scope.shieldNames.push('Roman Reigns: Juggernaut');
    };
    this.addRollins = function () {
        $scope.shieldNames.push('Seth Rollins: Architect');
    };
    this.addAmbrose = function () {
        $scope.shieldNames.push('Dean Ambrose: Lunatic Fringe');
    }
}]);


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

app.controller('AnnotateCtrl', function ($scope) {
    $scope.message = 'I am a message';
});