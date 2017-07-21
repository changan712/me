'use strict';

define([
    'app',
    'service/resource/feedComment',
    'service/resource/feed',
    'service/feedUpdate'
], function (md) {

    md.controller('feedCommentsCtrl', ['$rootScope', '$scope', '$state', '$location', 'feedUpdate', 'feedComment', 'feed', function ($rootScope, $scope, $state, $location, feedUpdate, feedComment, feed) {
        var vm = $scope.vm = {};
        var feedId = $state.params.feedId;


        vm.feedDetail = feed.get({id: feedId});

        vm.list = feedComment.query({feed_id: feedId});

        vm.createNewComment = function (target) {
            feedUpdate.createComment(target).then(function (res) {
                vm.list.unshift(res);
            })
        }

    }]);

});

