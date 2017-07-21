'use strict';

define([
    'app',
    'service/resource/carousel',
    'service/resource/notice'
], function (md) {
    //首页
    md.controller('indexCtrl', ['$scope', '$ionicSlideBoxDelegate', 'carousel',  function ($scope, $ionicSlideBoxDelegate, carousel) {
        var vm = $scope.vm = {};
        //vm.notices = notice.query({top: 1});

        carousel.query(function (res) {
            vm.banners = res;
            vm.banners[0].active = true;
        });

        vm.slideBoxChange = function (index) {
            if (index > vm.banners.length - 1) {
                index = index - vm.banners.length
            }
            _.each(vm.banners, function (banner) {
                banner.active = false;
            });
            vm.banners[index].active = true;
        };

        $scope.data = {};

        $scope.$on('$ionicView.enter', function () {
            $ionicSlideBoxDelegate.start();
        })

    }]);

});

