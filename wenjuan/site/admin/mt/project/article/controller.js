define([
    'app',
    '../../lib/services/api',
    '../../lib/services/dialog',
    '../../lib/services/alert',
    '../main/filter/filter',
    '../main/filter/values'
], function (md) {
    md.controller('articleNewController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api) {
                var article_api = api.init('article');
                var category_api = api.init('category');
                var vm = $scope.vm = {};
                vm.item = {
                    category_id:$location.search()['category_id']
                };
                category_api.get({id:vm.item.category_id}, function(data){
                    vm.path = data.pathwo;
                });
                vm.submit = function(){
                    article_api.save(vm.item, function(data){
                        console.log(data);
                    });
                }
            }]
    );
});