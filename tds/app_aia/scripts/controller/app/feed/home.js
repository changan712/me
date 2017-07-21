'use strict';

define([
    'app',
    'service/resource/feed',
    'service/resource/user',
    'service/feedCache',
    'service/pageList',
    'directive/feedSchema'
], function (md) {

    md.controller('feedHomeCtrl', ['$rootScope', '$scope', '$ionicScrollDelegate', '$state', 'PageList', 'feedCache', 'feed', 'user', function ($rootScope, $scope, $ionicScrollDelegate, $state, PageList, feedCache, feed, user) {
        var vm = $scope.vm = {};
        var id = vm.id = $state.params.id;
        var currentUser = $rootScope.currentUser;

        var type  = vm.feedType = $state.params.type || 1;

        vm.homeUser = user.get({id: id});

        //
        vm.pageList = new PageList(feed, getParams());

        vm.pageList.getList();

        vm.changeType = function (t) {
            if (type != t) {
                type = t;
                vm.feedType = t;
                vm.pageList.resetConfig(getParams());
                vm.pageList.getList();
                $ionicScrollDelegate.scrollTop();
                $ionicScrollDelegate.resize();
            }
        };

        function getParams() {
            var params = {};
            var defaultParams = {_page_size: 6};
            if (vm.feedType == 1) {
                _.extend(params, defaultParams, {user_id: id})
            } else if (vm.feedType == 2) {
                _.extend(params, defaultParams, {related_user_id: id})
            }

            return params;
        }

    }]);

});

