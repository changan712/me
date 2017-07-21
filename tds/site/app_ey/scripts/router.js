define([
    'controller/appCtrl',
    'service/values'
], function () {

    return function ($stateProvider, $urlRouterProvider, $controllerProvider) {
        $stateProvider
            .state('statistic', {
                url: '/statistic',
                controller: 'statisticCtrl',
                resolve: {
                    ctrl: getCtrl('controller/statistic')
                },
                templateUrl: 'views/position/list.html'
            })
            .state('guide', {
                url: '/guide',
                resolve: {
                    ctrl: getCtrl('controller/guide')
                },
                controller: 'guideCtrl',
                templateUrl: 'views/guide.html'
            })

            .state('position', {
                url: '/position',
                resolve: {},
                abstract: true,
                template: '<ion-nav-view></ion-nav-view>'
            })
            .state('position.list', {
                url: '/list',
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
                params: {
                    type: 'new'
                },
                resolve: {
                    ctrl: getCtrl('controller/resumeEdit')
                },
                templateUrl: 'views/resume/edit.html',
                controller: 'resumeEditCtrl as resumeEdit'

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

            //申请后

            .state('questionnaire', {
                url: '/questionnaire',
                resolve: {
                    ctrl: getCtrl('controller/questionnaire')
                },
                templateUrl: 'views/questionnaire.html',
                controller: 'questionnaireCtrl'
            })
            .state('success', {
                url: '/success',
                templateUrl: 'views/success.html'

            })
            .state('more', {
                url: '/more',
                templateUrl: 'views/more.html'
            })



            .state('404', {
                url: '/404',
                templateUrl: 'views/com/404.html',
                controller: '404Ctrl'
            });

    /*    $urlRouterProvider.when('/', '/position/list/2');
        $urlRouterProvider.when('', '/position/list/2');*/
        //$urlRouterProvider.when('management.developer.msg', '/index');    'position/list/2'
        $urlRouterProvider.otherwise(function($injector){
            var $state = $injector.get("$state");
            $state.go("position.listByProperty",{property:2});
        });
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
