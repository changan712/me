'use strict';

define(['app'], function (md) {
    md.directive('selectorPosition', ['$state', function ($state) {
        return {
            restrict: 'E',
            replace: 'true',
            require: '?ngModel',
            templateUrl: 'views/com/selector-position.html',
            scope: {
                view: '=',
                isShow: '=',
                groupBy: '@'
            },
            link: function (scope, ele, attr, ngModel) {

                if (!ngModel && scope.groupBy) return;

                var vm = scope.vm = {};
                vm.keyword = '';
                scope.$watch('view', function (val) {
                    scope.viewGrouped = group(scope.view, scope.groupBy);
                });

                //setModel(scope.view, ngModel);

                ngModel.$render = function () {
                    var activeItems;
                    _.each(scope.view, function (item) {
                        item.active = false;
                    });
                    activeItems = activeItemsFromModel();
                    _.each(activeItems, function (item) {
                        item.active = true;
                    })
                };

                ngModel.$parsers.push(function (aValue) {
                    var arr = [];
                    _.each(aValue, function (item) {
                        arr.push({
                            name: item.name,
                            id: item.id
                        })
                    });
                    return arr;
                });

                scope.hide = function () {
                    scope.isShow = false;
                    vm.keyword = '';
                };

                scope.ok = function () {
                    scope.hide();
                    setModel(scope.view, ngModel);
                };

                scope.cancel = function () {
                    scope.hide();
                    ngModel.$render();
                    //setModel(scope.view, ngModel);
                };

                /*   ngModel.$parsers.push(function(item){
                 return item.name;
                 })*/

                scope.toggleActive = function (item) {
                    if (item.multiple) {
                        item.active = !item.active;
                        _.each(scope.view, function (obj) {
                            if (!obj.multiple) {

                                obj.active = false;
                            }
                        })
                    } else {
                        _.each(scope.view, function (obj) {
                            obj.active = false;
                        });
                        item.active = !item.active;
                    }
                    //setModel(scope.view, ngModel);
                };

                function activeItemsFromModel() {
                    return _.filter(scope.view, function (item) {
                        return _.findWhere(ngModel.$modelValue, {id: item.id})

                    });
                }

                function setModel(view, model) {
                    var activeItem = _.filter(view, function (item) {
                        return item.active;
                    });
                    model.$setViewValue(activeItem)
                }

            }
        };

        function group(data, groupBy) {
            if (groupBy) {
                return _.groupBy(data, function (item) {
                    if (item[groupBy] == '职位详情') {
                        item.multiple = true;
                    }
                    return item[groupBy];
                });
            } else {
                return data;
            }
        }

    }]);
});

