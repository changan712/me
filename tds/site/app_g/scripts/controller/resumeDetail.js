'use strict';

define([
    'app',
    'service/resume',
    'service/alert',
    'directive/email'

], function (md) {
    //职位列表
    md.controller('resumeDetailCtrl', ['$rootScope', '$scope', '$location', '$state', 'resume', function ($rootScope, $scope, $location, $state, resume) {

        $rootScope.page = '';
        var vm = $scope.vm = {};


        vm.sendEmail = function(data){
            console.log(data);
        }
    }
    ]);

});

