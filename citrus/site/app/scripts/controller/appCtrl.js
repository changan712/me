'use strict';

define([
    'app',
    'filter/filter',
    'directive/com',
    'service/wx',
    'service/constant',
    'service/alert',
    'service/tip',
    'service/redPacket',
    'service/utils'
], function (md) {
    md.controller('appCtrl', ['$rootScope', '$scope', '$http', '$ionicSideMenuDelegate', 'APIHOST', 'utils', 'alertService', 'tip', 'redPacket', function ($rootScope, $scope, $http, $ionicSideMenuDelegate, APIHOST, utils, alertService, tip, redPacket) {

        var vm = $scope.vm = {};
        vm.domReady = false;
        $rootScope.position_properties = global_company['position_properties'];

        $rootScope.corp = global_company;
        //corp.get({}, function (res) {
        //    $rootScope.corp = res;
        //});

        var state = utils.getUrlParam('state');
        if (state && state.search('_d')) {
            utils.setDebug(1);
        }

        var debug = utils.isDebug();
        if (debug) {
            alert('1.1:' + location.href)
        }

        if (utils.isDomain()) {
            $http.get(APIHOST + '/app/wx/info?url=' + encodeURIComponent(location.href)).then(function (res) {
                var conf_data = res.data;
                wx.config({
                    debug: debug,
                    appId: conf_data['appid'],
                    timestamp: conf_data['timestamp'],
                    nonceStr: conf_data['noncestr'],
                    signature: conf_data['signature'],
                    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
                });
                wx.error(function (res) {
                    debug ? alert(res) : console.log(res);
                });
                wx.ready(function () {
                    $rootScope.wxReady = true;
                })
            });
        }

        if(global_company && global_company.custom && global_company.custom.redpack && global_company.custom.redpack.enable){
            redPacket.getCount().$promise.then(function (res) {
                $rootScope.prize = res.total_money;
            });
        }

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

