'use strict';

define(['app',
    'service/userInfo',
    'service/dialog',
    'service/redPacket'
], function (md) {
    md.controller('redPacketStatCtrl', ['$rootScope', '$scope', '$state', 'redPacket', function ($rootScope, $scope, $state, redPacket) {


        $rootScope.page = 'red_packet';
        var vm = $scope.vm = {};

        vm.sm = {};
        vm.rule = {};

        vm.stateIs = function (state) {
            return $state.current.name == state;
        };


        redPacket.summary({}, function (res) {
            vm.sm = res;
        });

        redPacket.getRule(function (res) {
            vm.rule = res;
        })


    }]);
});