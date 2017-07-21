'use strict';

define([
    'app',
    'service/utils'
], function (md) {
    //首页
    md.controller('othersCtrl', ['$scope', 'utils', '$rootScope', function ($scope, utils, $rootScope) {
        var vm = $scope.vm = {};

        vm.scene = $rootScope.currentUser.custom || '1';

        /*   vm.openPDF = function () {
         window.open('views/app/others/preview.pdf', '_blank', 'location=yes');
         }*/
    }]);

});

