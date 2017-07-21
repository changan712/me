'use strict';

define([
    'app',
    'service/resume',
    'service/alert',
    'service/utils',
    'directive/email'

], function (md) {
    md.controller('resumeDetailCtrl', ['$rootScope', '$scope', '$sce', '$location', '$http', '$state', 'resume', 'utils', function ($rootScope, $scope, $sce, $location, $http, $state, resume, utils) {

        $rootScope.page = '';
        var vm = $scope.vm = {};
        var acceptType = ['pdf', 'jpg', 'jpeg', 'png', 'gif', 'html'];

        vm.resume_id = $state.params.id;

        //可预览附件；
        vm.files = [];

        vm.getDlUrl = function () {
            return utils.getHost() + utils.getCorporation() + '/admin/resumes/download?id=' + vm.resume_id;
        };

        vm.getTrustedUrl = function (url) {
            return $sce.trustAsUrl(url.toString());
        };


        resume.get({id: vm.resume_id}, function (res) {

            vm.resume = res;

            angular.forEach(vm.resume.file, function (v, k) {

                var type = v.split('.').pop().toLowerCase();
                var isImg = false, isAcceptType = true;
                if (acceptType.indexOf(type) < 0) {
                    v = '';
                    isAcceptType = false;
                } else {
                    v = utils.getHost() + utils.getCorporation() + '/admin/resumes/preview?id=' + vm.resume_id + '&index=' + k;
                    if (['jpg', 'jpeg', 'png', 'gif'].indexOf(type) >= 0) {
                        isImg = true;
                    }
                    vm.files.push({
                        index: k,
                        type: type,
                        url: v,
                        isAcceptType: isAcceptType,
                        isImg: isImg
                    });
                }

            });
        });


    }
    ]);

});

