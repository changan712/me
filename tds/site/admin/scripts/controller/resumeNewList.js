'use strict';

define([
    'app',
    'service/position',
    'service/alert',
    'service/resume',
    'service/utils',
    'service/values',
    'directive/resumeList',
    'directive/appModel'

], function (md) {

    md.controller('resumeNewListCtrl', ['$rootScope', '$scope', '$location', 'resume', 'position', 'utils', 'edu', 'exp', function ($rootScope, $scope, $location, resume, position, utils, edu, exp) {

        $rootScope.page = 'resume_new';

        var vm = $scope.vm = {};
        var search = $location.search();


        vm.filter = _.extend({}, {refer: 0}, search);

        getPositionList({'page': -1, 'fields': 'id,name'}).then(function (res) {
            vm.view.position = res.items;
        });
        var formatData = formatView();

        vm.edu = formatData.edu;
        vm.exp = formatData.exp;


        vm.view = {
            gender: [{code: 'MALE', label: '男'}, {code: 'FEMALE', label: '女'}],
            work_exp: vm.exp,
            edu: vm.edu,
            position: []
        };

        vm.filterSbm = function (form) {

            $location.search(_.extend({}, vm.filter, {page: 1}));
        };

        function formatView() {
            var viewEdu = angular.copy(edu);
            var viewExp = angular.copy(exp);
            viewEdu.shift();
            viewExp.shift();
            return {
                edu: viewEdu,
                exp: viewExp
            }

        }

        function getPositionList(search) {
            return position.get(search).$promise;
        }

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


        /* vm.filterSbm = function () {
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
         };*/


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
                    return utils.getHost() + utils.getCorporation() + '/admin/resumes/' + type + '?id=' + idArray.join(',');
                }
            } else {
                return utils.getHost() + utils.getCorporation() + '/admin/resumes/' + type + '?position_id=' + vm.position_id;
            }
        }

    }])

});

