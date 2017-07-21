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

    md.controller('modalInstanceCtrl', ['api','$uibModalInstance','item','$scope','alertService',
        function (api, $uibModalInstance, item, $scope, alertService) {
            var vm = $scope.vm = {};
            var fc_api = api.init('feed_comment')
            console.log(item)

            vm.load = function(){
                fc_api.query({feed_id:item.id}, function(data){
                    console.log(data);
                    vm.items = data;
                });
            };
            vm.load();

            vm.delete = function(item){
                if(!confirm('确认删除？')){
                    return;
                }
                fc_api.delete({id:item.id}, function(){
                    vm.load();
                })
            }

            vm.close = function(){
                $uibModalInstance.close({msg:'ok'});
            }
        }
    ]);

    md.controller('feedListController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api',
            function ($rootScope, $scope, $state, $location, $uibModal, alertService, api) {
                var vm = $scope.vm = {};
                var feed_api = api.init('feed');

                vm.query = {};
                vm.doQuery = function(){
                    feed_api.query(vm.query, function(data, header_f){
                        vm.items = data;
                        vm._meta = api.meta(header_f);
                    });
                };

                vm.pageChanged = function(){
                    vm.query._page = vm._meta.currentPage;
                    vm.doQuery();
                }
                vm.doQuery();

                vm.delete = function(item){
                    if(!confirm('确认删除？')){
                        return;
                    }
                    feed_api.delete({id:item.id}, function(){
                        vm.doQuery();
                    })
                }

                vm.openComment = function(item){
                    $uibModal.open({
                        templateUrl:"project/feed/views/modal-comments.html",
                        controller: 'modalInstanceCtrl',
                        controllerAs: '$ctrl',
                        resolve: {
                            item: function () {
                                return item;
                            }
                        }
                    }).result.then(function(result) {
                            //console.info("I was closed, so do what I need to do myContent's controller now.  Result was->");
                            //console.info(result);
                            vm.doQuery();
                        }, function(reason) {
                            //console.info("I was dimissed, so do what I need to do myContent's controller now.  Reason was->" + reason);
                        });
                };
            }]
    );


});