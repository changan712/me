'use strict';

define([
    'app',
    'service/resume',
    'service/resumeSev',
    'service/values',
    'service/tip',
    'service/wx',
    'service/wxStat',
    'filter/filter'

], function (md) {
    md.controller('resumeNewCtrl', ['$rootScope', '$scope', '$ionicActionSheet', '$state', 'resumeSev', 'wxUser', 'tip', 'wxStat',
        function ($rootScope, $scope, $ionicActionSheet, $state, resumeSev, wxUser, tip, wxStat) {

        var vm = $scope.vm = {};
        vm.modInfo = {
            gender: 'MALE',
            cv_name: '我的简历'
        };

        vm.infoSubmit = function (form, modal) {
            if (form.$valid) {
                var data = angular.extend({}, vm.modInfo, wxUser.getUser());
                var info = {info: data};
                resumeSev.add(info).then(function (res) {
                    wxStat.create();

                    tip.show('新建完成，您可以继续完善你的简历！');
                    form.$submitted = false;
                    $state.go('resume.edit', {id: res.id})
                });
            }
        };

    }]);
});


