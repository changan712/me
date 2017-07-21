'use strict';

define([
    'app',
    'service/resource/perf',
    'service/resource/common',
    'service/resource/feed',
    'service/resource/user',
    'service/dialog',
    'service/alert',
    'service/wx',
    'directive/feedSelector',
    'directive/at'
    /* 'directive/at'*/
], function (md) {

    md.controller('feedNewCtrl', ['$rootScope', '$scope', '$q', '$filter', '$interval', '$ionicHistory', '$ionicLoading', '$state', '$ionicModal', 'perf', 'common', 'user', 'feed', 'dialog', 'alertService', 'wx', function ($rootScope, $scope, $q, $filter, $interval, $ionicHistory, $ionicLoading, $state, $ionicModal, perf, common, user, feed, dialog, alertService, wx) {

        var vm = $scope.vm = {};
        var id = $state.params.id;
        var type = vm.type = $state.params.type;

        var STORAGE_KEY = 'tdsRecentNewFeed';

        vm.imgChosenAll = [];
        vm.imgChosen = [];
        vm.users = null;

        //todo 在modal 里 实现单例
        vm.modalOpend = false;

        vm.isEdit = !!id;

        $scope.$on('$ionicView.leave', function () {
            $ionicHistory.clearHistory();
        });

        getDefaultData().then(function (data) {
            vm.data = data;
        });

        vm.clearData = function () {
            vm.data = {};
            vm.scoreData = {};
            vm.imgChosenAll = [];
            //不能清除计时器;
            //$interval.cancel(interval);
            localStorage.removeItem(STORAGE_KEY);
            $scope.form.$setPristine();
        };

        function getDefaultData() {
            var defer = $q.defer();

            var data = {};

            if (!vm.isEdit) {
                if (localStorage.getItem(STORAGE_KEY)) {
                    data = JSON.parse(localStorage.getItem(STORAGE_KEY));
                    defer.resolve(data);
                } else {
                    defer.resolve(data);
                }
            } else {
                feed.get({id: id}).$promise.then(function (res) {
                    data = parser(res);
                    defer.resolve(data);
                })
            }
            return defer.promise;
        }

        var interval = $interval(function () {
            if (!vm.isEdit && $scope.form.$dirty)
                localStorage.setItem(STORAGE_KEY, JSON.stringify(vm.data));
        }, 2000, 0, false);

        $scope.$on('$destroy', function () {
            $interval.cancel(interval);
        });

        //todo 不得不转的数据；
        function parser(data) {
            // data.duration_type = data.duration_type.toString();
            data.goal_ids = _.each(data.goals, function (item) {
                var arr = [];
                arr.push(_.pick(item, 'id', 'completion_rate'));
                return arr;
            });

            // console.log(data.values);
            data.value_ids = {};
            _.each(data.values, function (value) {
                data.value_ids[value.type_id] = _.pluck(value.values, 'id');
            });

            return data;
        }

        vm.allUsers = [];
        function getAllUsers() {

            var defer = $q.defer();
            if (vm.allUsers.length) {
                defer.resolve(vm.allUsers);
            } else {
                user.getPinyinList().$promise.then(function (res) {
                    var arr = [];
                    _.each(res, function (v) {

                        arr = arr.concat(v);
                    });

                    vm.allUsers = arr;
                    defer.resolve(arr);

                })
            }
            return defer.promise;
        }

        if (!vm.isEdit) {
            getAllUsers();
        }

        vm.removeFor = function (id) {
            vm.data.related_user_ids = _.without(vm.data.related_user_ids, id)
        };

        vm.addFor = function () {
            if (vm.modalOpend) return;
            getAllUsers().then(function (res) {
                _.map(res, function (item, index) {
                    delete item.active;
                    if (item.id == $rootScope.currentUser.id) {
                        item.disabled = true;
                    }
                    if (vm.data.related_user_ids && vm.data.related_user_ids.indexOf(item.id) > -1) {
                        item.active = true;
                    }
                });

                return res;
            }).then(function (view) {
                vm.modalOpend = true;
                dialog.modal({
                    title: '请选择',
                    templateUrl: 'modal-for.tpl',
                    view: view,
                    hasFilter: true,
                    filterChange: function (filter, vmMd) {

                    },
                    parse: function (data, view) {
                        return _.pluck(_.filter(view, function (item) {

                            return item.active;
                        }), 'id');

                    }
                }).then(function (res) {
                    vm.data.related_user_ids = res;
                    $scope.form.$setDirty();
                }).finally(function () {
                    vm.modalOpend = false;
                })
            })
        };

        vm.showModalStarr = function (field, option, data) {
            return dialog.modal({
                title: option.title,
                templateUrl: 'modal-starr.tpl',
                required: option.required,
                maxLength: 200,
                data: {content: data}
            })
                .then(function (res) {

                    vm.data[field] = res.content;
                    $scope.form.$setDirty();

                })
        };

        $scope.$watch('vm.imgChosen', function (n, o) {
            if (n && n.length) {
                //android 下 相同图片本地id 相同;
                vm.imgChosenAll = _.uniq(vm.imgChosenAll.concat(n));
                vm.imgChosen = [];
            }
        }, true);

        vm.deleteChosenImg = function (e, item) {
            e.stopPropagation();
            e.preventDefault();
            vm.imgChosenAll = _.reject(vm.imgChosenAll, function (img) {
                return img == item;
            });

            return false;
        };

        common.query({field: 'company'}).$promise.then(function (res) {
            //  console.log(res);
            vm.corpValues = res;
            /*   vm.values = _.findWhere(res, {name: 'Value'}).values;


             vm.leaderships = _.findWhere(res, {name: 'Leadership'}).values;
             vm.competencies = _.findWhere(res, {name: 'Competency'}).values;*/
        });

        //获取location
        if ($rootScope.currentUser.emplyment_type != 3) {
            wx.getLocation().then(function (res) {
                vm.data.location = res;
            });
        }

        vm.submit = function (form) {
            form.$setSubmitted(true);
            //表单验证
            if (form.$valid) {
                //新建模式
                if (!vm.isEdit) {
                    //如果有图片
                    if (vm.imgChosenAll.length) {
                        $ionicLoading.show();
                        wx.uploadImg(vm.imgChosenAll).then(function (res) {
                            vm.data.wx_images = res;
                            $ionicLoading.hide();
                            saveFeed();
                        }, function (e) {
                            alertService.add(e, 3000, 'danger');
                        })
                    } else {
                        saveFeed();
                    }
                }
                //编辑模式
                else {
                    feed.update({id: id}, vm.data).$promise.then(function (res) {
                        $ionicLoading.hide();
                        dialog.tip('更新成功！');
                        $rootScope.$broadcast('feed', {type: 'update', data: res.toJSON()});
                        $state.go('^.list');
                    });
                }
            } else {
                dialog.tip('请填写完整信息')
            }
        };

        function saveFeed() {
            return feed.save({}, vm.data).$promise.then(function (res) {
                $ionicLoading.hide();
                dialog.tip('发布成功！');
                $rootScope.$broadcast('feed', {type: 'new', data: res.toJSON()});
                $state.go('^.list');
                $interval.cancel(interval);
                localStorage.removeItem(STORAGE_KEY);
            });

        }

    }]);

});

