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
            .state('redpack', {
                url: '/redpack',
                abstract: true,
                template: '<ui-view></ui-view>'

            })
            .state('redpack.list', {
                url: '/list?page',
                controller: 'redpackListCtrl',
                resolve: {
                    ctrl: getCtrl('controller/redpack')
                },
                templateUrl: 'views/redpack/list.html'
            })
            .state('redpack.detail', {
                url: '/detail?page&company_id&type&date',
                controller: 'redpackDetailCtrl',
                resolve: {
                    ctrl: getCtrl('controller/redpack')
                },
                templateUrl: 'views/redpack/detail.html',
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

            .state('statistic', {
                url: '/statistic',
                abstract: true,
                template: '<ui-view></ui-view>'
            })
            .state('statistic.index', {
                url: '/index',
                controller: 'statisticIndexCtrl',
                title: '统计图表',
                resolve: {
                    ctrl: getCtrl('controller/statisticCtrl')
                },
                templateUrl: 'views/statistic/list.html'
            })
            .state('statistic.appSearch', {
                url: '/app-search',
                controller: 'statisticAppSearchCtrl',
                title: 'APP搜索栏使用情况',
                resolve: {
                    ctrl: getCtrl('controller/statisticCtrl')
                },
                templateUrl: 'views/statistic/index.html'
            })
            .state('statistic.appNav', {
                url: '/app-nav',
                controller: 'statisticAppNavCtrl',
                title: 'APP导航栏使用情况',
                resolve: {
                    ctrl: getCtrl('controller/statisticCtrl')
                },
                templateUrl: 'views/statistic/index.html'
            })
            .state('statistic.adminRank', {
                url: '/admin-rank',
                controller: 'statisticAdminRankCtrl',
                title: 'ADMIN排行榜使用情况',
                resolve: {
                    ctrl: getCtrl('controller/statisticCtrl')
                },
                templateUrl: 'views/statistic/index.html'
            })
            .state('statistic.adminStatistic', {
                url: '/admin-statistic',
                controller: 'statisticAdminStatisticCtrl',
                title: 'ADMIN统计图表使用情况',
                resolve: {
                    ctrl: getCtrl('controller/statisticCtrl')
                },
                templateUrl: 'views/statistic/index.html'
            })
            .state('statistic.adminResumeList', {
                url: '/admin-resume-list',
                controller: 'statisticResumeListCtrl',
                title: 'ADMIN新收简历使用情况',
                resolve: {
                    ctrl: getCtrl('controller/statisticCtrl')
                },
                templateUrl: 'views/statistic/index.html'
            })
            .state('statistic.adminWxurl', {
                url: '/admin-wxurl',
                controller: 'statisticAdminWxurlCtrl',
                title: 'ADMIN微信后台链接访问量',
                resolve: {
                    ctrl: getCtrl('controller/statisticCtrl')
                },
                templateUrl: 'views/statistic/index.html'
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