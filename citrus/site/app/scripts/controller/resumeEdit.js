'use strict';

define([
    'app',
    'service/resume',
    'service/resumeSev',
    'service/values',
    'service/tip',
    'service/wx',
    'filter/filter'

], function (md) {
    md.controller('resumeEditCtrl', ['$rootScope', '$scope', '$ionicModal', '$ionicActionSheet', '$state', 'resumeSev', 'edu', 'wxUser', 'tip','$ionicScrollDelegate',
        function ($rootScope, $scope, $ionicModal, $ionicActionSheet, $state, resumeSev, edu, wxUser, tip, $ionicScrollDelegate) {
        var vm = $scope.vm = {};
        var resume_id = $state.params.id;

        vm.type = $state.params.type || 'new';
        vm.modals = resumeSev.createModal($scope);
        vm.view = {
            edu: edu
        };
        vm.mod = {};
        vm.modInfo = {
            gender: 'MALE',
            cv_name: '自建简历'
        };
        vm.modEdu = {
            degree: '本科'
        };
        vm.modExp = {};
        vm.modFile = {};
        vm.mod.new_file = [];

        resumeSev.getInfo(resume_id).then(function (res) {
            vm.mod = res;
        });


        /*info*/
        vm.infoEdit = function () {
            if (vm.mod.info) {
                vm.modInfo = vm.mod.info;
            }
            vm.modals.info.show();
        };

        vm.infoSubmit = function (form, modal) {
            if (form.$valid) {
                var data = angular.extend({}, vm.modInfo, wxUser.getUser());
                var info = {info: data};

                resumeSev.edit(resume_id, info).then(function (res) {
                    tip.show('<span class="ion-checkmark-round"> 编辑成功！</span>');
                    modal.hide();
                    form.$submitted = false;
                    resetCMod();
                    $state.go('resume.edit', {id: res.id})
                });
            }
        };
        //edu
        vm.eduEdit = function (index) {
            if (index >= 0 && vm.mod.edu[index]) {
                vm.mod.edu[index].startTime = new Date(vm.mod.edu[index].startTime);
                vm.mod.edu[index].endTime = new Date(vm.mod.edu[index].endTime);

                vm.modEdu = vm.mod.edu[index];
                vm.modEdu.index = index
            }
            vm.modals.edu.show();
        };

        vm.eduDelete = function (index) {
            var hideConfirm = showConfirm('确定删除该教育经历', function () {
                resumeSev.edit(resume_id, {
                    edu: {
                        data: null,
                        index: index
                    }
                }).then(function (res) {
                    resumeSev.getInfo(resume_id).then(function (res) {
                        tip.show('<span class="ion-checkmark-round"></span> 删除成功！');
                        hideConfirm();
                        vm.mod = res;
                    });
                });
            })
        };


        vm.eduSubmit = function (form, modal) {
            if (form.$valid) {
                var eduData = {
                    edu: {
                        data: vm.modEdu,
                        index: vm.modEdu.index >= 0 ? vm.modEdu.index : ( vm.modEdu.index || (vm.mod.edu && vm.mod.edu.length) || 0)
                    }
                };

                resumeSev.edit(resume_id, eduData).then(function (res) {
                    tip.show('<span class="ion-checkmark-round"> 编辑成功！</span>');
                    modal.hide();
                    form.$submitted = false;
                    resetCMod();
                    resumeSev.getInfo(resume_id).then(function (res) {
                        vm.mod = res;
                    });
                })
            }
        };

        //exp
        vm.expEdit = function (index) {
            if (index >= 0 && vm.mod.exp[index]) {
                vm.mod.exp[index].startTime = new Date(vm.mod.exp[index].startTime);
                vm.mod.exp[index].endTime = new Date(vm.mod.exp[index].endTime);

                vm.modExp = vm.mod.exp[index];
                vm.modExp.index = index
            }
            vm.modals.exp.show();
        };

        vm.expDelete = function (index) {
            var hideConfirm = showConfirm('确定删除该工作经历', function () {
                resumeSev.edit(resume_id, {
                    exp: {
                        data: null,
                        index: index
                    }
                }).then(function (res) {
                    tip.show('<span class="ion-checkmark-round"></span> 删除成功！');
                    resumeSev.getInfo(resume_id).then(function (res) {
                        hideConfirm();
                        vm.mod = res;
                    });
                })

            })
        };

        vm.expSubmit = function (form, modal) {
            if (form.$valid) {
                var expData = {
                    exp: {
                        data: vm.modExp,
                        index: vm.modExp.index >= 0 ? vm.modExp.index : ( vm.modExp.index || (vm.mod.exp && vm.mod.exp.length) || 0)
                    }
                };

                resumeSev.edit(resume_id, expData).then(function (res) {
                    tip.show('<span class="ion-checkmark-round"> 编辑成功！</span>');
                    modal.hide();
                    form.$submitted = false;
                    resetCMod();
                    resumeSev.getInfo(resume_id).then(function (res) {
                        vm.mod = res;
                    });
                })
            }
        };

        vm.fileDelete = function (index) {
            vm.mod.file.splice(index, 1);
            $ionicScrollDelegate.resize();

                // resumeSev.edit(resume_id, {
                //     file: {
                //         data: null,
                //         index: index
                //     }
                // }).then(function (res) {
                //     tip.show('<span class="ion-checkmark-round"></span> 删除成功！');
                //     resumeSev.getInfo(resume_id).then(function (res) {
                //         hideConfirm();
                //         vm.mod = res;
                //     });
                // });
        };

        vm.fileSubmit = function () {

            resumeSev.edit(resume_id, {file:vm.mod.file}).then(function (res) {
                tip.show('<span class="ion-checkmark-round"> 添加成功！</span>');

                resumeSev.getInfo(resume_id).then(function (res) {
                    vm.mod = res;
                    $state.go('resume.index')
                });
            })
        };

        /*vm.fileSubmit = function (form, modal) {
            if (vm.modFile.data) {
                var fileData = {
                    file: {
                        data: vm.modFile.data,
                        type: vm.modFile.type,
                        index: vm.modFile.index >= 0 ? vm.modFile.index : ( vm.modFile.index || (vm.mod.file && vm.mod.file.length) || 0)
                    }
                };

                resumeSev.edit(resume_id, fileData).then(function (res) {
                    tip.show('<span class="ion-checkmark-round"> 添加成功！</span>');

                    modal.hide();
                    // modal.remove();
                    form.$submitted = false;
                    resetCMod();
                    resumeSev.getInfo(resume_id).then(function (res) {
                        vm.mod = res;
                    });
                })
            }
        };*/

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

        vm.offLeaveEvent = $rootScope.$on('$ionicView.beforeLeave', function () {
            angular.forEach(vm.modals, function (v, k) {
                vm.modals[k].remove();
            })
        });


        $scope.$on('modal.hidden', function () {
            resetCMod();
            if (document.querySelector('#file')) {
                document.querySelector('#file').value = '';
            }

        });


        $scope.$on('$destroy', function () {
            vm.offLeaveEvent && vm.offLeaveEvent();
        });


        function resetCMod() {
            vm.modInfo = {
                gender: 'MALE',
                cv_name: '自建简历'
            };
            vm.modEdu = {
                degree: '本科'
            };

            vm.modExp = {};
            vm.modFile = {};
        }

        //datepicker
        var monthList = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
        var weekDaysList = ["日", "一", "二", "三", "四", "五", "六"];
        vm.datepickerObjectPopup = {
            titleLabel: '请选择日期', //Optional
            todayLabel: '今天', //Optional
            closeLabel: '关闭', //Optional
            setLabel: '确定', //Optional
            monthList: monthList,
            weekDaysList: weekDaysList,
            setButtonType: 'button-theme', //Optional
            modalHeaderColor: 'bar-theme', //Optional
            modalFooterColor: 'bar-theme', //Optional
            templateType: 'popup', //Optional
            callback: function (val) { //Optional
                datePickerCallbackPopup(val);
            }
        };


        vm.setLoc = function (loc, side) {
            var config = {
                edu: vm.modEdu,
                exp: vm.modExp
            };

            vm.loc = config[loc];
            vm.locSide = side;
        };

        function datePickerCallbackPopup(val) {
            if (vm.loc && val) {
                vm.loc[vm.locSide] = val;
            }
        }

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

    }]);
});


