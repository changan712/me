'use strict';
define([
    'app',
    'service/resource/perf',
    'service/alert',
    'service/dialog'

], function (md) {
    md.controller('perfSummaryCtrl', ['$rootScope', '$scope', '$state','$ionicScrollDelegate', 'perf', 'dialog',  function ($rootScope, $scope, $state,$ionicScrollDelegate, perf, dialog) {
        var vm = $scope.vm = {};
        var id = $state.params.id;

        getDetail();

        $scope.$watch('vm.detail.step', function (n) {
            if (n)
                vm.permission = vm.detail.step == 4;
        });


        vm.review = function (summary, role) {
            var roleCnStr = role == 'mentor' ? '导师' : role;
            dialog.modal({
                    title: roleCnStr + '评估',
                    templateUrl: 'modal-summary.tpl',
                    data: summary
                })
                .then(function (res) {
                    return vm.submit(res.info, role);
                })
                .then(function () {
                    getDetail();
                    dialog.tip('提交成功!');
                })
        };

        vm.submit = function (info, role) {
            var data = {};
            //todo 好奇怪的结构
            data[role] = {info: info};
            return perf.update({id: id}, {summary: data}).$promise;

        };

        function getDetail() {
            vm.detail = perf.get({id: id});
        }

    }]);

});

