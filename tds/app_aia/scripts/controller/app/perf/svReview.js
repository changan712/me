'use strict';
define([
    'app',
    'service/resource/perf',
    'service/dialog',
    'service/alert'
], function (md) {
    md.controller('perfSvReviewCtrl', ['$scope', '$state', 'perf', 'dialog', 'alertService', function ($scope, $state, perf, dialog, alertService) {

        var vm = $scope.vm = {};

        var id = $state.params.id;

        vm.permission = undefined;

        perf.get({id: id}).$promise.then(function (res) {
            vm.detail = res;

        });

        vm.totalResult = undefined;

        vm.data = {};


        vm.review = function (goal) {
            dialog.modal({title: '上级评估', templateUrl: 'modal-sv-review.tpl', data: goal}).then(function (res) {
                _.extend(goal,res);
            })

        };


        $scope.$watch('vm.detail.step',function(n){
            if(n)
                vm.permission = vm.detail.step == 3 && vm.detail.opts.manager == 1;
        });

        $scope.$watchCollection(function () {
            if (vm.detail && vm.detail.goals) {
                return _.pluck(vm.detail.goals, 'percent_review_manager');
            }
        }, function (n, o) {
            if (n != o) {
                var total = 0;
                _.each(vm.detail.goals, function (goal) {
                    goal.result_review_manager = goal.ratio * goal.percent_review_manager / 100;
                    total += goal.result_review_manager;
                });
                vm.totalResult = total;
            }

        });


        vm.submit = function (form) {
            if (form.$valid) {
                vm.data.goal_percent_list = vm.detail.goals;
                vm.data.info = vm.detail.review_supervisor.info;
                perf.update({id: vm.detail.id}, {supervisor_review: vm.data}).$promise.then(function (res) {
                    vm.detail.step++;
                    dialog.tip('修改成功！')
                });
            }
        };




    }]);

});

