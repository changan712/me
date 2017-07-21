define([
    'app',
    '../../lib/services/api',
    '../../lib/services/dialog',
    '../../lib/services/alert',
    '../main/filter/filter',
    '../main/filter/values'
], function (md) {
    md.controller('categoryViewController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api','$stateParams',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api, $stateParams) {
                var vm = $scope.vm = {};
                var category_api = api.init('category');
                vm.id = $stateParams.id;
                category_api.get({id:vm.id}, function(data){
                    vm.item = data;
                    console.log(data);
                });

            }]
    );


});