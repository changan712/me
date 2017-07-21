'use strict';

define([
    'app',
    'service/ref',
    'service/resume'
], function (md) {

    //内部推荐列表
    md.controller('recDetailCtrl', ['$rootScope', '$scope', '$state', '$location', 'ref', 'resume', function ($rootScope, $scope, $state, $location, ref, resume) {
        $rootScope.page = 'rec';
        var vm = $scope.vm = {};
        vm.totalItems = 0;

        ref.get({id: $state.params.id}, function (res) {
            vm.refer = res;
        });

        vm.viewRefResult = ['NEW', 'INTERVIEWED', 'ONBOARDING', 'PASSPROBATION'];

        vm.modelRefResult = vm.viewRefResult[0];


        getHistory();

        function getHistory(page) {
            /*            ref.getHistoryList({id: $state.params.id, page: page || 1}, function (res) {
             vm.historyList = res.data.list;
             vm.totalItems = res.data.total;
             });*/

            resume.get({ref_id: $state.params.id}, function (res) {
                vm.historyList = res.items;
                vm.totalItems = res._meta.totalCount;
            })
        }

        //pagination
        vm.currentPage = parseInt($location.search().page) || 1;
        vm.pageChanged = function () {
            getHistory(vm.currentPage);
            // $location.search('page', vm.currentPage);
        };

        vm.opRef = function (id, status) {
            resume.update({'id': id, 'ref_status': status}, function () {
                getHistory(vm.currentPage);
            })
        }

    }]);


});

