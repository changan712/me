define(['app','um'], function (md) {

    md.directive("um", [function () {
        return {
            restrict: 'AE',
            scope: {
                umObj: '=',
                onReady: '&'

            },
            replace: true,

            link: function (scope, element, attributes) {
                var onReady = scope.onReady || angular.noop;
                scope.umObj = UM.getEditor('myEditor');

                onReady({um: scope.umObj});

                scope.$on('$destroy', function () {

                    scope.umObj.destroy()
                })
            }
        }
    }])

});