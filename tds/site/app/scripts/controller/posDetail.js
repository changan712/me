'use strict';

define([
    'app',
    'service/position',
    'service/position',
    'service/resume',
    'service/wxStat',
    'service/wx'
], function (md) {
    //职位详细页
    md.controller('positionDetailCtrl', ['$rootScope', '$scope', '$state', '$sce', '$ionicModal', 'position', 'wxUser', 'wxStat', '$compile',
        function ($rootScope, $scope, $state, $sce, $ionicModal, position, wxUser, wxStat, $compile) {

        var vm = $scope.vm = {};
        vm.hasApplied = $state.params.hasApplied || false;

        var corp = $rootScope.corp;
        vm.corp = corp;

        //获取职位详情；
        position.get({id: $state.params.id}, function (res) {
            vm.pos = res;
            vm.html = $sce.trustAsHtml(vm.pos.jd);

            wxStat.view(function(){
                var shareConfig = {
                    title: corp.name + '招聘',
                    desc: vm.pos.name,
                    imgUrl:location.origin+ $rootScope.corp.logo_2,
                    link: location.href
                };
                if(corp['share_detail_des']){
                    shareConfig['desc'] = res['share_desc'];
                }

                if ($rootScope.wxReady) {
                    wxUser.setShare(shareConfig);
                } else {
                    wx.ready(function(){
                        $rootScope.wxReady = true;
                        wxUser.setShare(shareConfig);
                    });
                }
            });
        });

        position.hasApplied({
            id: $state.params.id,
            weixin_unionid: wxUser.getUser().weixin_unionid
        }, function (resHasApplied) {
            vm.hasApplied = resHasApplied.applied;
        });

        vm.apply = function () {
            $rootScope.pos = {
                position_id: vm.pos.id,
                position_name: vm.pos.name
            };

            $state.go('resume.index');
        };


    }]);

});

