'use strict';
//less.watch();
require.config({

    paths: {
        //angular: '/bower_components/angular/angular.min',
        'ui-router': '../bower_components/angular-ui-router/release/angular-ui-router.min',
        'ui-bootstrap': '../bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
        ngResource: '../bower_components/angular-resource/angular-resource.min',
        sticky: '../bower_components/ngSticky/lib/sticky',
        'ui-select': '../bower_components/angular-ui-select/dist/select.min',
        'angular-checklist-model':'../bower_components/angular-checklist-model/checklist-model',
        'fileUpload': '../bower_components/angular-file-upload/dist/angular-file-upload.min',
        css: '../bower_components/require-css/css.min',
        style: ['/style/css'] //样式目录

    },
    shim: {
        //highcharts: ['jquery'],
        //'highcharts-ng': ['angular', 'highcharts'],
        //'ui-select': ['angular-sanitize']
        //textAngular: ['angular']

    }
});

require.config({
    urlArgs: 'v=' + global_version
});

require([
    'app',
    'router',
    '../lib/services/myInterceptor',
    '../lib/directives/loading'
    //'service/constant',
    //'controller/appCtrl'
//], function (angular, app, router) {
], function (app, router, myInterceptor) {
    app.run(['$rootScope', '$stateParams', '$state',
        function ($rootScope, $stateParams, $state) {
            //console.log($state);
            $rootScope.$stateParams = $stateParams;

            $rootScope.$on('$stateChangeSuccess', function (event, currentState) {
                $rootScope.title = currentState.title;
            });
        }
    ]);
    app.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
        function ($httpProvider, $stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
            // $httpProvider.defaults.useXDomain = true;
            $httpProvider.interceptors.push('myInterceptor');

            app.controller = $controllerProvider.register;
            app.directive = $compileProvider.directive;
            app.filter = $filterProvider.register;
            app.factory = $provide.factory;
            app.service = $provide.service;

            router($stateProvider, $urlRouterProvider, $controllerProvider);
        }
    ]);

    app.controller('appCtrl', function($scope) {
        $scope.greeting = 'Welcome!';
    });

    angular.element(document).ready(function() {
        angular.bootstrap(document, ['app'], {debugInfoEnabled: true});
    });
});
