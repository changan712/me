'use strict';

define([
    'app',
    'service/resource/perf',
    'service/resource/common',
    'service/resource/feed',
    'service/resource/user',
    'service/dialog',
    'service/alert',
    'service/modalProjectUser',
    'service/wx',
    'directive/feedSelector',
    'directive/at'
    /* 'directive/at'*/
], function (md) {

    md.controller('feedProjectNewCtrl', ['$rootScope', '$scope', '$q', '$filter', '$interval', '$ionicHistory','$ionicLoading', '$state', '$ionicModal', 'perf', 'common', 'user', 'feed', 'dialog', 'alertService', 'wx', 'modalProjectUser', function ($rootScope, $scope, $q, $filter, $interval,$ionicHistory, $ionicLoading, $state, $ionicModal, perf, common, user, feed, dialog, alertService, wx, modalProjectUser) {

        var vm = $scope.vm = {};
        var id = $state.params.id;
        vm.imgChosenAll = [];
        vm.imgChosen = [];
        vm.users = null;
        vm.currentProject = null;
        vm.isEdit = !!id;

        vm.modalProjectUser = modalProjectUser;

        $scope.$on('$ionicView.leave', function () {
            $ionicHistory.clearHistory();
        });

        getDefaultData().then(function (data) {
            vm.data = data;
            vm.currentProject = _.findWhere($rootScope.projectsCanFeed, {id: data.aia_project.project_id});
        });

        function getDefaultData() {
            var defer = $q.defer();

            var data = {
                duration_type: '2',
                aia_project: {}
            };

            if (!vm.isEdit) {
                if (localStorage.getItem('tdsRecentNewFeedProject')) {
                    data = JSON.parse(localStorage.getItem('tdsRecentNewFeedProject'));
                    defer.resolve(data);
                } else {
                    defer.resolve(data);
                }
            } else {
                feed.get({id: id, format: 'aia_project_detail'}).$promise.then(function (res) {
                    data = parser(res);
                    defer.resolve(data);
                })
            }
            return defer.promise;
        }

        var interval = $interval(function () {
            if (!vm.isEdit && $scope.form.$dirty)
                localStorage.setItem('tdsRecentNewFeedProject', JSON.stringify(vm.data));
        }, 2000);

        $scope.$on('$destroy', function () {
            $interval.cancel(interval);
        });

        /*    if (vm.isEdit) {
         feed.get({id: id, format: 'aia_project_detail'}).$promise.then(function (res) {
         vm.data = parser(res);
         vm.currentProject = _.findWhere($rootScope.projectsCanFeed, {id: vm.data.aia_project.project_id});
         /!*   vm.data.aia_project = _.pick(vm.currentProject, 'percent', 'has_milestone', 'milestone');
         vm.data.aia_project.project_id = res;*!/
         })
         }*/

        //todo 不得不转的数据；
        function parser(data) {
            data.duration_type = data.duration_type.toString();
            //goal_ids
            data.goal_ids = _.each(data.goals, function (item) {
                var arr = [];
                arr.push(_.pick(item, 'id', 'completion_rate'));
                return arr;
            });

            //value_ids;
            data.value_ids = {};
            _.each(data.values, function (value) {
                data.value_ids[value.type_id] = _.pluck(value.values, 'id');
            });

            return data;
        }

        vm.showModalPercent = function () {

            var percentDefaultData = {
                milestone: {
                    time_type: '1'
                }
            };
            return dialog.modal({
                title: '进度',
                templateUrl: 'modal-project-percent.tpl',
                data: _.extend({}, percentDefaultData, vm.data.aia_project)

            }).then(function (res) {
                _.extend(vm.data.aia_project, res);
            })
        };

        vm.showModalProject = function () {

            if (vm.isEdit) {
                return false;
            }
            return dialog.modal({
                title: '选择项目组',
                templateUrl: 'modal-project-select.tpl',
                data: vm.data.aia_project.project_id,
                view: $rootScope.projectsCanFeed

            }).then(function (res) {
                vm.currentProject = _.findWhere($rootScope.projectsCanFeed, {id: res});
                vm.data.aia_project = _.pick(vm.currentProject, 'percent', 'has_milestone', 'milestone');
                vm.data.aia_project.project_id = res;
                $scope.form.$setDirty();
            })
        };

        vm.showModalDuration = function () {

            return dialog.modal({
                    title: '用时',
                    templateUrl: 'modal-duration.tpl',
                    data: {duration: vm.data.duration, duration_type: vm.data.duration_type}
                })
                .then(function (res) {
                    angular.merge(vm.data, res);
                    $scope.form.$setDirty();
                })
        };

        vm.showModalStarr = function (field, option, data) {
            return dialog.modal({
                    title: option.title,
                    templateUrl: 'modal-starr.tpl',
                    maxLength: 200,
                    required: option.required,
                    data: {content: data}
                })
                .then(function (res) {
                    vm.data[field] = res.content;
                    $scope.form.$setDirty();
                })
        };

        $scope.$watch('vm.imgChosen', function (n, o) {
            if (n && n.length) {
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

        /*    //获取location
         wx.getLocation().then(function (res) {
         vm.data.location = res;
         });*/

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
                        $rootScope.$broadcast('feedProject', {type: 'update', data: res});
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
                $rootScope.$broadcast('feedProject', {type: 'new', data: res});
                $interval.cancel(interval);
                localStorage.removeItem('tdsRecentNewFeedProject');
                $state.go('^.list');
            });

        }

    }]);

});

