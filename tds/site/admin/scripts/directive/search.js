'use strict';

define(['app'], function (md) {
    md.directive('search', ['$timeout', function ($timeout) {
        return {
            restrict: 'EA',
            replace: 'true',
            templateUrl: 'views/com/search.html',
            scope: {
                onSubmit: '&'
            },
            link: function (scope, ele, attr) {

                var activeType;
                var types = scope.types = [
                    {label: '全部', code: 0},
                    {label: '职位', code: 1},
                    {label: '简历', code: 2, active: true}
                ];
                scope.onSubmit = scope.onSubmit || angular.noop;

                scope.$watch('types', function () {
                    activeType = scope.activeType = _.findWhere(scope.types, {active: true});
                    scope.placeHolder = getPlaceHolder(activeType);
                }, true);


                scope.setSearchType = function (item) {
                    _.each(types, function (type) {
                        type.active = false;
                    });
                    item.active = true;
                };

                scope.submit = function () {
                    scope.onSubmit({
                        data: {
                            type: activeType.code,
                            keyword: scope.keyword
                        }
                    })
                };

                function getPlaceHolder(type) {
                    if (type.code == 0) {
                        return '请输入关键字,搜索职位和简历';
                    } else {
                        return '请输入关键字,搜索' + type.label;
                    }
                }
            }
        };

    }]);
});