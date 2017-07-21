define([
    'app'
], function (md) {

    md.directive('navPerf', ['$state', function ($state) {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: 'views/app/perf/nav-perf.tpl.html',

            link: function (scope, ele, attr) {

                var vm = scope.vm = {};

                scope.$watch('data', function (n) {
                    vm.detail = n;
                });

                vm.stateIs = function (state) {
                    return $state.includes(state)
                }
            },

            scope: {
                data: '=',
                scrollToValue:'='
            }
        };
    }]);

});









