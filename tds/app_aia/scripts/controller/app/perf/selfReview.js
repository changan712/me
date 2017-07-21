'use strict';
define([
    'app',
    'service/resource/perf',
    'service/dialog'
], function (md) {
    md.controller('perfSelfReviewCtrl', ['$scope', '$state', 'perf', 'dialog', '$timeout', function ($scope, $state, perf, dialog, $timeout) {

        var vm = $scope.vm = {};
        var currentUser = $scope.$root.currentUser;
        var id = $state.params.id;

        vm.detail = null;
        vm.totalResult = undefined;
        vm.data = {};


        vm.review = function (goal) {
            dialog.modal({title: '自我评估', templateUrl: 'modal-self-review.tpl', data: goal}).then(function (res) {
                _.extend(goal, res);
            })
        };


        $scope.$watch('vm.detail.step', function (n) {
            if (n)
                vm.permission = vm.detail.step == 2 && vm.detail.opts.talent == 1;
        });


        $scope.$watchCollection(function () {
            if (vm.detail && vm.detail.goals) {
                return _.pluck(vm.detail.goals, 'percent_review_self');
            }
        }, function (n, o) {
            if (n != o) {
                var total = 0;
                _.each(vm.detail.goals, function (goal) {
                    goal.result_review_self = goal.ratio * goal.percent_review_self / 100;
                    total += goal.result_review_self;
                });

                vm.totalResult = total;
            }

        });

        vm.submit = function (form) {
            if (form.$valid) {
                vm.data.goal_percent_list = vm.detail.goals;
                vm.data.info = vm.detail.review_self.info;
                perf.update({id: vm.detail.id}, {self_review: vm.data}).$promise.then(function (res) {
                    dialog.tip('修改成功！');
                    vm.detail.step++;

                });
            }
        };

        perf.get({id: id})
            .$promise
            .then(function (res) {
                vm.detail = res;
                vm.permission = vm.detail.step == 2 && vm.detail.opts.talent == 1;

            });

    }]);

});

