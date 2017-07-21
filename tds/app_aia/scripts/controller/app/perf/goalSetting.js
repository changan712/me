'use strict';
define([
    'app',
    'service/resource/perf',
    'service/dialog'

], function (md) {
    md.controller('perfGoalSettingCtrl', ['$rootScope', '$scope', '$state', '$ionicListDelegate', 'perf', 'dialog', function ($rootScope, $scope, $state, $ionicListDelegate, perf, dialog) {
        var vm = $scope.vm = {};
        var id = $state.params.id;
        //$scope.perfCtrl.perfId = id;
        vm.ratioLave = 100;

        $scope.$watch('vm.detail.step', function (n) {
            if (n > -1)
                vm.permission = vm.detail.step == 0 && vm.detail.opts.talent == 1;
        });


        perf.get({id: id}).$promise.then(function (res) {
            vm.detail = res;

            vm.ratioLave = getRatioLave();

        });


        vm.adminAgree = function () {
            dialog.actionSheet({titleText: '确认通过审核？'}).then(function () {
                perf.update({id: id}, {'supervisor_passing': []}).$promise.then(function () {
                    vm.detail.step++;

                })
            })
        };

        vm.submit = function (perfItem) {
            perf.update({id: id}, {goals: perfItem.goals}).$promise.then(function (res) {
                // alertService.add('修改成功！');
                perfItem.isEditting = false;
                vm.detail.step++;
                dialog.tip('修改成功！')

            })
        };

        vm.showEdit = function (goal) {
            dialog.actionSheet({buttons: [{text: '编辑'}, {text: '删除'}], destructiveText: ''})
                .then(function (index) {
                    if (index == 0) {
                        vm.editGoal(goal);
                    } else if (index == 1) {
                        vm.deleteGoal(goal);
                    }
                })
        };

        //todo 能否把add 和 edit 合并？
        vm.addGoal = function (perfItem) {

            dialog.modal(
                {
                    title: '添加',
                    templateUrl: 'goal-edit.tpl'
                },
                {
                    ratioLave: vm.ratioLave
                }
            ).then(function (res) {
                perfItem.goals.push(res);
                perfItem.isEditting = true;
                vm.ratioLave = getRatioLave()
            });


        };

        vm.deleteGoal = function (goal) {

            vm.detail.goals = _.reject(vm.detail.goals, goal);
            vm.detail.isEditting = true;
            vm.ratioLave = getRatioLave();

        };

        vm.editGoal = function (goal) {

            var goals = vm.detail.goals;
            var ratioLave = getRatioLave(goal);
            var goalIndex = _.findIndex(goals, goal);
            goal.expected_time = new Date(goal.expected_time);
            dialog.modal(
                {
                    title: '编辑',
                    templateUrl: 'goal-edit.tpl',
                    data: goal
                },
                {
                    ratioLave: ratioLave
                }
            ).then(function (res) {

                goals[goalIndex] = res;
                vm.detail.isEditting = true;
                vm.ratioLave = getRatioLave();

            })
        };

        function getRatioLave(goal) {
            var total = 100;
            if (goal) {
                _.each(_.reject(vm.detail.goals, goal), function (goalOther) {
                    total -= parseInt(goalOther.ratio);
                });
            } else {
                _.each(vm.detail.goals, function (goalOther) {
                    total -= parseInt(goalOther.ratio);
                });
            }


            return total;
        }


    }]);

});

