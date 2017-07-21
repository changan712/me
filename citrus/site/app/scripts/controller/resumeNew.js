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
    md.controller('resumeNewCtrl', ['$rootScope', '$scope', '$ionicActionSheet','$ionicModal' ,'$state', 'resumeSev', 'wxUser', 'tip', 'wxStat','$ionicScrollDelegate',
        function ($rootScope, $scope, $ionicActionSheet, $ionicModal,$state, resumeSev, wxUser, tip, wxStat, $ionicScrollDelegate) {

        var vm = $scope.vm = {};
        vm.mod = {};
        vm.mod.file = [];
        vm.modFile = {};
        vm.modInfo = {
            gender: 'MALE',
            cv_name: '自建简历'
        };

        vm.infoSubmit = function (form) {
            if (form.$valid) {
                var data = angular.extend({}, vm.modInfo,wxUser.getUser());
                data.file = vm.mod.file;
                var info = {info: data};
                resumeSev.add(info).then(function (res) {
                    wxStat.create();

                    tip.show('新建完成，您可以继续完善你的简历！');
                    form.$submitted = false;
                    $state.go('resume.index', {id: res.id})
                });
            }
        };

        vm.readerError = function (msg) {
            tip.show(msg);
        };

        vm.readerSuccess = function (fileData) {
            if (vm.mod.file.length >= 4){
                tip.show('最多4个，我们将依序选择您前四个文件');
                return;
            }
            vm.mod.file.push(fileData);
            $ionicScrollDelegate.resize();
        };

        vm.fileDelete = function (index) {
            var hideConfirm = showConfirm('确定删除此附件', function () {
                vm.mod.file = _.reject(vm.mod.file,function (num) {
                    return num.index == index;
                });

                tip.show('<span class="ion-checkmark-round"></span> 删除成功！');
                hideConfirm();
            })
        };


        function showConfirm(title, delCb, cancelCb) {
            return $ionicActionSheet.show({
                destructiveText: '删除',
                cancelText: '取消',
                titleText: title,
                cancelOnStateChange: true,
                cancel: function () {
                    cancelCb && cancelCb();
                },
                destructiveButtonClicked: function () {
                    delCb && delCb();
                }

            });

        }

/*        $ionicModal.fromTemplateUrl('file.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            vm.modelFile = modal;
        });
        vm.fileSubmit = function (form, modal) {
            if (vm.modFile.data) {
                vm.modFile.fileData = {
                    file: {
                        data: vm.modFile.data,
                        type: vm.modFile.type,
                        index: vm.modFile.index >= 0 ? vm.modFile.index : ( vm.modFile.index || (vm.mod.file && vm.mod.file.length) || 0)
                    }
                };

                if (vm.modFile.fileData.file) {
                    vm.mod.file.push(vm.modFile.fileData.file);
                }
                tip.show('<span class="ion-checkmark-round"> 添加成功！</span>');

                modal.hide();
                form.$submitted = false;
                resetCMod();
            }
        };

        function resetCMod() {
            vm.modFile = {};
        }*/

    }]);
});


