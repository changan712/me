'use strict';

define(['app'], function (md) {
    md.directive('listFilter', ['$rootScope', '$state', '$timeout', '$location', function ($rootScope, $state, $timeout, $location) {
        return {
            restrict: 'EA',
            replace: 'true',
            templateUrl: 'views/com/list-filter.html',
            scope: {
                data: '=',
                onChange: '&'
            },
            link: function (scope, ele, attr) {
                var pData,
                    time1,
                    time2,
                    watchAdded = false;

                var filterChildV = $rootScope.filterChildV || ($rootScope.filterChildV = {});


                scope.$on('$destroy', function () {

                    //todo 此处无法删除$rootScope.filterChildV 何时删除？
                    // delete  $rootScope.filterChildV;
                    scope.$destroy();
                    $timeout.cancel(time1);
                    $timeout.cancel(time2);
                });

                scope.$watch('data', function () {
                    pData = scope.pData = parseSearchToFilterData(scope.data);
                    if (pData) {
                        addWatch(pData, !watchAdded)
                    }
                });


                var onChange = scope.onchange || angular.noop;


                scope.toggle = function (item) {
                    item.showChild = !item.showChild;
                    $rootScope.filterChildV[item.key] = item.showChild;
                };


                scope.add = function (e, p) {
                    //added：新增input内容


                    if (p.added && e.keyCode == 13) {

                        if (_.findWhere(p.buckets, {key: p.added})) {
                            return false;
                        }
                        p.buckets.push({
                            key: p.added,
                            active: true
                        });
                        p.added = '';
                        $timeout(function(){
                            scope.onChange({data: parseData()});
                        })

                    }
                };

                scope.changeAll = function () {
                    time1 = $timeout(function () {
                        scope.onChange({data: parseData()});
                    }, 0);
                };

                scope.changeItem = function () {
                    time2 = $timeout(function () {
                        scope.onChange({data: parseData()});
                    }, 0)

                };


                function addWatch(pData) {
                    _.each(pData, function (item) {

                            item.showChild = !!filterChildV[item.key];

                            scope.$watch(function () {
                                return item.buckets;
                            }, function (n) {
                                item.active = !_.findWhere(n, {active: true});
                            }, true);

                            scope.$watch(function () {
                                return item.active
                            }, function (n) {
                                if (n) {
                                    _.each(item.buckets, function (c) {
                                        c.active = false;
                                    });
                                    //item.showChild =false;

                                } else {

                                    item.showChild = true;
                                }

                                $rootScope.filterChildV[item.key] = item.showChild;


                            })
                        }
                    );
                    watchAdded = true;
                }


                /**
                 * 根据search 修改pData;
                 * @param data 原始数据
                 * @returns {*}
                 */
                function parseSearchToFilterData(data) {
                    var search = $location.search();

                    _.each(search, function (v, k) {
                        var kd = _.findWhere(data, {key: k});
                        if (kd) {
                            kd.active = false;
                            if (angular.isString(v)) {
                                _.findWhere(kd.buckets, {key: v}) && ( _.findWhere(kd.buckets, {key: v}).active = true);
                            } else if (angular.isArray(v)) {
                                _.each(v, function (value) {
                                    _.findWhere(kd.buckets, {key: value}) && ( _.findWhere(kd.buckets, {key: value}).active = true);
                                })
                            }
                        }

                    });
                    return data;
                }

                /**
                 * 转换pData 为 search
                 * @returns {{}}
                 */
                function parseData() {

                    var newData = {};
                    _.each(pData, function (item) {
                        if (!item.active) {
                            var nd = [];
                            _.each(item.buckets, function (c) {
                                if (c.active) {
                                    nd.push(c.key);
                                }
                            });
                            if (nd.length) {
                                newData[item.key] = nd;
                            }
                        }

                    });

                    return newData;
                }


            }
        };

    }])
    ;
})
;