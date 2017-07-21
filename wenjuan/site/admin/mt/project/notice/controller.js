define([
    'app',
    '../../lib/services/api',
    '../../lib/services/dialog',
    '../../lib/services/utils',
    '../../lib/services/alert',
    '../main/filter/filter',
    '../../lib/directives/uploader/simUploader',
    '../main/filter/values'
], function (md) {
    var whether_option = [{
        name:'是',
        value:1
    },{
        name:'否',
        value:0
    }];

    md.controller('noticeListController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api','$stateParams',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api, $stateParams) {
                var vm = $scope.vm = {};
                var notice_api = api.init('notice');

                vm.load = function(){
                    notice_api.query(function(data){
                        vm.items = data;
                    });
                }
                vm.load();

                vm.delete = function(id){
                    notice_api.delete({id:id}, function(data){
                        alert("操作成功");
                        vm.load();
                    });
                }
            }]
    );

    md.controller('noticeNewController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api','$stateParams','utils',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api, $stateParams, utils) {
                var vm = $scope.vm = {};
                var notice_api = api.init('notice');
                var opt = $scope.opt = {};
                var corp_id = vm.corp_id = utils.getCorpId();
                var custom = vm.custom = utils.getCustom();

                vm.option = {
                    whether:whether_option
                };

                //上传附件
                opt.uploadAttachment = function(){
                    var uploader = opt.uploaderExports;
                    uploader.setUrl('/api/admin/notice/create-image?corp_id='+corp_id+'&custom='+custom);
                    uploader.uploadAll(function (data) {
                        console.log(data);
                        vm['cover'] = data;
                        if(_.isUndefined(vm['item'])){
                            vm['item'] = {}
                        }
                        vm['item']['cover'] = data['path']
                    }, function () {
                        alertService.add('附件上传失败', 3000, 'danger');
                    });
                };

                //上传图片
                opt.uploadStatic = function(){
                    var uploader = opt.staticUploader;
                    uploader.setUrl('/api/admin/notice/create-image-static?corp_id='+corp_id+'&custom='+custom);
                    uploader.uploadAll(function (data) {
                        console.log(data);
                        vm.item.image_url = data['path']
                    }, function () {
                        alertService.add('图片上传失败', 3000, 'danger');
                    });
                };


                vm.save = function(){
                    console.log(vm.item);
                    notice_api.save(vm.item, function(data){
                        alert("操作成功");
                    })
                }
            }]
    );

    md.controller('noticeEditController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api','$stateParams','$filter',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api, $stateParams, $filter) {
                var vm = $scope.vm = {};
                vm.id = $stateParams.id;
                var notice_api = api.init('notice');
                vm.load = function(){
                    notice_api.get({id:vm.id}, function(data){
                        vm.item = data;
                    });
                };
                vm.load();

                vm.option = {
                    whether:whether_option
                };

                vm.save = function(){
                    notice_api.save({id:vm.id},vm.item, function(data){
                        alert("操作成功");
                    })
                }
            }]
    );
});