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
    md.controller('modalNewAgentController', ['$rootScope','$scope', '$state','$location','$uibModalInstance','alertService','api','item',
            function ($rootScope, $scope, $state, $location, $uibModalInstance, alertService, api, item) {
                var vm = $scope.vm = {};
                vm.id = item.id;
                var agent_api = api.init('agent');


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
                    alert("删除");
                    /*agent_api.delete({id:id}, function(data){
                        alert("操作成功");
                        vm.load();
                    });*/
                };

                vm['new'] = function(uq_id){
                    $uibModal.open({
                        templateUrl:"project/agent/views/modal-new-agent.html",
                        controller: 'modalNewAgentController',
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
            }]
    );
});