'use strict';
define([
    'app',
    'service/resource/devPlan',
    'service/resource/perf',
    'service/pageList',
    'service/dialog'

], function (md) {
    md.controller('perfDevPlanCtrl', ['$rootScope', '$scope', '$state', 'devPlan', 'perf', 'dialog', 'PageList', function ($rootScope, $scope, $state, devPlan, perf, dialog, PageList) {

        var vm = $scope.vm = {};
        var id = vm.id = $state.params.id;

        var userId = undefined;

        perf.get({id: id}).$promise
            .then(function (res) {
                vm.detail = res;
                return userId = res.user_id;
            })
            .then(function (id) {
                vm.pageList = new PageList(devPlan,{user_id: id});
                vm.pageList.getList();
            });


        vm.data = {
            plan_time: []
        };





        vm.create = function () {
            dialog.modal({
                    title: '新建个人发展计划',
                    templateUrl: 'dev-plan-edit.tpl'
                })
                .then(function (res) {
                    res.user_id = userId;
                    return devPlan.save({}, res).$promise
                })
                .then(function (res) {
                    vm.pageList.getList();
                });


        };


    }]);

});

