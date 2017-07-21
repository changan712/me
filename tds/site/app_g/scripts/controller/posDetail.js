'use strict';

define([
    'app',
    'service/position',
    'service/resume',
    'service/wx'

], function (md) {
    //职位详细页
    md.controller('positionDetailCtrl', ['$rootScope', '$scope', '$state', '$sce', '$ionicModal', 'position', 'resume', 'wxUser', function ($rootScope, $scope, $state, $sce, $ionicModal, position, resume, wxUser) {


        var vm = $scope.vm = {};

        var share_url = location.origin + location.pathname + location.hash;

        if ($rootScope.wxReady) {
            wxUser.setShare("职位详情-Garena2016年招聘", "", share_url, location.origin + '/app_g/images/garena_wx_logo.png');
        } else {
            wx.ready(function () {
                $rootScope.wxReady = true;
                wxUser.setShare("职位详情-Garena2016年招聘", "", share_url, location.origin + '/app_g/images/garena_wx_logo.png');
            });
        }


        //获职位详情；


        position.get({id: $state.params.id}, function (res) {
            resume.hasSend({
                position_id: $state.params.id,
                weixin_unionid: (wxUser.getUser())['weixin_unionid']
            }, function (resHasSend) {

                vm.hasSend = resHasSend.data;
                vm.pos = res.data;
                vm.html = $sce.trustAsHtml(vm.pos.jd);
            });
        });


        /*
         position.get({id: $state.params.id}, function (res) {
         resume.hasSend({
         position_id: $state.params.id,
         weixin_unionid: wxUser.getUser()['weixin_unionid']
         }, function (resHasSend) {
         vm.hasSend = resHasSend.data;
         vm.pos = res.data;
         vm.html = $sce.trustAsHtml(vm.pos.jd);
         });


         });
         */

        vm.apply = function () {
            $rootScope.pos = {
                position_id: vm.pos.id,
                position_name: vm.pos.name
            };

            $state.go('resume.index');
        }


    }]);

});

