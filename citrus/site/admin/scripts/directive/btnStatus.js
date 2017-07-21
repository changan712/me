define(['app', 'service/position'], function (md) {
    md.directive('btnStatus', ['position', function (position) {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: 'views/com/btn-status.html',
            scope: {
                posData: '='
            },
            link: function (scope, ele, attr) {

                scope.setStatus = function (status) {
                    position.save({method: 'update', id: scope.posData.id}, {"status": status}, function (res) {
                        scope.posData.status = status;

                    }, function () {

                    })
                };

            }
        };


    }]);
});