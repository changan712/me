'use strict';

define(['app', 'service/userInfo', 'service/dialog'], function (md) {
    md.controller('userInfoCtrl', ['$rootScope', '$scope', '$state', '$modal', 'dialog', 'userInfo', function ($rootScope, $scope, $state, $modal, dialog, userInfo) {

        $rootScope.page = 'user-info';
        $scope.animationsEnabled = true;


        var vm = $scope.vm = {};
        var id = $state.params.id;


        userInfo.get({}, function (res) {
            if (res.id) {
                vm.username = res.username;
                vm.contact = res.contact;
                vm.mobile = res.mobile;
                vm.head_data = '..' + res.avatar;
            }
        });


        vm.readerError = function (msg) {
            dialog.alert(msg);
        };


        vm.changePwd = function () {
            var modal = $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'views/com/changePwd.html',
                controller: ['$scope', function ($scope) {
                    $scope.yes = function () {
                        if ($scope.input == $scope.confirmInput) {
                            userInfo.submit({}, {'password': $scope.input}, function (res) {
                                dialog.alert('密码修改成功！', {});
                                $scope.$dismiss();
                            });
                        }
                        else dialog.alert('密码不一致，请您再次输入！', {})
                    };
                    $scope.no = function () {
                        $scope.$dismiss();
                    }
                }]
            });
        };


        vm.submit = function (form) {
            if (form.contact.$dirty || form.mobile.$dirty || vm.head_type) {
                if (form.contact.$dirty) {
                    var data = {'contact': vm.contact};
                }
                if (form.mobile.$dirty) {
                    var data = {'mobile': vm.mobile};
                }
                if (vm.head_type) {
                    var data = {'avatar_data': {'data': vm.head_data.match(/,(.*)$/)[1], 'type': vm.head_type}}
                }
                userInfo.submit({}, data, function (res) {
                    dialog.alert('编辑成功！', {});
                });
            }

        };
    }]);
});