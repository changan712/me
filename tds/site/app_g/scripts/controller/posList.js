'use strict';

define([
    'app',
    'service/position',
    'service/corp',
    'service/wx'
], function (md) {

    //职位列表
    md.controller('positionListCtrl', ['$rootScope', '$scope', '$location', '$timeout', '$state', 'position', 'wxUser', function ($rootScope, $scope, $location, $timeout, $state, position, wxUser) {
        var vm = $scope.vm = {};
        //--------------------------

        var property = $state.params['property'];
        var title = '职位列表-Garena招聘',
            desc = '职位列表-Garena招聘';
        if (property == '2') {
            title = '【心起点】Garena2016年校园招聘';
            desc = ''
        }

        var share_url = location.origin + location.pathname + location.hash;

        if ($rootScope.wxReady) {
            wxUser.setShare(title, desc, share_url, location.origin + '/app_g/images/garena_wx_logo.png');
        } else {
            wx.ready(function () {
                $rootScope.wxReady = true;
                wxUser.setShare(title, desc, share_url, location.origin + '/app_g/images/garena_wx_logo.png');
            });
        }


        vm.tabShow = 0;
        var view_names = ['tabs', 'cat', 'loc'];
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

        var search_org = {};
        if (property) {
            search_org = {property: property};
        }
        var search = angular.copy(search_org)
        getContent(search_org, function (res) {
            vm.list = res.data.list;

            //第一次载入时，处理分类和城市
            var cities = [];
            var categories = [];
            for (var p in vm.list) {
                var category = vm.list[p]['category'];
                if (categories.indexOf(category) == -1) {
                    categories.push(category);
                }

                for (var city_index in vm.list[p]['city_list']) {
                    var label = vm.list[p]['city_list'][city_index].label;
                    if (cities.indexOf(label) == -1) {
                        cities.push(label);
                    }
                }
            }

            //保留需要的分类和城市
            var loc_list = [];
            vm.view.loc.forEach(function (loc, index) {
                if (index == 0 || cities.indexOf(loc.label) != -1) {
                    loc_list.push(loc);
                }
            });
            vm.view.loc = loc_list;

            var cat_list = [];
            vm.view.cat.forEach(function (cat, index) {
                if (index == 0 || categories.indexOf(cat.label) != -1) {
                    cat_list.push(cat);
                }
            });
            vm.view.cat = cat_list;
        });

        var view_search = {
            type: "tabs",
            cat_index: 0,
            loc_index: 0,
            search: function () {
                var search = angular.copy(search_org);
                var current;
                if (view_search.type == 'cat') {
                    current = vm.view.cat[view_search.cat_index]
                    current.active = true;
                    if (current.label == '所有类型') {
                        delete  search.category;
                    } else {
                        search.category = current.label;
                    }
                } else if (view_search.type == 'loc') {
                    current = vm.view.loc[view_search.loc_index];
                    current.active = true;
                    if (current.label == '所有地点') {
                        delete  search.city;
                    } else {
                        search.city = current.label;
                    }
                }
                getContent(search, function (res) {
                    vm.list = res.data.list;
                })
            }
        };

        vm.filterChange = function (index, type) {
            var current;
            var newList = [];
            if (type == 'cat') {
                search = angular.copy(search_org)
                angular.forEach(vm.view.cat, function (item) {
                    item.active = false;
                });
                view_search.cat_index = index;
            } else if (type == 'loc') {
                angular.forEach(vm.view.loc, function (item) {
                    item.active = false;
                });
                view_search.loc_index = index;
            }
            view_search.type = type;
            view_search.search();
        };


        vm.tabClicked = function (index) {
            vm.tabShow = index;
            angular.forEach(vm.view.tabs, function (item) {
                item.active = false;
            });
            vm.view.tabs[index].active = true;
            view_search.type = view_names[index];
            view_search.search();
        };


        function getContent(search, callback) {
            var data = angular.extend({}, search, {status: 1});
            position.get(data, function (res) {
                callback(res);
            });
        }

    }
    ]);

});

