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
    md.controller('tkCommonController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api','$stateParams',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api, $stateParams) {
                //var pic2 = echarts.init(document.getElementById('pic2'));
                var vm = $scope.vm = {};

                vm.feed_count_func = function(){
                    var data_api = api.raw('/api/admin/tk-data/feeds-count');
                    data_api.query(function(data){
                        vm.data = data;
                        vm.table_class = 'w500'
                    })
                }
            }]
    );
});