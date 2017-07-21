'use strict';

define([
    'app',
    'service/position',
    'service/wx',
    'service/tip',
    'service/utils',
    'service/wxStat'

], function (md) {
    //职位列表
    md.controller('resumeRecCtrl', ['$rootScope', '$scope', '$http', '$location', '$ionicScrollDelegate', '$state','utils', 'position', 'wxUser', 'tip', 'wxStat',
        function ($rootScope, $scope, $http, $location, $ionicScrollDelegate, $state,utils, position, wxUser, tip, wxStat) {

        var vm = $scope.vm = {};
        vm.submited = false;
        vm.agree = true;
        vm.mod = {
            position_id: $location.search().position_id,
            file: [],
            gender:'MALE'
        };

        vm.deleteFile = function (index) {
            vm.mod.file.splice(index, 1);
            $ionicScrollDelegate.resize();
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

        if(global_user.name || global_user.empno) {
            vm.mod.ref_name = global_user.name;
            vm.mod.ref_empno = global_user.empno;
        }

        function verify(verifyData,callback,errorCallback){
            $http.post( '/' + utils.getCorporation() + '/app/company/verify',verifyData).success(function(res){

                callback(res)
            }).error(function(res){
                errorCallback&&errorCallback(res)
            })
        }

        vm.rec = function () {
            vm.submited = true;
            if (vm.agree && $scope.rec.rFm.$valid) {
                verify({'name':vm.mod.ref_name,
                'empno':vm.mod.ref_empno,
                'weixin_unionid':global_user.openid,
                'weixin_nickname':global_user.nickname},function(ret){
                    console.log((ret));
                    if(ret.verify == 'binded') {
                        tip.show(ret.message);
                        return;
                    }else if(ret.verify == 'self_bind') {
                        var data = angular.extend({}, vm.mod, wxUser.getUser());
                        position.rec({}, data, function (res) {
                            wxStat.ref('#/position/'+vm.mod.position_id);

                            tip.show('通过员工验证，内推成功！');
                            $state.go('position.detail', {id: vm.mod.position_id}, {location: 'replace'})
                        })
                    } else if(ret.verify == 'needless'){
                        var data = angular.extend({}, vm.mod, wxUser.getUser());
                        position.rec({}, data, function (res) {
                            wxStat.ref('#/position/'+vm.mod.position_id);

                            tip.show('推荐成功！');
                            $state.go('position.detail', {id: vm.mod.position_id}, {location: 'replace'})
                        })
                    }
                },function(res){
                    tip.show('员工验证失败,请核对您所输入的个人信息');
                })

            }
        }
    }
    ]);

});

