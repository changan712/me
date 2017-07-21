'use strict';

define([
    'app',
    'service/redPacket',
    'service/rank',
    'service/reference',
    'service/corp'
], function (md) {

    md.controller('sharePrizeCtrl', ['$rootScope', '$scope', '$ionicModal', 'tip', 'rank', 'redPacket', '$location', function ($rootScope, $scope, $ionicModal, tip, rank, redPacket, $location) {
        var msg = $location.search().msg;
        var vm = $scope.vm = {};
        vm.view = {};
        vm.rule = undefined;

        getData();
        if(msg){
            tip.show(msg);
        }

        vm.sendRedPacket = function () {
            location.href = "hrtps.html"; //跳转发红包
            /*redPacket.sendRedPack().$promise.then(function () {
                tip.show('红包已发送，请注意查收！');

                getData();
            }).finally(function(){
                vm.hideRdModal();
            });*/
        };

        redPacket.getRule().$promise.then(function (res) {
            vm.rule =res;
        });


        function getData() {
            redPacket.getCount({}).$promise.then(function (res) {
                vm.view = res;
                $rootScope.prize = res.total_money;
            });
        }

        $ionicModal.fromTemplateUrl('rd-modal.html', {
            scope: $scope,
            animation: 'scale-in'
        }).then(function (modal) {
            vm.rdModal = modal;
            //vm.rdModal.show();
        });

        $ionicModal.fromTemplateUrl('rule-modal.html', {
            scope: $scope,
            animation: 'scale-in'
        }).then(function (modal) {
            vm.ruleModal = modal;
            //vm.ruleModal.show();
        });

        vm.showRuleModal = function () {
            vm.ruleModal.show();
        };
        vm.hideRuleModal = function () {
            vm.ruleModal.hide();
        };
        vm.showRdModal = function () {
            vm.rdModal.show();
        };
        vm.hideRdModal = function () {
            vm.rdModal.hide();
        };

        $scope.$on('$destroy', function () {
            vm.rdModal && vm.rdModal.remove();
            vm.ruleModal && vm.ruleModal.remove();

        });
    }]);


    md.controller('shareDetailCtrl', ['$rootScope', '$scope', 'rank', function ($rootScope, $scope, rank) {
        var vm = $scope.vm = {};
        rank.data(function (data) {
            vm.rank = data.rank;    //当前名次
            vm.data = data.data;    //数量
            vm.count = data.count; //和第一名的数量的差值
        })
    }]);

    md.controller('shareRecCtrl', ['$rootScope', '$scope','$ionicModal', 'tip', 'reference', '$location','$sce','corp', function ($rootScope, $scope, $ionicModal, tip, reference, $location, $sce,corp) {
        var msg = $location.search().msg;
        var vm = $scope.vm = {};

        vm.view = {};
        vm.rule = undefined;
        vm.info = {};

        if(msg){
            tip.show(msg);
        }

        corp.brief({},function (res) {
            vm.info = res;
            vm.info.description = $sce.trustAsHtml(vm.info.description);
        })

        reference.get().$promise.then(function (res){
            vm.view.interview_count = res.interview.count;
            vm.view.onboard_count = res.onboard.count;
            vm.view.passprobation_count = res.passprobation.count;
        });

        $ionicModal.fromTemplateUrl('rule-modal.html', {
            scope: $scope,
            animation: 'scale-in'
        }).then(function (modal) {
            vm.ruleModal = modal;
            //vm.ruleModal.show();
        });

        vm.showRuleModal = function () {
            vm.ruleModal.show();
        };
        vm.hideRuleModal = function () {
            vm.ruleModal.hide();
        };

        $scope.$on('$destroy', function () {
            vm.ruleModal && vm.ruleModal.remove();
        });
    }]);

    md.controller('shareRecListCtrl', ['$rootScope', '$scope','$state', '$ionicModal','reference', '$location',
        function ($rootScope, $scope, $state,$ionicModal, reference, $location) {
        var vm = $scope.vm = {};
        var ref_status = $state.params.ref_status;

        vm.view = {};

        switch (ref_status){
            case 'INTERVIEWED':
                vm.label = '面试';
                break;
            case 'ONBOARDING':
                vm.label = '入职';
                break;
            case 'PASSPROBATION':
                vm.label = '通过试用期';
                break;
            default:
                vm.label = '面试';
        }

        reference.getDetail({ref_status:ref_status}).$promise.then(function (res) {
            vm.view.list = res;
        })
    }]);

});



