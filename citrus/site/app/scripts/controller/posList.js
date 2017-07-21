'use strict';

define([
    'app',
    'service/position',
    'service/wx',
    'service/wxStat'
], function (md) {

    //职位列表
    md.controller('positionListCtrl', ['$rootScope', '$scope', '$location', '$timeout', '$state', '$ionicScrollDelegate', '$ionicModal', 'posPropertyFilter', 'position', 'wxUser', 'wxStat',
        function ($rootScope, $scope, $location, $timeout, $state, $ionicScrollDelegate, $ionicModal, posPropertyFilter, position, wxUser, wxStat) {

            var vm = $scope.vm = {};

            vm.view = {};
            vm.modals = {};
            vm.filterShow = false;
            vm.searchrShow = false;

            var property_item = _.findWhere(global_company['position_properties'], {id: $state.params['property']})
            if (!property_item) {
                property_item = global_company['position_properties'][0];
            }
            var property = property_item.name;

            //var property = $state.params['property'] == 2 ? 'CAMPUS' : 'SOCIAL';
            //$rootScope.pageProperty = $state.params['property'];

            var search = $location.search();

            _.extend(search, {page:1,property:property});
            // var search = {
            //     page: 1,
            //     property: property
            // };
            var time = null;

            var defaultMd = {
                department: {
                    id: '0',
                    name: '所有部门'
                },
                city: {
                    code:'0',
                    label:'所有城市'

                },
                category: {
                    id: '0',
                    name: '所有类别'
                }
            };

            try {
                if(global_company.custom.search_box.department_title){
                    defaultMd.department.name = global_company.custom.search_box.department_title;
                }
            }catch(err) {console.log(err)}


            wxStat.view(function () {
            });

            vm.filter = angular.extend({}, defaultMd, search);


            //初始获取内容
            getContent(search, function (res) {

                vm.list = res.items;
                vm.noMoreItemsAvailable = vm.page * 20 >= vm.total;

                if (search['city']) {
                    vm.filter.city = {
                        code:search['city'],
                        label:getParams('cities', search['city'])
                    };
                }

                if (search['department_id']) {
                    vm.filter.department = {
                        id:search['department_id'],
                        name:getParams('departments', search['department_id'])
                    }
                }

                if (search['category_id']) {
                    vm.filter.category = {
                        id:search['category_id'],
                        name:getParams('categories', search['category_id'])
                    }
                }
                var corp = $rootScope.corp;
                var shareConfig = {
                    title: corp.name + '招聘',
                    desc: property_item.display_name ,//posPropertyFilter($state.params['property']),
                    imgUrl: location.origin + $rootScope.corp.logo_2,
                    link: location.href
                };
                if (corp['share_list_des']) {
                    shareConfig['desc'] = res['_share_desc'];
                }

                if ($rootScope.wxReady) {
                    wxUser.setShare(shareConfig);
                } else {
                    wx.ready(function () {
                        $rootScope.wxReady = true;
                        wxUser.setShare(shareConfig);
                    })
                }
            });

            function getParams(type, code) {
                var label = '';
                switch (type){
                    case 'categories':
                        _.each(vm.view.categories, function (n) {
                            if (n.id==code){
                                label = n.name;
                            }
                        });
                        break;
                    case 'departments':
                        _.each(vm.view.departments, function (n) {
                            if(n.id == code) {
                                label = n.name;
                            }
                        });
                        break;
                    case 'cities':
                        _.each(vm.view.cities, function (n) {
                            if (n.code == code) {
                                label =  n.label;
                            }
                        });
                        break;
                }
                return label;
            }

            createModalCity();
            createModalDepartment();
            createModalCategory();


            vm.keywordSearch = function () {

                search.keyword = vm.filter.keyword;
                search.page = 1;
                resetFilterAndSearch();
                getContent(search, function (res) {
                    vm.list = res.items;
                    vm.noMoreItemsAvailable = vm.page * 20 >= vm.total;
                    $ionicScrollDelegate.scrollTop();
                })
            };


            vm.showModal = function (label) {
                vm.modals[label].show()
            };

            vm.getLabel = function (label) {
                if (label == 'city') {
                    return vm.filter[label].label
                } else {

                    return vm.filter[label].name;
                }
            };


            vm.cityChange = function () {
                $timeout(function () {
                    if (vm.filter.city.code == '0'||!vm.filter.city.code) {
                        delete  search.city;
                    } else {
                        search.city = vm.filter.city.code;
                    }
                    search.page = 1;

                    getContent(search, function (res) {
                        vm.list = res.items;
                        vm.noMoreItemsAvailable = vm.page * 20 >= vm.total;
                        $ionicScrollDelegate.scrollTop();
                    });

                    vm.modals.city.hide();
                });

            };

            vm.departmentChange = function () {
                $timeout(function () {
                    if (vm.filter.department.id == '0' || !vm.filter.department.id) {
                        delete  search.department_id;
                    } else {
                        search.department_id = vm.filter.department.id;
                    }

                    search.page = 1;
                    getContent(search, function (res) {
                        vm.list = res.items;
                        vm.noMoreItemsAvailable = vm.page * 20 >= vm.total;
                        $ionicScrollDelegate.scrollTop();
                    });

                    vm.modals.department.hide();
                });
            };

            vm.categoryChange = function () {
                $timeout(function () {
                    if (vm.filter.category.id == '0' || !vm.filter.category.id) {
                        delete  search.category_id;
                    } else {
                        search.category_id = vm.filter.category.id;
                    }

                    search.page = 1;
                    getContent(search, function (res) {
                        vm.list = res.items;
                        vm.noMoreItemsAvailable = vm.page * 20 >= vm.total;
                        $ionicScrollDelegate.scrollTop();
                    });

                    vm.modals.category.hide();
                });
            };


            vm.loadMore = function () {
                search.page++;
                getContent(search, function (res) {
                    //time = $timeout(function () {

                    vm.list = vm.list.concat(res.items);
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                    $scope.$broadcast('scroll.resize');
                    vm.noMoreItemsAvailable = vm.page * 20 >= vm.total;
                    // }, 1000)

                });
            };
            vm.offLeaveEvent = $rootScope.$on('$ionicView.beforeLeave', function () {
                angular.forEach(vm.modals, function (modal) {
                    modal.remove()
                });
            });

            $scope.$on('$destroy', function () {
                time && $timeout.cancel(time);
                vm.offLeaveEvent && vm.offLeaveEvent();
            });


            function createModalCity(callback) {
                $ionicModal.fromTemplateUrl('views/modal/selectorCity.html', {
                    scope: $scope,
                    animation: 'slide-in-up'
                }).then(function (modal) {
                    vm.modals.city = modal;
                    callback && callback(modal);
                });
            }

            function createModalDepartment(callback) {
                $ionicModal.fromTemplateUrl('views/modal/selectorDepartment.html', {
                    scope: $scope,
                    animation: 'slide-in-up'
                }).then(function (modal) {
                    vm.modals.department = modal;
                    callback && callback(modal);
                });
            }


            function createModalCategory(callback) {
                $ionicModal.fromTemplateUrl('views/modal/selectorCategory.html', {
                    scope: $scope,
                    animation: 'slide-in-up'
                }).then(function (modal) {
                    vm.modals.category = modal;
                    callback && callback(modal);
                });
            }

            function getContent(search, callback) {
                // search.status = 1;
                //vm.list = [];
                vm.isLoading = true;
                $location.search(_.extend(search));
                var s = _.extend( {wx_openid:global_user.openid, wx_nickname:global_user.nickname}, search);

                position.get(s, function (res) {
                    vm.total = res._meta.totalCount;
                    vm.page = res._meta.currentPage;
                    vm.view = parseFilter(res._filters);
                    vm.isLoading = false;
                    callback(res);
                    $scope.$broadcast('scroll.resize');


                }, function () {
                    console.log('获取数据失败')
                });
            }

            function parseFilter(filter) {
                // filter.cities.unshift({id:'0',})
                filter.categories.unshift({id: '0', name: '所有类别'});

                try {
                    if(global_company.custom.search_box.department_title){
                        filter.departments.unshift({id: '0', name: '所属单位'});
                    }
                }catch(err) {
                    filter.departments.unshift({id: '0', name: '所有部门'});
                }

                return filter;
            }

            function resetFilterAndSearch() {
                delete search.department_id;
                delete search.city;
                delete search.category_id;
                vm.filter = angular.extend({}, defaultMd, search);
            }

            /*   (function () {

             var offStickyOnFilter = $scope.$on('stickyOn.filter', function (e, data) {
             if (!vm.filterShow) {
             $scope.$apply(function () {
             vm.filterShow = true;
             })
             }
             });
             var offStickyOffFilter = $scope.$on('stickyOff.filter', function (e, data) {

             if (vm.filterShow) {
             $scope.$apply(function () {
             vm.filterShow = false;
             })
             }
             });


             var offStickyOnSearch = $scope.$on('stickyOn.search', function (e, data) {
             if (!vm.searchShow) {
             $scope.$apply(function () {
             vm.searchShow = true;
             })
             }
             });
             var offStickyOffSearch = $scope.$on('stickyOff.search', function (e, data) {

             if (vm.searchShow) {
             $scope.$apply(function () {
             vm.searchShow = false;
             })
             }
             });

             $scope.$on('$destroy', function () {
             offStickyOnFilter();
             offStickyOffFilter();
             offStickyOnSearch();
             offStickyOffSearch();
             })

             }());*/
        }
    ]);

});

