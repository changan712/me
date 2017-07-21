'use strict';

define([
    'angular',
    'app',
    'directive/region',
    'directive/category'

], function (angular, md) {

    md.controller('recCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $rootScope.page = 'recommend';

    }]);

    md.controller('recIndexCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

    }]);
    md.controller('recSourcingCtrl', ['$rootScope', '$scope', 'viewEdu', function ($rootScope, $scope, viewEdu) {

        var vm = $scope.vm = {};

        vm.searchData = {
            date: new Date()
        };

        vm.view = {
            edu: viewEdu
        };

        vm.openCalendar = function (e) {
            vm.calendarOpened = true;
            e.stopPropagation();
        }


    }]);
    md.controller('recHhCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

    }]);
    md.controller('recHhPListCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $scope.$parent.hHPage = 'pList';
    }]);

    md.controller('recHhOpCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $scope.$parent.hHPage = 'op';
        var vm = $scope.vm = {};
        vm.rateCop= 4.2;


    }]);
    md.controller('recHhRListCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $scope.$parent.hHPage = 'rList';
    }]);


    md.controller('recRecommendCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {


    }])

});

