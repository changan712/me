'use strict';

define(['app',
    'service/userInfo',
    'service/redPacket',
    'service/dialog',
    'directive/sorter'
], function (md) {
    md.controller('redPacketStatDetailCtrl', ['$rootScope', '$scope', '$state', '$location', 'redPacket', function ($rootScope, $scope, $state, $location, redPacket) {

        $rootScope.page = 'red_packet';
        var vm = $scope.vm = {};

        vm.view = $state.params.view;
        vm.data = {};

        getData();

        function getData() {

            redPacket.getDetail(getSearch(), function (res) {
                vm.data = res;
                vm._meta = res._meta;
            });
        }

        function getSearch() {
            var newSearch;
            var fieldConfig = {
                'share': 'forward',//首次转发红包
                'share2': 'reforward',//二次转发红包
                'share-view': 'forwardview',//访问量红包
                'share-apply': 'forwardapply'//申请量红包

            };
            if (fieldConfig[vm.view]) {
                newSearch = _.extend({}, {field: fieldConfig[vm.view]}, $location.search());
            } else {
                newSearch = _.extend({}, {field: 'ref', ref_type: createRefString(vm.view)}, $location.search());
            }

            return newSearch;

        }

        function createRefString(str) {
            return str.toUpperCase().replace('-', '_');
        }

        //pagination
        vm.currentPage = parseInt($location.search()._page) || 1;
        vm.pageChanged = function () {
            $location.search('_page', vm.currentPage);
        };


    }]);
});