'use strict';
//less.watch();

require.config({

    paths: {
        ionic: '../../../bower_components/ionic/release/js/ionic.bundle',
        ngResource: '../../../bower_components/angular-resource/angular-resource.min',
        '_': '../../../bower_components/underscore/underscore-min',
        d3: '../../../bower_components/d3/d3.min'


        //'datePicker': '../../../bower_components/ionic-datepicker/dist/ionic-datepicker.bundle.min'

    },
    shim: {
        ionic: {
            exports: 'ionic'
        },
        ngResource: ['ionic']
    },
    waitSeconds: 0
});

require.config({
    urlArgs: 'v=' + global_version
});

require([
    'ionic',
    'app',
    'router',
    '_',
    'service/myInterceptor',
    'service/beforeRun',
    'service/dialog',
    'controller/appCtrl'
], function (ionic, app, router) {
    app.run(['$rootScope', '$state', '$http', '$timeout', '$location', 'dialog', 'beforeRun', 'utils', function ($rootScope, $state, $http, $timeout, $location, dialog, beforeRun, utils) {
        var tip = null, loadingTimer = null;
        $rootScope.debug = utils.isDebug();

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toStateParams, fromState, fromParams) {

            $http.get('/api/app/common/access-log?corp_id=aia&hash=' + encodeURIComponent($location.url()));
            $timeout(function () {
                if (!sessionStorage.getItem('reload') && toState.name == 'app.feed.new' && !isAndroid()) {
                    window.location.reload();
                    sessionStorage.setItem('reload', 1);
                }
            });
            $rootScope.from = toStateParams.from;
            $rootScope.fromParams = toStateParams.fromParams;

            if (toStateParams.clearCache) {
                $timeout(function () {
                    $ionicHistory.clearHistory();
                    $ionicHistory.clearCache();
                })
            }
            $rootScope.title = toState.title;
            tip && tip.hide();
            $timeout.cancel(loadingTimer);
            loadingTimer = null;
        });

        $rootScope.$on('$stateChangeStart', function () {
            loadingTimer = $timeout(function () {
                tip = dialog.tip('正在加载...', 0);
            }, 1000);
        });

        /*
         beforeRun.getMsgCount().then(function (res) {

         $rootScope.messageCount =res.count;
         });*/

        $rootScope.$on('$stateChangeStart', function (event, to, toParams, from, fromParams) {
            var aTabShow = beforeRun.getTabsConfig();
            $rootScope.hideTabs = aTabShow.indexOf(to.name) == -1;
        });

    }]);
    app.config(['$httpProvider', '$ionicConfigProvider', '$stateProvider', '$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', function ($httpProvider, $ionicConfigProvider, $stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {


        // $modelOptionsProvider.defaultOptions.updateOn = isAndroid()?'click blur submit':'default';

        $ionicConfigProvider.tabs.position('bottom');
        $ionicConfigProvider.tabs.style('standard');
        $ionicConfigProvider.views.maxCache(10);
        $ionicConfigProvider.navBar.alignTitle('center');
        $ionicConfigProvider.scrolling.jsScrolling(!isAndroid());
        $httpProvider.interceptors.push('myInterceptor');

        $httpProvider.defaults.timeout = 1;

        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|weixin|wxLocalResource|wxlocalresource):/);

        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;

        router($stateProvider, $urlRouterProvider, $controllerProvider);

    }]);

    angular.bootstrap(document, ['app']);

});

function getQueryParam(param) {
    var result = window.location.search.match(
        new RegExp("(\\?|&)" + param + "(\\[\\])?=([^&]*)")
    );
    return result ? result[3] : false;
}

function isAndroid() {
    var u = navigator.userAgent, app = navigator.appVersion;
    return u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
}
