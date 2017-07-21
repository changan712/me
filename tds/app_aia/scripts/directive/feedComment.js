define([
    'app',
    'service/feedUpdate'

], function (md) {

    md.directive('feedComment', ['$rootScope', 'feedUpdate', function ($rootScope, feedUpdate) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'views/app/feed/feed-comment.tpl.html',
            scope: {
                view: '=',
                //评论对应的feed
                feed: '='
            },
            link: function ($scope, $el, attr, ctrl) {
                var vm = $scope.vm = {};
                // vm.feedUpdate = feedUpdate;

                vm.deleteComment = function (target) {
                    if ($rootScope.currentUser.id == target.user.id) {
                        feedUpdate.deleteComment(target).then(function () {
                            $scope.view = _.reject($scope.view, {id: target.id});
                        });
                    }
                };


                //回复
                vm.createComment = function ($event, reply) {
                    if (!/link/.test($event.target.className)) {
                        feedUpdate.createComment($scope.feed, reply).then(function (res) {
                            return $scope.view.unshift(res.toJSON());
                            // feedCache.setItem(target);

                        })

                    }
                }
            }
        }

    }]);

});