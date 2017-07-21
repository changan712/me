define(['app', 'angular', 'service/department', 'service/dialog', '../service/dpt-icons'], function (md, angular) {
    md.directive('department', ['department', '$modal', '$rootScope', 'dialog', 'dpt-icons', function (departmentSev, $modal, $rootScope, dialog, icons) {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: 'views/com/department.html',
            transclude: true,
            scope: {
                selectDpt: '=',
                active: '=active'
            },
            link: function (scope, ele, attr) {
                var vm = scope.vm = {};

                /*
                 scope.$watch('active', function(n){
                 if (scope.active) {
                 departmentSev.get({}, function (res) {
                 scope.departments = res.items;

                 });
                 }
                 }, true)*/
                if ($rootScope.company.custom && $rootScope.company.custom.position_list && $rootScope.company.custom.position_list.hide_icon) {
                        scope.hide_icon = 1;
                } else {
                    scope.hide_icon = 0;
                }


                scope.$watch('vm.selectDpt', function (n) {
                    scope.selectDpt = n;
                }, true);

                departmentSev.get({}, function (res) {
                    scope.departments = res.items;
                    scope.departments.splice(0, 0, {"name": "新增部门"});
                    if (scope.active) {
                        vm.selectDpt = _.findWhere(scope.departments, {id: parseInt(scope.active)});
                    }
                });

                //增删改部门
                scope.newDpt = function () {

                    var modalDpt = $modal.open({
                        templateUrl: 'views/com/edit.html',
                        controller: ['$scope', function ($scope) {
                            $scope.title = '新增部门';
                            $scope.modalLabel = '部门名称:';
                            $scope.icon = '部门icon:';
                            $scope.icons = icons;

                            $scope.chooseIcon = function (item) {
                                angular.forEach(icons, function (it) {
                                    it.active = false;
                                });
                                item.active = true;
                                vm.item = item;

                            };
                            $scope.save = function (input) {
                                var repeat = _.findWhere(scope.departments, {name: $scope.input.replace(/(^\s*)|(\s*$)/g, '')});
                                if (repeat) {
                                    dialog.alert($scope.input + '已存在');
                                    vm.selectDpt = scope.departments[1];
                                }
                                if (vm.item && $scope.input && !repeat) {
                                    departmentSev.save({}, {
                                        'name': $scope.input,
                                        'icon_name': vm.item.icon_name,
                                        'icon_color': vm.item.icon_color
                                    }, function (res) {
                                        departmentSev.get({}, function (res) {
                                            scope.departments = res.items;
                                            scope.departments.splice(0, 0, {"name": "新增部门"});
                                            vm.selectDpt = scope.departments[1];
                                        });
                                    });
                                    $scope.$close();

                                }
                                if (scope.hide_icon && $scope.input && !repeat) {
                                    departmentSev.save({}, {
                                        'name': $scope.input
                                    }, function (res) {
                                        departmentSev.get({}, function (res) {
                                            scope.departments = res.items;
                                            scope.departments.splice(0, 0, {"name": "新增部门"});
                                            vm.selectDpt = scope.departments[1];
                                        });
                                    });
                                    $scope.$close();

                                }
                                if (!$scope.input) {
                                    dialog.alert('请输入新部门的名称');
                                }
                                if (!vm.item && scope.hide_icon == 0) {
                                    dialog.alert('请选择一个部门icon');
                                }
                            };


                            $scope.close = function () {
                                $scope.$close();
                            }
                        }]
                    })
                };

                scope.removeDepartment = function (id) {

                    var modalDpt = $modal.open({
                        templateUrl: 'views/com/deleteAlert.html',
                        controller: ['$scope', function ($scope) {
                            $scope.Name = _.findWhere(scope.departments, {id: id}).name;
                            $scope.yes = function () {
                                departmentSev.delete({id: id}, function (res) {
                                    departmentSev.get({}, function (res) {
                                        scope.departments = res.items;
                                        scope.departments.splice(0, 0, {"name": "新增部门"});
                                        vm.selectDpt = scope.departments[1];
                                    })
                                });
                                $scope.$close();
                                vm.selectDpt = scope.departments[0];
                            };
                            $scope.no = function () {
                                $scope.$close();
                            }
                        }]
                    });
                };

                scope.onSelect = function (item,selector) {
                    if (item.name == '新增部门' && !item.id) {
                        scope.newDpt();
                        vm.selectDpt = scope.departments[1];
                    }
                };

                scope.editDpt = function (id) {
                    var modalDpt = $modal.open({
                        templateUrl: 'views/com/edit.html',
                        controller: ['$scope', function ($scope) {
                            $scope.title = '编辑' + _.findWhere(scope.departments, {id: id}).name;
                            $scope.setValue = _.findWhere(scope.departments, {id: id}).name;
                            $scope.icon = '部门icon:';
                            $scope.modalLabel = '部门名称:';
                            $scope.icons = icons;


                            $scope.chooseIcon = function (item) {
                                angular.forEach(icons, function (it) {
                                    it.active = false;
                                });
                                item.active = true;
                                vm.item = item;
                            };
                            $scope.save = function (input) {
                                if ($scope.input && vm.item) {
                                    var data = {
                                        'name': $scope.input,
                                        'icon_name': vm.item.icon_name,
                                        'icon_color': vm.item.icon_color
                                    };
                                    $scope.$close();
                                }
                                if (!$scope.input && vm.item) {
                                    var data = {
                                        'name': vm.item.name,
                                        'icon_name': vm.item.icon_name,
                                        'icon_color': vm.item.icon_color
                                    };
                                    $scope.$close();
                                }
                                if (!vm.item && $scope.input) {
                                    var data = {
                                        'name': $scope.input,
                                        'icon_name': _.findWhere(scope.departments, {id: id}).icon_name,
                                        'icon_color': _.findWhere(scope.departments, {id: id}).icon_color
                                    };
                                    $scope.$close();
                                }
                                if (!$scope.input && !vm.item && scope.hide_icon == 0) {
                                    dialog.alert('请输入修改的名称或选择一个Icon!');
                                }
                                departmentSev.edit({id: id}, data, function (res) {
                                    departmentSev.get({}, function (res) {
                                        scope.departments = res.items;
                                        scope.departments.splice(0, 0, {"name": "新增部门"});
                                        vm.selectDpt = _.findWhere(scope.departments, {id: id});
                                    })
                                });

                            };


                            $scope.close = function () {
                                $scope.$close();
                            }

                        }]
                    });
                };
            }
        }
    }]);
});






