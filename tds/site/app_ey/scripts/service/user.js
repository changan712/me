define(['app'], function (md) {
    md.service('user', ['$rootScope', function ($rootScope, $timeout, $ionicLoading) {

        var LOCAL_STORAGE_ID = 'userEy';
        var user = initUser();

        $rootScope.$watch(function () {
            return user;
        }, function () {
           localStorage[LOCAL_STORAGE_ID] = JSON.stringify(user);
        }, true);

        return user;

        function initUser() {

            var userString = localStorage[LOCAL_STORAGE_ID];
            var mod = {
                meeting: null,
                positionSelected: undefined,
                hasApplied: false
            };

            if (userString) {
                mod = JSON.parse(userString);
            } else if (!$rootScope.debug) {
                mod = global_user.storage || mod;
            }

            return mod;
        }

    }]);
});