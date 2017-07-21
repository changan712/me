'use strict';

define([
    'app',
    'service/resource/user',
    'service/resource/project',
    'service/dialog'
], function (md) {

    md.controller('userIndexCtrl', ['$rootScope', '$scope', '$state', 'user', 'dialog', 'project', function ($rootScope, $scope, $state, user, dialog, project) {

        var vm = $scope.vm = {};
        vm.detail = $rootScope.currentUser;

        vm.projects = project.query({self: 1, format: 'aia_list'});

    }]);

});

