define([
    'app',
    'service/resource/user',
    'service/dialog'

], function (md) {

    md.directive('at', ['$rootScope', '$q', 'user', 'dialog', function ($rootScope, $q, user, dialog) {
        return {
            restrict: 'E',
            require: '?^ngModel',
            replace: true,
            templateUrl: 'views/com/components/at.tpl.html',
            scope: {},
            link: function ($scope, $el, attr, ctrl) {
                if (!ctrl) return;
                var vm = $scope.vm = {};
                vm.maxLength = $scope.$eval(attr.maxlength) || 3;

                ctrl.$parsers.push(function (data) {
                    if (data) {
                        return _.pluck(data, 'id');
                    }
                });
                vm.showModalUsers = function () {

                    getAtUsers($rootScope.currentUser.id)
                        .then(function (res) {
                            if (ctrl.$modelValue && ctrl.$modelValue.length) {
                                _.each(res, function (item) {
                                    if (ctrl.$modelValue.indexOf(item.id) > -1) {
                                        item.checked = true;
                                    }
                                });
                            }
                            return dialog.modal({
                                title: '选择@的人',
                                templateUrl: 'modal-at.tpl',
                                data: res,
                                maxLength: vm.maxLength,
                                parse: function (data) {
                                   // console.log(data);
                                    var ids = [];
                                    return _.filter(data, function (item) {
                                        return item.checked;
                                    });
                                },
                                updateScope: function (scope) {
                                    var vm = scope.vm;
                                    scope.$watch('vm.data', function (n) {
                                        if (n) {
                                            vm.selectedLength = _.filter(n, function (item) {
                                                return item.checked;
                                            }).length

                                        }
                                    }, true);
                                }

                            })
                        })
                        .then(function (res) {
                           // console.log(res);
                            ctrl.$setViewValue(res);
                            vm.data = res;
                        });
                };

                function getAtUsers(uid) {

                    var defer = $q.defer();
                    if (!vm.users) {
                        user.getAtUserList({uid: uid}).$promise.then(
                            function (res) {
                                vm.users = res;
                                defer.resolve(res);
                            }
                        )
                    } else {
                        defer.resolve(vm.users);
                    }

                    return defer.promise;
                }

            }

        }

    }]);

});