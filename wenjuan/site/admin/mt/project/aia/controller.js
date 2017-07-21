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

    md.controller('aiaNormaldistController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api','$stateParams',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api, $stateParams) {
                var vm = $scope.vm = {};

                //var values = [39,37,35,40,38,36];
                var values = [36,37,40,35,38,39];
                var starts = {
                    39: 0.47,
                    37: 0.48,
                    35: 0.48,
                    40: 0.45,
                    38: 0.52,
                    36: 0.48
                };
                var nd_api = api.raw('/api/admin/aia-score/normal-dist');
                vm.data = {};
                _.each(values, function(v){
                    nd_api.get({value_id:v, start:starts[v]}, function(data){
                        vm.data[v] = data;
                        console.log(data);
                        var x = _.keys(data['interval_count_line']);

                        var xAxis = {
                            type: 'category',
                            data: x
                        };
                        var series = [
                            {
                                name: '',
                                type: 'bar',
                                itemStyle:{
                                    normal:{
                                        color: '#bfbfbf'
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
                                barWidth: '8px',
                                data: _.values(data['interval_count_line'])
                            },
                            {
                                name:'正态曲线',
                                type:'line',
                                smooth: true,
                                itemStyle:{
                                    normal:{
                                        color: '#d31145'
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
                                data: _.values(data['norm_dist_line']),
                                showSymbol: false
                            },
                            {
                                type: 'scatter',
                                data: [],
                                name: 'personal'
                            }
                        ];


                        var option = {
                            title:{
                                text:data.info.name,
                                left:'center',
                                textStyle:{
                                    fontFamily: '黑体'
                                }
                            },
                            xAxis: xAxis,
                            yAxis: [
                                {
                                    type: 'value',
                                    max: _.max(data['interval_count_line']) * 1.5,
                                    name: ''
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

                        var pic = echarts.init(document.getElementById('pic_'+v));
                        pic.setOption(option);
                    })
                })
            }]
    );

    md.controller('aiaScoreController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api','$stateParams',
        function ($rootScope, $scope, $state, $location, $modal, alertService, api, $stateParams) {
            var vm = $scope.vm = {};
            vm.parseData = function(){
                var secs = vm.raw_data.replace("\r\n", "\n").split("\n");

                var import_api = api.raw('/api/admin/aia-score/import');
                var data = [];
                _.each(secs, function(sec){
                    var cols = sec.split(/\s+/);
                    if(cols.length < 2) return;
                    data.push({feed_id:cols[0], score:cols[1]});
                });
                import_api.save({data:data}, function(ret){
                    vm.queryUnScoreFeeds();
                    alert('导入成功');
                })
            };

            vm.getRawScore = function(feed_ids){
                var score_api = api.raw('/api/admin/aia-score/raw-score');
                score_api.save({feed_ids:feed_ids}, function(data){
                    console.log(data);
                    vm.raw_score = data;
                });
            }

            vm.queryUnScoreFeeds = function(){
                var data_api = api.raw('/api/admin/aia-score/un-score-feeds');
                data_api.query(function(items){
                    console.log(items)
                    vm.unscore_feeds = items;
                    var feed_ids = [];
                    _.each(items, function(item){
                        feed_ids.push(item.id);
                    })
                    vm.getRawScore(feed_ids);
                });
            }

            vm.queryUnScoreFeeds();
        }]
    );
    md.controller('aiaCommonController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api','$stateParams',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api, $stateParams) {
                //var pic2 = echarts.init(document.getElementById('pic2'));
                var vm = $scope.vm = {};

                vm.active_total = function(){
                    vm.active = 'active_total';
                    var data_api = api.raw('/api/admin/aia-data/active-total');
                    data_api.query(function(data){
                        vm.data = data;
                        vm.table_class = ''
                    })
                };

                vm.user_active = function(){
                    vm.active = 'user_active';
                    var data_api = api.raw('/api/admin/aia-data/user-act');
                    data_api.query(function(data){
                        vm.data = data;
                        vm.table_class = ''
                    })
                };

                vm.buz_feed_count = function(){
                    vm.active = 'buz_feed_count';
                    var data_api = api.raw('/api/admin/aia-data/buz-feed-count');
                    data_api.query(function(data){
                        vm.data = data;
                        vm.table_class = ''
                    })
                }

                vm.value_feed_count = function(){
                    vm.active = 'value_feed_count';
                    var data_api = api.raw('/api/admin/aia-data/value-feed-count');
                    data_api.query(function(data){
                        vm.data = data;
                        vm.table_class = ''
                    })
                }

                vm.person_feed_count = function(){
                    vm.active = 'person_feed_count';
                    var data_api = api.raw('/api/admin/aia-data/person-feed-count');
                    data_api.query(function(data){
                        vm.data = data;
                        vm.table_class = ''
                    })
                }

                vm.ceo_like = function(){
                    vm.active = 'ceo_like';
                    var data_api = api.raw('/api/admin/aia-data/ceo-like');
                    data_api.query(function(data){
                        vm.data = data;
                        vm.table_class = ''
                    })
                }

                vm.feed_all = function(){
                    vm.active = 'feed_all';
                    var data_api = api.raw('/api/admin/aia-data/feed-all');
                    data_api.query(function(data){
                        vm.data = data;
                        vm.table_class = ''
                    })
                }
            }]
    );
});