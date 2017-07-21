define([
    'app',
    '../../lib/services/api',
    '../../lib/services/dialog',
    '../../lib/services/alert',
    '../main/filter/filter',
    '../main/filter/values'
], function (md) {
    md.controller('projectListController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api','$stateParams',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api, $stateParams) {
                var vm = $scope.vm = {};
                var project_api = api.init('project');
                project_api.query(function(data){
                    vm.items = data;
                });

            }]
    );

    md.controller('projectInfoController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api','$stateParams',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api, $stateParams) {
                var vm = $scope.vm = {};
                var project_api = api.init('project');
                var project_user_api = api.init('project_user');
                vm.id = $stateParams.id;
                vm.load = function(){
                    project_api.get({id:vm.id}, function(data){
                        vm.item = data;
                    });
                };
                vm.roles = [{
                    id:'leader1',
                    name:'组长'
                },{
                    id:'leader2',
                    name:'副组长'
                },{
                    id:'member',
                    name:'成员'
                }];
                vm.load();
                vm.batchAll = function(){
                    if(vm.batch_all){
                        vm.batch_items = angular.copy(vm.item.users);
                    } else {
                        vm.batch_items = [];
                    }
                };

                vm.batchDelete = function(){
                    var user_ids = _.pluck(vm.batch_items, 'id');
                    console.log(user_ids);
                    var quest = {
                        project_id:vm.id,
                        user_ids: user_ids
                    }
                    project_user_api.batchDelete(quest, function(){
                        vm.load();
                    })
                }

                vm.batchEdit = function(){
                    var user_ids = _.pluck(vm.batch_items, 'id');
                    console.log(user_ids);
                    var quest = {
                        project_id:vm.id,
                        user_ids: user_ids,
                        role:vm.quest.role
                    }
                    project_user_api.batchEdit(quest, function(){
                        vm.load();
                    })
                }

            }]
    );

    md.controller('projectNewController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api','$stateParams',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api, $stateParams) {
                var vm = $scope.vm = {};
                var project_api = api.init('project');

                vm.item = {percent:0};

                vm.save = function(){
                    vm.item.start_time = api.dateToDayStr(vm.item.start_time_d);
                    vm.item.end_time = api.dateToDayStr(vm.item.end_time_d);
                    project_api.save(vm.item, function(data){
                        console.log(data);
                        alert("操作成功");
                    })
                }
            }]
    );

    md.controller('projectEditController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api','$stateParams','$filter',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api, $stateParams, $filter) {
                var vm = $scope.vm = {};
                var project_api = api.init('project');
                vm.id = $stateParams.id;
                project_api.get({id:vm.id}, function(data){
                    vm.item = data;
                    vm.item.start_time_d = api.strToDate(vm.item.start_time);
                    vm.item.end_time_d = api.strToDate(vm.item.end_time);
                });

                vm.save = function(){
                    vm.item.start_time = api.dateToDayStr(vm.item.start_time_d);
                    vm.item.end_time = api.dateToDayStr(vm.item.end_time_d);
                    project_api.save(vm.item, function(data){
                        console.log(data);
                        alert("操作成功");
                    })
                }
            }]
    );

    md.controller('projectUserController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api','$stateParams','$filter',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api, $stateParams, $filter) {
                var vm = $scope.vm = {};
                var project_api = api.init('project');
                var project_user_api = api.init('project_user');
                var user_api = api.init('user');
                vm.id = $stateParams.id;
                vm.query = {};
                project_api.get({id:vm.id}, function(data){
                    vm.item = data;
                    vm.item.start_time_d = api.strToDate(vm.item.start_time);
                    vm.item.end_time_d = api.strToDate(vm.item.end_time);
                });

                vm.doSearch = function(){
                    user_api.query(vm.query, function(data){
                        vm.users = data;
                    })
                };

                vm.save = function(){
                    var user_ids = _.pluck(vm.batch_items, 'id');
                    vm.quest = {
                        project_id: vm.id,
                        user_ids: user_ids,
                        role:'member'
                    };
                    project_user_api.batchEdit(vm.quest, function(data){
                        alert('操作成功');
                    })
                };

                vm.batchAll = function(){
                    if(vm.batch_all){
                        vm.batch_items = angular.copy(vm.users);
                    } else {
                        vm.batch_items = [];
                    }
                };
            }]
    );

});