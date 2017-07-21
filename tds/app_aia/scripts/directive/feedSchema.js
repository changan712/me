define([
    'app',
    'service/feedUpdate',
    'service/modalProjectUser'

], function (md) {

    md.directive('feedSchema', ['feedUpdate', 'modalProjectUser', function (feedUpdate, modalProjectUser) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: function (ele, attr) {
                return attr.templateUrl || 'views/app/feed/feed-schema.tpl.html';
            },
            scope: {
                view: '=',
                type: '@'
            },
            link: function ($scope, $el, attr, ctrl) {
                var vm = $scope.vm = {};
                vm.feedUpdate = feedUpdate;

                $scope.view.map = {
                    latitude: $scope.view.latitude,
                    longitude: $scope.view.longitude,
                    name: $scope.view.address
                };
                //新建feed;
                vm.createNewComment = function (target) {
                    feedUpdate.createComment(target).then(function (res) {
                        target.comments.data.unshift(res.toJSON());
                    })
                };

                vm.modalProjectUser = modalProjectUser;
                vm.currentUser = $scope.$root.currentUser;

                //todo 写到filter里 效率不够高...
                vm.dateStrategy = function (item) {
                    return function (timeStr) {
                        var during0 = getTimeDuringFromNow(0),
                            during1 = getTimeDuringFromNow(-1),
                            during2 = getTimeDuringFromNow(-2);

                        var ms = (new Date(timeStr)).getTime();

                        if (ms <= during0[1] && during0[0] < ms) {
                            return '今天';
                        } else if (during1[1] > ms && ms >= during1[0]) {
                            return '昨天';
                        } else if (during2[1] > ms && ms >= during2[0]) {
                            return '前天';
                        } else {
                            item.timeMTh3Day = true;
                            return timeStr;
                        }
                    }
                };
                function getTimeDuringFromNow(day) {
                    var date = new Date();
                    var targetDay = new Date(date.setDate(date.getDate() + day));
                    var during = [];

                    during[0] = (new Date(targetDay.getFullYear() + '/' + (targetDay.getMonth() + 1) + '/' + targetDay.getDate())).getTime();
                    during[1] = during[0] + (24 * 60 * 60 * 1000);

                    return during;
                }
            }
        }

    }]);

});