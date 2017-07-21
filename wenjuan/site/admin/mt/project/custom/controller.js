define([
    'app',
    '../../lib/services/api',
    '../../lib/services/dialog',
    '../../lib/services/alert',
    '../../lib/services/options',
    '../../lib/services/showFilter',
    '../main/filter/filter',
    '../main/filter/values'
], function (md) {

    md.controller('dataController', ['$rootScope','$scope', '$state','$location','$uibModal','alertService','api',
            function ($rootScope, $scope, $state, $location, $uibModal, alertService, api) {
                var vm = $scope.vm = {};
                var feed_api = api.init('feed');

            }]
    );


});