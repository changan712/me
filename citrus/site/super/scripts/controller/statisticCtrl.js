'use strict';

define([
    'app',
    'service/statistic',
    'service/alert',
    'service/dialog'
], function (md) {
    var data_to_points = function (data) {
        var ret = [];
        _.each(data, function (d) {
            ret.push([Date.parse(d['day']), parseInt(d['cnt'])]);
        });
        return ret;
    };
    var data_to_pie = function (data) {
        var ret = [];
        _.each(data, function (d) {
            ret.push({
                'name': d['name'],
                'y':parseInt(d['cnt'])
            });
        });
        return ret;
    };

    var app_search_conf = {           //APP搜索栏统计
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            allowDecimals: false
        },
        "series": [],
        "title": {
            "text": ""
        },
        'search': function (statistic, p) {
            if(arguments.length == 1){
                p = {};
            }

            var params = {
                'methods':['app_search_depart', 'app_search_category', 'app_search_city','app_search_keyword']
            };

            _.extend(params, p);
            var conf = this;
            statistic.pool(params, function (res) {
                conf.series = [];
                conf.series.push({
                    type: 'column',
                    name: '部门筛选',
                    data: data_to_points(res['app_search_depart']),
                    color:'#fdc111'
                });
                conf.series.push({
                    type: 'column',
                    name: '类别筛选',
                    data: data_to_points(res['app_search_category']),
                    color:'#b8e06d'
                });
                conf.series.push({
                    type: 'column',
                    name: '地区筛选',
                    data: data_to_points(res['app_search_city']),
                    color: '#fea500'
                });
                conf.series.push({
                    type: 'column',
                    name: '关键词搜索',
                    data: data_to_points(res['app_search_keyword']),
                    color: '#01dfd0'
                });
                // conf.title.text = 'APP导航栏统计';
            })
        }
    };


    var app_nav_conf = {           //APP导航栏统计
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            allowDecimals: false
        },
        "series": [],
        "title": {
            "text": ""
        },
        'search': function (statistic, p) {
            if(arguments.length == 1){
                p = {};
            }

            var params = {
                'methods':['app_nav_resume', 'app_nav_intro', 'app_nav_social','app_nav_school']
            };

            _.extend(params, p);
            var conf = this;
            statistic.pool(params, function (res) {
                conf.series = [];
                conf.series.push({
                    type: 'column',
                    name: '公司介绍',
                    data: data_to_points(res['app_nav_intro']),
                    color:'#fdc111'
                });
                conf.series.push({
                    type: 'column',
                    name: '社会招聘',
                    data: data_to_points(res['app_nav_social']),
                    color:'#b8e06d'
                });
                conf.series.push({
                    type: 'column',
                    name: '校园招聘',
                    data: data_to_points(res['app_nav_school']),
                    color: '#fea500'
                });
                conf.series.push({
                    type: 'column',
                    name: '我的简历',
                    data: data_to_points(res['app_nav_resume']),
                    color: '#01dfd0'
                });
                // conf.title.text = 'APP导航栏统计';
            })
        }
    };


    var admin_rank_conf = {           //Admin排行榜统计
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            allowDecimals: false
        },
        "series": [],
        "title": {
            "text": ""
        },
        'search': function (statistic, p) {
            if(arguments.length == 1){
                p = {};
            }

            var params = {
                'methods':['admin_rank']
            };

            _.extend(params, p);
            var conf = this;
            statistic.pool(params, function (res) {
                conf.series = [];
                conf.series.push({
                    type: 'column',
                    name: '排行榜',
                    data: data_to_points(res['admin_rank']),
                    color:'#fdc111'
                });
            })
        }
    };

    var admin_resume_list_conf = {           //Admin新收简历
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            allowDecimals: false
        },
        "series": [],
        "title": {
            "text": ""
        },
        'search': function (statistic, p) {
            if(arguments.length == 1){
                p = {};
            }

            var params = {
                'methods':['admin_resume_list']
            };

            _.extend(params, p);
            var conf = this;
            statistic.pool(params, function (res) {
                conf.series = [];
                conf.series.push({
                    type: 'column',
                    name: '新收简历',
                    data: data_to_points(res['admin_resume_list']),
                    color:'#01dfd0'
                });
            })
        }
    };

    var admin_statistic_conf = {           //Admin统计图表
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            allowDecimals: false
        },
        "series": [],
        "title": {
            "text": ""
        },
        'search': function (statistic, p) {
            if(arguments.length == 1){
                p = {};
            }

            var params = {
                'methods':['admin_statistic']
            };

            _.extend(params, p);
            var conf = this;
            statistic.pool(params, function (res) {
                conf.series = [];
                conf.series.push({
                    type: 'column',
                    name: '统计图表',
                    data: data_to_points(res['admin_statistic']),
                    color:'rgba(248,161,63,1)',
                });
            })
        }
    };

    var admin_wxurl_conf = {           //Admin微信后台链接点击量
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            allowDecimals: false
        },
        "series": [],
        "title": {
            "text": ""
        },
        'search': function (statistic, p) {
            if(arguments.length == 1){
                p = {};
            }

            var params = {
                'methods':['admin_wxurl']
            };

            _.extend(params, p);
            var conf = this;
            statistic.pool(params, function (res) {
                conf.series = [];
                conf.series.push({
                    type: 'column',
                    name: '微信后台链接',
                    data: data_to_points(res['admin_wxurl']),
                    color:'rgba(210,143,63,1)',
                });
            })
        }
    };

    var set_vm = function ($scope, statistic) {
        var vm = $scope.vm = {};
        vm.cond = {
            company_info:[]
        };

        vm.options = {
            company_info: [],
            date: []
        };
        vm.query = function(){
            var params = {};
            if(vm.cond.company_info && vm.cond.company_info.company_id){
                params['company_id'] = vm.cond.company_info.company_id;
            }

            if(vm.cond.date){
                params['date_id'] = vm.cond.date.id;
            }

            $scope.chart_conf.search(statistic, params);
        };

        statistic.select({}, function (res) {
            vm.options.company_info = res.company_info;
            vm.options.date = res.date;
            vm.cond = {
                date: vm.options.date[0]
            };
            $scope.$watch('vm.cond.company_info', vm.query);
        });
    };


    //APP搜索栏
    md.controller('statisticAppSearchCtrl', ['$rootScope', '$scope', '$location', '$state', 'statistic', 'dialog', function ($rootScope, $scope, $location, $state, statistic, dialog) {
        $scope.sub_title = $state.current.title;
        $scope.chart_conf = app_search_conf;
        set_vm($scope, statistic);
    }]);

    //APP导航栏使用情况
    md.controller('statisticAppNavCtrl', ['$rootScope', '$scope', '$location', '$state', 'statistic', 'dialog', function ($rootScope, $scope, $location, $state, statistic, dialog) {
        $scope.sub_title = $state.current.title;
        $scope.chart_conf = app_nav_conf;
        set_vm($scope, statistic);
    }]);

    //ADMIN排行榜使用情况
    md.controller('statisticAdminRankCtrl', ['$rootScope', '$scope', '$location', '$state', 'statistic', 'dialog', function ($rootScope, $scope, $location, $state, statistic, dialog) {
        $scope.sub_title = $state.current.title;
        $scope.isShare= $state.includes('statistic.share');
        $scope.chart_conf = admin_rank_conf;
        set_vm($scope, statistic);
    }]);

    //ADMIN统计图表使用情况
    md.controller('statisticAdminStatisticCtrl', ['$rootScope', '$scope', '$location', '$state', 'statistic', 'dialog', function ($rootScope, $scope, $location, $state, statistic, dialog) {
        $scope.sub_title = $state.current.title;
        $scope.chart_conf = admin_statistic_conf;
        set_vm($scope, statistic);
    }]);

    //ADMIN新收简历使用情况
    md.controller('statisticResumeListCtrl', ['$rootScope', '$scope', '$location', '$state', 'statistic', 'dialog', function ($rootScope, $scope, $location, $state, statistic, dialog) {
        $scope.sub_title = $state.current.title;
        $scope.chart_conf = admin_resume_list_conf;
        set_vm($scope, statistic);
    }]);

    //ADMIN微信后台链接访问量
    md.controller('statisticAdminWxurlCtrl', ['$rootScope', '$scope', '$location', '$state', 'statistic', 'dialog', function ($rootScope, $scope, $location, $state, statistic, dialog) {
        $scope.sub_title = $state.current.title;
        $scope.chart_conf = admin_wxurl_conf;
        set_vm($scope, statistic);
    }]);


    //统计页入口
    md.controller('statisticIndexCtrl', ['$rootScope', '$scope', '$location', '$state', 'statistic', 'dialog', function ($rootScope, $scope, $location, $state, statistic, dialog) {
        $rootScope.page = 'statistic';

        $scope.app_search_conf = app_search_conf;
        app_search_conf.search(statistic);

        $scope.app_nav_conf = app_nav_conf;
        app_nav_conf.search(statistic);

        $scope.admin_rank_conf = admin_rank_conf;
        admin_rank_conf.search(statistic);

        $scope.admin_resume_list = admin_resume_list_conf;
        admin_resume_list_conf.search(statistic);

        $scope.admin_statistic = admin_statistic_conf;
        admin_statistic_conf.search(statistic);

        $scope.admin_wxurl = admin_wxurl_conf;
        admin_wxurl_conf.search(statistic);
    }]);
});

