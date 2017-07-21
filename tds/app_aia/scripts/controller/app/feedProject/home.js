'use strict';

define([
    'app',
    'service/resource/feed',
    'service/resource/user',
    'service/feedCache',
    'service/pageList',
    'directive/feedSchema'
], function (md) {

    md.controller('feedProjectHomeCtrl', ['$rootScope', '$scope', '$state', 'PageList', 'feedCache', 'feed', 'user', function ($rootScope, $scope, $state, PageList, feedCache, feed, user) {
        var vm = $scope.vm = {};
        var id = $state.params.id;
        var currentUser = $rootScope.currentUser;

        vm.homeUser = user.get({id: id});

        vm.pageList = new PageList(feed, {_page_size: 6,format:'aia_project_list',type:'aia_project', user_id: id});

        vm.pageList.getList();


    }]);

});

