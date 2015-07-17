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
