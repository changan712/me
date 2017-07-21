'use strict';

define([
    'app',
    'service/resume'
], function (md) {
    md.directive('resumeList', ['resume', '$location', function (resume, $location) {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: 'views/resume/list.html',
            scope: {
                title:"@"
            },
            link: function (scope, ele, attr) {
                var vm = scope.vm = {};
                vm.totalItems = 1000;
                vm.viewType = 0;
                //pagination
                vm.currentPage = parseInt($location.search().page) || 1;
                vm.pageChanged = function () {
                    $location.search('page', vm.currentPage);
                };

                resume.get($location.search(), function(res){
                    vm.resumeList = res['data']['list'];
                    vm.totalItems = res['data']['total'];
                })
            }
        }
    }]);
});