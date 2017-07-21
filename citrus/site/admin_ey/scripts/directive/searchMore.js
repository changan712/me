'use strict';

define(['app'], function (md) {
    md.directive('searchMore', ['$state', '$timeout', '$location', function ($state, $timeout, $location) {
        return {
            restrict: 'EA',
            replace: 'true',
            templateUrl: 'views/com/search-more.html',
            scope: {
                onSubmit: '&',
                isShow: '='
            },
            link: function (scope, ele, attr) {

                angular.element('body').on('click', function () {
                    scope.$apply(function () {
                        scope.hide();
                    })
                });

                scope.hide = function () {

                    scope.isShow = false;


                }
            }
        };

    }]);
});