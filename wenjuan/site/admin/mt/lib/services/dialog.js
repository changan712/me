define([
    'app'
], function (md) {
    md.service('dialog', ['$uibModal', '$q', '$timeout',
        function ($modal, $q, $timeout) {
            return {
                alert: function (msg, option) {
                    var defer = $q.defer();
                    var setting = {
                        btn: {label: '确定', style: 'btn-primary'},
                        size: 'sm',
                        title: '提示'
                    };

                    setting = _.extend(setting, option);

                    var modal = $modal.open({
                        size: setting.size,
                        backdrop: false,
                        templateUrl: 'views/com/alert.html',

                        controller: ['$scope', '$uibModalInstance', function ($scope, $modalInstance) {

                            var _this = this;
                            $scope.setting = setting;
                            $scope.msg = msg;
                            $scope.title = setting.title;

                            $scope.close = function () {
                                $scope.$dismiss();
                            };

                            $scope.ok = function () {
                                $scope.$close();
                            };

                        }]
                    });
                    extendMore(modal, defer);

                    return defer.promise;
                },
                confirm: function (msg, option) {
                    var defer = $q.defer();
                    var setting = {
                        btnOk: {label: '确定', style: 'btn-primary'},
                        btnCancel: {label: '取消', style: 'btn-default'},
                        size: 'sm',
                        title: '提示'
                    };

                    setting = _.extend(setting, option);

                    var modal = $modal.open({
                        size: setting.size,
                        backdrop: false,
                        templateUrl: 'views/com/confirm.html',
                        controller: ['$scope', '$uibModalInstance', function ($scope, $modalInstance) {
                            $scope.setting = setting;
                            $scope.msg = msg;
                            $scope.title = setting.title;

                            $scope.cancel = function () {
                                $modalInstance.dismiss();
                            };

                            $scope.ok = function () {
                                $modalInstance.close();
                            }
                        }]

                    });

                    extendMore(modal, defer);

                    return defer.promise;

                },

                prompt: function (msg, option) {
                    var defer = $q.defer();
                    var setting = {
                        btnOk: {label: '确定', style: 'btn-primary'},
                        btnCancel: {label: '取消', style: 'btn-default'},
                        size: 'sm',
                        title: '提示',
                        text:''
                    };

                    setting = _.extend(setting, option);

                    var modal = $modal.open({
                        size: setting.size,
                        backdrop: false,
                        templateUrl: 'views/com/prompt.html',
                        controller: ['$scope', '$uibModalInstance', function ($scope, $modalInstance) {
                            $scope.setting = setting;
                            $scope.msg = msg;
                            $scope.text = setting.text ;
                            $scope.title = setting.title;

                            $scope.cancel = function () {
                                $modalInstance.dismiss();
                            };

                            $scope.ok = function () {
                                $modalInstance.close($scope.text);
                            }
                        }]

                    });

                    extendMore(modal, defer);

                    return defer.promise;

                },

                message: function (msg, during) {

                    var modal = $modal.open({
                        size: 'sm',
                        backdrop: false,
                        templateUrl: 'views/com/message.html',
                        controller: ['$scope', function ($scope) {
                            $scope.msg = msg;
                            $scope.close = function () {
                                $scope.$close();
                            }

                        }]
                    });
                    if (during != 0) {
                        $timeout(function () {
                            modal.close();
                        }, during || 3000)
                    }
                    return modal;

                }

            };


            function extendMore(modal, defer) {
                defer.promise.success = function (fn) {
                    modal.result.then(function (msg) {
                        fn(msg);
                    });
                    return defer.promise;
                };
                defer.promise.error = function (fn) {
                    modal.result.then(null, function (error) {
                        fn(error);
                    });
                    return defer.promise;
                };
            }
        }]
    )
});