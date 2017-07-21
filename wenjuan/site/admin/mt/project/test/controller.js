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
    md.controller('testCase1Controller', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api','$stateParams',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api, $stateParams) {
                var pic1 = echarts.init(document.getElementById('pic1'));
                console.log(pic1)
                var data_api = api.raw('/api/app/test/related-data');
                data_api.get(function(data){
                    console.log(data);

                    var option = {
                        title: {
                            text: 'ECharts 入门示例'
                        },
                        tooltip: {},
                        /*legend: {
                            // selectedMode: 'single',
                            data: data.categories.map(function (a) {
                                console.log(a);
                                return a;
                            })
                        },*/
                        animation: false,
                        series : [
                            {
                                type: 'graph',
                                layout: 'force',
                                data: data.nodes,
                                links: data.links,
                                categories: data.categories,
                                roam: true,
                                draggable:true,
                                label: {
                                    normal: {
                                        position: 'right',
                                        show: true
                                    }
                                },
                                edgeSymbol:['none', 'arrow'],
                                force: {
                                    repulsion: 400
                                }
                            }
                        ]
                    };

                    pic1.setOption(option);
                })
            }]
    );

});