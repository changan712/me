'use strict';

define([
    'app',
    '../../lib/services/api',
    '../../lib/services/alert',
    '../../lib/services/showFilter',
    '../../lib/services/utils'
], function (md) {

    md.controller('AppController', ['$rootScope', '$scope','$stateParams','$location','$state','alertService','api','utils',
        function ($rootScope, $scope, $stateParams, $location, $state, alertService, api, utils) {
            //console.log('app controller');
            //console.log($stateParams);
            //console.log($location.path());
            //console.log($location.search());
            var vm = $scope.vm = {};
            var root = $rootScope.root = {}
            vm.time = (new Date()).getHours();
            var user_api = api.init('user');
            var agent_api = api.init('agent');
            vm.logout = function () {
                user_api.logout(function (res) {
                    window.location = "#/login";
                    $rootScope.user = null;
                });
            };
            vm.alerts = alertService.get();

            user_api.info(function(data){
                vm.user = data;
                root.user = data;
                root.default_agent_id = vm.user.default_agent_id;
                //root.admin_conf = data['conf']['admin'] || {};
            });

            agent_api.query(function(data){
                root.agent_list = data;
                console.log(data);
            });

            vm.setDefaultAgentId = function(){
                var api_handle = api.raw("https://a.wenjuand.hrtps.com/api/admin/user/set-default-agent-id");
                api_handle.get({id:root.default_agent_id}, function(){
                    alertService.add("切换当前客户");
                    window.location.reload();
                });
            };

            $rootScope.breadcrumb = [];
            $rootScope.setBread = function(b){
                $rootScope.breadcrumb = b;
            };
            $rootScope.appendBread = function(b){
                $rootScope.breadcrumb.push(b);
            };
        }
    ]);

    md.controller('LocalLoginController', ['$rootScope', '$scope','$stateParams','$location','$state','alertService','api', 'utils',
        function ($rootScope, $scope, $stateParams, $location, $state, alertService, api, utils) {
            var vm = $scope.vm = {};
            var user_api = api.init('user');
            vm.req = {};

            vm.alerts = alertService.get();
            vm.login = function(){
                console.log(vm.req);
                user_api.local_login(vm.req, function(data){
                    console.log(data);
                    window.location = '#/app/quest/list'
                })
            }
        }
    ]);
});
