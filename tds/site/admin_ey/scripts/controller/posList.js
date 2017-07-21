'use strict';

define([
    'app',
    'service/position',
    'service/alert',
    'service/dialog'

], function (md) {

    //职位列表
    md.controller('positionListCtrl', ['$rootScope', '$scope', '$location', '$state', 'position','dialog', function ($rootScope, $scope, $location, $state, position,dialog) {
        $rootScope.page = 'pos_list';
        var vm = $scope.vm = {};

        vm.view = {
            date: ['0', '7', '30', '90', '180']
        };

        vm.cond = {
            order_by: 'created_at',
            order: 'desc'
        };

        var search = $location.search();
        if (search['order_by']) {
            vm.cond.order_by = search['order_by'];
        }
        if (search['order']) {
            vm.cond.order = search['order'];
        }
        position.get(search, function (res) {
            vm.list = res.items;
            vm.total = res._meta.totalCount;

            vm.view.department = res._filters.departments;
            vm.view.city = res._filters.cities;
            vm.view.category = res._filters.categories;

            vm.filter = {};
            if (search['city']) {
                vm.filter['city'] = search['city'];
            }
            if (search['department_id']) {
                vm.filter['department'] = _.findWhere(vm.view.department, {'id': parseInt(search['department_id'])});
            }
            if (search['date']) {
                vm.filter['date'] = search['date'];
            }
            vm.filter.keyword = search['keyword'];
        });
        //vm.filter = _.extend({}, defaultMd, $location.search());

        vm.filterSbm = function () {
            var newSearch = {};
            _.each(vm.filter, function (v, k) {
                if (angular.isObject(v)) {
                    if (v.id != '0') {
                        newSearch[k + '_id'] = v.id;
                    }
                } else {
                    if (v != '0' && v != '所有城市') {
                        newSearch[k] = v;
                    }
                }
            });
            $location.search(_.extend(newSearch, vm.cond));
        };

        //设置职位状态
        vm.setStatus = function (status, id) {
            if (status == 'CLOSED') {
                dialog.confirm('关闭职位后将不可开启，确定要关闭该职位？').success(function(){
                    position.update({id: id}, {"status": status}, function (res) {
                        var item = _.findWhere(vm.list, {id: id});
                        item.status = status;
                        $state.reload();
                    })
                })
            }else{
                position.update({id: id}, {"status": status}, function (res) {
                    var item = _.findWhere(vm.list, {id: id});
                    item.status = status;
                })
            }

        };

        //pagination
        vm.currentPage = parseInt($location.search().page) || 1;
        vm.pageChanged = function () {
            $location.search('page', vm.currentPage);
        };

        vm.setOrder = function (n) {
            if (vm.cond.order_by == n) {
                if (vm.cond.order == 'asc') {
                    vm.cond.order = 'desc';
                } else {
                    vm.cond.order = 'asc';
                }
            } else {
                vm.cond.order = 'asc';
            }
            vm.cond.order_by = n;
            $location.search(_.extend(search, vm.cond));
        }
    }
    ]);

});

