'use strict';

define([
    'app',
    'service/position',
    'service/resume',
    'service/alert',
    'service/dialog',
    'service/utils'

], function (md) {
    //职位详细页
    md.controller('positionDetailCtrl', ['$scope', '$state', 'position', 'resume', 'alertService', 'utils','dialog' ,function ($scope, $state, position, resume, alertService, utils,dialog) {

        var vm = $scope.vm = {};

        vm.position_id = $state.params.id;
        vm.checkedAll = false;
        vm.dlCheckedUrl = undefined;
        vm.dlAllUrl = getDlUrl(true);

        position.get({id: vm.position_id}, function (res) {
            vm.position = res;
        });

        vm.allCheck = function () {
            angular.forEach(vm.resumeList, function (item) {
                item.checked = vm.checkedAll;
            })
        };

        vm.itemCheck = function (item) {
            if (!item.checked) {
                vm.checkedAll = false;
            }
        };

        $scope.$watch('vm.resumeList', function (n) {
            vm.dlCheckedUrl = getDlUrl();
        }, true);

        function getDlUrl(all) {
            if (!all) {
                var idArray = _.pluck(_.filter(vm.resumeList, function (item) {
                    return item.checked;
                }), 'id');

                if (idArray.length) {
                    return utils.getHost() + utils.getCorporation() + '/admin/resumes/download?id=' + idArray.join(',');
                }
            } else {
                return utils.getHost() + utils.getCorporation() + '/admin/resumes/download?position_id=' + vm.position_id;
            }
        }

        vm.deleteTag = function (tag) {
            var arr = _.clone(vm.position.tag);
            arr.splice(vm.position.tag.indexOf(tag), 1);
            position.update({id: vm.position.id}, {tag: arr}, function (res) {
                alertService.add('更新成功', 3000);
                vm.position.tag = arr;
            });
        };

        vm.addTag = function (tag) {
            var arr = _.clone(vm.position.tag);
            arr.push(tag);
            position.update({id: vm.position.id}, {tag: arr}, function (res) {
                alertService.add('更新成功', 3000);
                vm.position.tag = arr;
            });
        };

        //设置状态
        vm.setStatus = function (status) {
            if (status == 'CLOSED') {
                dialog.confirm('关闭职位后将不可开启，确定要关闭该职位？').success(function () {
                    position.update({id:  vm.position.id}, {"status": status}, function (res) {

                        $state.go('position.list');
                    })
                });
            }else{
                position.update({id: vm.position.id}, {status: status}, function (res) {
                    alertService.add('更新成功', 3000);
                    vm.position.status = status;
                });
            }
        };


        getResumeList({position_id: vm.position_id}, function (res) {
            vm.resumeList = res.items;
            vm.totalItems = res._meta.pageCount;
        });

        //vm.currentPage = parseInt($location.search().page) || 1;

        vm.pageChanged = function (n) {
            getResumeList({page: vm.currentPage, position_id: vm.position_id}, function (res) {
                vm.resumeList = res.items;
                vm.totalItems = res._meta.pageCount;
            })
        };

        function getResumeList(options, callback) {
            resume.get(options, function (res) {
                callback(res);
            })
        }

    }]);

});

