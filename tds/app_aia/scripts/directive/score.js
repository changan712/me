define([
    'app'
], function (md) {

    md.directive('score', ['$state', function ($state) {
        return {
            restrict: 'E',
            replace: 'true',
            require: '?ngModel',
            scope: {
                max: '=?',
                disabled:'=?'
            },
            templateUrl: 'views/com/components/score.tpl.html',

            link: function (scope, ele, attr, ctrl) {

                if (!ctrl) return;

                var vm = scope.vm = {};

                scope.max = scope.max || 5;

                vm.views = new Array(scope.max);

                ctrl.$setViewValue(undefined);

                ctrl.$render = function () {
                    active(parseInt(ctrl.$modelValue)-1);
                };

                ctrl.$formatters.push(function (input) {
                    if (input) {
                        return input;
                    } else {
                        ctrl.$setValidity('required', false);
                    }
                });

                vm.handleClick = function (index) {
                    if (!scope.disabled)
                        active(index);
                };

                function active(index) {

                    _.each(vm.views, function (item, $index) {
                        if ($index <= index) {
                            vm.views[$index] = 1;
                        } else {
                            vm.views[$index] = 0;
                        }
                    });
                    ctrl.$setViewValue(index + 1);
                }


            }

        };
    }]);

});









