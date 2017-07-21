define([
    'app'

], function (md) {
    md.service('modalSelect', ['$rootScope', '$ionicPopover', '$controller', '$ionicModal', '$q', function ($rootScope, $ionicPopover, $controller, $ionicModal, $q) {

        this.modals = {};
        this.defers = {};
        var _this = this;
        var deferMain;
        this.create = function (name, items, maxLength, labelName, data) {

            deferMain = $q.defer();

            _create.apply(this, arguments).then(function (modal) {
                modal.show();

            });

            return deferMain.promise;
        };

        this.has = function (name) {
            return !!this.modals[name]
        };

        this.getAll = function (name) {
            return this.modals[name]
        };

        //不同于dialog中modal隐藏后直接销毁， 此处新建的Model 缓存在this.modals中；
        function _create(name, items, maxLength, labelName, data) {
            var _this = this;
            var offEvent = $rootScope.$on('$stateChangeStart', function dialogModalHdl() {
                _this.modals[name] && _this.modals[name].hide();

                offEvent();
            });

            if (this.modals[name]) {
                //以promise方式返回
                var deferCreate = $q.defer();
                deferCreate.resolve(this.modals[name]);

                return deferCreate.promise;
            } else {

                var $scope = $rootScope.$new();

                $scope.$on('$destroy', function () {
                    _this.modals[name].remove();
                    delete _this.modals[name];
                    delete _this.defers[name];
                });

                return $ionicModal.fromTemplateUrl('views/com/components/modal-select.html', {
                    scope: $scope,
                    animation: 'slide-in-up'
                }).then(function (modal) {

                    locals = {
                        $scope: $scope,
                        modal: modal,
                        views: items,
                        maxLength: maxLength,
                        labelName: labelName,
                        data: data
                    };

                    $controller(modalController, locals);
                    return _this.modals[name] = modal;
                });
            }
        }

        function modalController($scope, modal, views, maxLength, labelName, data) {
            var vm = $scope.vm = {};

            vm.views = views;
            vm.maxLength = maxLength;
            vm.labelName = labelName || 'name';
            vm.data = data || [];
            //this.modelRadio = '52';
            vm.itemSelectedLength = 0;

            vm.popoverMsg = '';

            var templatePopover = '<ion-popover-view> <ion-content><div class="padding"> {{vm.popoverMsg}}</div></ion-content></ion-popover-view>';

            vm.popover = $ionicPopover.fromTemplate(templatePopover, {
                scope: $scope
            });

            vm.openPopover = function ($event, msg) {
                vm.popoverMsg = msg;
                vm.popover.show($event);
            };

            $scope.$on('modal.hidden', function () {
                vm.popover.hide();
            });

            $scope.$on('$destroy', function () {
                vm.popover.remove();
                vm.popoverMsg = '';
            });

            if (vm.data.length) {
                vm.itemSelectedLength = vm.data.length;
                var ids;
                if (angular.isObject(data[0])) {
                    ids = _.pluck(vm.data, 'id');
                } else {
                    ids = vm.data;
                }

                _.each(views, function (item) {
                    if (ids.indexOf(item.id) > -1) {
                        item.checked = true;
                    }
                })
            }

            vm.show = function () {
                vm.change();
                modal.show();

            };

            vm.change = function (item) {
                var itemSelect = _.filter(views, function (view) {
                    return view.checked
                });
                if (vm.maxLength == 1) {
                    var itemOthers = _.reject(itemSelect, function (i) {
                        return i.id == item.id
                    })[0];

                    if (itemOthers) {
                        itemOthers.checked = false;
                    }
                }

                vm.data = getData(views);
                vm.itemSelectedLength = itemSelect.length;

            };

            vm.ok = function () {

                vm.itemSelectedLength = vm.data.length;
                //console.log(vm.data);
                deferMain.resolve(vm.data);
                return modal.hide();
            };
            vm.cancel = function () {
                _.each(this.views, function (item) {
                    item.checked = false;
                });
                vm.data = [];
                vm.modelRadio = undefined;
                vm.itemSelectedLength = 0;

                deferMain.resolve(vm.data);
                return modal.hide();
            };

            function getData(views) {
                var data = [];

                var viewChecked = _.filter(views, function (view) {
                    return view.checked
                });

                _.each(viewChecked, function (item) {
                    if (item.hasOwnProperty('completion_rate')) {
                        data.push(_.pick(item, 'id', 'completion_rate'));
                    } else {
                        data.push(item.id);
                    }

                });

                return data;
            }

        }

    }]);
});