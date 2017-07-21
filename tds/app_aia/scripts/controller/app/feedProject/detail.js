'use strict';

define([
    'app',
    'service/resource/feed',
    'service/feedUpdate',
    'service/modalProjectUser',
    'service/tip'
], function (md) {

    md.controller('feedProjectDetailCtrl', ['$rootScope', '$scope', '$ionicModal', '$ionicHistory', '$state', 'feedUpdate', 'modalProjectUser','feed', 'tip', function ($rootScope, $scope, $ionicModal, $ionicHistory, $state, feedUpdate,modalProjectUser, feed, tip) {
        var vm = $scope.vm = {};
        var id = $state.params.id;
        var currentUser = vm.currentUser = $rootScope.currentUser;
        var from = $state.params.from;

        getDetail();

        vm.modalProjectUser = modalProjectUser;

        vm.feedUpdate = feedUpdate;

        function getDetail() {

            return feed.get({id: id,format:'aia_project_detail'}).$promise.then(function (res) {
                return vm.detail = res;
            })
        }

    }]);

});

