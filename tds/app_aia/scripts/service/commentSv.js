/**
 * comment modal
 */
define([
    'app',
    'directive/at'
], function (md) {
    md.factory('commentSv', ['$rootScope', '$ionicModal', '$timeout', '$controller', '$q', function ($rootScope, $ionicModal, $timeout, $controller, $q) {
        var modal;

        var $scope = $rootScope.$new();
        console.log($scope);
        var vm = $scope.vm = {};

        var defer;
        vm.data = {};

        vm.commentSbm = function (form) {
            $timeout(function () {
                if (form.$valid) {
                    vm.data.comment = vm.data.comment.trim();
                    defer.resolve(vm.data);
                    form.$setPristine();
                    vm.modal.hide();
                }
            })
        };

        vm.commentCancel = function (form) {
            vm.data = {};
            defer.reject();
            vm.modal.hide();
            form.$setPristine();
        };

        $ionicModal.fromTemplateUrl('views/com/components/comment.html', {
            scope: $scope,
            animate: 'slide-up'
        }).then(function (res) {
            vm.modal = res;
        });

        function createComment(item, reply) {
            defer = $q.defer();
            vm.data = {};
            vm.modal.show();
            vm.target = item;

            if (reply) {
                vm.data.comment = '回复' + reply.user.name + '：';
            }
            return defer.promise;
        }

        return {

            getModal: function () {
                return vm.modal;
            },
            create: createComment

        };

    }]);
});