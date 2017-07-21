'use strict';

define([
    'app',
    'service/resource/feed',
    'service/feedUpdate',
    'service/tip'
], function (md) {

    md.controller('feedDetailCtrl', ['$rootScope', '$scope', '$ionicModal', '$ionicHistory', '$state', 'feedUpdate', 'feed', 'tip', function ($rootScope, $scope, $ionicModal, $ionicHistory, $state, feedUpdate, feed, tip) {
        var vm = $scope.vm = {};
        var id = $state.params.id;
        var currentUser = vm.currentUser = $rootScope.currentUser;
        var from = $state.params.from;

        getDetail();

        vm.feedUpdate = feedUpdate;

        function getDetail() {

            return feed.get({id: id}).$promise.then(function (res) {
                return vm.detail = res;
            })
        }

    }]);

});

