'use strict';

define(['angular', 'app', 'i18n', 'filter/filter', 'directive/com', 'service/admin', 'service/corp', 'service/alert'], function (angular, md) {

    md.controller('appCtrl', ['$rootScope', '$scope', '$state', 'admin', 'corp', 'alertService', function ($rootScope, $scope, $state, admin, corp, alertService) {

        var vm = $scope.vm = {};
        vm.time = (new Date()).getHours();
        //$rootScope.user = admin;
        $rootScope.corp = corp;

        vm.logout = function () {
            admin.logout({}, function () {
                location.href = 'login.html';
            })
        };

        /*alert*/
        vm.alerts = alertService.get();
        vm.onSearchSbm = function (data) {

            switch (data.type) {
                case 0:
                    break;
                case 1:
                    $state.go('position.list', data);
                    break;
                case 2:
                    $state.go('resume.list', data);
                    break;
            }
        };
        $scope.dt = new Date();

        $scope.events =
            [
                {
                    date: '2015-8-6',
                    status: 'full'
                },
                {
                    date: '2015-8-16',
                    status: 'partially'
                }
            ];

        $scope.getDayClass = function (date, mode) {
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        };


    }]);

    md.controller('404Ctrl', ['$scope', function ($scope) {

        console.log(1);

    }])

});

