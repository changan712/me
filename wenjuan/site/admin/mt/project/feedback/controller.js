define([
    'app',
    '../../lib/services/api',
    '../../lib/services/dialog',
    '../../lib/services/alert',
    '../../lib/services/options',
    '../../lib/services/showFilter',
    '../main/filter/filter',
    '../main/filter/values'
], function (md) {
    md.controller('feedbackListController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api) {
                var vm = $scope.vm = {};
                var feedback_api = api.init('feed_back');

                vm.query = {};
                vm.doQuery = function(){
                    feedback_api.query(vm.query, function(data, header_f){
                        vm.items = data;
                        vm._meta = api.meta(header_f);
                        console.log(vm._meta);
                        console.log(data);
                    });
                };

                vm.pageChanged = function(){
                    vm.query._page = vm._meta.currentPage;
                    vm.doQuery();
                }
                vm.doQuery();
            }]
    );


});