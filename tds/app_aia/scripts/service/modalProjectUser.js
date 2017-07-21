define([
    'app',
    'service/resource/projectUser'
], function (md) {
    md.service('modalProjectUser', ['$rootScope', '$ionicModal', 'projectUser', function ($rootScope, $ionicModal, projectUser) {

        var currentModal = null;
        //function paddingSet(){
        //    var totalWidth=document.documentElement.clientWidth;
        //    console.log(totalWidth)
        //    var paddingSub=10;
        //    var colUl=document.getElementById('membersUl');
        //    var paddingCol=(totalWidth-paddingSub*2)%70/2;
        //    console.log(paddingCol);
        //    colUl.style.paddingLeft=paddingCol+'px';
        //
        //
        //}

        return {
            show: function (id) {
                var $scope = $rootScope.$new();

                projectUser.query({project_id: id}).$promise.then(function (res) {
                    $scope.users = _.groupBy(res, 'role');
                });
                if (currentModal && currentModal.projectId == id) {
                    currentModal.show();
                    //paddingSet();
                    return;
                }
                $scope.hide = function () {
                    currentModal.hide()
                };
                $scope.show = function () {
                    currentModal.show();
                };
                $ionicModal.fromTemplateUrl('views/com/components/projectModal.tpl.html', {
                    scope: $scope,
                    animation: 'slide-in-up'
                }).then(function (modal) {
                    currentModal = modal;
                    currentModal.show();
                    currentModal.projectId = id;
                    //paddingSet();
                });
            },
            destroy: function () {
                console.log('hide');
                currentModal && currentModal.remove();
            }
        }

    }]);
});