'use strict';

define([
    'app',
    'service/resource/auth',
    'service/tip'

], function (md) {
    //登录
    md.controller('resetPwdCtrl', ['$rootScope', '$scope', '$state', '$location', 'auth', 'tip', function ($rootScope, $scope, $state, $location, auth, tip) {
        var vm = $scope.vm = {};


        vm.data = {
            token: $location.search().token
        };

        vm.submit = function (form) {
            if (form.$valid) {
                if (vm.data.pwd != vm.data.pwd2) {
                    tip.show('两次密码不一致');
                    return;
                }
                auth.save({action: 'reset-pwd'}, vm.data).$promise.then(function (res) {
                    tip.show('重置成功！');
                    $state.go('login');
                }).finally(function () {
                    form.$setPristine();
                })

            }
        };


    }]);

});

