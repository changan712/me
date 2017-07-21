'use strict';
define([
    'app',
    'service/resource/perf',
    'service/dialog',
    'service/alert'
], function (md) {
    md.controller('perfSignOffCtrl', ['$rootScope', '$scope', '$state', 'perf', 'dialog', 'alertService', function ($rootScope, $scope, $state, perf, dialog, alertService) {
        var vm = $scope.vm = {};

        var id = $state.params.id;

        getDetail();

        $scope.$watch('vm.detail.step', function (n) {
            if (n)
                vm.permission = vm.detail.step == 5;
        });


        vm.review = function (role) {

            var map = {
                'talent': '员工',
                'manager': '上级'
            };
            dialog.modal({
                    title: map[role] + '签字',
                    templateUrl: 'modal-sign-off.tpl'
                })
                .then(function (res) {
                    return vm.submit(res.info, role);
                })
                .then(function () {
                    getDetail();
                    dialog.tip('提交成功!');
                })
        };


        vm.now = new Date();

        vm.submit = function (info, role) {
            var data = {};
            data[role] = {signature_name: info};
            return perf.update({id: id}, {sign_off: data}).$promise;


        };

        function getDetail() {
            return perf.get({id: id}).$promise.then(function (res) {
                vm.detail = res;
            });
        }


    }]);

});

