'use strict';

define([
    'app',
    'service/tip',
    'service/alert'

], function (md) {
    //登录
    md.controller('loginCtrl', ['$rootScope', '$scope', '$ionicModal', '$state', '$location',  'tip', function ($rootScope, $scope, $ionicModal, $state, $location,  tip) {
        var vm = $scope.vm = {};

        vm.data = {};



        $ionicModal.fromTemplateUrl('modalFindPwd.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            vm.modalFdPwd = modal;
        });


        vm.findPwd = function () {
            vm.modalFdPwd.show();
        }

    }]);

});

