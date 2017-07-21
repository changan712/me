'use strict';
define([
    'app',
    'service/resource/perf',
    'service/pageList',
    'service/alert'

], function (md) {
    md.controller('perfOverviewCtrl', ['$scope', '$state', 'perf', 'PageList', 'alertService', function ($scope, $state, perf, PageList, alertService) {
        var vm = $scope.vm = {};


        vm.pageList = new PageList(perf);

        vm.pageList.getList();


        vm.stateTo = function (item) {
            var config = {
                '1': 'goalSetting',
                '2': 'selfReview',
                '3': 'svReview',
                '4': 'summary',
                '5': 'signOff'
            };




            if (config[item.step]) {

                $state.go('^.' + config[item.step], {id: item.id});

            } else {
                $state.go('^.goalSetting', {id: item.id});
            }


        }

    }]);

});

