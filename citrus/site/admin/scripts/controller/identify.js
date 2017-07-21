'use strict';

define(['app', 'service/values', 'service/dialog','service/constant','directive/simUploader'], function (md) {
    md.controller('identifyCtrl', ['$rootScope', '$scope', '$state', '$modal','$http','$location', '$timeout', 'dialog', 'staffCondition','APIHOST',
        function ($rootScope, $scope, $state, $modal,$http, $location,$timeout,dialog, staffCondition, APIHOST) {
        var vm = $scope.vm = {};
        $rootScope.page = 'identify';
        $scope.animationsEnabled = true;
        var search = $location.search();
        search.per_page = 20;

        getPage(search);

        vm.view = {
            staffCondition:staffCondition
        };

        vm.company = global_company.url_name;

        vm.filter = {
            type:search.type||0,
            authentication:search.authentication||'ALL'
        };

        $scope.$watch('vm.filter.keyword',function(n){
            if(!n && $scope.form.keyword.$dirty){
               $location.search('keyword','')
            }
        });

        vm.identify = {};

        vm.readerError = function (msg) {
            dialog.alert(msg);
        };

        function getPage(search) {
           return $http.get(APIHOST+'staff',{params:search}).success(function(res){
                vm.list = res.items;
                vm._meta = res._meta;
            })
        }

        vm.filterSbm = function () {
            var newSearch = {};
            newSearch = _.extend({},$location.search(),{'type':vm.filter.type,'keyword':vm.filter.keyword, 'authentication':vm.filter.authentication},{page:1});
            $scope.form.$setPristine();
            $location.search(newSearch);
        };


        //pagination
        vm.currentPage = parseInt($location.search().page) || 1;
        vm.pageChanged = function () {
            $location.search('page', vm.currentPage);
        };

        vm.identify.importEmployeeData = function(){
            $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'views/com/employee.html',
                controller: ['$scope','$modalInstance',function($scope,$modalInstance){
                    $scope.uploadState = false;
                    $scope.typeAccept = ['xls','xlsx'];

                    $scope.$on('errorNotAccepted',function(e,data){
                        dialog.alert(data.msg);
                    });

                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };

                    $scope.upload = function(){
                        if($scope.uploaderExports.getQueueLength()){
                           submitByUploader(APIHOST+'staff/import');
                        }
                    }

                    function submitByUploader(url){
                        $scope.uploaderExports.setUrl(url);
                        //$scope.uploaderExports.setFormData({data: JSON.stringify(formData)});
                        $scope.uploadState = true;
                        $scope.uploaderExports.uploadAll(function () {
                                $scope.uploadState = false;
                                getPage(search);
                                dialog.alert('文件上传完毕，交由后台程序处理数据，请稍后刷新页面查看').success(function(){
                                    $modalInstance.close();
                                    //getData();
                                })
                            },
                            function(){
                                $scope.uploadState = false;
                                dialog.alert('附件上传失败请稍后再试..');
                            });
                    }
                }]

            });
        }
            /*var countRun =0;
            function getData(){
                var interval ;
                if(countRun == 0){
                    interval = 0;
                }else if(countRun>0){
                    interval= 10000;
                }
                var  time = $timeout(function () {
                    countRun ++;
                    getPage().then(function(res){
                        $timeout.cancel(time);

                    },function(){
                        getData();
                    })
                },interval)
            }*/



    }]);
});