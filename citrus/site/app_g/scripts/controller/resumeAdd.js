'use strict';

define([
    'app',
    'service/resume',
    'service/position',
    'service/tip',
    'service/wx',
    'service/corp'

], function (md) {

    md.controller('resumeAddCtrl', ['$rootScope', '$scope', '$ionicLoading', '$location', '$state', '$ionicModal', 'resume', 'position', 'wxUser', 'tip', 'corp', function ($rootScope, $scope, $ionicLoading, $location, $state, $ionicModal, resume, position, wxUser, tip, corp) {
        var vm = $scope.vm = {};
        vm.posDetai = {};
        vm.addSubmited = false;
        vm.importData = {
            site: 0
        };
        //获取resume list
        getResumeList();

        //导入
        $ionicModal.fromTemplateUrl('import.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            vm.modal = modal;
        });


        vm.modalImport = function (siteName, importSite) {
            vm.siteName = siteName || '';
            vm.importData.site = importSite || 0;
            vm.modal.show();
        };

        vm.hideImPortModal = function () {
            vm.addSubmited = false;
            vm.modal.hide();
        };

        vm.importSubmit = function () {
            vm.addSubmited = true;
            if ($scope.resumeAdd.form.$valid) {
                var data = angular.extend({}, vm.importData, wxUser.getUser());
                $ionicLoading.show();
                resume.import({}, data, function (res) {
                    $ionicLoading.hide();
                    tip.show('导入成功！');
                    vm.hideImPortModal();
                    $state.go('resume.index');
                }, function () {
                    $ionicLoading.hide();
                });
            }
        };

        corp.get(function(res){
            $scope.corp = res.data;
        });

        $scope.$on('$destroy', function () {
            vm.modal.remove();
        });

        function getResumeList() {

            resume.get(wxUser.getUser(), function (res) {
                vm.resumeList = res.data.list;
            });

        }
    }
    ]);

});

