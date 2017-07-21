define([
    'app',
    'service/resource/user',
    'service/pageList'
], function (md) {

    md.controller('contactsCtrl', ['$rootScope', '$scope', '$state', '$filter', '$ionicScrollDelegate', '$location', 'PageList', 'user', function ($rootScope, $scope, $state, $filter, $ionicScrollDelegate, $location, PageList, user) {
        var vm = $scope.vm = {};

        vm.pageList = new PageList(user, {_page_size: -1}, 'getPinyinList');

        vm.pageList.getList().then(function (res) {
            vm.list = res.toJSON();
            vm.defaultList = angular.copy(vm.list);
            vm.letters = _.keys(vm.list);
        });

        vm.keyword = undefined;
        vm.searchState = false;

        vm.setSearchState = function (state) {
            vm.searchState = state;
            if (!state) {
                vm.rollBack();
            }
        };

        vm.clearKeyword = function(){
            vm.keyword = undefined;
        };

        vm.rollBack = function () {
            vm.list = vm.defaultList;
            vm.keyword = undefined;
            vm.letters = _.keys(vm.list);
        };

        vm.search = function (form) {
            vm.list = filterByKeyword(vm.defaultList, vm.keyword);
            vm.letters = _.keys(vm.list);
        };

        function filterByKeyword(list, keyword) {
            var data = {};
            _.each(list, function (items, key) {
                var arr = $filter('filter')(items, function (item) {
                    var reg = new RegExp(keyword, 'g');
                    return reg.test(item.name) || reg.test(item.pinyin_name);
                });
                if (arr.length) {
                    data[key] = arr;
                }
            });
            return data;
        }

        vm.goToAnchor = function (anchor) {
            if ($location.hash() !== anchor) {
                $location.hash(anchor);
            }

            $ionicScrollDelegate.anchorScroll(true);
        };

    }]);

});

