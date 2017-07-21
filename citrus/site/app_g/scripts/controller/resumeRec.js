'use strict';

define([
    'app',
    'service/resume',
    'service/wx',
    'service/tip',
    'service/corp'

], function (md) {
    //职位列表
    md.controller('resumeRecCtrl', ['$rootScope', '$scope', '$http', '$location', '$state', 'resume', 'wxUser', 'tip', 'corp', function ($rootScope, $scope, $http, $location, $state, resume, wxUser, tip, corp) {

        var vm = $scope.vm = {};
        vm.submited = false;
        vm.agree = true;
        vm.mod = {
            position_id: $location.search().position_id,
            file: {}
        };
        vm.readerError = function (msg) {
            tip.show(msg);
        };


        corp.get(function(res){
            $scope.corp = res.data;
        });

        vm.rec = function () {
            vm.submited = true;
            if (vm.agree && $scope.rec.rFm.$valid) {
                var data = angular.extend({}, vm.mod, wxUser.getUser());
                resume.ref({}, data, function (res) {
                    tip.show('推荐成功！');
                    $state.go('position.detail', {id: vm.mod.position_id}, {location: 'replace'})
                })
            }
        }


    }
    ]);

});

