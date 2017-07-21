'use strict';

define([
    'app',
    'service/resource/feed',
    'service/pageList',
    'service/feedCache',
    'service/dialog',
    'directive/feedSchema'
], function (md) {

    md.controller('feedProjectListCtrl', ['$rootScope', '$scope', '$state', '$location', '$ionicScrollDelegate', 'PageList', 'feedCache', 'feed', 'dialog', function ($rootScope, $scope, $state, $location, $ionicScrollDelegate, PageList, feedCache, feed, dialog) {
        var vm = $scope.vm = {};
        var id = $state.params.id;
        var currentUser = $rootScope.currentUser;
        vm.hasList = false;

        vm.pageList = new PageList(feed, {_page_size: 5, format: 'aia_project_list', type: 'aia_project'});

        $scope.$on('$ionicView.enter', function () {
            $scope.$broadcast('pageEnter',{state:$state.name});
            if ($rootScope.feedAdded) {
                vm.pageList.refresh();
              //  vm.pageList.list.unshift($rootScope.feedAdded);
                delete  $rootScope.feedAdded;
            }
            if ($rootScope.feedUpdated) {
                var index = _.findIndex(vm.pageList.list, {id: $rootScope.feedUpdated.id});
                _.extend(vm.pageList.list[index], $rootScope.feedUpdated);
                delete  $rootScope.feedUpdated;
            }
        });

        var offFeedProject = $rootScope.$on('feedProject', function (e, data) {
            if (data.type == 'update') {
                $rootScope.feedUpdated = data.data;
            }
            if (data.type == 'new') {
                $rootScope.feedAdded = data.data;
            }
        });

        $scope.$on('$destroy', function () {
            offFeedProject();
        });


        /*{_page: $scope.feedCtrl.page}*/
        vm.pageList.getList().then(function (res) {
            vm.hasList = true;

        });


    }]);

});

