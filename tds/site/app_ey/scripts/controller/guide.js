'use strict';

define([
    'app',
    'service/user',
    'service/alert'

], function (md) {
    //首页
    md.controller('guideCtrl', ['$rootScope', '$scope', '$location', '$ionicModal', '$state', 'user', function ($rootScope, $scope, $location, $ionicModal, $state, user) {

        var vm = $scope.vm = {};
        vm.meetingSelected = null;


        $ionicModal.fromTemplateUrl('guide-modal.html', {
            scope: $scope,
            animation: 'scale-in'
        }).then(function (modal) {
            vm.gdModal = modal;
        });

        vm.showGdModal = function (item) {
            vm.meetingSelected = item;
            return vm.gdModal.show();

        };
        vm.hideModal = function () {
            return vm.gdModal.hide();

        };

        vm.ok = function () {
            return vm.hideModal().then(function () {
                user.meeting = vm.meetingSelected;
              //  $rootScope.user = user;
                $state.go('position.listByProperty', {property: 2}, {location: 'replace'});
            });

        };

        vm.cancel = function () {
            return vm.hideModal().then(function () {
                $rootScope.meeting = vm.meetingSelected = null;
            });

        };


        $scope.$on('$destroy', function () {
            vm.gdModal && vm.gdModal.remove();
        });


        vm.meetings = [
            {
                location: '北京',
                date: '2016/7/5或6',
                id: 0

            }, {
                location: '厦门',
                date: '2016/7/9',
                id: 1

            }, {
                location: '广州',
                date: '2016/7/11',
                id: 2

            }, {
                location: '上海',
                date: '2016/7/13或14',
                id: 3

            }

        ]

    }]);

});

