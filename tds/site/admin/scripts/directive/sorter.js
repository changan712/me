'use strict';

define(['app'], function (md) {

    /**
     * sorterContainer
     * @param sorterData {Object} 如 {_sort: _this.sortBy, _order: _this.order}
     * @param sorterDisableSearch{Boolean } 默认值：false 是否禁止更新$location.search();
     *
     */
    md.directive('sorterContainer', ['$rootScope', '$location', function ($rootScope, $location) {
        return {
            scope: {
                sorterData: '=',
                sorterDisableSearch: '='
            },
            controller: ['$scope', function ($scope) {

                var _this = this;

                if (!$scope.sorterData) {
                    $scope.sorterData = {};
                }

                this.sortBy = $scope.sorterData._sort || '';
                this.order = $scope.sorterData._s || 'desc';
                this.sorterData = $scope.sorterData;


                if (!$scope.sorterDisableSearch) {
                    this.sortBy = $location.search()._sort;
                    this.order = $location.search()._order;
                }

                this.sortList = function (key) {
                    var newData = {};
                    if (key != _this.sortBy) {
                        _this.order = 'desc';
                    } else {
                        if (_this.order == 'asc') {
                            _this.order = 'desc'
                        } else {
                            _this.order = 'asc'
                        }
                    }
                    _this.sortBy = key;

                    newData = {_sort: _this.sortBy, _order: _this.order};

                    $scope.sorterData = newData;
                    $rootScope.$broadcast('change:sorter', newData);

                    //默认情况下更新location.search
                    if (!$scope.sorterDisableSearch) {
                        var newSearch = _.extend($location.search(), newData, {_page: 1});
                        $location.search(newSearch);
                    }
                };

            }],
            restrict: 'AE'
        }
    }]);

    md.directive('sorter', ['$rootScope', '$location', function ($rootScope, $location) {
        return {
            restrict: 'A',
            require: '?^sorterContainer',
            transclude: true,
            templateUrl: 'views/com/sorter.html',
            scope: {},
            link: function (scope, ele, attr, ctrl) {
                if (!ctrl) return;
                scope.active = false;
                scope.itemSortBy = attr.sorter;

                scope.$watch(function () {
                    return ctrl.order
                }, function () {
                    scope.order = ctrl.order;
                });

                scope.$watch(function () {
                    return ctrl.sortBy;
                }, function (n) {
                    scope.active = ( scope.itemSortBy == ctrl.sortBy);
                });

                scope.sortList = ctrl.sortList;

            }

        };

    }]);
});