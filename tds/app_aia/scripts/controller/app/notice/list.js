'use strict';

define([
    'app',
    'service/resource/notice',
    'service/dialog',
    'service/pageList'
], function (md) {

    md.controller('noticeListCtrl', ['$rootScope', '$scope', '$state', 'notice', 'dialog', 'PageList', function ($rootScope, $scope, $state, notice, dialog, PageList) {

        var vm = $scope.vm = {};

        vm.pageList = new PageList(notice, {_page_size: 10});

        vm.pageList.getList();

        vm.itemClicked = function (item) {
            $state.go('app.notice.detail', {id: item.id});
        };

        $scope.$on('$ionicView.enter', function () {
            notice.getUnreadCount().$promise.then(function (res) {
                $rootScope.noticeUnreadCount = res.count;
            })
        })


    }]);

});

