'use strict';
//less.watch();

require.config({
    paths: {
        ionic: '../bower_components/ionic/js/ionic.bundle.min',
        ngResource: '../bower_components/angular-resource/angular-resource.min',
        'fileUpload': '../bower_components/angular-file-upload/dist/angular-file-upload.min',
        '_': '../bower_components/underscore/underscore-min',
        'datePicker': '../bower_components/ionic-datepicker/dist/ionic-datepicker.bundle.min'
    },
    shim: {
        ionic: {
            exports: 'ionic'
        },
        datePicker: ['ionic'],
        fileUpload: ['ionic'],
        ngResource: ['ionic']
    },
    waitSeconds: 0
});

require([
    'ionic',
    'app',
    'router',
    'wechat',
    '_',
    'service/myInterceptor'
], function (ionic, app, router, wechat) {
    app.run(['$rootScope','$http', function ($rootScope,$http) {
        if(!/index-debug\.html/.test(location.pathname)){
            require( ['box']);
        }
    }]);
    app.config(['$httpProvider', '$ionicConfigProvider', '$stateProvider', '$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', function ($httpProvider, $ionicConfigProvider, $stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

        $ionicConfigProvider.views.maxCache(0);
        $httpProvider.interceptors.push('myInterceptor');

        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;

        router($stateProvider, $urlRouterProvider, $controllerProvider);

    }]);
    try {
        wechat.getUser(function () {
            angular.bootstrap(document, ['wx']);
        })
    } catch (e) {
        console.log(e);
    }
});


