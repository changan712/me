define([
    'app',
    'service/resource/message'
], function (md) {

    md.directive('msgBox', ['$rootScope', '$state', 'message', function ($rootScope, $state, message) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                feedType: '@'
            },
            templateUrl: 'views/com/components/msg-box.tpl.html',

            link: function (scope, ele, attr) {
                var vm = scope.vm = {};

                scope.feedType = scope.feedType || 'default';

                scope.currentStateName = $state.current.name;

                scope.hide = function () {
                    vm.list = [];
                };
                //隐藏并全部设为已读；
                scope.close = function (e) {
                    readAll();
                    e.stopPropagation();
                    e.preventDefault();
                };

                scope.$on('pageEnter', function () {
                    getList();
                });


                getList();


                function getList() {
                    message.query().$promise.then(function (res) {
                        vm.list = res;
                    });
                }

                function readAll() {
                    return message.visited({ids: _.pluck(vm.list, 'id')}).$promise.then(function () {

                        return vm.list = [];
                    });
                };


            }

        };
    }]);

});









