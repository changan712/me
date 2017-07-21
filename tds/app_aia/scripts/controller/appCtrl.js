'use strict';

define([
    'app',
    'service/resource/user',
    'service/resource/project',
    'service/resource/notice',
    'service/alert',
    'service/tip',
    'service/dialog',
    'service/utils',
    'service/wx',
    'filter/filter',
    'directive/com',
    'directive/wx',
    'directive/msgBox',
    'directive/feedComment'
], function (md) {

    md.controller('appCtrl', ['$rootScope', '$scope', '$state', '$ionicHistory', '$timeout', 'user', 'project', 'utils', 'dialog', 'wx', 'alertService', 'tip','notice', function ($rootScope, $scope, $state, $ionicHistory, $timeout, user, project, utils, dialog, wx, alertService, tip,notice) {

        var vm = $scope.vm = {};
        var state = utils.getUrlParam('state');

        var debug = utils.isDebug();

        vm.initialized = true;

        wx.init();

        //userAgent
        var u = navigator.userAgent, app = navigator.appVersion;
        $rootScope.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
        $rootScope.isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

        //alerts
        vm.alerts = alertService.get();

        //tip
        vm.tip = tip.get();
        $scope.$on('tipChange', function () {
            vm.tip = tip.get();
        });

        vm.onTabDeSelect = function () {
            //todo 清除了全局的history 也许会带来问题，如果能清除特定tab的history,会更好;
            $ionicHistory.clearHistory();
        };

        //$rootScope.projectsCanFeed = project.query({format: 'aia_list', 'can_feed': 1});

        notice.getUnreadCount().$promise.then(function (res) {
            $rootScope.noticeUnreadCount = res.count;
        });


        vm.beforePublish = function () {
            return dialog.modal({
                title: '请选择',
                className: 'modal-field',
                hideBtnOk: true,
                headBarClassName: 'bar bar-light',
                templateUrl: 'views/com/components/modal-field.tpl.html',
                choose: function (choice, vmModal) {
                    vmModal.data = choice;
                    //todo 这样用有点.....
                    vmModal.ok({$valid: true});
                }
            }).then(function (res) {
                $state.go('app.feed.new', {type: res});
            })
        };



    }]);

});

