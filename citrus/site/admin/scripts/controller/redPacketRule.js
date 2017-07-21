'use strict';

define(['app',
    'service/redPacket',
    'service/dialog'
], function (md) {
    md.controller('redPacketRuleCtrl', ['$rootScope', '$scope', '$state', 'redPacket', 'dialog', function ($rootScope, $scope, $state, redPacket, dialog) {

        $rootScope.page = 'red_packet';
        var vm = $scope.vm = {};

        vm.rule = {};

        vm.stateIs = function (state) {
            return $state.current.name == state;
        };

        var defaultRuleFilter = {share: true, share_view: true, share_apply: true};

        getRule();


        function getRule() {
            redPacket.getRule({}).$promise.then(function (res) {
                vm.rule = res;
                if (!vm.rule.filter) {
                    vm.rule.filter = {share: true, share_view: true, share_apply: true};
                } else {
                    vm.rule.filter = _.extend({}, defaultRuleFilter, vm.rule.filter);
                }
            })
        }


        vm.setFilterRule = function (key, value) {
            vm.rule.filter[key] = value;
            console.log($scope);

        };


        vm.submit = function (form) {
            if (form.$valid) {

                redPacket.setRule({}, vm.rule).$promise.then(function (res) {
                    dialog.alert('修改成功！')
                })
            }
        }

    }]);
});