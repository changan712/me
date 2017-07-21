'use strict';

define([
    'app',
    'service/position',
    'service/wx',
    'service/tip',
    'service/wxStat'

], function (md) {
    //职位列表
    md.controller('resumeRecCtrl', ['$rootScope', '$scope', '$http', '$location', '$ionicScrollDelegate', '$state', 'position', 'wxUser', 'tip', 'wxStat',
        function ($rootScope, $scope, $http, $location, $ionicScrollDelegate, $state, position, wxUser, tip, wxStat) {

        var vm = $scope.vm = {};
        vm.submited = false;
        vm.agree = true;


        vm.mod = {
            position_id: $location.search().position_id,
            file: []
        };

        vm.deleteFile = function (index) {
            vm.mod.file.splice(index, 1);
            $ionicScrollDelegate.resize();
        };

        vm.readerError = function (msg) {
            tip.show(msg);
        };

        vm.readerSuccess = function (fileData) {
            vm.mod.file.push(fileData);
            $ionicScrollDelegate.resize();
        };

        vm.rec = function () {
            vm.submited = true;
            if (vm.agree && $scope.rec.rFm.$valid) {
                var data = angular.extend({}, vm.mod, wxUser.getUser());
                position.rec({}, data, function (res) {
                    console.log(vm.mod.position_id);
                    wxStat.ref('#/position/'+vm.mod.position_id);

                    tip.show('推荐成功！');
                    $state.go('position.detail', {id: vm.mod.position_id}, {location: 'replace'})
                })
            }
        }
    }
    ]);

});

