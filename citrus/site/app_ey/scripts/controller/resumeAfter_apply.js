/**
 * Created by Administrator on 2016/2/2.
 */
'use strict';

define([
    'app'
], function (md) {

    //职位列表
    md.controller('resumeSuccess', ['$rootScope', '$scope', '$location', '$timeout', '$state',
        function ($rootScope, $scope, $location, $timeout, $state) {
            var vm = $scope.vm = {};
            var type = $state.params.type;

            vm.typeSuccess = type == 'success';
            vm.typeMore = type == 'more';


            vm.pageTit = vm.typeSuccess ? '非常感谢' : '了解更多';
        }
    ]);

});

