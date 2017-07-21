'use strict';

define([
    'app',
    'service/resume',
    'service/alert',
    'service/utils',
    'service/dialog',
    'service/talentLevel',
    'service/talentFunc',
    'service/talent',
    'directive/email'

], function (md) {
    md.controller('resumeDetailCtrl', ['$rootScope', '$scope', '$sce', '$location', '$http','$modal', '$state', 'resume', 'utils','dialog','talent', function ($rootScope, $scope, $sce, $location, $http, $modal, $state, resume, utils, dialog, talent) {

        $rootScope.page = '';
        var vm = $scope.vm = {};
        var acceptType = ['pdf', 'jpg', 'jpeg', 'png', 'gif', 'html'];

        vm.resume_id = $state.params.id;

        //可预览附件；
        vm.files = [];

        vm.getDlUrl = function () {
            return utils.getHost() + utils.getCorporation() + '/admin/resumes/download?id=' + vm.resume_id;
        };

        vm.getTrustedUrl = function (url) {
            return $sce.trustAsUrl(url.toString());
        };

        getDetail();
        getTalentDetail();

        function getDetail() {
            resume.get({id: vm.resume_id}, function (res) {

                vm.resume = res;

                angular.forEach(vm.resume.file, function (v, k) {

                    var type = v.split('.').pop().toLowerCase();
                    var isImg = false, isAcceptType = true;
                    if (acceptType.indexOf(type) < 0) {
                        v = '';
                        isAcceptType = false;
                    } else {
                        v = utils.getHost() + utils.getCorporation() + '/admin/resumes/preview?id=' + vm.resume_id + '&index=' + k;
                        if (['jpg', 'jpeg', 'png', 'gif'].indexOf(type) >= 0) {
                            isImg = true;
                        }
                        vm.files.push({
                            index: k,
                            type: type,
                            url: v,
                            isAcceptType: isAcceptType,
                            isImg: isImg
                        });
                    }

                });
            });
        }

        function getTalentDetail() {
            talent.get({resume_id: vm.resume_id}, function (res) {
                vm.talent = res;
                vm.talentInfo = formatTalentInfo(vm.talent);
            })
        }

        vm.deleteTalent = function () {
            dialog.confirm('确定移出人才库吗？').success(function () {
                talent.delete({id:vm.talent.id},function (res) {
                    delete vm.talent;
                    delete vm.talentInfo;
                })
            })
        }


        //格式化能力层次内容输出
        function formatTalentInfo(data) {
            if (!data) return null;
            var newData = {};

            var map = {
                level:'能力层次',
                func:'职能类型',
                remark:'备注'
            };

            _.forEach(data, function (value, key) {
                if (!_.isUndefined(map[key])){
                    newData[key] = value;
                    // var obj = {};
                    // obj[map[key]] = value;
                    // newData.push(obj) ;
                }
            });

            // newData.reverse();
            return newData;
        }

        vm.talentsPopup = function () {
            $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'views/com/talents-label.html',
                resolve: {
                    name:function () {
                        return vm.resume.name;
                    },
                    resume_id:function () {
                        return vm.resume_id;
                    },
                    talenter: function () {
                        return vm.talent;
                    }
                },
                controller:['$scope','$modalInstance','talentLevel','talentFunc','resume_id','talenter','name',function ($scope, $modalInstance, talentLevel, talentFunc, resume_id, talenter, name) {
                    var vm = $scope.vm = {};
                    vm.talenter = {};
                    vm.name = name;

                    if (talenter != undefined) {
                        vm.talenter = talenter;
                        vm.typeNew = false;
                    }else {
                        vm.talenter.level_id = 3;
                        vm.typeNew = true;
                    }

                    getLevel(function (res) {
                        vm.level = res.items;
                    });

                    getFuncList(function (res) {
                        vm.func = res.items;
                    })

                    vm.submitForm = function (form) {
                        if(form.$valid){
                            var data = {};
                            data.func_id = vm.talenter.func_id;
                            data.level_id = vm.talenter.level_id;
                            data.remark = vm.talenter.remark;

                            if (vm.typeNew == false) {
                                talent.update({id:talenter.id}, data, function (res) {
                                    getTalentDetail();
                                    dialog.alert('更新成功！').success(function () {
                                        $modalInstance.close();
                                    })
                                }, function () {
                                        dialog.alert('更新失败，请稍后重试');
                                    }
                                )
                            }else {
                                data.resume_id = resume_id;
                                talent.save({}, data, function (res) {
                                    getTalentDetail();
                                    dialog.alert('添加成功！').success(function () {
                                        $modalInstance.close();
                                    })
                                }, function () {
                                    dialog.alert('失败，请稍后重试');
                                })
                            }
                        }
                    }

                    vm.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    }

                    function getFuncList(callback) {
                        talentFunc.get(function (res) {
                            callback(res);
                        })
                    }

                    function getLevel(callback) {
                        talentLevel.get(function (res) {
                            callback(res);
                        });
                    }


                }]
            });
        }

    }
    ]);

});

