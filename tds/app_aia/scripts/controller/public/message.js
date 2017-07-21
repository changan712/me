'use strict';

define([
    'app',
    'service/resource/message',
    'service/dialog'

], function (md) {

    md.controller('messageCtrl', ['$rootScope', '$scope', '$state', 'message', 'dialog', function ($rootScope, $scope, $state, message, dialog) {

        var vm = $scope.vm = {};

        vm.from = $state.params.from || 'app.index';

        // console.log(vm.type)

        message.query().$promise.then(function (res) {
            vm.list = res;
        });
        vm.setRead = function (item) {
            message.visited({ids: [item.id]}).$promise.then(function () {
                $rootScope.messageCount--;
                vm.list = _.reject(vm.list, function (it) {
                    return it.id == item.id;
                })
            });

        };

        vm.setReadAll = function () {
            return message.visited({ids: _.pluck(vm.list, 'id')}).$promise.then(function () {
                return vm.list = [];
            });
        };

    }]);

});

