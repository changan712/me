'use strict';

define([
    'app',
    'service/commentSv',
    'service/resource/notice',
    'service/dialog'

], function (md) {

    md.controller('noticeDetailCtrl', ['$rootScope', '$scope', '$state', '$sce', 'dialog', 'notice', 'commentSv', function ($rootScope, $scope, $state, $sce, dialog, notice, commentSv) {

        var vm = $scope.vm = {};

        var id = $state.params.id;


        vm.comments = [];

        notice.get({id: id}).$promise.then(function (res) {

            res.content = $sce.trustAsHtml(res.content);
            vm.detail = res;

        });

        getComments();

        function getComments() {
            return notice.getComments({notice_id: id}).$promise.then(function (res) {
                return vm.comments = res;
            });
        }

        vm.goUserHome = function (userId) {
            $state.go('app.feed.home',{id:userId,from:'app.notice.detail',fromParams:{id:id}})
        };

        vm.toggleLike = function () {
            vm.detail.like.self = !vm.detail.like.self;
            //like
            if (vm.detail.like.self) {
                vm.detail.like.count++;
                notice.like({}, {notice_id: id})
            }
            //delete like
            else {
                vm.detail.like.count--;
                notice.like({action: 'delete-by-notice-id'}, {notice_id: id})
            }
        };

        vm.comment = function () {
            commentSv.create(vm.detail)
                .then(function (res) {
                    return notice.comment({notice_id: id}, {
                        notice_id: id,
                        info: res.comment
                    }).$promise;
                })
                .then(function (res) {
                    dialog.tip('评论成功！');
                    getComments();
                })
        }

    }]);

});

