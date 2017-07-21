'use strict';

define([
    'app',
    'service/resource/auth',
    'service/tip',
    'service/alert'

], function (md) {
    //初测
    md.controller('regCtrl', ['$rootScope', '$scope', '$state', '$location', 'auth', 'tip', function ($rootScope, $scope, $state, $location, auth, tip) {
        var vm = $scope.vm = {};

        vm.onSubmit = function (form) {
            if (form.$valid) {
                if (vm.data.pwd != vm.data.pwd2) {
                    tip.show('两次密码不一致！');
                    return false
                }

                auth.save({action: 'sign-up'}, vm.data).$promise
                    .then(function () {
                        $state.go('app.index');
                        form.$setPristine();
                    });


            } else {
                tip.show('请输入完整信息!')
            }
        };

    }]);

});

