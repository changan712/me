'use strict';

define([
    'app',
    'service/wx',
    'service/tip',
    'service/verify'
], function (md) {

    md.controller('verifyCtrl', ['$rootScope', '$scope','wxUser','tip','verify', function ($rootScope, $scope, wxUser,tip,verify) {

        var vm = $scope.vm = {};
        vm.mod = {};

        vm.hasVeriyfied = !!global_user.empno;

        $rootScope.hideBtnMenu = true;

        $scope.$on('$destroy',function () {
            $rootScope.hideBtnMenu = undefined;
        })

        if (global_company && global_company.custom && global_company.custom.identify_birth){
            vm.placeholder = '请填写员工生日，形如1991-09-13';
        }else {
            vm.placeholder = '请填写员工工号';
        }

        if (vm.hasVeriyfied) {
            vm.mod.name = global_user.name;
            vm.mod.empno = global_user.empno;
        }

        vm.closeWindow = function () {
            WeixinJSBridge.invoke('closeWindow', {}, function (res) {
            });
        }

        vm.infoSubmit = function (form) {
            if (form.$valid){
                var data = angular.extend({}, vm.mod, wxUser.getUser());
                verify.save({},data).$promise.then(function (res) {
                    if (res.verify == 'binded') {
                        if(confirm(res.message)){
                            WeixinJSBridge.invoke('closeWindow', {}, function (res) {
                            });
                        }else{
                        }
                    }else if (res.verify == 'self_bind') {
                        if(confirm(res.message)){
                            WeixinJSBridge.invoke('closeWindow', {}, function (res) {
                            });
                        }else{
                        }
                    }
                })
            }
        };


    }]);
});

