define(['app', 'angular', 'service/category', 'service/dialog', '../service/ctgy-icons'], function (md, angular) {
    md.directive('category', ['category', '$modal', '$rootScope', 'dialog', 'ctgy-icons', function (categorySev, $modal, $rootScope, dialog, icons) {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: 'views/com/categorySel.html',
            scope: {
                selectCtgy: '=',
                active: '=active'
            },
            link: function (scope, ele, attr) {
                var vm = scope.vm = {};

                scope.$watch('vm.selectCtgy', function (n) {
                    scope.selectCtgy = n;
                }, true);

                if ($rootScope.company.custom && $rootScope.company.custom.position_list && $rootScope.company.custom.position_list.hide_icon) {
                        scope.hide_icon = 1;
                }
                else {
                    scope.hide_icon = 0;
                }

                categorySev.get({}, function (res) {
                    scope.categories = res.items;
                    scope.categories.splice(0, 0, {"name": "新增职位类别"});
                    if (scope.active) {
                        vm.selectCtgy = _.findWhere(scope.categories, {id: parseInt(scope.active)});
                    }
                });


                /*  scope.$watch('active', function(n){

                 }, true)*/


                //增删改职位类别
                scope.newCtgy = function () {

                    var modalCtgy = $modal.open({
                        templateUrl: 'views/com/edit.html',
                        controller: ['$scope', function ($scope) {
                            $scope.title = '新增职位类别';
                            $scope.modalLabel = '名称:';
                            $scope.icon = '职位icon:';
                            $scope.icons = icons;

                            $scope.chooseIcon = function (item) {
                                angular.forEach(icons, function (it) {
                                    it.active = false;
                                });
                                item.active = true;
                                vm.item = item;
                            };
                            $scope.save = function (input) {
                                var repeat = _.findWhere(scope.categories, {name: $scope.input.replace(/(^\s*)|(\s*$)/g, '')});
                                if (repeat) {
                                    dialog.alert($scope.input + '已存在');
                                    vm.selectCtgy = scope.categories[1];
                                }
                                if (vm.item && $scope.input && !repeat) {
                                    categorySev.save({}, {
                                        'name': $scope.input,
                                        'icon_name': vm.item.icon_name,
                                        'icon_color': vm.item.icon_color
                                    }, function (res) {
                                        categorySev.get({}, function (res) {
                                            scope.categories = res.items;
                                            scope.categories.splice(0, 0, {"name": "新增职位类别"});
                                            vm.selectCtgy = scope.categories[1];
                                        });
                                    });
                                    $scope.$close();

                                }
                                if (scope.hide_icon && $scope.input && !repeat) {
                                    categorySev.save({}, {
                                        'name': $scope.input
                                    }, function (res) {
                                        categorySev.get({}, function (res) {
                                            scope.categories = res.items;
                                            scope.categories.splice(0, 0, {"name": "新增职位类别"});
                                            vm.selectCtgy = scope.categories[1];
                                        });
                                    });
                                    $scope.$close();

                                }
                                if (!$scope.input) {
                                    dialog.alert('请输入新类别的名称');
                                }
                                if (!vm.item && scope.hide_icon == 0) {
                                    dialog.alert('请选择一个类别icon');
                                }
                            };


                            $scope.close = function () {
                                $scope.$close();
                            }
                        }]
                    })
                };

                scope.onSelect = function (item,selector) {
                    if (item.name == '新增职位类别' && !item.id) {
                        scope.newCtgy();
                        vm.selectCtgy = scope.categories[1];
                    }
                    return false;
                };
                scope.removeCategory = function (id) {
                    var modalCtgy = $modal.open({
                        templateUrl: 'views/com/deleteAlert.html',
                        controller: ['$scope', function ($scope) {
                            $scope.Name = _.findWhere(scope.categories, {id: id}).name;
                            $scope.yes = function () {
                                categorySev.delete({id: id}, function (res) {
                                    categorySev.get({}, function (res) {
                                        scope.categories = res.items;
                                        scope.categories.splice(0, 0, {"name": "新增职位类别"});
                                        vm.selectCtgy = scope.categories[1];
                                    })
                                });
                                $scope.$close();

                            };
                            $scope.no = function () {
                                $scope.$close();
                            }
                        }]
                    });
                };

                scope.editCtgy = function (id) {
                    var modalCtgy = $modal.open({
                        templateUrl: 'views/com/edit.html',
                        controller: ['$scope', function ($scope) {
                            $scope.title = '编辑' + _.findWhere(scope.categories, {id: id}).name;
                            $scope.setValue = _.findWhere(scope.categories, {id: id}).name;
                            $scope.icon = '职位icon:';
                            $scope.modalLabel = '职位名称:';
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
                                        'icon_name': _.findWhere(scope.categories, {id: id}).icon_name,
                                        'icon_color': _.findWhere(scope.categories, {id: id}).icon_color
                                    };
                                    $scope.$close();
                                }
                                if (!$scope.input && !vm.item && scope.hide_icon == 0) {
                                    dialog.alert('请输入修改的名称或选择一个Icon!');
                                }
                                categorySev.edit({id: id}, data, function (res) {
                                    categorySev.get({}, function (res) {
                                        scope.categories = res.items;
                                        scope.categories.splice(0, 0, {"name": "新增职位类别"});
                                        vm.selectCtgy = _.findWhere(scope.categories, {id: id});
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
