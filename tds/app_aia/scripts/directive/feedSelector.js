define([
    'app',
    'service/modalSelect'

], function (md) {

    md.directive('feedSelector', ['modalSelect', function (modalSelect) {
        return {
            restrict: 'E',
            require: '?^ngModel',
            replace:true,
            transclude:true,
            templateUrl: 'views/app/feed/feed-selector.tpl.html',
            scope: {
                views: '=',
                modalName: '@',
                modals: '=',
                maxlength: '@',
                labelName: '@'
            },
            link: function ($scope, $el, attr, ctrl) {
                if (!ctrl) return;
                $scope.labelName = $scope.labelName  || 'name';
                $scope.hasRate = false;

                ctrl.$render= function(){
                  $scope.data = ctrl.$viewValue;
                };

                $scope.showModal = function () {
                    modalSelect.create($scope.modalName, $scope.views, $scope.maxlength, $scope.labelName,ctrl.$modelValue).then(function (data) {
                        $scope.data = data;
                        ctrl.$setViewValue(data);
                    });
                };

                $scope.isObject = angular.isObject;

                $scope.modals = modalSelect.getAll();

            }

        }

    }]);

});