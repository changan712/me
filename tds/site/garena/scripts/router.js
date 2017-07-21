define([
    'controller/appCtrl'

], function () {
    return function ($stateProvider, $urlRouterProvider, $controllerProvider) {
        $stateProvider
            .state('position', {
                url: '/position',
                abstract: true,
                templateUrl: 'views/position/position.html'
            })
            .state('position.list', {
                url: '/list',
                controller: 'positionListCtrl',
                resolve: {
                    ctrl: getCtrl('controller/posList')
                },
                templateUrl: 'views/position/list.html'
            })

            .state('position.detail', {
                url: '/:id',
                resolve: {
                    ctrl: getCtrl('controller/posDetail')
                },
                templateUrl: 'views/position/detail.html',
                controller: 'positionDetailCtrl'
            })


            .state('404', {
                url: '/404',
                templateUrl: 'views/com/404.html',
                controller: '404Ctrl'

            })

        ;

        $urlRouterProvider.when('/', '/position/list');
        $urlRouterProvider.when('', '/position/list');
        // $urlRouterProvider.when('management.developer.msg', '/index');
        $urlRouterProvider.otherwise('404');


        function getCtrl(url, dep) {
            return ['$q', '$rootScope', function ($q, $rootScope) {
                var deferred = $q.defer();

                if (dep) {
                    require(dep, function () {
                        require([url], function () {
                            $rootScope.$apply(function () {
                                deferred.resolve();
                            });
                        });
                    })
                } else {
                    require([url], function () {
                        $rootScope.$apply(function () {
                            deferred.resolve();
                        });
                    });
                }


                return deferred.promise;
            }]
        }
    };


});