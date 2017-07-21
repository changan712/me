'use strict';

define([
    'app',
    'service/resume',
    'service/position',
    'service/tip',
    'service/wxStat',
    'service/wx'
], function (md) {

    md.controller('resumeIndexCtrl', ['$rootScope', '$scope', '$http', '$location', '$state', '$ionicActionSheet', '$ionicListDelegate', 'resume', 'position', 'wxUser', 'tip', 'wxStat', 'user', 'utils',
        function ($rootScope, $scope, $http, $location, $state, $ionicActionSheet, $ionicListDelegate, resume, position, wxUser, tip, wxStat, user, utils) {
            var vm = $scope.vm = {};
            vm.posDetai = {};
            vm.pos = $rootScope.pos || {};


            vm.importData = {
                site: 0
            };

            //获取resume list
            getResumeList();

            vm.editAll = function (value) {
                vm.showOptions = value;
                $ionicListDelegate.closeOptionButtons();
                //vm.resumeListSelected(null)
            };

            //删除简历
            vm.deleteResume = function (id) {

                $ionicListDelegate.closeOptionButtons();

                if (!user.hasApplied) {
                    var hideConfirm = showConfirm('您确定要删除该简历么?', function () {

                        resume.delete({id: id}, function (res) {
                            getResumeList();

                            hideConfirm();

                            delete user.resume;

                        }, function () {
                            vm.showOptions = false;
                        });
                    });
                } else {
                    tip.show('已投递职位，不能删除该简历！')
                }
                return false;
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

            //编辑跳转；
            vm.editResume = function (id) {
                $state.go('resume.edit', {id: id});
                return false;
            };


            //申请
            vm.apply = function () {
                var activeId, breaker = false;

                //如果没有关联职位；
                if (!user.positionSelected) {
                    tips.show('没有选择要申请的职位！');
                    return;
                }

                if (vm.resumeList.length) {
                    activeId = vm.resumeList[0].id;
                } else {
                    return;
                }

                var data = angular.extend({
                    position_id: user.positionSelected.id,
                    position_name: user.positionSelected.name,
                    meeting: user.meeting

                }, {resume_id: activeId});

                position.apply({}, data, function (resApply) {
                    wxStat.apply('#/position/' + user.positionSelected.id);
                    //tip.show('申请成功！');
                    user.hasApplied = true;
                    user.resume = {
                        id: vm.resumeList[0].id,
                        apply_at: (new Date()).getTime(),
                        info: vm.resumeList[0].info
                    };
                    resume.wxStore({},user);

                    $state.go('questionnaire', {id: user.positionSelected.id}, {location: 'replace'});
                });

            };

            vm.offLeaveEvent = $rootScope.$on('$ionicView.beforeLeave', function () {
                vm.confirmPopup && vm.confirmPopup.close();

            });

            $scope.$on('$destroy', function () {
                vm.offLeaveEvent && vm.offLeaveEvent();
            });

            function getResumeList() {
                resume.get(wxUser.getUser(), function (res) {
                    //确保只有一条resume...
                    vm.resumeList = res.items.splice(0, 1);

                });
            }
        }
    ])
    ;

});

