'use strict';

define([
    'app',
    'service/ref'
], function (md) {

    //内部推荐列表
    md.controller('recListCtrl', ['$rootScope', '$scope', '$location', 'ref', function ($rootScope, $scope, $location, ref) {
        $rootScope.page = 'rec';
        var vm = $scope.vm = {};
        vm.totalItems = 0;



        ref.get($location.search(), function (res) {
            vm.list = res.items;

            vm.totalItems = res._meta.totalCount;
        });

        //pagination
        vm.currentPage = parseInt($location.search().page) || 1;
        vm.pageChanged = function () {
            $location.search('page', vm.currentPage);
        };


    }]);


});

