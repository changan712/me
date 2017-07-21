'use strict';

define([
    'app',
    'service/resource/feed',
    'service/pageList',
    'service/feedCache',
    'service/dialog',
    'directive/feedSchema'
], function (md) {

    md.controller('feedListCtrl', ['$rootScope', '$scope', '$state', '$location', '$ionicScrollDelegate', 'PageList', 'feedCache', 'feed', 'dialog', function ($rootScope, $scope, $state, $location, $ionicScrollDelegate, PageList, feedCache, feed, dialog) {
        var vm = $scope.vm = {};
        var id = $state.params.id;
        var currentUser = $rootScope.currentUser;
        vm.hasList = false;

        vm.pageList = new PageList(feed, {_page_size: 5});

        $scope.$on('$ionicView.enter', function () {
           // $scope.$broadcast('$ionicView.enter')
            $scope.$broadcast('pageEnter',{state:$state.name});
            if ($rootScope.feedAdded) {
             /*   vm.pageList.list.unshift($rootScope.feedAdded);*/
                vm.pageList.refresh();
                delete  $rootScope.feedAdded;
            }
            if ($rootScope.feedUpdated) {
                var index = _.findIndex(vm.pageList.list, {id: $rootScope.feedUpdated.id});
                angular.merge(vm.pageList.list[index], $rootScope.feedUpdated);
                delete  $rootScope.feedUpdated;
            }
        });

        var offFeed = $rootScope.$on('feed', function (e, data) {
            if (data.type == 'update') {
                $rootScope.feedUpdated = data.data;
            }
            if (data.type == 'new') {
                $rootScope.feedAdded = data.data;
            }
        });

        $scope.$on('$destroy', function () {
            offFeed();
        });

        vm.pageList.getList().then(function (res) {
            vm.hasList = true;
        });


    }]);

});

