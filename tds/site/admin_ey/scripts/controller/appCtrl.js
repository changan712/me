'use strict';

define(['angular', 'app', 'i18n', 'filter/filter', 'directive/com', 'service/user', 'service/company', 'service/alert', 'service/utils'], function (angular, md) {

    md.controller('appCtrl', ['$rootScope', '$scope', '$state', 'user', 'company', 'alertService', 'utils', function ($rootScope, $scope, $state, user, company, alertService, utils) {
        var vm = $scope.vm = {};
        vm.time = (new Date()).getHours();
        /*alert*/
        vm.alerts = alertService.get();

        if (utils.isLocal()) {
            var expireDate = new Date();
            expireDate.setDate(expireDate.getDate() + 1);
            $rootScope.user = {
                "username": "all", "user_id": 1, "email": "all@demo.com", "comp_name": "demo", "role": "ALL", "0": {
                    "id": 1,
                    "username": "all",
                    "email": "all@demo.com",
                    "company_id": 2,
                    "created_at": "2015-10-23 14:23:51",
                    "updated_at": "2015-10-23 17:59:16",
                    "contact": "contact",
                    "mobile": "182347452345",
                    "avatar": "/resources/demo/avatar.jpg",
                    "role": "ALL"
                }
            };
            company.get({id: $rootScope.user['0'].company_id}, function (res) {
                $rootScope.company = res;
            });

        } else {
            user.getUser(function (res) {
                $rootScope.user = res;
                company.get({id: res['0'].id}, function (res) {
                    $rootScope.company = res;
                })
            });
        }

        vm.logout = function () {
            user.logout({}, $rootScope.user, function () {
                location.href = utils.getHost() + utils.getCorporation() + '/admin/login.html';
            })
        }

    }]);

    md.controller('404Ctrl', ['$scope', function ($scope) {

        console.log(1);

    }])


});

