'use strict';

define(['app'], function (md) {
    md.directive('posProcess', ['$state', function ($state) {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: 'views/com/pos-process.html',
            scope: {
                data: '='
            },
            link: function (scope, ele, attr) {

                scope.$watch('data', function () {
                    scope.step = getStep(scope.data);
                })

                scope.$on('$destroy', function () {
                  ele.remove();
                    scope.$destroy();
                })

            }
        };

        function getStep(process) {

            var values = _.values(process);
            var step = 0;
            _.each(values, function (item, index) {
                if (parseInt(item) > 0) {
                    step = index + 1;
                }
            });
            return step;
        }

    }]);
});