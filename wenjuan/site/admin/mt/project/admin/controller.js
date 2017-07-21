define([
    'app',
    '../../lib/services/api',
    '../../lib/services/dialog',
    '../../lib/services/alert',
    '../../lib/services/options',
    '../../lib/services/showFilter',
    '../main/filter/filter',
    '../../lib/directives/uploader/simUploader',
    '../main/filter/values'
], function (md) {
    md.controller('modalNewAdminController', ['$rootScope','$scope', '$state','$location','$uibModalInstance','alertService','api','item',
            function ($rootScope, $scope, $state, $location, $uibModalInstance, alertService, api, item) {
                var vm = $scope.vm = {};
                var admin_api = api.init('admin');

                vm.super_options = [
                    {value:1, name:"是"},
                    {value:0, name:"否"}
                ];
                vm['create'] = function(){
                    admin_api.save(vm.item, function(data){
                        alertService.add("操作成功");
                        $uibModalInstance.close();
                    })
                };

                vm.close = function(){
                    $uibModalInstance.close();
                }
            }]
    );

    md.controller('modalEditAdminController', ['$rootScope','$scope', '$state','$location','$uibModalInstance','alertService','api','item',
            function ($rootScope, $scope, $state, $location, $uibModalInstance, alertService, api, item) {
                var vm = $scope.vm = {};
                vm.id = item.id;
                var admin_api = api.init('admin');

                vm.super_options = [
                    {value:1, name:"是"},
                    {value:0, name:"否"}
                ];
                vm['load'] = function(){
                    admin_api.get({id: vm.id}, function(data){
                        vm.item = data;
                    })
                };
                vm.load();

                vm['edit'] = function(){
                    admin_api.save({id: vm.id}, vm.item, function(data){
                        alertService.add("操作成功");
                        $uibModalInstance.close();
                    })
                };

                vm.close = function(){
                    $uibModalInstance.close();
                }
            }]
    );

    md.controller('modalEditRoleAdminController', ['$rootScope','$scope', '$state','$location','$uibModalInstance','alertService','api','item',
            function ($rootScope, $scope, $state, $location, $uibModalInstance, alertService, api, item) {
                var vm = $scope.vm = {};
                vm.id = item.id;
                var admin_api = api.init('admin');
                var agent_api = api.init('agent');

                vm['load'] = function(){
                    admin_api.get({id: vm.id}, function(data){
                        vm.item = data;
                        agent_api.query(function(data){
                            vm.roles = data;
                            vm.roles.forEach(function(role){
                                role.$enable = 0;
                                if(vm.item.agent_ids.indexOf("" + role.id) > -1){
                                    role.$enable = 1;
                                }
                            })
                        })
                    });
                };
                vm.load();

                vm['edit'] = function(){
                    //取选中的agent_id
                    var agent_ids = vm.roles.filter(function(role){
                        return role.$enable
                    }).map(function(role){
                        return role.id
                    });
                    var act_api = api.raw('/api/admin/admin/edit-agent');
                    act_api.save({id:vm.id, agent_ids:agent_ids}, function(data){
                        console.log(data);
                        alertService.add("操作成功")
                    })
                };

                vm.close = function(){
                    $uibModalInstance.close();
                }
            }]
    );

    md.controller('adminListController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api','$stateParams',
            function ($rootScope, $scope, $state, $location, $uibModal, alertService, api, $stateParams) {
                var vm = $scope.vm = {};
                var admin_api = api.init('admin');

                vm.load = function(){
                    admin_api.query(function(data){
                        vm.items = data;
                    });
                };
                vm.load();

                vm['delete'] = function(id){
                    if(!confirm("确认删除信息？")){
                        return;
                    }
                    admin_api.delete({id:id}, function(data){
                        alertService.add("操作成功");
                        vm.load();
                    });
                };

                vm['new'] = function(){
                    $uibModal.open({
                        templateUrl:"project/admin/views/modal-new.html",
                        controller: 'modalNewAdminController',
                        controllerAs: '$ctrl',
                        resolve: {
                            item: function () {
                                return {}
                            }
                        }
                    }).result.then(function() {
                            vm.load();
                        });
                }

                vm['edit'] = function(id){
                    $uibModal.open({
                        templateUrl:"project/admin/views/modal-edit.html",
                        controller: 'modalEditAdminController',
                        controllerAs: '$ctrl',
                        resolve: {
                            item: function () {
                                return {id:id}
                            }
                        }
                    }).result.then(function() {
                            vm.load();
                        });
                }

                vm['editRole'] = function(item){
                    if(item.super){
                        alertService.add("超级管理员不能编辑角色");
                        return
                    }
                    $uibModal.open({
                        templateUrl:"project/admin/views/modal-edit-role.html",
                        controller: 'modalEditRoleAdminController',
                        controllerAs: '$ctrl',
                        resolve: {
                            item: function () {
                                return {id:item.id}
                            }
                        }
                    }).result.then(function() {
                            vm.load();
                        });
                }
            }]
    );
});