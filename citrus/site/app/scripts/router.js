define([
    'controller/appCtrl',
    'service/values'
], function () {

    return function ($stateProvider, $urlRouterProvider, $controllerProvider) {
        $stateProvider
            // .state('statistic', {
            //     url: '/statistic',
            //     controller: 'statisticCtrl',
            //     resolve: {
            //         ctrl: getCtrl('controller/statistic')
            //     },
            //     templateUrl: 'views/position/list.html'
            // })

            .state('verify', {
                url: '/verify',
                controller: 'verifyCtrl',
                resolve: {
                    ctrl: getCtrl('controller/verify')
                },
                templateUrl: 'views/verify.html'
            })

            .state('position', {
                url: '/position',
                resolve: {},
                abstract: true,
                template: '<ion-nav-view></ion-nav-view>'
            })
            .state('position.list', {
                url: '/list?page&property&city&category_id&department_id',
                controller: 'positionListCtrl',
                resolve: {
                    ctrl: getCtrl('controller/posList')
                },
                templateUrl: 'views/position/list.html'
            })
            .state('position.listByProperty', {
                url: '/list/:property',
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
            .state('position.apply', {
                url: '/apply',
                resolve: {
                    ctrl: getCtrl('controller/posDetail')
                },
                templateUrl: 'views/position/detail.html',
                controller: 'positionDetailCtrl'
            })

            .state('position.rec', {
                url: '/rec',
                resolve: {
                    ctrl: getCtrl('controller/posDetail')
                },
                templateUrl: 'views/position/detail.html',
                controller: 'positionDetailCtrl'
            })

            //resume
            .state('resume', {
                url: '/resume',
                abstract: true,
                template: '<ion-nav-view></ion-nav-view>'
            })

            .state('resume.index', {
                url: '/index',
                cache: false,
                templateUrl: 'views/resume/index.html',
                resolve: {
                    ctrl: getCtrl('controller/resumeIndex')
                },
                controller: 'resumeIndexCtrl as resumeIndex'
            })

            .state('resume.add', {
                url: '/add',
                cache: false,
                templateUrl: 'views/resume/add.html',
                resolve: {
                    ctrl: getCtrl('controller/resumeAdd')
                },
                controller: 'resumeAddCtrl as resumeAdd'
            })


            .state('resume.upload', {
                url: '/upload',
                resolve: {
                    ctrl: getCtrl('controller/resumeUpload')
                },
                templateUrl: 'views/resume/upload.html',
                controller: 'resumeUploadCtrl as upload'

            })

            .state('resume.new', {
                url: '/new',
                resolve: {
                    ctrl: getCtrl('controller/resumeNew')
                },
                templateUrl: 'views/resume/new.html',
                controller: 'resumeNewCtrl as resumeNew'

            })
            .state('resume.edit', {
                url: '/edit/:id',
                params: {
                    type: 'edit'
                },
                resolve: {
                    ctrl: getCtrl('controller/resumeEdit')
                },
                templateUrl: 'views/resume/edit.html',
                controller: 'resumeEditCtrl as resumeEdit'
            })

            .state('resume.rec', {
                url: '/rec',
                resolve: {
                    ctrl: getCtrl('controller/resumeRec')
                },
                templateUrl: 'views/resume/rec.html',
                controller: 'resumeRecCtrl as rec'

            })
            //share
            .state('share', {
                url: '/share',
                abstract: true,
                template: '<ion-nav-view></ion-nav-view>'
            })
            .state('share.prize', {
                url: '/prize',
                templateUrl: function (params) {
                    return 'views/share/prize.html'
                },
                resolve: {
                    ctrl: getCtrl('controller/share')
                },
                controller: 'sharePrizeCtrl'
            })
            .state('share.detail', {
                url: '/detail',
                templateUrl: function (params) {
                    return 'views/share/detail.html'
                },
                resolve: {
                    ctrl: getCtrl('controller/share')
                },
                controller: 'shareDetailCtrl'
            })
            .state('share.rec', {
                url: '/rec',
                templateUrl: function (params) {
                    return 'views/share/rec.html'
                },
                resolve: {
                    ctrl: getCtrl('controller/share')
                },
                controller: 'shareRecCtrl'
            })
            .state('share.rec-list', {
                url: '/rec-list?ref_status',
                templateUrl: function (params) {
                    return 'views/share/rec-list.html'
                },
                resolve: {
                    ctrl: getCtrl('controller/share')
                },
                controller: 'shareRecListCtrl'
            })

            //about
            .state('about', {
                url: '/about',
                abstract: true,
                template: '<ion-nav-view></ion-nav-view>'
            })
            .state('about.company', {
                url: '/company',
                templateUrl: 'views/about/company.html',
                resolve: {
                    ctrl: getCtrl('controller/aboutCompany')
                },
                controller: 'aboutCompanyCtrl'
            })
            .state('404', {
                url: '/404',
                templateUrl: 'views/com/404.html',
                controller: '404Ctrl'

            });

        $urlRouterProvider.when('/', '/position/list/1');
        $urlRouterProvider.when('', '/position/list/1');
        //$urlRouterProvider.when('management.developer.msg', '/index');
        $urlRouterProvider.otherwise('position/list/1');
        //$urlRouterProvider.otherwise('404');


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
