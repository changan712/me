'use strict';

define([
    'app',
    'service/resume',
    'service/tip',
    'service/wx'
], function (md) {

    md.controller('resumeIndexCtrl', ['$rootScope', '$scope', '$location', '$state', '$ionicPopup', '$ionicListDelegate', 'resume', 'wxUser', 'tip', function ($rootScope, $scope, $location, $state, $ionicPopup, $ionicListDelegate, resume, wxUser, tip) {
        var vm = $scope.vm = {};
        vm.posDetai = {};
        vm.pos = $rootScope.pos || {};
        vm.ref = {};
        vm.hasRef = false;
        vm.applied = false;
        vm.importData = {
            site: 0
        };
        vm.showOptions = false;
        //获取resume list
        getResumeList();

        vm.editAll = function (value) {
            vm.showOptions = value;
            $ionicListDelegate.closeOptionButtons();
            vm.resumeListSelected(null)
        };

        //删除简历
        vm.deleteResume = function (id) {
            var confirmPopup = vm.confirmPopup = $ionicPopup.confirm({
                title: '确认删除',
                template: '您确定要删除该简历么?'
            });

            confirmPopup.then(function (res) {
                if (res) {
                    resume.delete({id: id}, function (res) {
                        getResumeList();
                        vm.showOptions = false;
                    });

                } else {

                }
            });
            return false;
        };

        //编辑跳转；
        vm.editResume = function (id) {
            $state.go('resume.edit', {id: id});
            return false;
        };

        //选中某个简历
        vm.resumeListSelected = function (id) {
            if (vm.pos.position_id) {
                $ionicListDelegate.closeOptionButtons();
                angular.forEach(vm.resumeList, function (item) {
                    if (item.id == id) {
                        item.active = true;
                    } else {
                        delete  item.active;
                    }
                })
            }else{
                //无法选中时 编辑跳转
                if (id)
                    vm.editResume(id)
            }
        };

        $scope.$watch('vm.hasRef', function (n) {
            vm.applied = false;
        });

        //申请
        vm.apply = function () {
            var activeId, breaker = false;
            vm.applied = true;

            angular.forEach(vm.resumeList, function (item) {
                if (!breaker) {
                    if (item.active == true) {
                        activeId = item.id;
                        breaker = true;
                    } else {
                        activeId = undefined;
                    }
                }
            });
            if (!activeId) {
                tip.show('请选择需要投递的简历！');
                return false;
            }


            if (vm.hasRef && $scope.resumeIndex.refForm.$invalid) {
                return;
            }

            var data = angular.extend({}, wxUser.getUser(), vm.pos, {resume_id: activeId}, vm.ref);

            resume.send({}, data, function (resApply) {
                tip.show('申请成功！');
                $state.go('position.detail', {id: vm.pos.position_id}, {location: 'replace'});
            });

        };

        $scope.$on('$destroy', function () {

        });

        function getResumeList() {
            resume.get(wxUser.getUser(), function (res) {
                vm.resumeList = res.data.list;
            });
        }
    }
    ])
    ;

});

