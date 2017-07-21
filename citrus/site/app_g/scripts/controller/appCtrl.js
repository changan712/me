'use strict';

define(['app', 'filter/filter', 'directive/com', 'service/corp', 'service/wx', 'service/constant', 'service/alert', 'service/tip'], function (md) {

    md.controller('appCtrl', ['$rootScope', '$scope', '$http', '$ionicSideMenuDelegate', 'APIHOST', 'alertService', 'tip', 'wxUser', function ($rootScope, $scope, $http, $ionicSideMenuDelegate, APIHOST, alertService, tip, wxUser) {
        var vm = $scope.vm = {};
        vm.domReady = false;
        $http.get(APIHOST + 'wx/info?url=' + encodeURIComponent(location.href)).then(function (res) {
            var conf_data = res.data;

            wx.config({
                debug: false,
                appId: conf_data['appid'],
                timestamp: conf_data['timestamp'],
                nonceStr: conf_data['noncestr'],
                signature: conf_data['signature'],
                jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
            });

        });
        // $rootScope.loaded = true;

        var u = navigator.userAgent, app = navigator.appVersion;
        $rootScope.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
        $rootScope.isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        /*
         corp.get({value: getCorporation()}, function (res) {
         $rootScope.corp = res && res.data;
         });*/

        vm.alerts = alertService.get();

        vm.tip = tip.get();
        $scope.$on('tipChange', function () {
            vm.tip = tip.get();
        });
        vm.toggleMenu = function () {
            $ionicSideMenuDelegate.toggleLeft();
        }

    }]);

    md.controller('404Ctrl', ['$scope', function ($scope) {
       // alert(404)

    }]);


});

