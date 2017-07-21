'use strict';

define(['app'], function (md) {


    md.controller('indexCtrl',['$scope', '$rootScope', function ($scope, $rootScope) {
        $rootScope.page = 'index';
        $rootScope.title = '首页';
        var vm = $scope.vm = {};

        vm.text = '111';

    }]);

    //return ctrl;

});

