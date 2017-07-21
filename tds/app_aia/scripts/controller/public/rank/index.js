'use strict';
define([
    'app',
    'service/resource/rank',
    'service/pageList',
    'service/dialog'
], function (md) {
    md.controller('rankIndexCtrl', ['$scope', '$state', '$timeout', 'dialog', 'rank', 'PageList', function ($scope, $state, $timeout, dialog, rank, PageList) {
        var vm = $scope.vm = {};

        //rank-all 所有积分排行
        vm.pageList = new PageList(rank, {field: 'rank-all', _page_size: 20}, 'get');

        Date.prototype.subtractMonth = function (numberOfMonths) {
            var d = this;
            d.setDate(1);
            d.setMonth(d.getMonth() - numberOfMonths);
            return d;
        };


        //重写parse 方法；
        vm.pageList.parse = function (res) {
            vm.detail = res;
            return res.data;
        };

        vm.pageList.getList();

        vm.monthSelected = 0;
        vm.monthArray = getMonthArray();
        vm.monthItemActive = _.findWhere(vm.monthArray, {month: vm.monthSelected});


        $scope.$watch('vm.monthSelected', function (n, o) {
            if (n != o) {
                vm.pageList.getList({month: n});
                vm.monthItemActive = _.findWhere(vm.monthArray, {month: vm.monthSelected});
            }
        });

        vm.selectMonth = function () {
            dialog.modal({
                title: '请选择查询的月份',
                templateUrl: 'month-modal.tpl',
                view: vm.monthArray,
                data: vm.monthSelected

            }).then(function (res) {
                vm.monthSelected = res;
            })
        };


        /*   function getMonthArray(monthStr) {
         var arr = [],
         month = parseInt(monthStr.split('-')[1]),
         currentMonth = angular.copy(month);
         while (month) {
         arr.push({label: month, month: month - currentMonth});
         month--;
         }
         return arr;
         }*/

        function getMonthArray() {
            var arr = [],
                length = 12;
            for (var i = 0; i < length; i++) {
                var now = new Date();
                var date = now.subtractMonth(i);
                arr.push({label: date.getFullYear() + '-' + (date.getMonth() + 1), month: -i})

            }

            return arr;

        }


        /*  vm.bgScale = 1;

         var time = null;
         vm.onContentScroll = function () {
         var top = $ionicScrollDelegate.getScrollPosition().top;

         if (time) return;
         time = $timeout(function () {
         var scale = 1 - top * 0.005;
         vm.bgScale = scale > 1 ? scale : 1;
         time = null;
         }, 10);


         };*/
        /*
         rank.get({field: 'rank'}).$promise.then(function (res) {
         vm.detail = res;
         //  console.log(res);
         var selfRankId = res.self.id;
         vm.selfItem = _.findWhere(res.data, {id: selfRankId})
         });*/

        vm.like = function (item) {
            if (!item.liked) {
                rank.save({field: 'like'}, {user_point_id: item.id}).$promise.then(function (res) {
                    //自己点赞
                    if (item.id == vm.detail.self.id) {
                        var itemInList = _.findWhere(vm.pageList.list, {id: item.id});
                        if (itemInList) {
                            itemInList.liked = 1;
                            itemInList.like_count++
                        }
                        vm.detail.self.liked = 1;
                        vm.detail.self.like_count++;
                    } else {
                        item.liked = 1;
                        item.like_count++;
                    }

                })
            }
        }


    }]);

});

