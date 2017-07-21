define([
    'app',
    '../../../lib/services/alert',
    '../../../lib/services/api'
], function (md) {
    md.filter('mailUserFilter', [function(){
        return function(items, prop) {
            if(!prop){
                return items;
            }
            var out = [];
            _.each(items, function(item){
                if(item.name.indexOf(prop) != -1 || item.mail.indexOf(prop) != -1 ){
                    out.push(item);
                }
            });

            return out;
        };
    }]);

    md.controller('mailUserController', ['$scope','api','$uibModal','alertService',
        function ($scope, api, $modal, alertService) {
            var vm = $scope.vm = {};
            var mu_api = api.init('mail_user');

            $scope.data = {};
            vm.items = [];

            vm.load = function(){
                mu_api.query(function(data){
                    vm.items = data;
                });
            };

            vm.create = function(form){
                console.log(form);
                //console.log(vm.mail_user);
                return;
                mu_api.save(vm.mail_user, function(data){
                    alertService.add('用户创建成功');
                    vm.load();
                    vm.cancelModal();
                })
            };

            vm.addModal = function(){
                vm.modal = $modal.open({
                    templateUrl: 'project/main/directive/mail-user-modal.html',
                    scope: $scope
                })
            };

            vm.cancelModal = function(){
                vm.modal.close();
            };

            vm.remove = function($event, item, $select){
                $event.stopPropagation();
                mu_api.delete({id:item.id}, function(){
                    vm.load();
                    $select.selected = [];
                });
            };

            vm.load();

        }
    ]);

    md.directive('mailUserInput', ['$timeout', function ($timeout) {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: 'project/main/directive/mail-user-input.html',
            controller: 'mailUserController',
            scope: {
                promise: '=',
                data: '='
            }
        };
    }]);
});