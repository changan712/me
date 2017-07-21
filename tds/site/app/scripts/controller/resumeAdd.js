'use strict';

define([
    'app',
    'service/resume',
    'service/position',
    'service/tip',
    'service/wxStat',
    'service/wx'

], function (md) {

    md.controller('resumeAddCtrl', ['$rootScope', '$scope', '$ionicLoading', '$http', '$location', '$state', '$ionicModal', 'sourceFilter', 'resume', 'position', 'wxUser', 'tip', 'wxStat',
        function ($rootScope, $scope, $ionicLoading, $http, $location, $state, $ionicModal, sourceFilter, resume, position, wxUser, tip, wxStat) {
            var vm = $scope.vm = {};
            vm.posDetai = {};
            vm.addSubmited = false;
            vm.hasLkin = $rootScope.corp && $rootScope.corp.imports.indexOf('linkedin') > -1;

            vm.importData = {
                site: 0
            };
            //获取resume list
            // getResumeList();

            //导入

            $ionicModal.fromTemplateUrl('import.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                vm.modal = modal;
            });

            vm.modalImport = function (importSite) {
                if (importSite != 'linkedin') {
                    vm.siteName = sourceFilter(importSite) || '';
                    vm.importData.site = importSite || 0;
                    vm.modal.show();
                } else {
                    location.href = 'https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=754vguksy0swfa&redirect_uri=' + location.origin + '/super/linkedin/import%3Furl_name%3D'+global_company['url_name']+'%26weixin_unionid%3D' + wxUser.getUser().weixin_unionid + '%26weixin_nickname%3D' + wxUser.getUser().weixin_nickname + '&state=JKHhkj876786GHgfdgHYTuyt&scope=r_basicprofile%20r_emailaddress%20rw_company_admin';
                }
            };

            vm.hideImPortModal = function () {
                vm.addSubmited = false;
                vm.modal.hide();
            };

            vm.importSubmit = function () {
                vm.addSubmited = true;
                if ($scope.resumeAdd.form.$valid) {
                    var data = angular.extend({}, vm.importData, wxUser.getUser());
                    $ionicLoading.show();
                    resume.import({}, data, function (res) {
                        wxStat.import();
                        $ionicLoading.hide();
                        tip.show('导入成功！');
                        vm.hideImPortModal();
                        $state.go('resume.index');
                    }, function () {
                        $ionicLoading.hide();
                    });
                }
            };

            $scope.$on('$destroy', function () {
                vm.modal.remove();
            });

            function getResumeList() {

                resume.get(wxUser, function (res) {
                    vm.resumeList = res.data.list;
                });

            }
        }
    ])
    ;

})
;

