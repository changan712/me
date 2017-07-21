define([
    'app',
    '../../lib/services/api',
    '../../lib/services/dialog',
    '../../lib/services/alert',
    '../main/filter/filter',
    '../main/filter/values'
], function (md) {
    md.controller('valuetypeListController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api','$stateParams',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api, $stateParams) {
                var vm = $scope.vm = {};
                var vt_api = api.init('value_type');
                vt_api.query(function(data){
                    vm.items = data;
                });

            }]
    );

    md.controller('valuetypeInfoController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api','$stateParams',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api, $stateParams) {
                var vm = $scope.vm = {};
                var vt_api = api.init('value_type');
                var v_api = api.init('value');
                vm.id = $stateParams.id;
                vm.quest = {
                    type_id:vm.id
                }

                vm.load = function(){
                    vt_api.get({id:vm.id}, function(data){
                        vm.item = data;
                    });
                };
                vm.load();

                vm.delete = function(){
                    if(vm.item.values.length > 0){
                        alert("请先删除所有子条目");
                        return
                    }
                    vt_api.delete({id:vm.id}, function(data){
                        alert("操作成功");
                        location = "#/app/valuetype/list";
                    })
                }

                vm.saveValue = function(){
                    if(!vm.quest.name){
                        alert("价值观内容不能为空");
                        return;
                    }
                    v_api.save(vm.quest, function(){
                        vm.load();
                    })
                }

                vm.editValue = function(value_item){
                    v_api.save(value_item, function(){
                        vm.load();
                    })
                }

                vm.deleteValue = function(value_id){
                    if(!confirm("确认删除？价值观关联feed信息将受影响，可能导致统计结果偏差")){
                        return;
                    }
                    v_api.delete({id:value_id}, function(){
                        vm.load();
                    })
                }

            }]
    );

    md.controller('valuetypeNewController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api','$stateParams',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api, $stateParams) {
                var vm = $scope.vm = {};
                var vt_api = api.init('value_type');
                var v_api = api.init('value');

                vm.save = function(){
                    vt_api.save(vm.item, function(data){
                        alert("操作成功");
                    })
                }
            }]
    );

    md.controller('valuetypeEditController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api','$stateParams','$filter',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api, $stateParams, $filter) {
                var vm = $scope.vm = {};
                vm.id = $stateParams.id;
                var vt_api = api.init('value_type');
                var v_api = api.init('value');
                vm.load = function(){
                    vt_api.get({id:vm.id}, function(data){
                        vm.item = data;
                    });
                };
                vm.load()

                vm.save = function(){
                    vt_api.save({id:vm.id},vm.item, function(data){
                        alert("操作成功");
                    })
                }
            }]
    );
});