'use strict';

define([
    'app',
    'service/position'
], function (md) {

    //职位列表
    md.controller('positionListCtrl', ['$rootScope', '$scope', '$location', '$timeout', '$state', 'position', function ($rootScope, $scope, $location, $timeout, $state, position) {

        var vm = $scope.vm = {};
        vm.tabShow = 0;
        vm.view = {
            tabs: [
                {label: 'ALL', active: true},
                {label: '职位类型'},
                {label: '工作地点'}
            ],
            loc: [
                {label: '所有地点', img: 'image/loc-all.png', active: true},
                {label: '上海', img: 'image/loc-sh.png'},
                {label: '新加坡', img: 'image/loc-sgp.png'}
            ],
            cat: [
                {label: '所有类型', img: 'image/cat-all.png', active: true},
                {label: '软件开发', img: 'image/cat-code.png'},
                {label: '游戏开发', img: 'image/cat-game.png'},
                {label: '美术类', img: 'image/cat-art.png'},
                {label: '产品类', img: 'image/cat-product.png'},
                {label: '运营类', img: 'image/cat-op.png'}
            ]

        };

        var search = {};
        getContent({},function (res) {
            vm.list = res.data.list;
        });
        vm.filterChange = function (index, type) {
            var current;
            var newList = [];
            if (type == 'cat') {
                current = vm.view.cat[index];
                angular.forEach(vm.view.cat, function (item) {
                    item.active = false;
                });
                current.active = true;
                if (current.label == '所有类型') {
                    delete  search.category;
                } else {
                    search.category = current.label;
                }

            } else if (type == 'loc') {
                current = vm.view.loc[index];
                angular.forEach(vm.view.loc, function (item) {
                    item.active = false;
                });
                current.active = true;

                if (current.label == '所有地点') {
                    delete  search.city;
                } else {
                    search.city = current.label;
                }
            } else {

                search = {};
            }
            current = null;
            getContent(search,function(res){
                vm.list = res.data.list;
            })
        };


        vm.tabClicked = function (index) {
            vm.tabShow = index;
            angular.forEach(vm.view.tabs, function (item) {
                item.active = false;
            });
            vm.view.tabs[index].active = true;
            if (index == 0) {
                angular.forEach(vm.view.cat, function (item) {
                    item.active = false;
                });
                vm.view.cat[0].active = true;
                vm.filterChange();
                angular.forEach(vm.view.loc, function (item) {
                    item.active = false;
                });
                vm.view.loc[0].active = true;
            }
        };


        function getContent(search,callback) {
            var data = angular.extend({},search,{status:1});
            position.get(data, function (res) {
                callback(res);
            });
        }

    }
    ]);

});

