define([
    'app',
    '../../lib/services/api',
    '../../lib/services/utils',
    '../../lib/services/dialog',
    '../../lib/services/alert',
    '../../lib/directives/uploader/simUploader',
    '../main/filter/filter',
    '../main/filter/values'
], function (md) {
    md.controller('carouselListController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api','$stateParams','utils',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api, $stateParams,utils) {
                var vm = $scope.vm = {};
                var opt = $scope.opt = {};
                var c_api = api.init('carousel');
                vm.load = function(){
                    c_api.query(function(data){
                        console.log(data);
                        vm.items = data;
                    });
                };
                vm.load();

                //上传附件
                opt.uploadAttachment = function(){
                    var uploader = opt.uploaderExports;
                    var corp_id = utils.getCorpId();
                    var custom = utils.getCustom();
                    uploader.setUrl('/api/admin/carousel/?corp_id='+corp_id+'&custom='+custom);
                    uploader.uploadAll(function (data) {
                        vm.load();
                    }, function () {
                        alertService.add('附件上传失败', 3000, 'danger');
                    });
                };

                vm.saveItem = function(item){
                    c_api.save({id:item.id}, item.$req, function(){
                        alert('操作成功');
                        vm.load();
                    })
                }

                vm.deleteItem = function(item){
                    c_api.delete({id:item.id}, function(){
                        alert('操作成功');
                        vm.load();
                    })
                }
            }]
    );

});