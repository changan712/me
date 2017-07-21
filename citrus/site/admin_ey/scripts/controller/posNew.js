'use strict';

define([
    'app',
    'service/position',
    'service/values',
    'service/alert',
    'service/general',
    'service/dialog',
    'service/department',
    'service/category',
    'service/positionProperty',
    'service/dpt-icons',
    'directive/region',
    'directive/categorySel',
    'directive/department',
    'directive/um'

], function (md) {
    //职位发布 职位编辑
    md.controller('positionNewCtrl', ['$rootScope', '$scope', '$state', '$timeout', '$location', 'position', 'general', 'dialog', 'alertService', 'edu', 'salary', 'exp', 'positionProperty',
    function ($rootScope, $scope, $state, $timeout, $location, position, general, dialog, alertService, edu, salary, exp, positionProperty) {

        $rootScope.page = 'pos_new';

        var vm = $scope.vm = {};
        var type = $state.params.type;

        vm.um = null;
        vm.options = {};
        vm.typeNew = type == 'new';
        vm.typeEdit = type == 'edit';


        vm.pageTit = vm.typeNew ? '职位发布' : '职位编辑';
        vm.locShow = false;

        vm.pos = {
            deadline: new Date(),
            property: '',
            salary: {
                "label": "面议",
                "code": "0"
            },
            edu: {"label": "不限", "code": "0"},
            exp: {label: "不限", code: "0"},
            jd: ''
        };

        positionProperty.query({}, function(res){
            //默认选中校园招聘
            if(vm.typeNew && !vm.pos.property){
                vm.pos.property = res[1].name;
            }
            vm.options['position_properties'] = res;
        });

        vm.errors = {
            location: true,
            category: true
        };


        vm.view = {
            edu: edu,
            salary: salary,
            exp: exp
        };

        vm.showLoc = function () {
            vm.locShow = true;
            return false;
        };

        $scope.$watch('vm.city_list.length', function (n, o) {
            vm.errors.location = !n;
        });

        vm.removeLocSelect = function (item) {
            vm.city_list.splice(vm.city_list.indexOf(item), 1);
        };

        //日历
        vm.openCalendar = function ($event) {
            $timeout(function () {
                vm.calendarOpened = true;
            }, 0)

        };
        vm.umReady = function (um) {
            vm.um = um;
            insertJd();
        };

        function insertJd() {
            if (vm.pos.jd) {
                vm.um.setContent( vm.pos.jd);
                if (time)time.cancel();
            }
            else {
                var time = $timeout(function () {
                    insertJd()
                }, 400)
            }
        }


        vm.submit = function () {
            vm.pos.jd = vm.um.getContent();
            vm.pos.city_list = vm.city_list;
            vm.submitted = true;
            vm.pos = parsePosToData(vm.pos);

            if ($scope.formPos.$valid && vm.pos.city_list.length && vm.pos.department && vm.pos.category) {
                if (vm.typeNew) {
                    position.save({}, vm.pos, function (res) {
                        dialog.confirm('发布成功！是否继续添加？', {
                            btnCancel: {
                                label: '查看职位',
                                style: 'btn-default'
                            }
                        }).success(function () {
                            //新建职位成功时保存属性
                            localStorage.setItem('_create_pos_', JSON.stringify(vm.pos));

                            $state.reload();
                        }).error(function () {
                            $state.go('position.detail', {id: res.id});
                        });
                        //alertService.add(res.msg, 3000);//promise catch
                        vm.submitted = false;

                    })
                }
                else if (vm.typeEdit) {
                    position.update({id: vm.pos.id}, vm.pos, function (res) {
                        dialog.alert('编辑成功！').success(function () {
                            $state.go('position.detail', {id: vm.pos.id});
                        });//promise catch
                        vm.submitted = false;

                    }, function (res) {
                        dialog.alert(res.message);
                    })
                }
            }

        };


        //编辑状态下 填充vm.pos
        if (vm.typeEdit) {
            position.get({method: 'view', id: $state.params.id}, function (res) {
                vm.pos = parseDataToPos(res);
            }, function () {

            });
        }
        if(vm.typeNew) {
            //新建状态下载入保存的临时属性
            vm.city_list = [];
            var pos_str = localStorage.getItem('_create_pos_');
            if(pos_str){
                vm.pos = JSON.parse(pos_str);
                if(vm.pos.city_list){
                    vm.city_list = vm.pos.city_list;
                }
            }
        }

        //数据转化为本地model
        function parseDataToPos(data) {
            delete data.release_date;
            delete  data.refresh_date;
            delete  data.updated_time;

            if (data.deadline) {
                data.deadline = new Date(data.deadline * 1000);
            }

            if (data.edu_level >= 0) {
                data.edu = _.findWhere(edu, {code: data.edu_level});
            }
            if (data.exp_level >= 0) {
                data.exp = _.findWhere(exp, {code: data.exp_level});
            }
            if (data.salary_level >= 0) {
                data.salary = _.findWhere(salary, {code: data.salary_level});
            }
            if (data.city_list.length) {
                vm.city_list = data.city_list;
            }


            return data
        }

        //为本地model转化为提交数据
        function parsePosToData(pos) {
            pos.release_city = vm.loc_select;
            pos.department_id = vm.pos.department && vm.pos.department.id;
            pos.category_id = vm.pos.category && vm.pos.category.id;
            return pos;
        }

        vm.test1 = 1;
    }]);

});
