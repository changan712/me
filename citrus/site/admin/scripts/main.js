'use strict';
//less.watch();
require.config({
    paths: {
        angular: '../bower_components/angular/angular.min',
        'ui-router': '../bower_components/ui-router/release/angular-ui-router.min',
        'ui-bootstrap': '../bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
        ngResource: '../bower_components/angular-resource/angular-resource.min',
        md5: '../bower_components/angular-md5/angular-md5.min',
        ngCookies: '../bower_components/angular-cookies/angular-cookies.min',
        '_': '../bower_components/underscore/underscore-min',
        jquery: '../bower_components/jquery/dist/jquery.min',
        ngUnderScore: '../bower_components/angular-underscore/angular-underscore.min',
        i18n: '../bower_components/angular-i18n/angular-locale_zh-cn',
        sticky: '../bower_components/ngSticky/lib/sticky',
        'ui-select': '../bower_components/ui-select/dist/select',
        'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize.min',
        'highcharts': '../bower_components/highcharts/js/highcharts',
        'highcharts-ng': '../bower_components/highcharts-ng/dist/highcharts-ng.min',
        'fileUpload': '../bower_components/angular-file-upload/dist/angular-file-upload.min',
        um: '../bower_components/um/umeditor',
        umConfig: '../bower_components/um/umeditor.config',
        kindeditor: '../bower_components/kindeditor/kindeditor-all'
    },
    shim: {
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },
        jquery: {
            exports: 'jquery'
        },
        zh: {
            exports: 'zh'
        },
        umConfig: {

            exports: 'umConfig'
        },
        um: {
            deps: ['jquery', 'umConfig'],
            exports: 'um'
        },
        kindeditor:{
            exports: 'kindeditor'
        },
        highcharts: ['jquery'],
        'highcharts-ng': ['angular', 'highcharts'],
        i18n: ['angular'],
        'ui-bootstrap-tpl': ['angular'],
        'ui-router': ['angular'],
        'ui-bootstrap': ['angular'],
        ngCookies: ['angular'],
        ngUnderScore: ['angular'],
        fileUpload: ['angular'],
        'angular-sanitize': ['angular'],
        // oclazyload: ['angular']
        ngResource: ['angular'],
        md5: ['angular'],
        'ui-select': ['angular', 'angular-sanitize'],
        sticky: ['angular']
    },
    waitSeconds: 0
});

require([
    'angular',
    'app',
    'router',
    'service/myInterceptor',
    'service/user'
], function (angular, app, router) {
    app.run(['$rootScope', function ($rootScope) {

        if(!/index-debug\.html/.test(location.pathname)){
            require( ['box']);
        }
        $rootScope.$on('$stateChangeSuccess', function (event, currentState) {
            $rootScope.title = currentState.title;
        })

    }]);
    app.config(['$httpProvider', '$tooltipProvider', '$stateProvider', '$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', function ($httpProvider, $tooltipProvider, $stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

        $httpProvider.defaults.useXDomain = true;
        delete  $httpProvider.defaults.headers.common['X-Requested-With'];

        $httpProvider.interceptors.push('myInterceptor');

        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;

        router($stateProvider, $urlRouterProvider, $controllerProvider);

    }]);

    angular.bootstrap(document, ['app']);
});
