'use strict';

define(['app'], function (md) {
    md.factory('posPreview', ['$modal', function ($modal) {
        function open() {
            $modal.open({
                backdrop: false,
                templateUrl: 'views/com/pos-preview.html',
                controller: ['$scope', '$modalInstance', function ($scope, $modalInstance) {
                    var _this = this;

                    $scope.cancel = function () {
                        $scope.$dismiss();
                    };

                    $scope.ok = function () {
                        $scope.$close();
                    };

                }]
            });
        }

        return {
            show: open
        };
    }])
});


