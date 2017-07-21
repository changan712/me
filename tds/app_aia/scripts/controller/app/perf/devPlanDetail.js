'use strict';
define([
    'app',
    'service/resource/devPlan',
    'service/resource/devPlanComment',
    'service/dialog',
    'service/alert',
    'directive/fileReader'

], function (md) {
    md.controller('perfDevPlanDetailCtrl', ['$rootScope', '$scope', '$state', 'devPlan', 'devPlanComment', 'dialog', 'alertService', function ($rootScope, $scope, $state, devPlan, devPlanComment, dialog, alertService) {
        var vm = $scope.vm = {};

        var perfId = vm.perfId = $state.params.perfId;
        // $scope.perfCtrl.perfId = perfId;

        var id = vm.id = $state.params.id;

        vm.detail = devPlan.get({id: id});

        getComments();

        function getComments(search) {
            var params = _.extend({}, search, {plan_id: id});
            vm.comments = devPlanComment.query(params);
        }

        vm.createComment = function (replyId, replyUserId) {
            dialog.modal({
                    title: replyUserId ? '回复' : '评论',
                    templateUrl: 'modal-dev-plan-comment.html',
                    size: ''
                },
                {
                    readError: function (msg) {
                        alertService.add(msg, 3000, 'danger');
                    }
                })
                .then(function (res) {
                    res.development_plan_id = id;
                    res.user_id = $rootScope.currentUser.id;
                    res.file_name = res.currentFile && res.currentFile.name;
                    delete  res.currentFile;
                    //回复某条
                    if (replyId && replyUserId) {
                        res.reply_id = replyId;
                        res.reply_user_id = replyUserId;
                    }
                    return devPlanComment.save(res).$promise;
                })
                .then(function (res) {
                    alertService.add('评论成功');
                    vm.comments.push(res)
                })
            ;
        }


    }]);

});

