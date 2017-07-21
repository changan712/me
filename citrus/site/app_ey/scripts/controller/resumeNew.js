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

        //210212198201207836

        vm.idCardReg = /^((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-5])|71|(8[12])|91)\d{4}((19\d{2}(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(19\d{2}(0[13578]|1[02])31)|(19\d{2}02(0[1-9]|1\d|2[0-8]))|(19([13579][26]|[2468][048]|0[48])0229))\d{3}(\d|X|x)?$/;

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


