'use strict';

define([
    'app',
    'fileUpload',
    'service/resume',
    'service/tip',
    'service/wx',
    'service/values',
    'service/corp'

], function (md) {

    md.controller('resumeUploadCtrl', ['$rootScope', '$scope', '$location', '$state', '$ionicLoading', 'resume', 'tip', 'edu', 'wxUser', 'corp', function ($rootScope, $scope, $location, $state, $ionicLoading, resume, tip, edu, wxUser, corp) {

        var vm = $scope.vm = {};
        vm.fileEmpty = true;
        vm.view = {};
        vm.view.edu = edu;
        vm.agree = true;

        vm.mod = {
            gender: 1,
            degree: '本科',
            file: {}
        };

        vm.readerError = function (msg) {
            tip.show(msg);
        };

        $scope.$watch('vm.mod.file.data', function (n) {
            vm.fileEmpty = !n
        });

        corp.get(function(res){
            $scope.corp = res.data;
        });

        vm.submit = function () {
            vm.submited = true;

            if (vm.agree && vm.mod.file.data) {
                vm.fileEmpty = false;
                if ($scope.upload.form.$valid) {
                    // $ionicLoading.show();
                    var data = angular.extend({}, vm.mod, wxUser.getUser());
                    resume.upload({}, data, function (res) {
                        //   $ionicLoading.hide();
                        tip.show('上传成功！');
                        $state.go('resume.index', {}, {location: 'replace'})
                    })
                }
            } else {
                vm.fileEmpty = true;
            }
        };


    }])

});

