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
    md.controller('mobileListController', ['$rootScope','$scope', '$state','$location','alertService','api',
            function ($rootScope, $scope, $state, $location, alertService, api) {
                var vm = $scope.vm = {};
                var quest_api = api.init('quest');
                console.log(item)
                vm.item = item;

                vm.create = function(){
                    quest_api.save({id: vm.item.id}, vm.item, function(data){
                        alertService.add("保存成功")
                    })
                };

            }]
    );
    md.controller('mobileUploadController', ['$rootScope','$scope', '$state','$location','alertService','api',
            function ($rootScope, $scope, $state, $location, alertService, api) {
                var vm = $scope.vm = {};
                var opt = $scope.opt = {};

                //上传附件
                opt.uploadStatic = function(){
                    var uploader = opt.staticUploader;
                    uploader.setUrl('/api/admin/mobile/upload');
                    uploader.uploadAll(function (data) {
                        console.log(data);

                    }, function () {
                        alertService.add('附件上传失败', 3000, 'danger');
                    });
                };
            }]
    );

});