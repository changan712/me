'use strict';

define([
    'app',
    'service/company',
    'service/alert'
], function (md) {

    //列表
    md.controller('companyListCtrl', ['$rootScope', '$scope', '$location', '$state', 'company', function ($rootScope, $scope, $location, $state, company) {

        $rootScope.page = 'pos_list';
        var vm = $scope.vm = {};
        var search = $location.search();
        search.per_page = 20;

        company.get(search, function (res) {
            vm.list =res.items;
            vm._meta = res._meta;
        });

        //pagination
        vm.currentPage = parseInt($location.search().page) || 1;
        vm.pageChanged = function () {
            $location.search('page', vm.currentPage);
        };
    }]);

    //创建
    md.controller('companyNewCtrl', ['$rootScope', '$scope', '$location', '$state', 'company', function ($rootScope, $scope, $location, $state, company) {

        $rootScope.page = 'pos_list';
        var vm = $scope.vm = {};
        var id = $state.params.id;
        if(id){
            company.get({"id":id}, function(res){
                vm.data = res;
            })
        }

        vm.submit = function(){
            if(id){
                company.update({"id":id}, vm.data, function(res){
                    alert("提交成功");
                });
            } else {
                company.save(vm.data, function(res){
                    alert("提交成功");
                    window.location = "#/company/edit/" + res.id;
                });
            }
        }
    }]);

    //详情
    md.controller('companyDetailCtrl', ['$rootScope', '$scope', '$location', '$state', 'company', 'alertService', function ($rootScope, $scope, $location, $state, company, alertService) {
        $rootScope.page = 'pos_list';
        $scope.hexPicker = { color: '' };

        var vm = $scope.vm = {};
        var id = $state.params.id;

        vm.options = {
            'style_no':[
                {
                    'id':1,
                    'name':'黑色'
                },
                {
                    'id':2,
                    'name':'白色'
                }
            ]
        };

        var load = function(res){
            vm.data = res;
            vm.filter = [];
            for(var i=0; i<=10; i++){
                vm.filter[i] = (vm.data.filter_option & (1 << i)) > 0;
            }
            vm.import = [];
            for(var i=0; i<=10; i++){
                vm.import[i] = (vm.data.import_option & (1 << i)) > 0;
            }
        };

        if(id){
            company.get({"id":id}, function(res){
                load(res);
            })
        }

        vm.setOption = function(field, vals){
            var val = 0;
            for(var i in vals){
                if(vals[i]){
                    val += (1 << i);
                }
            }
            var data = {};
            data[field] = val;
            company.update({id:id}, data, function(res){
                alertService.add('信息修改成功', 3000);
                load(res);
            })
        };

        vm.setValue = function(field, val){
            var data = {};
            data[field] = val;
            company.update({id:id}, data, function(res){
                alertService.add('信息修改成功', 3000);
                load(res);
            })
        };

        vm.setLogo = function (field, img, type) {
            var data = {
                'id': id,
                'field': field,
                'data': img,
                'type': type
            };
            company.image({"id": id}, data, function(res){
                alertService.add('信息修改成功', 3000);
                load(res);
                vm.rand = Math.random();
            })
        }

        vm.rand = Math.random();
    }]);
});

