'use strict';

define([
    'app',
    'service/resume',
    'service/values',
    'service/tip',
    'service/wx'

], function (md) {

    md.controller('resumeNewCtrl', ['$rootScope', '$scope', '$ionicScrollDelegate', '$location', '$state', 'resume', 'edu', 'wxUser', 'tip', function ($rootScope, $scope, $ionicScrollDelegate, $location, $state, resume, edu, wxUser, tip) {
        var vm = $scope.vm = {};
        var type = $state.params.type;
        var resume_id = $state.params.id;
        var uid = 0;
        vm.agree = true;

        vm.submited = false;
        vm.view = {};
        vm.view.edu = edu;
        vm.eduViewArr = [getUid()];
        vm.expViewArr = [getUid()];

        //添加教育背景/工作经验 表单；
        vm.addGroup = function (arr) {
            arr.push(getUid());
            $ionicScrollDelegate.$getByHandle('posContent').resize();
        };

        //删除教育背景经验表单
        vm.removeEduGroup = function (n) {
            var index = vm.eduViewArr.indexOf(n);
            vm.eduViewArr.splice(index, 1);
            vm.mod.edu.splice(index, 1);
            $ionicScrollDelegate.$getByHandle('posContent').resize();
        };

        //删除工作经验表单
        vm.removeExpGroup = function (n) {
            var index = vm.expViewArr.indexOf(n);
            vm.expViewArr.splice(index, 1);
            vm.mod.exp.splice(index, 1);
            $ionicScrollDelegate.$getByHandle('posContent').resize();
        };

        vm.mod = {
            gender: 1,
            edu: [],
            exp: []
        };

        corp.get(function (res) {
            $scope.corp = res.data;
        });
        var monthList = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
        var weekDaysList = ["日", "一", "二", "三", "四", "五", "六"];
        vm.datepickerObjectPopup = {
            titleLabel: '请选择日期', //Optional
            todayLabel: '今天', //Optional
            closeLabel: '关闭', //Optional
            setLabel: '确定', //Optional
            monthList:monthList,
            weekDaysList:weekDaysList,
            setButtonType: 'button-assertive', //Optional
            modalHeaderColor: 'bar-positive', //Optional
            modalFooterColor: 'bar-positive', //Optional
            templateType: 'popup', //Optional
            callback: function (val) { //Optional
                datePickerCallbackPopup(val);
            }
        };


        vm.setLoc = function (loc, index, side) {
            vm.loc = loc;
            vm.locIndex = index;
            vm.locSide = side;
        };

        function datePickerCallbackPopup(val) {
            if (vm.loc && vm.locIndex >= 0 && val) {
                if (!vm.mod[vm.loc][vm.locIndex]) {
                    vm.mod[vm.loc][vm.locIndex] = {};
                }
                vm.mod[vm.loc][vm.locIndex][vm.locSide] = val;
            }
        }

        var timeStr = function (d) {
            return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
        }

        var strTime = function (t) {
            var d = new Date(Date.parse(t));
            return d
        }

        if (type == 'edit') {
            var search = angular.extend({}, {id: resume_id}, wxUser.getUser());
            resume.get(search, function (res) {
                var data = res.data;
                var indexEdu = 0, indexExp = 0;
                angular.forEach(data.edu, function (item, key, arr) {
                    console.log(item.startTime);
                    item.startTime = new Date(item.startTime);
                    item.endTime = new Date(item.endTime);
                    item['startTimeStr'] = timeStr(item.startTime)
                    item['endTimeStr'] = timeStr(item.endTime)
                    if (indexEdu > 0) {
                        vm.addGroup(vm.eduViewArr);
                    }
                    indexEdu++
                });

                angular.forEach(data.exp, function (item) {
                    item.startTime = new Date(item.startTime);
                    item.endTime = new Date(item.endTime);
                    item['startTimeStr'] = timeStr(item.startTime)
                    item['endTimeStr'] = timeStr(item.endTime)
                    if (indexExp > 0) {
                        vm.addGroup(vm.expViewArr);
                    }
                    indexExp++;
                });

                if (res.data.file) {
                    vm.fileType = res.data.file.split('.').pop().toLowerCase();
                    vm.fileName = res.data.file.split('/').pop().split('_').shift().toLowerCase()
                }

                vm.mod = res.data
            })
        }

        //删除简历

        vm.deleteResume = function (id) {

            resume.delete({id: id}, function (res) {
                getResumeList();
            });
        };

        vm.submit = function () {
            vm.submited = true;
            if (vm.agree && $scope.resumeNew.form.$valid) {
                var data = angular.extend({}, vm.mod, wxUser.getUser());
             /*   if (!$rootScope.isIOS) {
                    angular.forEach(data.exp, function (item) {
                        item.startTime = strTime(item.startTimeStr)
                        item.endTime = strTime(item.endTimeStr)
                    })
                    angular.forEach(data.edu, function (item) {
                        item.startTime = strTime(item.startTimeStr)
                        item.endTime = strTime(item.endTimeStr)
                    })
                }*/
                if (type == 'edit') {
                    resume.save({id: resume_id}, data, function (res) {
                        tip.show('<i class="icon big ion-checkmark-round"></i> 修改成功！');
                        $state.go('resume.index');
                    })
                } else {
                    resume.save({}, data, function (res) {
                        tip.show('<i class="icon big ion-checkmark-round"></i> 创建成功！');
                        $state.go('resume.index');
                    })
                }
            } else {
                // tip.show('填写内容有误！');
            }

        };

        function getUid() {
            return uid++;
        }

        function supportDate() {
            var i = document.createElement("input");
            i.setAttribute("type", "color");
            /*  $timeout(function () {
             i =null;
             }, 0);*/
            return i.type !== "text";
        }


    }])

});

