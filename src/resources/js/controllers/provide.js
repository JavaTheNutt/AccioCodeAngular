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