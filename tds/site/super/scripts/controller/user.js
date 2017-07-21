'use strict';

define([
    'app',
    'service/company',
    'service/user',
    'service/alert'
], function (md) {

    //列表
    md.controller('userNewCtrl', ['$rootScope', '$scope', '$location', '$state', 'company', 'user', 'alertService',
        function ($rootScope, $scope, $location, $state, company, user, alertService) {

        $rootScope.page = 'pos_list';
        var vm = $scope.vm = {};
        var params = $state.params;

        vm.data = {
            'company_id': params['company_id']
        };

        vm.title = '创建用户';
        company.get({id:params['company_id']}, function(res){
            vm.company  = res
        });

        if(params['id']){
            user.get({id:params['id']}, function(res){
                vm.data = res;
                vm.title = vm.data.username;
            })
        }

        vm.submit = function(){
            if(!vm.company){
                alertService.add('公司信息异常', 3000, 'warning');
                return;
            }

            if(vm.data.password){
                if(vm.data.password != vm.data.password2){
                    alertService.add('两次输入的密码不一样', 3000, 'warning');
                    return;
                }
            } else {
                delete vm.data.password;
            }

            console.log(vm.data);
            if(vm.data.id){
                user.update(vm.data, function(res){
                    alertService.add('信息修改成功', 3000);
                    vm.data = res
                })
            } else {
                user.save(vm.data, function(res){
                    alertService.add('添加成功', 3000);
                    location.hash = '#/user/edit/' + params['company_id'] + '/' + res.id;
                })
            }
        }
    }]);
});
