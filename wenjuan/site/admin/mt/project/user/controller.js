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
    md.controller('userListController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api) {
                var vm = $scope.vm = {};
                var user_api = api.init('user');
                vm.items = user_api.query();

                vm.query = {};
                vm.doQuery = function(){
                    vm.items = user_api.query(vm.query)
                };
                vm.corp_id = api.getCorpId();
            }]
    );

    md.controller('userInfoController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api','options',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api, options) {
                var vm = $scope.vm = {};
                var user_api = api.init('user');
                var pg_api = api.init('perf_goal');
                vm.id = $state.params['id'];
                vm.options = options;
                vm.goal = {}

                vm.new_goal = function(perf_id){
                    pg_api.save({info:vm.goal.new_goal, perf_id:perf_id}, function(){
                        vm.load_goal(perf_id);
                    })
                }

                vm.edit_goal = function(perf_id, id, info){
                    pg_api.save({info:info, id:id}, function(){
                        vm.load_goal(perf_id);
                    })
                }

                vm.delete_goal = function(perf_id, id){
                    if(!confirm("确认删除该条目标？")){

                    }
                    pg_api.delete({id:id}, function(){
                        vm.load_goal(perf_id);
                    })
                }

                vm.load_goal = function(perf_id){
                    pg_api.query({perf_id:perf_id}, function(data){
                        console.log(data)
                        vm.goal.items = data;
                    })
                };

                vm.load = function(){
                    user_api.get({id:vm.id}, function(data){
                        vm.item = data;
                        vm.req = _.pick(vm.item, 'name', 'mobile', 'gender', 'location', 'is_admin', 'is_hr', 'legal_entity')

                        vm.load_goal(data.active_perf_id);
                    });
                };
                vm.load();

                vm.save = function(){
                    user_api.save({id:vm.id}, vm.req, function(){
                        vm.load();
                    })
                };
            }]
    );

    //用户导入
    md.controller('userImportController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api',
            function ($rootScope, $scope, $state, $location, $modal, alertService, api) {
                var vm = $scope.vm = {};
                var user_api = api.init('user');
                vm.raw_data = '';

                vm.parseData = function(){
                    var secs = vm.raw_data.replace("\r\n", "\n").split("\n\n");
                    var ret = [];

                    var cols = secs.shift().split("\n");
                    vm.cols = cols;
                    console.log(cols)

                    _.each(secs, function(sec){
                        var tmp = sec.split("\n");
                        if(tmp.length < 2) return;

                        var item = {};
                        for(var i in cols){
                            item[cols[i]] = tmp.shift();
                        }

                        item['goals'] = tmp;
                        console.log(item)
                        ret.push(item);
                    });
                    vm.data = ret;
                };

                vm.doImport = function(){
                    console.log(vm.data);
                    user_api.import(vm.data, function(ret){
                        console.log(ret)
                        alert("导入成功");
                    })
                };
            }]
    );


});