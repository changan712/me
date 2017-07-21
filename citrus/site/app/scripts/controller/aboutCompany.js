'use strict';

define([
    'app',
    'service/corp'

], function (md) {

    md.controller('aboutCompanyCtrl', ['$rootScope', '$scope', '$sce','corp', function ($rootScope, $scope,$sce, corp) {

        var vm = $scope.vm = {};
        vm.info = {};
        corp.brief({}, function (res) {
            vm.info = res;
            vm.info.description = $sce.trustAsHtml(vm.info.description);
        })





    }]);


});

