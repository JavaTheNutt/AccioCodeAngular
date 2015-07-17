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