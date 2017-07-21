'use strict';

define([
    'app',
    'service/resource/projectUser'

], function (md) {

    md.controller('projectUserCtrl', ['$rootScope', '$scope', '$state', 'projectUser', function ($rootScope, $scope, $state, projectUser) {

        var vm = $scope.vm = {};

        var projectId = $state.params.projectId;
        var from = $state.params.from;

        vm.goBack = function () {
            if (from) {
                $state.go(from)
            } else {
                $state.go('app.index', {}, {location: 'replace'});
            }
        };
        projectUser.query({project_id: projectId}).$promise.then(function (res) {
            vm.users = _.groupBy(res, 'role');
        })
    }]);

});

