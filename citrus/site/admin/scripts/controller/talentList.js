'use strict';

define([
    'app',
    'service/talent',
    'service/talentLevel',
    'service/talentFunc',
    'service/values',
    'service/utils',
    'service/alert'
], function (md) {

    md.controller('talentListCtrl', ['$rootScope', '$scope', '$location','talent','utils','edu','exp','talentLevel','talentFunc', function ($rootScope, $scope, $location, talent,utils,edu, exp, talentLevel, talentFunc) {

        $rootScope.page = 'talent';

        var vm = $scope.vm = {};
        var search = $location.search();

        vm.cond = {
            order_by: search['order_by'] ? search['order_by'] : 'created_at',
            order:search['order'] ? search['order'] : 'desc'
        };

        vm.filter = _.extend({}, {refer: 0}, search);

        getLevel({'_page':-1, 'fields':'id,name'}).then(function (res) {
            vm.view.level = res.items;
        });

        getFunc({'_page':-1, 'fields':'id,name'}).then(function (res) {
            vm.view.func = res.items;
        });

        var formatData = formatView();

        vm.edu = formatData.edu;
        vm.exp = formatData.exp;

        vm.view = {
            gender:[{code:'MALE', label:'男'}, {code:'FEMALE', label:'女'}],
            exp: vm.exp,
            edu: vm.edu,
            level:[],
            func:[]
        }

        getList(search, function (res) {
            vm.talentList = res.items;
            vm.totalItems = res._meta.totalCount;
        })

        function getList(options, callback) {
            options = _.extend(options, vm.cond);
            talent.get(options, function (res) {
                callback(res);
            })
        }

        //获取能力层次
        function getLevel(search) {
            return talentLevel.get(search).$promise;
        }

        //获取职能类型
        function getFunc(search) {
            return talentFunc.get(search).$promise;
        }

        vm.allCheck = function () {
            angular.forEach(vm.talentList, function (item) {
                item.checked = vm.checkedAll;
            })
        }

        vm.itemCheck = function (item) {
            if (!item.checked) {
                vm.checkedAll = false;
            }
        }

        vm.currentPage = parseInt($location.search()._page) || 1;

        vm.exportTotalExcelUrl = function(){
            return utils.getHost() + utils.getCorporation() + '/admin/resumes/exportall';
        }

        $scope.$watch('vm.talentList', function (n) {
            vm.dlCheckedUrl = getDlUrl(null, 'download');
            vm.excelCheckedUrl = getDlUrl(null, 'excel');
        }, true);

        vm.pageChanged = function () {
            $location.search('_page', vm.currentPage);
        };

        vm.filterSbm = function (form) {
            $location.search(_.extend({}, vm.filter, {_page: 1}));
        };
        
        vm.setOrder = function (n) {
            if (vm.cond.order_by == n){
                if (vm.cond.order == 'asc') {
                    vm.cond.order = 'desc';
                }else {
                    vm.cond.order = 'asc';
                }
            }else {
                vm.cond.order = 'asc';
            }
            vm.cond.order_by = n;
            $location.search(_.extend(search, vm.cond));
        }

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

        function getDlUrl(all, type) {
            if (!all) {
                var idArray = _.pluck(_.filter(vm.talentList, function (item) {
                    return item.checked;
                }), 'resume_id');

                if (idArray.length) {
                    return utils.getHost() + utils.getCorporation() + '/admin/resumes/' + type + '?id=' + idArray.join(',');
                }
            } else {
                return utils.getHost() + utils.getCorporation() + '/admin/resumes/' + type + '?position_id=' + vm.position_id;
            }
        }
    }])

});

