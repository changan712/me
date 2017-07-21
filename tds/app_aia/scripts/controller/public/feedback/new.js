'use strict';

define([
    'app',
    'service/resource/feedback',
    'service/dialog'

], function (md) {

    md.controller('feedbackNewCtrl', ['$scope', '$state', '$timeout', 'feedback', 'dialog', function ($scope, $state, $timeout, feedback, dialog) {

        var vm = $scope.vm = {};

        vm.data = {};

        vm.submit = function (form) {
            $timeout(function () {
                if (form.$valid) {
                    feedback.save({}, vm.data).$promise.then(function () {
                        dialog.tip('感谢您的反馈！');
                        $state.go('app.index');
                    })
                } else {
                    dialog.tip('请至少正确填写一项信息！',4000)
                }
            })
        }

    }]);

});

