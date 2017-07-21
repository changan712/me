define([

    'app',
    'service/tip'
], function (md) {
    md.factory('dialog', ['$rootScope', '$templateCache', '$timeout', '$http', '$ionicModal', '$injector', '$ionicActionSheet', '$q', 'tip', function ($rootScope, $templateCache, $timeout, $http, $ionicModal,$injector, $ionicActionSheet, $q, tip) {

            var currentModal = null;
            return {
                modal: function (options, scopeData) {
                    var defer = $q.defer();
                    var scope = createScope(options, scopeData, defer);
                    createModal(scope).then(function (modal) {
                        currentModal = modal;
                        currentModal.show();
                    });
                    var offEvent = $rootScope.$on('$stateChangeStart', function dialogModalHdl() {
                        currentModal && currentModal.remove();
                        offEvent();
                    });
                    return defer.promise;

                },
                tip: function (html, during, hasHideIcon) {
                    return tip.show(html, during, hasHideIcon);
                },
                actionSheet: function (options) {

                    var defer = $q.defer();
                    var hide = angular.noop;
                    var setting = {
                        buttons: [],
                        titleText: '提示',
                        cancelText: '取消',
                        destructiveText: '确定',
                        cancel: function () {
                            defer.reject();
                            hide();
                        },
                        destructiveButtonClicked: function () {
                            defer.resolve(-1);
                            hide();
                        },
                        buttonClicked: function (index) {
                            hide();
                            defer.resolve(index);
                        }
                    };

                    var config = _.extend({}, setting, options);

                    hide = $ionicActionSheet.show(config);

                    return defer.promise;

                }
            };

            function createModal(scope) {
                return $ionicModal.fromTemplateUrl('views/com/components/modal.html', {
                    scope: scope
                }).then(function (modal) {

                    return modal;
                })
            }

            function createScope(options, scopeData, defer) {

                var $scope = $rootScope.$new();
                var vm = $scope.vm = {};

                angular.extend(vm, angular.copy(options), {scopeData: scopeData});

                if (vm.templateUrl) {
                    if ($templateCache.get(vm.templateUrl)) {
                        vm.innerTemplateString = $templateCache.get(vm.templateUrl);
                    } else {
                        $http.get(vm.templateUrl).then(function (res) {
                            vm.innerTemplateString = res.data;
                            $templateCache.put(vm.templateUrl, vm.innerTemplateString);
                        })
                    }
                }

                if (vm.updateScope) {
                    vm.updateScope($scope);
                }

                vm._stopDefault=function(e){
                    e.stopPropagation();
                    return false;
                };

                vm._filterChange = function (filter) {
                        $timeout(function () {
                            var instance = _.findWhere($injector.get('$ionicScrollDelegate')._instances, {$$delegateHandle: 'mainScroll'});
                            instance.scrollTop();
                        });
                    
                    vm.filterChange && vm.filterChange(filter, vm)
                };

                vm.ok = function (form) {
                    $timeout(function () {
                        if (form.$valid) {
                            vm.hide();
                            if (vm.parse) {
                                defer.resolve(vm.parse(vm.data, vm.view));
                            } else {
                                defer.resolve(vm.data);
                            }

                        } else {
                            defer.reject(form.$error);
                        }
                    })
                };
                vm.hide = function () {
                    $scope.$destroy();
                    currentModal.hide();
                    currentModal.remove();
                    currentModal = null;
                };

                vm.cancel = function () {
                    // vm.data = null;
                    vm.hide();
                    defer.reject();
                    //_this.defer.resolve(vm.data);
                };

                $scope.$on('destroy', function () {
                    console.log(1);
                });

                return $scope;

            }

        }]
    )
});