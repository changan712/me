'use strict';

define([
    'app',
    'service/statistic',
    'service/alert',
    'service/dialog',
    'directive/selectorPosition'
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

    var view_conf = {           //访问量统计
        "options": {
            "chart": {
                "type": "column",
                "animation": true,
                height:300
            },
            "plotOptions": {
                "series": {
                    "stacking": "normal",
                    "animation": true
                }
            }
        },
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
                'methods':['view', 'share_view'],
                'default_pos':1,
                'default_prop':1,
                'staff':1
            };
            if(global_company.custom && global_company.custom.identify){
                params.methods.push('employer_share_view');
            }

            _.extend(params, p);
            var conf = this;
            statistic.search(params, function (res) {
                conf.series = [];

                if(global_company.custom && global_company.custom.identify){
                    conf.series.push({
                        name: '非员工转发',
                        //data: res['track']
                        data: data_to_points(res['share_view']),
                        color:'#fdc111'
                    });
                    conf.series.push({
                        name: '非员工直接访问',
                        //data: res['origin']
                        data: data_to_points(res['view']),
                        color:'#b8e06d'
                    });
                    conf.series.push({
                        name: '来自员工转发',
                        //data: res['origin']
                        data: data_to_points(res['employer_share_view']),
                        color:'#5F9EA0'
                    });
                }else{
                    conf.series.push({
                        name: '来自转发',
                        //data: res['track']
                        data: data_to_points(res['share_view']),
                        color:'#fdc111'
                    });
                    conf.series.push({
                        name: '直接访问',
                        //data: res['origin']
                        data: data_to_points(res['view']),
                        color:'#b8e06d'
                    });
                }

                //conf.title.text = '访问量统计';
            })
        }
    };

    var apply_conf = {            //申请量统计
        "options": {
            "chart": {
                "type": "column",
                "animation": true,
                height:300
            },
            "plotOptions": {
                "series": {
                    "stacking": "normal",
                    "animation": true
                }
            }
        },
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
        'select_no_prop': 1,
        'search': function (statistic, p) {
            if(arguments.length == 1){
                p = {};
            }
            var params = {
                'methods':['apply','share_apply'],
                'default_pos':1
            };

            if(global_company.custom && global_company.custom.identify){
                params.methods.push('employer_share_apply');
            }

            _.extend(params, p);
            var conf = this;
            statistic.search(params, function (res) {
                conf.series = [];

                if(global_company.custom && global_company.custom.identify){
                    conf.series.push({
                        name: '非员工申请量',
                        data: data_to_points(res['apply']),
                        color:'#b8e06d'
                    });
                    conf.series.push({
                        name: '员工转发的申请',
                        data: data_to_points(res['employer_share_apply']),
                        color:'#5F9EA0'
                    });
                }else{
                    conf.series.push({
                        name: '申请量',
                        data: data_to_points(res['apply']),
                        color:'#b8e06d'
                    });
                }

                //conf.title.text = '申请量统计';
            })
        }
    };
    var share_conf = {     //转发量统计
        "options": {
            "chart": {
                "type": "column",
                "animation": true,
                height:300
            },
            "plotOptions": {
                "series": {
                    "stacking": "normal",
                    "animation": true
                }
            }
        },
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
                'methods':['share'],
                'default_pos':1,
                'default_prop':1
            };

            if(global_company.custom && global_company.custom.identify){
                params.methods.push('employer_share');
            }
            _.extend(params, p);
            var conf = this;
            statistic.search(params, function (res) {
                conf.series = [];
                if(global_company.custom && global_company.custom.identify){
                    conf.series.push({
                        name: '非员工转发',
                        data: data_to_points(res['share']),
                        color:'#fea500'
                    });
                    conf.series.push({
                        name: '员工转发',
                        data: data_to_points(res['employer_share']),
                        color:'#5F9EA0'
                    });
                }else{
                    conf.series.push({
                        name: '转发量',
                        data: data_to_points(res['share']),
                        color:'#fea500'
                    });
                }

                conf.title.text = '';
            })
        }
    };
    var share_effect_conf = {      //转发效果统计
        "options": {
            "chart": {
                "type": "column",
                "animation": true,
                height:300
            },
            "plotOptions": {
                "series": {
                    "stacking": "normal",
                    "animation": true
                }
            }
        },
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
                'methods':['share_view', 'share_apply'],
                'default_pos':1,
                'default_prop':1
            };

            if(global_company.custom && global_company.custom.identify){
                params.methods.push('employer_share_view','employer_share_apply');
            }
            _.extend(params, p);
            var conf = this;
            statistic.search(params, function (res) {
                conf.series = [];

                if(global_company.custom && global_company.custom.identify){
                    conf.series.push({
                        name: '非员工转发后被访问',
                        data: data_to_points(res['share_view']),
                        color:'#01dfd0'
                    });
                    conf.series.push({
                        name: '非员工转发后被申请',
                        data: data_to_points(res['share_apply']),
                        color:'#e1dc20'
                    });
                    conf.series.push({
                        name: '员工转发后被访问',
                        data: data_to_points(res['employer_share_view']),
                        color:'#6495ED'
                    });
                    conf.series.push({
                        name: '员工转发后被申请',
                        data: data_to_points(res['employer_share_apply']),
                        color:'#5F9EA0'
                    });
                }else{
                    conf.series.push({
                        name: '转发后被访问量',
                        data: data_to_points(res['share_view']),
                        color:'#01dfd0'
                    });
                    conf.series.push({
                        name: '转发后被申请量',
                        data: data_to_points(res['share_apply']),
                        color:'#e1dc20'
                    });
                }

                conf.title.text = '';
            })
        }
    };

    var apply_channel_conf = {     //申请渠道
        "options": {
            "chart": {
                "type": "pie",
                "animation": true,
                height:300
            },
            "plotOptions": {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            }
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
                'methods':['apply_channel'],
                'default_pos':1,
                'default_prop':1
            };
            _.extend(params, p);
            var conf = this;
            statistic.search(params, function (res) {
                conf.series = [];
                conf.series.push({
                    name: '投递数',
                    //colorByPoint: true,
                    data: data_to_pie(res['apply_channel']),
                    colors: ['#b8e06d', '#fea500', '#84d7e5', '#ffe204', '#7a748e', '#01dfd0', '#ee6f8a', '#fec787']
                });
                conf.title.text = '';
            })
        }
    };
    var ref_conf = {           //内部推荐
        "options": {
            "chart": {
                "type": "column",
                "animation": true,
                height:300
            },
            "plotOptions": {
                "series": {
                    "stacking": "normal",
                    "animation": true
                }
            }
        },
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
                'methods':['ref'],
                'default_pos':1,
                'default_prop':1
            };

            if(global_company.custom && global_company.custom.identify){
                params.methods.push('employer_ref');
            }

            _.extend(params, p);
            var conf = this;
            statistic.search(params, function (res) {
                conf.series = [];
                if(global_company.custom && global_company.custom.identify) {
                    conf.series.push({
                        name: '非员工推荐数',
                        data: data_to_points(res['ref']),
                        color: '#ee6f8a'
                    });
                    conf.series.push({
                        name: '员工推荐数',
                        data: data_to_points(res['employer_ref']),
                        color: '#5F9EA0'
                    });
                }else{
                    conf.series.push({
                        name: '职位推荐数',
                        data: data_to_points(res['ref']),
                        color: '#ee6f8a'
                    });
                }
                conf.title.text = '';
            })
        }
    };

    var set_vm = function ($scope, statistic, $timeout) {
        var vm = $scope.vm = {};
        vm.cond = {
            pos_info:[]
        };

        vm.options = {
            pos_info: [],
            department: [],
            date: [],
            category: []
        };

        //起始时间日历
        vm.openStartCalendar = function ($event) {
            $timeout(function () {
                vm.calendarStartOpened = true;
            }, 0)
        };

        //截止时间日历
        vm.openEndCalendar = function ($event) {
            $timeout(function () {
                vm.calendarEndOpened = true;
            }, 0)
        };

        vm.query = function(){
            var params = {};
            if(vm.cond.department && vm.cond.department.id){
                params['department_id'] = vm.cond.department.id;
            }
            if(vm.cond.category && vm.cond.category.id){
                params['category_id'] = vm.cond.category.id;
            }
            if(vm.cond.pos_info.length > 1 || (vm.cond.pos_info.length == 1 && vm.cond.pos_info[0].id != 0)){
                var pos_id_list = [];
                var prop_id_list = [];
                _.each(vm.cond.pos_info, function(p){
                    if(p.id.substr(0, 8) == 'poslist_'){
                        prop_id_list.push(parseInt(p.id.substr(8)));
                    } else if(p.id.substr(0, 4) == 'pos_'){
                        pos_id_list.push(parseInt(p.id.substr(4)));
                    }
                });
                if(!_.isEmpty(pos_id_list)){
                    params['pos_id_list'] = pos_id_list;
                } else if(!_.isEmpty(prop_id_list)){
                    params['prop_id_list'] = prop_id_list;
                }
            }
            if(!_.isEmpty(params['pos_id_list']) || params['department_id'] || params['category_id']){
                params['prop_id_list'] = [-1];
            } else if(!_.isEmpty(params['prop_id_list'])){
                params['pos_id_list'] = [-1];
            }
            if(!_.isEmpty(params)){
                params['default_prop'] = 0;
                params['default_pos'] = 0;
            }
            if(vm.cond.startCalendar){
                params['startCalendar'] = vm.cond.startCalendar;
            }
            if(vm.cond.endCalendar){
                params['endCalendar'] = vm.cond.endCalendar;
            }

            $scope.chart_conf.search(statistic, params);
        };

        statistic.select({no_prop: $scope.chart_conf['select_no_prop']}, function (res) {
            vm.options.pos_info = res.pos_info;
            vm.options.department = res.department;
            vm.options.category = res.category;
            vm.options.date = res.date;
            vm.cond = {
                pos_info: [vm.options.pos_info[0]],
                department: vm.options.department[0],
                category: vm.options.category[0],
                date: vm.options.date[0]
            };
            $scope.$watch('vm.cond.pos_info', vm.query);
        });
    };

    //追踪
    md.controller('statisticTrackCtrl', ['$rootScope', '$scope', '$location', '$state', 'statistic','$timeout', 'dialog', function ($rootScope, $scope, $location, $state, statistic, $timeout, dialog) {
        $scope.sub_title = $state.current.title;
        var vm = $scope.vm = {};

        statistic.track({}, function(data){
            vm.track_data = data
        })
    }]);

    //追踪
    md.controller('statisticTrackDetailCtrl', ['$rootScope', '$scope', '$location', '$state', 'statistic', 'dialog', function ($rootScope, $scope, $location, $state, statistic, dialog) {
        var open_id = $state['params']['open_id'];
        $scope.sub_title = $state.current.title;
        var vm = $scope.vm = {};
        statistic.track_detail({open_id:open_id}, function(data){
            vm.track_data = data
            $scope.sub_title = $state.current.title + '-' + data['nickname']
        })
    }]);

    //浏览量
    md.controller('statisticViewCtrl', ['$rootScope', '$scope', '$location', '$state', 'statistic','$timeout', 'dialog', function ($rootScope, $scope, $location, $state, statistic,$timeout, dialog) {
        $scope.sub_title = $state.current.title;
        $scope.chart_conf = view_conf;

        set_vm($scope, statistic, $timeout);
    }]);

    //申请量
    md.controller('statisticApplyCtrl', ['$rootScope', '$scope', '$location', '$state', 'statistic','$timeout', 'dialog', function ($rootScope, $scope, $location, $state, statistic,$timeout, dialog) {
        $scope.sub_title = $state.current.title;
        $scope.chart_conf = apply_conf;

        set_vm($scope, statistic, $timeout);
    }]);

    //转发量
    md.controller('statisticShareCtrl', ['$rootScope', '$scope', '$location', '$state', 'statistic','$timeout', 'dialog', function ($rootScope, $scope, $location, $state, statistic,$timeout, dialog) {
        $scope.sub_title = $state.current.title;
        $scope.isShare= $state.includes('statistic.share');
        $scope.chart_conf = share_conf;

        set_vm($scope, statistic, $timeout);
    }]);

    //转发效果
    md.controller('statisticShareEffectCtrl', ['$rootScope', '$scope', '$location', '$state', 'statistic','$timeout', 'dialog', function ($rootScope, $scope, $location, $state, statistic,$timeout, dialog) {
        $scope.sub_title = $state.current.title;
        $scope.chart_conf = share_effect_conf;

        set_vm($scope, statistic, $timeout);
    }]);

    //申请渠道
    md.controller('statisticApplyChannelCtrl', ['$rootScope', '$scope', '$location', '$state', 'statistic','$timeout', 'dialog', function ($rootScope, $scope, $location, $state, statistic,$timeout, dialog) {
        $scope.sub_title = $state.current.title;
        $scope.chart_conf = apply_channel_conf;

        set_vm($scope, statistic, $timeout);
    }]);

    //职位推荐量
    md.controller('statisticRefCtrl', ['$rootScope', '$scope', '$location', '$state', 'statistic','$timeout', 'dialog', function ($rootScope, $scope, $location, $state, statistic,$timeout, dialog) {
        $scope.sub_title = $state.current.title;
        $scope.chart_conf = ref_conf;

        set_vm($scope, statistic, $timeout);
    }]);


    //统计页入口
    md.controller('statisticIndexCtrl', ['$rootScope', '$scope', '$location', '$state', 'statistic', 'dialog', function ($rootScope, $scope, $location, $state, statistic, dialog) {
        $rootScope.page = 'statistic';




        $scope.view_conf = view_conf;
        view_conf.search(statistic);

        $scope.apply_conf = apply_conf;
        apply_conf.search(statistic);

        $scope.share_conf = share_conf;
        share_conf.search(statistic);

        $scope.share_effect_conf = share_effect_conf;
        share_effect_conf.search(statistic);

        $scope.apply_channel_conf = apply_channel_conf;
        apply_channel_conf.search(statistic);

        $scope.ref_conf = ref_conf;
        ref_conf.search(statistic);
    }]);

    //职位列表
    md.controller('statisticCtrl', ['$rootScope', '$scope', '$location', '$state', 'statistic', 'dialog', function ($rootScope, $scope, $location, $state, statistic, dialog) {
        $rootScope.page = 'statistic';
        var vm = $scope.vm = {};
        vm.cond = {
            pos_info:[]
        };

        vm.options = {
            pos_info: [],
            department: [],
            date: [],
            category: []
        };
        statistic.select(function (res) {
            vm.options.pos_info = res.pos_info;
            vm.options.department = res.department;
            vm.options.category = res.category;
            vm.options.date = res.date;

            vm.cond = {
                pos_info: [vm.options.pos_info[0]],
                department: vm.options.department[0],
                category: vm.options.category[0],
                date: vm.options.date[0]
            };
            $scope.$watch('vm.cond.pos_info', vm.query);

            vm.query();
        });

        vm.query = function () {
            var params = {};
            params['department_id'] = vm.cond.department['id'];
            params['category_id'] = vm.cond.category['id'];
            params['date_id'] = vm.cond.date['id'];
            params['pos_info'] = vm.cond.pos_info;
            statistic.search(params, function (res) {
                $scope.chartConfig.series = [];
                $scope.chartConfig.series.push({
                    name: '来自转发',
                    //data: res['track']
                    data: data_to_points(res['track'])
                });
                $scope.chartConfig.series.push({
                    name: '直接访问',
                    //data: res['origin']
                    data: data_to_points(res['origin'])
                });
                $scope.chartConfig.title.text = '访问量统计';
            })
        };

        $scope.chartConfig = {
            "options": {
                "chart": {
                    "type": "column",
                    "animation": true
                },
                "plotOptions": {
                    "series": {
                        "stacking": "normal",
                        "animation": true
                    }
                }
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                allowDecimals: false
            },
            "series": [],
            "title": {
                "text": ""
            }
        }
    }]);
});

