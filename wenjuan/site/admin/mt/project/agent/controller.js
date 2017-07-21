define([
    'app',
    '../../lib/services/api',
    '../../lib/services/dialog',
    '../../lib/services/alert',
    '../../lib/services/options',
    '../../lib/services/showFilter',
    '../main/filter/filter',
    'fileUpload',
    '../main/filter/values'
], function (md) {
    md.controller('modalNewAgentController', ['$rootScope','$scope', '$state','$location','$uibModalInstance','alertService','api','item',
            function ($rootScope, $scope, $state, $location, $uibModalInstance, alertService, api, item) {
                var vm = $scope.vm = {};
                var agent_api = api.init('agent');

                vm['create'] = function(){
                    agent_api.save(vm.item, function(data){
                        alertService.add("操作成功");
                        $uibModalInstance.close();
                    })
                };

                vm.close = function(){
                    $uibModalInstance.close();
                }
            }]
    );

    md.controller('modalEditAgentController', ['$rootScope','$scope', 'FileUploader','$uibModalInstance','alertService','api','item',
            function ($rootScope, $scope, FileUploader, $uibModalInstance, alertService, api, item) {
                var vm = $scope.vm = {};
                vm.id = item.id;
                var agent_api = api.init('agent');
                vm.uploader = new FileUploader({
                    url: '/api/admin/agent/upload-logo',
                    queueLimit:1
                });
                vm.clearUpload = function(){
                    vm.uploader.clearQueue();
                };
                vm.uploadLogo = function(){
                    vm.uploader.onCompleteItem  = function(item, data){
                        console.log(data);
                        vm.item.info.logo = data.path;
                    };
                    vm.uploader.onErrorItem = function(){
                        alertService.add('上传失败', 3000, 'danger');
                    };

                    vm.uploader.uploadAll();
                };

                vm['load'] = function(){
                    agent_api.get({id: vm.id}, function(data){
                        vm.item = data;
                    })
                };
                vm.load();

                vm['edit'] = function(){
                    agent_api.save({id: vm.id}, vm.item, function(data){
                        alertService.add("操作成功");
                        $uibModalInstance.close();
                    })
                };

                vm.close = function(){
                    $uibModalInstance.close();
                }
            }]
    );

    md.controller('agentListController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api','$stateParams',
            function ($rootScope, $scope, $state, $location, $uibModal, alertService, api, $stateParams) {
                var vm = $scope.vm = {};
                var agent_api = api.init('agent');

                vm.load = function(){
                    agent_api.query(function(data){
                        vm.items = data;
                    });
                };
                vm.load();

                vm['delete'] = function(id){
                    if(!confirm("确认删除信息？")){
                        return;
                    }
                    agent_api.delete({id:id}, function(data){
                        alertService.add("操作成功");
                        vm.load();
                    });
                };

                vm['new'] = function(){
                    $uibModal.open({
                        templateUrl:"project/agent/views/modal-new-agent.html",
                        controller: 'modalNewAgentController',
                        controllerAs: '$ctrl',
                        backdrop: false,
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
                        templateUrl:"project/agent/views/modal-edit-agent.html",
                        controller: 'modalEditAgentController',
                        controllerAs: '$ctrl',
                        backdrop: false,
                        resolve: {
                            item: function () {
                                return {id:id}
                            }
                        }
                    }).result.then(function() {
                            vm.load();
                        });
                }
            }]
    );
});