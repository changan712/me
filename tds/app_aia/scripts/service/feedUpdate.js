define([
    'app',
    'service/resource/feedComment',
    'service/resource/feedLike',
    'service/resource/feedScore',
    'service/resource/milestone',
    'service/resource/milestoneScore',
    'service/commentSv',
    'service/feedCache',
    'service/dialog',
    'directive/score'
], function (md) {
    md.factory('feedUpdate', ['$rootScope', 'feedComment', 'feedLike', 'commentSv', 'feedScore', 'milestone', 'milestoneScore', 'feedCache', 'dialog', function ($rootScope, feedComment, feedLike, commentSv, feedScore, milestone, milestoneScore, feedCache, dialog) {
        var currentUser = $rootScope.currentUser;
        return {
            deleteComment: function (target) {

                return dialog.actionSheet({titleText: '确认删除此评论么？'})
                    .then(function () {
                        return feedComment.delete({id: target.id}).$promise;
                    });
                /*    .then(function (res) {
                 feed.comments.data = _.reject(feed.comments.data, {id: target.id});
                 })*/

            },

            /**
             * 新建评论
             * @param target {Object} 被评论的feed对象
             * @param reply {Object} 被回复的对象
             * @returns {Promise}
             */
            createComment: function (target, reply) {

                return commentSv.create(target, reply)
                    .then(function (res) {
                        var commentData = {feed_id: target.id, info: res.comment, at_list: res.at_list};
                        if (reply) {
                            var regReply = new RegExp('^回复' + reply.user.name + '：');
                            if (regReply.test(res.comment)) {
                                commentData.reply_id = reply.id;
                                commentData.info = commentData.info.replace(regReply, '');
                            }
                        }

                        return feedComment.save({}, commentData).$promise;
                    });
                /*    .then(function (res) {
                 target.comments.data.unshift(res.toJSON());
                 feedCache.setItem(target);
                 return target;
                 })*/

            },

            scoreMilestone: function (target) {

                return milestone.get({id: target.result.milestone_id}).$promise.then(function (res) {
                    var mSScore = res.ms_score;
                    return dialog.modal({
                            title: mSScore.has_scored ? '里程碑详情' : '为里程碑评分',
                            templateUrl: 'views/app/feed/milestone.tpl.html',
                            data: mSScore
                        })
                        .then(function (res) {
                            return milestoneScore.save(res).$promise;
                        })

                });
            },

            score: function (target) {
                return dialog.modal({
                        title: '评分',
                        templateUrl: 'views/app/feed/score.tpl.html'
                    })
                    .then(function (res) {
                        res.feed_id = target.id;
                        //console.log(res);
                        return feedScore.save({}, res).$promise;
                    })
                    .then(function (res) {
                        _.extend(target, res);
                        feedCache.setItem(target);
                    });
            },

            toggleLike: function (target) {
                if (!target.liked) {
                    return feedLike.save({}, {feed_id: target.id}).$promise.then(function (res) {
                        target.likes.unshift(res.toJSON());
                        target.liked = 1;
                        feedCache.setItem(target);
                    })
                } else {
                    var likedId = _.findWhere(target.likes, {user_id: currentUser.id}).id;
                    return feedLike.delete({id: likedId}).$promise.then(function (res) {
                        target.liked = 0;
                        target.likes = _.reject(target.likes, function (like) {
                            return like.id == likedId;
                        });
                        feedCache.setItem(target);
                        return target;
                    })
                }

            }
        }


    }]);
});