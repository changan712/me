'use strict';

define([
    'app',
    'service/resource/feed',
    'directive/score'
], function (md) {

    md.controller('feedScoreDetailCtrl', ['$rootScope', '$scope', '$state', 'feed', function ($rootScope, $scope, $state, feed) {
        var vm = $scope.vm = {};
        var id = $state.params.id;

        vm.list = feed.score({id: id});


    }]);

});

