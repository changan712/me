'use strict';

define([
    'app'

], function (md) {

    md.controller('fieldCtrl', ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {

        var vm = $scope.vm = {};


        vm.choose = function (choice) {
            if (choice == 'feed') {
                $state.go('app.feed.new', {})
            } else if (choice == 'feedProject') {
                $state.go('app.feedProject.new')
            }
        }


    }]);

});

