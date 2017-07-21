define([], function () {

    return function ($stateProvider, $urlRouterProvider, $controllerProvider) {
        $urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get("$state");
            $state.go("app.index");

        });

        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                resolve: {
                    currentUser: ['beforeRun', function (beforeRun) {
                        return beforeRun.getUser();
                    }]
                },
                templateUrl: 'views/app/app.html',
                controller: ['$rootScope', 'currentUser', function ($rootScope, currentUser) {
                    //   console.log(currentUser);
                    $rootScope.currentUser = currentUser;
                }]
            })
            //一些公共页面，无法单独存在于tab view中的页面；
            .state('public', {
                url: '/public',
                abstract: true,
                resolve: {
                    currentUser: ['beforeRun', function (beforeRun) {
                        return beforeRun.getUser();
                    }]
                },
                template: '<ion-nav-view class="public"></ion-nav-view>',
                controller: ['$rootScope', 'currentUser', function ($rootScope, currentUser) {
                    //   console.log(currentUser);
                    $rootScope.currentUser = currentUser;
                }]

            })

            .state('public.user', {
                url: '/user',
                abstract: true,
                template: '<ion-nav-view   class="user"></ion-nav-view>'

            })

            .state('public.user.index', {
                url: '/index',
                templateUrl: 'views/public/user/index.html',
                resolve: {
                    ctrl: getCtrl('controller/public/user/index')
                },
                controller: 'userIndexCtrl'

            })

            .state('public.feedback', {
                url: '/feedback',
                abstract: true,
                template: '<ion-nav-view   class="feedback"></ion-nav-view>'

            })
            .state('public.feedback.new', {
                url: '/new',
                cache: false,
                templateUrl: 'views/public/feedback/new.html',
                resolve: {
                    ctrl: getCtrl('controller/public/feedback/new')
                },
                controller: 'feedbackNewCtrl'

            })
            .state('public.contacts', {
                url: '/contacts?type',
                templateUrl: 'views/public/contacts.html',

                params: {
                    from: null,
                    fromParams: null
                },
                resolve: {
                    ctrl: getCtrl('controller/public/contacts')
                },
                controller: 'contactsCtrl'
            })

            .state('public.message', {
                url: '/message?from?feed_type',
                cache: false,
                templateUrl: 'views/public/message.html',
                resolve: {
                    ctrl: getCtrl('controller/public/message')
                },
                controller: 'messageCtrl'
            })
            //发布前选择项目或个人
            .state('public.field', {
                url: '/field',
                cache: false,
                templateUrl: 'views/public/field.html',
                resolve: {
                    ctrl: getCtrl('controller/public/field')
                },
                controller: 'fieldCtrl'
            })

            .state('public.projectUser', {
                url: '/project-user?projectId&from',
                templateUrl: 'views/public/project-user.html',

                resolve: {
                    ctrl: getCtrl('controller/public/projectUser')
                },
                controller: 'projectUserCtrl'
            })

            .state('public.rank', {
                url: '/rank',
                abstract: true,
                template: '<ion-nav-bar class="bar-light sm-bd-bottom"></ion-nav-bar><ion-nav-view   class="view-rank"></ion-nav-view>'
            })

            .state('public.rank.index', {
                url: '/index',
                cache: false,
                resolve: {
                    ctrl: getCtrl('controller/public/rank/index')
                },
                controller: 'rankIndexCtrl',
                templateUrl: 'views/public/rank/index.html'
            })
            .state('public.rank.rule', {
                url: '/rule',
                templateUrl: 'views/public/rank/rule.html'
            })

            .state('app.index', {
                url: '/index',
                views: {
                    index: {
                        controller: 'indexCtrl',
                        templateUrl: 'views/app/index.html'
                    }
                },

                resolve: {
                    ctrl: getCtrl('controller/app/index')
                }

            })

            //statistic
            .state('public.statistic', {
                url: '/statistic',
                abstract: true,
                template: '<ion-nav-bar class="bar-light sm-bd-bottom"></ion-nav-bar><ion-nav-view   class="view-statistic"></ion-nav-view>',
                resolve: {
                    ctrl: getCtrl('controller/public/statistic/statistic')
                },
                controller: 'statisticCtrl'
            })
            .state('public.statistic.index', {
                url: '/index?time1&time2',
                resolve: {
                    ctrl: getCtrl('controller/public/statistic/index')
                },
                controller: 'statisticIndexCtrl',
                templateUrl: 'views/public/statistic/index.html'
            })

            .state('app.feed', {
                url: '/feed',
                abstract: true,
                resolve: {
                    ctrl: getCtrl('controller/app/feed/feed')
                },
                views: {
                    feed: {
                        template: '<ion-nav-view  name="feed" class="feed"></ion-nav-view>'
                        //   controller: 'feedCtrl as feedCtrl'
                    }
                }

            })

            .state('app.feed.list', {
                url: '/list?_page',
                /*  cache: false,*/
                resolve: {
                    ctrl: getCtrl('controller/app/feed/list')
                },
                views: {
                    feed: {
                        controller: 'feedListCtrl',
                        templateUrl: 'views/app/feed/list.html'

                    }
                }
            })
            .state('app.feed.comments', {
                url: '/comments?_page?feedId?',
                /*  cache: false,*/
                resolve: {
                    ctrl: getCtrl('controller/app/feed/comments')
                },
                views: {
                    feed: {
                        controller: 'feedCommentsCtrl',
                        templateUrl: 'views/app/feed/comments.html'

                    }
                }
            })

            .state('app.feed.home', {
                url: '/home/:id?_page',
                params: {
                    type: 1,
                    from: null,
                    fromParams: null
                },
                resolve: {
                    ctrl: getCtrl('controller/app/feed/home')
                },
                views: {
                    feed: {
                        controller: 'feedHomeCtrl',
                        templateUrl: 'views/app/feed/home.html'

                    }
                }
            })
            .state('app.feed.scoreDetail', {
                url: '/score-detail/:id',
                resolve: {
                    ctrl: getCtrl('controller/app/feed/scoreDetail')
                },
                views: {
                    feed: {
                        controller: 'feedScoreDetailCtrl',
                        templateUrl: 'views/app/feed/score-detail.html'

                    }
                }
            })

            .state('app.feed.new', {
                url: '/new?type',
                cache: false,
                resolve: {
                    ctrl: getCtrl('controller/app/feed/new')
                },
                views: {
                    feed: {
                        templateUrl: 'views/app/feed/new.html',
                        controller: 'feedNewCtrl'
                    }
                }

            })
            .state('app.feed.edit', {
                url: '/edit/:id',
                cache: false,
                resolve: {
                    ctrl: getCtrl('controller/app/feed/new')
                },
                views: {
                    feed: {
                        templateUrl: 'views/app/feed/new.html',
                        controller: 'feedNewCtrl'
                    }
                }

            })

            .state('app.feed.detail', {
                url: '/:id?msgType',
                resolve: {
                    ctrl: getCtrl('controller/app/feed/detail')
                },

                views: {
                    feed: {
                        controller: 'feedDetailCtrl',
                        templateUrl: 'views/app/feed/detail.html'
                    }
                }

            })
            //notice
            .state('app.notice', {
                url: '/notice',
                abstract: true,
                views: {
                    notice: {
                        template: '<ion-nav-view  name="notice"  class="notice"></ion-nav-view>'
                    }
                }

            })

            .state('app.notice.list', {
                url: '/list?_page',
                cache: false,

                resolve: {
                    ctrl: getCtrl('controller/app/notice/list')
                },
                views: {
                    notice: {
                        templateUrl: 'views/app/notice/list.html',
                        controller: 'noticeListCtrl'
                    }
                }

            })
            .state('app.notice.detail', {
                url: '/:id',

                resolve: {
                    ctrl: getCtrl('controller/app/notice/detail')
                },
                views: {
                    notice: {
                        templateUrl: 'views/app/notice/detail.html',
                        controller: 'noticeDetailCtrl'
                    }
                }
            })


            //project
            /*.state('app.feedProject', {
             url: '/feed-project',
             abstract: true,
             resolve: {
             ctrl: getCtrl('controller/app/feedProject/feedProject')
             },
             views: {
             feedProject: {
             template: '<ion-nav-view  name="feedProject" class="feed-project"></ion-nav-view>',
             // controller: 'feedProjectCtrl as feedProjectCtrl'
             }
             }

             })

             .state('app.feedProject.list', {
             url: '/list?_page',
             /!*  cache: false,*!/
             resolve: {
             ctrl: getCtrl('controller/app/feedProject/list')
             },
             views: {
             feedProject: {
             controller: 'feedProjectListCtrl',
             templateUrl: 'views/app/feedProject/list.html'

             }
             }
             })
             .state('app.feedProject.comments', {
             url: '/comments?_page?feedId?',
             /!*  cache: false,*!/
             resolve: {
             ctrl: getCtrl('controller/app/feedProject/comments')
             },
             views: {
             feedProject: {
             controller: 'feedProjectCommentsCtrl',
             templateUrl: 'views/app/feedProject/comments.html'

             }
             }
             })

             .state('app.feedProject.home', {
             url: '/home/:id?_page',
             resolve: {
             ctrl: getCtrl('controller/app/feedProject/home')
             },
             views: {
             feedProject: {
             controller: 'feedProjectHomeCtrl',
             templateUrl: 'views/app/feedProject/home.html'

             }
             }
             })

             .state('app.feedProject.new', {
             url: '/new',
             cache: false,
             resolve: {
             ctrl: getCtrl('controller/app/feedProject/new')
             },
             views: {
             feedProject: {
             templateUrl: 'views/app/feedProject/new.html',
             controller: 'feedProjectNewCtrl'
             }
             }

             })
             .state('app.feedProject.edit', {
             url: '/edit/:id',
             cache: false,
             resolve: {
             ctrl: getCtrl('controller/app/feedProject/new')
             },
             views: {
             feedProject: {
             templateUrl: 'views/app/feedProject/new.html',
             controller: 'feedProjectNewCtrl'
             }
             }

             })

             .state('app.feedProject.detail', {
             url: '/:id?msgType',
             resolve: {
             ctrl: getCtrl('controller/app/feedProject/detail')
             },

             views: {
             feedProject: {
             controller: 'feedProjectDetailCtrl',
             templateUrl: 'views/app/feedProject/detail.html'
             }
             }

             })

             */



            //perf
            .state('app.perf', {
                url: '/perf',
                abstract: true,
                views: {
                    perf: {
                        template: '<ion-nav-view  name="perf" class="perf"></ion-nav-view>'
                    }
                }

            })

            .state('app.perf.overview', {
                url: '/overview',
                resolve: {
                    ctrl: getCtrl('controller/app/perf/overview')
                },
                views: {
                    perf: {
                        controller: 'perfOverviewCtrl',
                        templateUrl: 'views/app/perf/overview.html'

                    }
                }
            })
            .state('app.perf.goalSetting', {
                url: '/{id:int}/goal-setting',
                resolve: {
                    ctrl: getCtrl('controller/app/perf/goalSetting')
                },
                views: {
                    perf: {
                        controller: 'perfGoalSettingCtrl',
                        templateUrl: 'views/app/perf/goal-setting.html'

                    }
                }
            })
            .state('app.perf.selfReview', {
                url: '/{id:int}/self-review',
                resolve: {
                    ctrl: getCtrl('controller/app/perf/selfReview')
                },
                views: {
                    perf: {
                        controller: 'perfSelfReviewCtrl',
                        templateUrl: 'views/app/perf/self-review.html'

                    }
                }
            })

            .state('app.perf.svReview', {
                url: '/{id:int}/sv-review',
                resolve: {
                    ctrl: getCtrl('controller/app/perf/svReview')
                },
                views: {
                    perf: {
                        controller: 'perfSvReviewCtrl',
                        templateUrl: 'views/app/perf/sv-review.html'

                    }
                }
            })

            .state('app.perf.summary', {
                url: '/{id:int}/summary',
                resolve: {
                    ctrl: getCtrl('controller/app/perf/summary')
                },
                views: {
                    perf: {
                        controller: 'perfSummaryCtrl',
                        templateUrl: 'views/app/perf/summary.html'

                    }
                }
            })
            .state('app.perf.signOff', {
                url: '/{id:int}/signOff',
                resolve: {
                    ctrl: getCtrl('controller/app/perf/signOff')
                },
                views: {
                    perf: {
                        controller: 'perfSignOffCtrl',
                        templateUrl: 'views/app/perf/sign-off.html'

                    }
                }
            })
            .state('app.perf.devPlan', {
                url: '/{id:int}/dev-plan',
                resolve: {
                    ctrl: getCtrl('controller/app/perf/devPlan')
                },
                views: {
                    perf: {
                        controller: 'perfDevPlanCtrl',
                        templateUrl: 'views/app/perf/dev-plan.html'
                    }
                }
            })
            .state('app.perf.devPlanDetail', {
                url: '/{perfId:int}/dev-plan/:id',
                resolve: {
                    ctrl: getCtrl('controller/app/perf/devPlanDetail')
                },
                views: {
                    perf: {
                        controller: 'perfDevPlanDetailCtrl',
                        templateUrl: 'views/app/perf/dev-plan-detail.html'
                    }
                }
            })
            .state('app.others', {
                url: '/others',
                resolve: {
                    ctrl: getCtrl('controller/app/others/others')
                },
                views: {
                    others: {
                        controller: 'othersCtrl',
                        templateUrl: 'views/app/others/others.html'
                    }
                }
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
