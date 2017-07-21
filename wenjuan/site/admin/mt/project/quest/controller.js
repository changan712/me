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
    var default_quest_item_type = '';

    md.controller('modalDatetimeCtrl', ['$rootScope','$scope', '$filter','$uibModalInstance','alertService','item',
            function ($rootScope, $scope, $filter, $uibModalInstance, alertService, item) {
                var vm = $scope.vm = {};
                $scope.dateOptions = {
                    maxDate: new Date(2020, 5, 22),
                    minDate: new Date(),
                    startingDay: 1,
                    showWeeks: false
                };
                $scope.item = {
                    date: new Date(item.time),
                    time: new Date(item.time)
                };

                vm.close = function(){
                    var dt = $filter('date')($scope.item.date, 'yyyy-MM-dd')
                        + ' '
                        + $filter('date')($scope.item.time, 'HH:mm');
                    $uibModalInstance.close(dt);
                };

                vm.dismiss = function(){
                    $uibModalInstance.dismiss();
                }
            }]
    );

    md.controller('modalNewMobileCtrl', ['$rootScope','$scope', '$state','$location','$uibModalInstance','$uibModal', 'alertService','api','item',
            function ($rootScope, $scope, $state, $location, $uibModalInstance, $uibModal, alertService, api, item) {
                var vm = $scope.vm = {};
                var mobile_api = api.init('mobile');
                vm.item = {
                    quest_id:item.quest_id
                };

                vm.create = function(){
                    mobile_api.save(vm.item, function(data){
                        alertService.add("保存成功")
                        $uibModalInstance.close();
                    })
                };

                vm.close = function(){
                    $uibModalInstance.close();
                }
            }]
    );

    md.controller('modalNewQuestCtrl', ['$rootScope','$scope', '$state','$location','$uibModalInstance','$uibModal', 'alertService','api',
            function ($rootScope, $scope, $state, $location, $uibModalInstance, $uibModal, alertService, api) {
                var vm = $scope.vm = {};
                var quest_api = api.init('quest');
                vm.item = {
                    option:{}
                };

                vm.chooseTime = function(type){
                    $uibModal.open({
                        templateUrl:"project/quest/views/modal-datetime.html",
                        controller: 'modalDatetimeCtrl',
                        controllerAs: '$ctrl',
                        resolve: {
                            item: function () {
                                return {
                                    time: new Date()
                                }
                            }
                        }
                    }).result.then(function(data) {
                            if(type == 1){
                                vm.item.option.time_start = data;
                            }
                            if(type == 2){
                                vm.item.option.time_end = data;
                            }
                    });
                };

                vm.create = function(){
                    quest_api.save(vm.item, function(data){
                        alertService.add("保存成功")
                        $uibModalInstance.close();
                    })
                };

                vm.close = function(){
                    $uibModalInstance.close();
                }
            }]
    );

    md.controller('modalViewAnswerCtrl', ['$rootScope','$scope', '$state','$location','$uibModalInstance','alertService','api','item',
            function ($rootScope, $scope, $state, $location, $uibModalInstance, alertService, api, item) {
                var vm = $scope.vm = {};
                vm.id = item.id;
                var uq_api = api.init('userQuest');

                vm.load = function(){
                    uq_api.get({id:vm.id}, function(data){
                        vm.item = data;
                        vm.uq_items = _.indexBy(vm.item.user_quest_items, 'item_id');
                    });
                };
                vm.load();

                vm.close = function(){
                    $uibModalInstance.close();
                }
            }]
    );

    md.controller('modalNewQuestOptionCtrl', ['$rootScope','$scope', '$state','$location','$uibModalInstance','alertService','api','item',
            function ($rootScope, $scope, $state, $location, $uibModalInstance, alertService, api, item) {
                var vm = $scope.vm = {};
                var quest_item_api = api.init('questItem');

                vm.item = {
                    quest_id: item,
                    type_option: {},
                    type: default_quest_item_type
                };

                vm.create = function(){
                    vm.item.quest_id = item;
                    quest_item_api.save(vm.item, function(data){
                        alertService.add("保存成功");
                        $uibModalInstance.close();
                        default_quest_item_type = vm.item.type;
                    })
                };

                vm.close = function(){
                    $uibModalInstance.close();
                }

                vm.addOption = function(){
                    if(!vm.item.type_option.options){
                        vm.item.type_option.options = [];
                    }
                    vm.item.type_option.options.push({key:'', label:''})
                }

                vm.delOption = function(index){
                    if(!vm.item.type_option.options){
                        vm.item.type_option.options = [];
                    }
                    vm.item.type_option.options.splice(index, 1)
                }
            }]
    );

    md.controller('modalEditQuestOptionCtrl', ['$rootScope','$scope', '$state','$location','$uibModalInstance','alertService','api','item',
            function ($rootScope, $scope, $state, $location, $uibModalInstance, alertService, api, item) {
                var vm = $scope.vm = {};
                var quest_item_api = api.init('questItem');

                vm.item = angular.copy(item)

                vm.create = function(){
                    quest_item_api.save(vm.item, function(data){
                        alertService.add("保存成功");
                        $uibModalInstance.close();
                        default_quest_item_type = vm.item.type;
                    })
                };

                vm.close = function(){
                    $uibModalInstance.close();
                }

                vm.addOption = function(){
                    if(!vm.item.type_option.options){
                        vm.item.type_option.options = [];
                    }
                    vm.item.type_option.options.push({key:'', label:''})
                }

                vm.delOption = function(index){
                    if(!vm.item.type_option.options){
                        vm.item.type_option.options = [];
                    }
                    vm.item.type_option.options.splice(index, 1)
                }
            }]
    );

    md.controller('modalEditQuestCtrl', ['$rootScope','$scope', '$state','$location','$uibModalInstance', '$uibModal', 'alertService','api','item',
            function ($rootScope, $scope, $state, $location, $uibModalInstance, $uibModal, alertService, api, item) {
                var vm = $scope.vm = {};
                var quest_api = api.init('quest');
                vm.item = item;

                vm.chooseTime = function(type){
                    $uibModal.open({
                        templateUrl:"project/quest/views/modal-datetime.html",
                        controller: 'modalDatetimeCtrl',
                        controllerAs: '$ctrl',
                        resolve: {
                            item: function () {
                                return {
                                    time: new Date()
                                }
                            }
                        }
                    }).result.then(function(data) {
                            if(type == 1){
                                vm.item.option.time_start = data;
                            }
                            if(type == 2){
                                vm.item.option.time_end = data;
                            }
                        });
                };

                vm.create = function(){
                    console.log(vm.item);
                    quest_api.save({id: vm.item.id}, vm.item, function(data){
                        alertService.add("保存成功")
                        $uibModalInstance.close();
                    })
                };

                vm.close = function(){
                    $uibModalInstance.close();
                }
            }]
    );

    md.controller('questListController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api',
            function ($rootScope, $scope, $state, $location, $uibModal, alertService, api) {
                var vm = $scope.vm = {};
                var quest_api = api.init('quest');

                vm.query = {};
                vm.doQuery = function(){
                    quest_api.query(vm.query, function(data, header_f){
                        vm.items = data;
                    });
                };

                vm.pageChanged = function(){
                    vm.query._page = vm._meta.currentPage;
                    vm.doQuery();
                };
                vm.doQuery();

                //创建新问卷
                vm.newQuest = function(){
                    $uibModal.open({
                        templateUrl:"project/quest/views/modal-new.html",
                        controller: 'modalNewQuestCtrl',
                        backdrop: false,
                        controllerAs: '$ctrl'
                    }).result.then(function() {
                            vm.doQuery();
                        });
                };

                //编辑问卷
                vm.editQuest = function(item){
                    $uibModal.open({
                        templateUrl:"project/quest/views/modal-edit.html",
                        controller: 'modalEditQuestCtrl',
                        controllerAs: '$ctrl',
                        backdrop: false,
                        resolve: {
                            item: function () {
                                return item;
                            }
                        }
                    }).result.then(function() {
                            vm.doQuery();
                        });
                };

                //删除问卷
                vm.deleteQuest = function(item){
                    if(!confirm("确认操作？")){
                        return;
                    }
                    quest_api.delete({id:item.id}, function(data){
                        alertService.add("操作成功")
                        vm.doQuery();
                    })
                }
            }]
    );

    md.controller('questInfoController', ['$rootScope','$scope', '$stateParams','$location','$uibModal','alertService','api',
            function ($rootScope, $scope, $stateParams, $location, $uibModal, alertService, api) {
                $scope.Math = window.Math
                var vm = $scope.vm = {};
                var opt = $scope.opt = {};
                vm.id = $stateParams.id;
                var quest_api = api.init('quest');
                var mobile_quest_api = api.init('mobileQuest');
                var quest_item_api = api.init('questItem');

                quest_api.get({id:vm.id}, function(data){
                    console.log(data)
                    vm.quest = data;
                });

                vm.fields = [
                    {'name':'手机号', 'sort_name':'mobile'},
                    {'name':'姓名', 'sort_name':'name'},
                    {'name':'信息'},
                    {'name':'状态', 'sort_name':'status'},
                    {'name':'创建时间', 'sort_name':'created_at'},
                    {'name':'操作'}
                ];

                vm.query = {
                    quest_id:vm.id,
                    keyword: '',
                    sort_by:'',
                    order_by:'desc'
                };
                vm.loadMqList = function(){
                    mobile_quest_api.query(vm.query, function(data, hf){
                        vm.mq_list = data;
                        vm._meta = api.meta(hf);
                    })
                };
                vm.pageChanged = function(){
                    vm.query._page = vm._meta.currentPage;
                    vm.loadMqList();
                };
                vm.pressKeyword = function(event){
                    if(event.which === 13){
                        vm.loadMqList();
                    }
                };
                vm.setSort = function(sort_by, order_by){
                    vm.query.sort_by = sort_by;
                    vm.query.order_by = order_by;
                    vm.loadMqList();
                };

                vm.deleteItem = function(item){
                    if(!confirm("确认删除该条记录？")){
                        return ;
                    }
                    mobile_quest_api.delete({id:item.id}, function(){
                        vm.loadMqList();
                    })
                };

                vm.createMobile = function(){
                    $uibModal.open({
                        templateUrl:"project/quest/views/modal-new-mobile.html",
                        controller: 'modalNewMobileCtrl',
                        controllerAs: '$ctrl',
                        backdrop: false,
                        resolve: {
                            item: function () {
                                return {
                                    quest_id: vm.id
                                }
                            }
                        }
                    }).result.then(function() {
                            vm.loadMqList();
                        });
                };

                //上传附件
                opt.uploadStatic = function(){
                    var uploader = opt.staticUploader;
                    uploader.setUrl('/api/admin/mobile/upload?quest_id='+vm.id);
                    uploader.uploadAll(function (data) {
                        vm.loadMqList();
                    }, function () {
                        alertService.add('附件上传失败', 3000, 'danger');
                    });
                };

                vm.loadMqList();
            }]
    );


    md.controller('questReportController', ['$rootScope','$scope', '$stateParams','$location','$uibModal','alertService','api',
        function ($rootScope, $scope, $stateParams, $location, $uibModal, alertService, api) {
            $scope.Math = window.Math
            var vm = $scope.vm = {};
            vm.id = $stateParams.id;
            var quest_api = api.init('quest');
            var user_quest_api = api.init('userQuest');
            var quest_item_api = api.init('questItem');

            vm.fields = [
                {'name':'手机号', 'sort_name':'mobile'},
                {'name':'姓名', 'sort_name':'name'},
                {'name':'信息'},
                {'name':'状态', 'sort_name':'status'},
                {'name':'得分', 'sort_name':'score'},
                {'name':'用时', 'sort_name':'cost_time'},
                {'name':'开始时间', 'sort_name':'start_time'},
                {'name':'操作'}
            ];

            quest_api.get({id:vm.id}, function(data){
                vm.quest = data;
            })

            vm.query = {
                quest_id:vm.id,
                keyword:'',
                sort_by: '',
                order_by: 'asc'
            };
            vm.loadUqList = function(){
                user_quest_api.query(vm.query, function(data, hf){
                    vm.uq_list = data;
                    vm._meta = api.meta(hf);
                    console.log(data);
                })
            };
            vm.pageChanged = function(){
                vm.query._page = vm._meta.currentPage;
                vm.loadUqList();
            };
            vm.pressKeyword = function(event){
                if(event.which === 13){
                    vm.loadUqList();
                }
            };
            vm.setSort = function(sort_by, order_by){
                vm.query.sort_by = sort_by;
                vm.query.order_by = order_by;
                vm.loadUqList();
            };

            vm.viewAnswer = function(uq_id){
                $uibModal.open({
                    templateUrl:"project/quest/views/modal-view-answer.html",
                    controller: 'modalViewAnswerCtrl',
                    controllerAs: '$ctrl',
                    backdrop: false,
                    resolve: {
                        item: function () {
                            return {
                                id:uq_id
                            }
                        }
                    }
                }).result.then(function() {
                    });
            }
            vm.loadUqList()
        }]
    );

    md.controller('questDetailController', ['$rootScope','$scope', '$stateParams','$location','$uibModal','alertService','api',
            function ($rootScope, $scope, $stateParams, $location, $uibModal, alertService, api) {
                var vm = $scope.vm = {};
                var opt = $scope.opt = {};
                vm.id = $stateParams.id;
                var quest_api = api.init('quest');
                var quest_item_api = api.init('questItem');

                quest_api.get({id:vm.id}, function(data){
                    vm.quest = data;
                })

                vm.loadQuestItemList = function(){
                    quest_item_api.query({quest_id:vm.id}, function(data){
                        vm.items = data;
                        console.log(data);
                    })
                }

                //创建新问题
                vm.newQuestOption = function(){
                    $uibModal.open({
                        templateUrl:"project/quest/views/modal-new-option.html",
                        controller: 'modalNewQuestOptionCtrl',
                        controllerAs: '$ctrl',
                        backdrop: false,
                        resolve: {
                            item: function () {
                                return vm.id;
                            }
                        }
                    }).result.then(function() {
                            vm.loadQuestItemList();
                        });
                };


                //编辑问题
                vm.editQuestItem = function(item){
                    $uibModal.open({
                        templateUrl:"project/quest/views/modal-edit-option.html",
                        controller: 'modalEditQuestOptionCtrl',
                        controllerAs: '$ctrl',
                        backdrop: false,
                        resolve: {
                            item: function () {
                                return item;
                            }
                        }
                    }).result.then(function() {
                            vm.loadQuestItemList();
                        });
                };

                //删除问题
                vm.deleteQuestItem = function(item){
                    if(!confirm("确认操作？")){
                        return;
                    }
                    quest_item_api.delete({id:item.id}, function(data){
                        alertService.add("操作成功")
                        vm.loadQuestItemList();
                    })
                }

                vm.loadQuestItemList();
            }]
    );
});