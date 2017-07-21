define([
    'controller/appCtrl',
    'service/values'
], function () {
    return function ($stateProvider, $urlRouterProvider, $controllerProvider) {
        $stateProvider
            .state('key', {
                url: '/key',
                abstract: true,
                template: '<ui-view></ui-view>'

            })
            .state('key.list', {
                url: '/list',
                controller: 'keyListCtrl',
                resolve: {
                    ctrl: getCtrl('controller/key')
                },
                templateUrl: 'views/key/list.html'
            })
            .state('key.new', {
                url: '/new',
                params: {
                    type: 'new'
                },

                resolve: {
                    ctrl: getCtrl('controller/key')
                },
                templateUrl: 'views/key/new.html',
                controller: 'keyNewCtrl'

            })
            .state('key.edit', {
                url: '/edit/:id',
                params: {
                    type: 'edit'
                },
                resolve: {
                    ctrl: getCtrl('controller/key')
                },
                templateUrl: 'views/key/new.html',
                controller: 'keyNewCtrl'

            })

            .state('company', {
                url: '/company',
                abstract: true,
                template: '<ui-view></ui-view>'

            })
            .state('company.list', {
                url: '/list?page&date&city&department?keyword',
                controller: 'companyListCtrl',
                resolve: {
                    ctrl: getCtrl('controller/company')
                },
                templateUrl: 'views/company/list.html'
            })

            .state('company.edit', {
                url: '/edit/:id',
                params: {
                    type: 'edit'
                },
                resolve: {
                    ctrl: getCtrl('controller/company')
                },
                templateUrl: 'views/company/new.html',
                controller: 'companyNewCtrl'

            })
            .state('company.new', {
                url: '/new',
                params: {
                    type: 'new'
                },

                resolve: {
                    ctrl: getCtrl('controller/company')
                },
                templateUrl: 'views/company/new.html',
                controller: 'companyNewCtrl'

            })

            .state('company.detail', {
                url: '/:id',
                resolve: {
                    ctrl: getCtrl('controller/company')
                },
                templateUrl: 'views/company/detail.html',
                controller: 'companyDetailCtrl'
            })

            .state('user', {
                url: '/user',
                abstract: true,
                template: '<ui-view></ui-view>'

            })

            .state('user.new', {
                url: '/new/:company_id',
                params: {
                    type: 'new'
                },

                resolve: {
                    ctrl: getCtrl('controller/user')
                },
                templateUrl: 'views/user/new.html',
                controller: 'userNewCtrl'
            })

            .state('user.edit', {
                url: '/edit/:company_id/:id',
                params: {
                    type: 'edit'
                },
                resolve: {
                    ctrl: getCtrl('controller/user')
                },
                templateUrl: 'views/user/new.html',
                controller: 'userNewCtrl'

            })

            .state('404', {
                url: '/404',
                templateUrl: 'views/com/404.html',
                controller: '404Ctrl'
            })
        ;

        $urlRouterProvider.when('/', '/company/list');
        $urlRouterProvider.when('', '/company/list');
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