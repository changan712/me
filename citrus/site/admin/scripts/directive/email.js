define(['app', 'angular'], function (md, angular) {
    md.directive('email', [function () {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: 'views/com/email.html',
            scope: {
                isShow: '=',
                data: '=',
                onSubmit: '&'
            },
            link: function (scope, ele, attr) {
                scope.onSubmit = scope.onSubmit || angular.noop;


                scope.hide = function () {
                    scope.isShow = false;
                };

                scope.submit = function ($this) {
                    scope.onSubmit({data: scope.data});
                    scope.hide();
                    return false;
                }

            }
        }

    }]);

});
