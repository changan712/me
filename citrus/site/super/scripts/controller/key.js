'use strict';

define([
    'app',
    'service/key',
    'service/company',
    'service/alert'
], function (md) {

    //列表
    md.controller('keyListCtrl', ['$rootScope', '$scope', '$location', '$state', 'key', function ($rootScope, $scope, $location, $state, key) {

        $rootScope.page = 'key_list';
        var vm = $scope.vm = {};

        key.query(function (res) {
            vm.list =res;
        });
    }]);

    //创建
    md.controller('keyNewCtrl', ['$rootScope', '$scope', '$location', '$state', 'key', 'company', function ($rootScope, $scope, $location, $state, key, company) {

        $rootScope.page = 'key_list';
        var vm = $scope.vm = {};
        vm.options = {
            company_list: []
        };
        vm.data = {type:1};
        var id = $state.params.id;
        if(id){
            key.get({"id":id}, function(res){
                vm.data = res;
                vm.options.company_list.push({
                    id:res.company.id,
                    name:res.company.name
                })
                vm.des = JSON.parse(res.des);
            })
        }

        company.get({'nokey':1}, function(res){
            vm.list = res.items;
            vm.total = res._meta.totalCount;

            for(var i=0; i<vm.total; i++){
                vm.options.company_list.push(vm.list[i]);
            }
        })

        vm.submit = function(){
            if(id){
                key.update({"id":id}, vm.data, function(res){
                    alert("提交成功");
                });
            } else {
                key.save(vm.data, function(res){
                    alert("提交成功");
                    window.location = "#/key/list";
                });
            }
        }
    }]);

});

