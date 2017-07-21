'use strict';
//less.watch();
require.config({
    paths: {
        ionic: '../bower_components/ionic/js/ionic.bundle.min',
        ngResource: '../bower_components/angular-resource/angular-resource.min',
        '_':'../bower_components/underscore/underscore-min',
        'sticky':'../bower_components/ngSticky/dist/sticky.min'
    },
    shim: {
        ionic: {
            exports: 'ionic'
        },
        fileUpload: ['ionic'],
        ngResource: ['ionic'],
        sticky: ['ionic']
    }

});

require([
    'ionic',
    'app',
    'router',
    '_',
    'service/myInterceptor'
], function (ionic, app, router) {
    app.run(function ($rootScope, $templateCache) {

    });
    app.config(['$httpProvider','$ionicConfigProvider',  '$stateProvider', '$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', function ($httpProvider, $ionicConfigProvider, $stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

        $ionicConfigProvider.views.maxCache(0);

        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.common['Content-Type'] = "text/plain";
        $httpProvider.defaults.headers.post['Content-Type'] = "text/plain";
        $httpProvider.defaults.headers.put['Content-Type'] = "text/plain";
        delete  $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.interceptors.push('myInterceptor');

        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;
        router($stateProvider, $urlRouterProvider, $controllerProvider);
    }]);

    angular.bootstrap(document, ['wx']);
});
