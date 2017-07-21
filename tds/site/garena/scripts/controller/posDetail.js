'use strict';

define([
    'app',
    'service/position'
], function (md) {
    //职位详细页
    md.controller('positionDetailCtrl', ['$rootScope', '$scope', '$state', '$ionicScrollDelegate', '$sce', '$timeout', '$ionicModal', 'position', function ($rootScope, $scope, $state, $ionicScrollDelegate, $sce, $timeout, $ionicModal, position) {


        var vm = $scope.vm = {};
        vm.pos ={};
        //获取职位详情；
        position.get({id: $state.params.id}, function (res) {
            vm.pos = res.data;
            vm.html = $sce.trustAsHtml(vm.pos.jd);
        });

        $rootScope.num = '任职之歌';

        $scope.$on('$ionicView.loaded', function () {
            vm.posDetailDelegate = $ionicScrollDelegate.$getByHandle('posDetail');


        });

        vm.onScroll = function () {
           var a = vm.posDetailDelegate.getScrollPosition();

        }


        vm.apply = function () {

            $rootScope.pos = {
                position_id: vm.pos.id,
                position_name: vm.pos.name
            };

            $state.go('resume.index');
        }


    }]);

});

