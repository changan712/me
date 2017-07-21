'use strict';
define([
    'app',
    'service/dialog',
    'directive/d3'
], function (md) {
    md.controller('statisticIndexCtrl', ['$scope', '$state', '$timeout', function ($scope, $state, $timeout) {
        var vm = $scope.vm = {};

        vm.data = [
            {
                size: 229,
                percent: 100,
                label: '总邀请'
            },
            {
                size: 104,
                percent: 45,
                label: '未登录'
            },
            {
                size: 125,
                percent: 55,
                label: '已登录'
            },
            {
                size: 41,
                percent: 18,
                label: '非活跃'
            },
            {
                size: 85,
                percent: 37,
                label: '活跃'
            }

        ]

    }]);

});

