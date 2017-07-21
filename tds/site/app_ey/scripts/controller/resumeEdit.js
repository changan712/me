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
    md.controller('resumeEditCtrl', ['$rootScope', '$scope', '$ionicActionSheet', '$ionicScrollDelegate', '$state', '$timeout', 'resumeSev', 'edu', 'wxUser', 'tip', 'wxStat', 'user', function ($rootScope, $scope, $ionicActionSheet, $ionicScrollDelegate, $state, $timeout, resumeSev, edu, wxUser, tip, wxStat, user) {
        var vm = $scope.vm = {};
        var resume_id = $state.params.id;
        vm.mod = {};
        vm.modInfo = {
            gender: 'MALE',
            cv_name: '我的简历'
        };
        vm.modEdu = {
            degree: '本科',
            graduationTime:new Date()

        };

        vm.modFile = [];

        vm.type = $state.params.type || 'new';

        if (vm.type != 'new') {
            resumeSev.getInfo(resume_id).then(function (res) {
                //vm.mod = res;
                vm.modInfo = res.info;
                vm.modEdu = res.edu[0];
                vm.modEdu.graduationTime = new Date(vm.modEdu.graduationTime);
                vm.modFile = res.file;
            });
        } else {

            if (user.resume && user.resume.id) {
                $state.go('position.list', {property: 2}, {location: 'replace'});
                return false;
            }
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

        function datePickerCallbackPopup(val) {
            if (vm.loc && val) {
                vm.loc[vm.locSide] = val;
            }
        }

        vm.setLoc = function (loc, side) {
            var config = {
                edu: vm.modEdu,
                exp: vm.modExp
            };
            vm.loc = config[loc];
            vm.locSide = side;
        };

        vm.cancel = function(){
            $state.go('resume.index', {}, {location: 'replace'})
        };

        vm.submit = function (form) {
            if (vm.type == 'new' && form.$valid) {

                var data = angular.extend({}, vm.modInfo, wxUser.getUser());
                var info = {info: data};
                resumeSev.add(info).then(function (res) {
                    wxStat.create();
                    resume_id = res.id;
                    return res;
                    // form.$submitted = false;
                    //$state.go('resume.edit', {id: res.id})
                }).then(function (res) {
                    updateResume(resume_id);


                    return res;
                })

            } else if (form.$valid) {
                updateResume(resume_id, true);
            }
        };

        //提交文件：
        function fileSubmit(id) {
            if (vm.modFile.length) {
                resumeSev.edit(id, vm.modFile);
            }
        }


        //更新resume：
        function updateResume(id, hasInfo) {
            var data = {};
            data.edu = {
                data: vm.modEdu,
                index: 0
            };

            if (vm.modFile.length) {
                data.files = vm.modFile;
            } else {
                data.files = [];
            }
            if (hasInfo) {
                data.info = vm.modInfo;
            }
            if (user.meeting) {
                data.talk = user.meeting;
            }
            resumeSev.edit(id, data).then(function (res) {
                if (resume_id && $state.current.name == 'resume.edit' && hasInfo) {
                    user.resume.info = vm.modInfo;
                }
                tip.show('<i class="ion-checkmark-round" ></i>  提交成功！');
                $state.go('resume.index', {}, {location: 'replace'})
            })
        }


        vm.fileDelete = function (index) {
            var hideConfirm = showConfirm('确认删除此附件？', function () {
                vm.modFile.splice(index, 1);

                hideConfirm();
            });

        };

        //file

        vm.readerSuccess = function (fileData) {
            if (vm.modFile.length < 4) {
                    vm.modFile.push(fileData);
                console.log($ionicScrollDelegate);
                    $ionicScrollDelegate.resize();
            } else {
                tip.show('最多上传4个附件！')
            }
        };


        vm.readerError = function (msg) {
            tip.show(msg);
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

        vm.idCardReg = /^((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-5])|71|(8[12])|91)\d{4}((19\d{2}(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(19\d{2}(0[13578]|1[02])31)|(19\d{2}02(0[1-9]|1\d|2[0-8]))|(19([13579][26]|[2468][048]|0[48])0229))\d{3}(\d|X|x)?$/;

    }]);
});


