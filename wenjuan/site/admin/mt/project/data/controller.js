define([
    'app',
    '../../lib/services/api',
    '../../lib/services/dialog',
    '../../lib/services/utils',
    '../../lib/services/alert',
    '../main/filter/filter',
    '../../lib/directives/uploader/simUploader',
    '../main/filter/values'
], function (md) {
    md.controller('dataCase2Controller', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api','$stateParams',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api, $stateParams) {
                //用户信息雷达图
                var pic2 = echarts.init(document.getElementById('pic2'));
                var user_id = $stateParams['id'];
                var data_api = api.raw('/api/admin/data/user-radar?user_id='+user_id);
                data_api.get(function(data){
                    var indicator = _.map(data['goals'], function(i){
                        return {
                            name: i,
                            max:1
                        }
                    });
                    var option = {
                        title: {
                            text: '基础雷达图'
                        },
                        tooltip: {},
                        legend: {
                            data: [data['user']['cn_name']]
                        },
                        radar: {
                            // shape: 'circle',
                            indicator: indicator,
                            axisLabel: {
                                show: true
                            }
                        },
                        series: [{
                            name: '预算 vs 开销（Budget vs spending）',
                            type: 'radar',
                            // areaStyle: {normal: {}},
                            data : [
                                {
                                    value : data['scores'],
                                    name : data['user']['cn_name']
                                }
                            ]
                        }]
                    };

                    pic2.setOption(option);
                })
            }]
    );
    md.controller('dataCase3Controller', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api','$stateParams',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api, $stateParams) {
                //var pic2 = echarts.init(document.getElementById('pic2'));
                var vm = $scope.vm = {};
                var user_id = $stateParams['id'];
                var data_api = api.raw('/api/admin/data/user-words?user_id='+user_id);
                data_api.get(function(data){
                    vm.text = data['words'];
                    vm.items = data['word_count'];
                })
            }]
    );
    md.controller('dataCase4Controller', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api','$stateParams',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api, $stateParams) {
                //var pic2 = echarts.init(document.getElementById('pic2'));
                var pic = echarts.init(document.getElementById('pic'));
                var vm = $scope.vm = {};
                //var user_id = $stateParams['id'];
                var data_api = api.raw('/api/admin/data/user-score');
                data_api.get(function(data){
                    var series = [];
                    var legend = [];
                    _.each(data.data, function(d){
                        legend.push(d.name);
                        series.push({
                            name: d.name,
                            type: 'scatter',
                            showSymbol: false,
                            label: {
                                emphasis: {
                                    show: true,
                                    formatter: function (param) {
                                        return param.data[1];
                                    },
                                    position: 'top',
                                    textStyle:{
                                        color: 'red'
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#C0D9D9'
                                },
                                emphasis:{
                                    color: 'red'
                                }
                            },
                            data: d.data
                        })
                    })
                    console.log(series)

                    var option = {
                        tooltip: {},
                        legend: {
                            right: 10,
                            data: legend
                        },
                        xAxis: {
                            type: 'time',
                            splitLine: {
                                show: false
                            }
                        },
                        yAxis: {},
                        series: series
                    };

                    pic.setOption(option);
                })
            }]
    );

    md.controller('dataCase5Controller', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api','$stateParams',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api, $stateParams) {
                //var pic2 = echarts.init(document.getElementById('pic2'));
                var pic = echarts.init(document.getElementById('pic'));
                var vm = $scope.vm = {};
                var user_id = $stateParams['id'];

                vm.load = function(){
                    console.log(vm.month);
                    var data_api = api.raw('/api/admin/data/norm-dist');
                    data_api.get({month:vm.month},  function(data){
                        var x = _.keys(data['interval_count_line']);
                        vm.x_data = x;
                        vm.nd_detail = data['details'];
                        vm.nd_count = data['interval_count_line'];
                        vm.nd_users_info = data['users_info'];
                        vm.info = data['info'];

                        var xAxis = {
                            type: 'category',
                            data: x
                        };
                        var series = [
                            {
                                name: '案例数',
                                type: 'bar',
                                itemStyle:{
                                    normal:{
                                        color: '#50E3C2'
                                    }
                                },
                                label: {
                                    emphasis: {
                                        show: true,
                                        position: 'top',
                                        textStyle:{
                                            color: 'red'
                                        }
                                    }
                                },
                                data: _.values(data['interval_count_line'])
                            },
                            {
                                name:'正态曲线',
                                type:'line',
                                smooth: true,
                                itemStyle:{
                                    normal:{
                                        color: '#54C7FC'
                                    }
                                },
                                yAxisIndex: 1,
                                label: {
                                    emphasis: {
                                        show: true,
                                        position: 'top',
                                        textStyle:{
                                            color: 'black'
                                        }
                                    }
                                },
                                data: _.values(data['norm_dist_line'])
                            },
                            {
                                type: 'scatter',
                                data: [],
                                name: 'personal'
                            }
                        ];


                        vm.option = {
                            xAxis: xAxis,
                            yAxis: [
                                {
                                    type: 'value',
                                    max: _.max(data['interval_count_line']) * 1.5,
                                    name: '案例数'
                                },
                                {
                                    type: 'value',
                                    name: '概率密度值',
                                    show: false,
                                    splitLine:{
                                        show: false
                                    }
                                }
                            ],
                            series: series
                        };

                        pic.setOption(vm.option);
                    });
                }

                vm.personal = function(){
                    var personal_data = vm.person.data
                    var p_line = [];
                    _.each(personal_data, function(pd){
                        var pd_x = vm.findX(pd);
                        var pd_place = vm.findPlace(pd, vm.nd_detail[pd_x]);
                        var pd_height = vm.nd_count[pd_x] * (vm.nd_count[pd_x] - pd_place) / vm.nd_count[pd_x]
                        pd_height = Math.round(pd_height, 2)
                        p_line.push([pd_x, pd_height, pd])
                    });

                    vm.option.series.pop();
                    vm.option.series.push({
                        type: 'scatter',
                        data: p_line,
                        label: {
                            normal: {
                                show: true,
                                formatter: function (param) {
                                    return param.data[2];
                                },
                                position: 'top',
                                textStyle:{
                                    color: 'black'
                                }
                            }
                        },
                        itemStyle:{
                            normal:{
                                color: '#0076FF'
                            }
                        },
                        name: 'personal'
                    });
                    pic.setOption(vm.option);
                };

                vm.findX = function(d){
                    for(var i in vm.x_data){
                        var min = i>0 ? vm.x_data[i-1] : 0;
                        if(d > min && d <= vm.x_data[i]){
                            return vm.x_data[i];
                        }
                    }
                    return vm.x_data[vm.x_data.length - 1];
                };

                vm.findPlace = function(x, arr){
                    var p = 0;
                    for(var i in arr){
                        if(x < arr[i]){
                            p += 1;
                        }
                    }
                    return p;
                }

                vm.load();
            }]
    );

    md.controller('dataCase6Controller', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api','$stateParams',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api, $stateParams) {
                //var pic2 = echarts.init(document.getElementById('pic2'));
                var pic = echarts.init(document.getElementById('pic'));
                var user_id = $stateParams['id'];
                var vm = $scope.vm = {};
                //var user_id = $stateParams['id'];
                var data_api = api.raw('/api/admin/data/user-score');
                data_api.get({user_id:user_id}, function(data){
                    var series = [];
                    var legend = [];
                    _.each(data.data, function(d){
                        vm.username = d.name
                        legend.push(d.name);
                        series.push({
                            name: d.name,
                            type: 'line',
                            //showSymbol: false,
                            data: d.data
                        })
                    });
                    var option = {
                        tooltip: {},
                        legend: {
                            right: 10,
                            data: legend
                        },
                        xAxis: {
                            type: 'time'
                        },
                        yAxis: {},
                        series: series
                    };

                    pic.setOption(option);
                })
            }]
    );

});