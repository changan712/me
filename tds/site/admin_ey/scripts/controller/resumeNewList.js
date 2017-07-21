'use strict';

define([
    'app',
    'service/position',
    'service/alert',
    'service/resume',
    'service/utils',
    'directive/resumeList'

], function (md) {

    md.controller('resumeNewListCtrl', ['$rootScope', '$scope', '$location', 'resume', 'utils',function ($rootScope, $scope, $location, resume,utils) {

        $rootScope.page = 'resume-new';

        var vm = $scope.vm = {};
        var search = $location.search();

        vm.allCheck = function () {
            angular.forEach(vm.resumeList, function (item) {
                item.checked = vm.checkedAll;
            })
        };

        vm.itemCheck = function (item) {
            if (!item.checked) {
                vm.checkedAll = false;
            }
        };

        $scope.$watch('vm.resumeList', function (n) {
            vm.dlCheckedUrl = getDlUrl(null, 'download');
            vm.excelCheckedUrl = getDlUrl(null, 'excel');
        }, true);


        getList(search, function (res) {

            vm.resumeList = res.items;
            vm.totalItems = res._meta.totalCount;
        });

        vm.currentPage = parseInt($location.search().page) || 1;

        vm.pageChanged = function () {
            $location.search('page', vm.currentPage);
        };

        function getList(options, callback) {
            options = _.extend(options, vm.cond);
            resume.get(options, function (res) {
                callback(res);
            })
        }

        //排序相关逻辑
        vm.cond = {
            order_by: search['order_by'] ? search['order_by'] : 'created_at',
            order: search['order'] ? search['order'] : 'desc'
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
        };
        //




        function getDlUrl(all, type) {
            if (!all) {
                var idArray = _.pluck(_.filter(vm.resumeList, function (item) {
                    return item.checked;
                }), 'id');

                if (idArray.length) {
                    return utils.getHost() + utils.getCorporation() + '/admin/resumes/'+type+'?id=' + idArray.join(',');
                }
            } else {
                return utils.getHost() + utils.getCorporation() + '/admin/resumes/'+type+'?position_id=' + vm.position_id;
            }
        }

    }])

});

