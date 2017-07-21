define([
    'controller/appCtrl',
    'service/values'
], function () {
    return function ($stateProvider, $urlRouterProvider, $controllerProvider) {
        $stateProvider
        /*.state('statistic', {
         url: '/statistic',
         controller: 'statisticCtrl',
         title: '统计图表',
         resolve: {
         ctrl: getCtrl('controller/statisticCtrl')
         },
         templateUrl: 'views/statistic/index.html'
         })*/
            .state('rank', {
                url: '/rank',
                abstract: true,
                template: '<ui-view></ui-view>'
            })
            .state('rank.index', {
                url: '/index',
                controller: 'rankIndexCtrl',
                title: '排行榜',
                resolve: {
                    ctrl: getCtrl('controller/rankCtrl')
                },
                templateUrl: 'views/rank/list.html'
            })
            .state('rank.share', {
                url: '/share',
                controller: 'rankShareCtrl',
                title: '个人转发量排名',
                resolve: {
                    ctrl: getCtrl('controller/rankCtrl')
                },
                templateUrl: 'views/rank/index.html'
            })
            .state('rank.share-view', {
                url: '/share-view',
                controller: 'rankShareViewCtrl',
                title: '转发职位被访问排名',
                resolve: {
                    ctrl: getCtrl('controller/rankCtrl')
                },
                templateUrl: 'views/rank/index.html'
            })
            .state('rank.share-apply', {
                url: '/share-apply',
                controller: 'rankShareApplyCtrl',
                title: '转发职位被申请排名',
                resolve: {
                    ctrl: getCtrl('controller/rankCtrl')
                },
                templateUrl: 'views/rank/index.html'
            })
            .state('rank.ref', {
                url: '/ref',
                controller: 'rankRefCtrl',
                title: '员工推荐排名',
                resolve: {
                    ctrl: getCtrl('controller/rankCtrl')
                },
                templateUrl: 'views/rank/index.html'
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
            .state('statistic.view', {
                url: '/view',
                controller: 'statisticViewCtrl',
                title: '访问量统计',
                resolve: {
                    ctrl: getCtrl('controller/statisticCtrl')
                },
                templateUrl: 'views/statistic/index.html'
            })
            .state('statistic.apply', {
                url: '/apply',
                controller: 'statisticApplyCtrl',
                title: '申请量统计',
                resolve: {
                    ctrl: getCtrl('controller/statisticCtrl')
                },
                templateUrl: 'views/statistic/index.html'
            })
            .state('statistic.share', {
                url: '/share',
                controller: 'statisticShareCtrl',
                title: '转发量统计',
                resolve: {
                    ctrl: getCtrl('controller/statisticCtrl')
                },
                templateUrl: 'views/statistic/index.html'
            })
            .state('statistic.shareEffect', {
                url: '/share-effect',
                controller: 'statisticShareEffectCtrl',
                title: '转发效果统计',
                resolve: {
                    ctrl: getCtrl('controller/statisticCtrl')
                },
                templateUrl: 'views/statistic/index.html'
            })
            .state('statistic.applyChannel', {
                url: '/apply-channel',
                controller: 'statisticApplyChannelCtrl',
                title: '投递渠道统计',
                resolve: {
                    ctrl: getCtrl('controller/statisticCtrl')
                },
                templateUrl: 'views/statistic/index.html'
            })
            .state('statistic.ref', {
                url: '/ref',
                controller: 'statisticRefCtrl',
                title: '内部推荐统计',
                resolve: {
                    ctrl: getCtrl('controller/statisticCtrl')
                },
                templateUrl: 'views/statistic/index.html'
            })
            .state('statistic.track', {
                url: '/track',
                controller: 'statisticTrackCtrl',
                title: '转发数据追踪',
                resolve: {
                    ctrl: getCtrl('controller/statisticCtrl')
                },
                templateUrl: 'views/statistic/track.html'
            })
            .state('statistic.track_detail', {
                url: '/track_detail?open_id',
                controller: 'statisticTrackDetailCtrl',
                title: '转发数据追踪',
                resolve: {
                    ctrl: getCtrl('controller/statisticCtrl')
                },
                templateUrl: 'views/statistic/track_detail.html'
            })

            .state('position', {
                url: '/position',
                abstract: true,
                template: '<ui-view></ui-view>'

            })
            .state('position.list', {
                url: '/list?page&date&city&department_id&keyword&order_by&order&created_by_user&apply_count',
                title: '职位列表',
                controller: 'positionListCtrl',
                resolve: {
                    ctrl: getCtrl('controller/posList')
                },
                templateUrl: 'views/position/list.html'
            })

            .state('position.edit', {
                url: '/edit/:id',
                title: '职位编辑',
                params: {
                    type: 'edit'
                },
                resolve: {
                    ctrl: getCtrl('controller/posNew')
                },
                templateUrl: 'views/position/new.html',
                controller: 'positionNewCtrl'

            })
            .state('position.new', {
                url: '/new',
                title: '职位发布',
                params: {
                    type: 'new'
                },

                resolve: {
                    ctrl: getCtrl('controller/posNew')
                },
                templateUrl: 'views/position/new.html',
                controller: 'positionNewCtrl'

            })

            .state('position.detail', {
                url: '/:id',
                title: '职位详情',
                resolve: {
                    ctrl: getCtrl('controller/posDetail')
                },
                templateUrl: 'views/position/detail.html',
                controller: 'positionDetailCtrl'
            })


            .state('resume', {
                url: '/resume',
                abstract: true,
                template: '<ui-view></ui-view>'
            })

            .state('resume.resumeNew', {
                //url: '/new-list',
                url: '/new-list?page&&gender&refer&position_id&work_exp&degree&order_by&order',
                title: '新收简历',
                resolve: {
                    ctrl: getCtrl('controller/resumeNewList')
                },
                templateUrl: 'views/resume/new-list.html',
                controller: 'resumeNewListCtrl'

            })
            .state('resume.detail', {
                url: '/:id',
                title: '简历详情',
                resolve: {
                    ctrl: getCtrl('controller/resumeDetail')
                },
                templateUrl: 'views/resume/detail.html',
                controller: 'resumeDetailCtrl'
            })

            //rec;
            .state('rec', {
                url: '/rec',
                abstract: true,
                template: '<ui-view></ui-view>'
            })

            .state('rec.list', {
                url: '/list?page',
                title: '内部推荐',
                resolve: {
                    ctrl: getCtrl('controller/recList')
                },
                templateUrl: 'views/recommend/list.html',
                controller: 'recListCtrl'
            })
            .state('rec.detail', {
                url: '/:id',
                title: '推荐详情',
                resolve: {
                    ctrl: getCtrl('controller/recDetail')
                },
                templateUrl: 'views/recommend/detail.html',
                controller: 'recDetailCtrl'
            })

            .state('setting', {
                url: '/setting',
                title: '修改企业宣传信息',
                resolve: {
                    ctrl: getCtrl('controller/setting')
                },
                templateUrl: 'views/com/setting.html',
                controller: 'settingCtrl'
            })

            .state('userInfo', {
                url: '/user-info',
                title: '修改用户信息',
                resolve: {
                    ctrl: getCtrl('controller/userInfo')
                },
                templateUrl: 'views/com/user-info.html',
                controller: 'userInfoCtrl'
            })

            .state('about', {
                url: '/about',
                title: '公司简介',
                resolve: {
                    ctrl: getCtrl('controller/about')
                },
                templateUrl: 'views/com/about.html',
                controller: 'aboutCtrl'
            })
            //redPacket;
            .state('redPacket', {
                url: '/red-packet',
                abstract: true,
                template: '<ui-view></ui-view>'
            })

            .state('redPacket.rule', {
                url: '/rule',
                title: '红包规则',
                resolve: {
                    ctrl: getCtrl('controller/redPacketRule')
                },
                templateUrl: 'views/red-packet/rule.html',
                controller: 'redPacketRuleCtrl'
            })

            .state('redPacket.statistic', {
                url: '/statistic',
                title: '红包统计',
                resolve: {
                    ctrl: getCtrl('controller/redPacketStat')
                },
                templateUrl: 'views/red-packet/statistic.html',
                controller: 'redPacketStatCtrl'
            })

            .state('redPacket.statDetail', {
                url: '/stat-detail?view&_sort&_order&_page',
                title: '红包统计详情',
                resolve: {
                    ctrl: getCtrl('controller/redPacketStatDetail')
                },
                templateUrl: 'views/red-packet/stat-detail.html',
                controller: 'redPacketStatDetailCtrl'
            })
            .state('404', {
                url: '/404',
                title: '404',
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