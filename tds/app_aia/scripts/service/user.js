'use strict';

define([
    'app'
], function (md) {
    /**
     * 登陆后存储user信息，并存入localStorage;
     */
    md.factory('userService', ['$rootScope', function ($rootScope) {

        var LOCAL_STORAGE_ID = 'welfare_login_user_staff',
            userString = localStorage[LOCAL_STORAGE_ID];

        var user = userString ? JSON.parse(userString) : {};

        $rootScope.$watch(function () {
            return user;
        }, function () {
            localStorage[LOCAL_STORAGE_ID] = JSON.stringify(user);
        }, true);

        return {
            hasUser: function () {
                var returnValue = false;
                for (var key in user) {
                    if (user.hasOwnProperty(key)) {
                        returnValue = true;
                        break;
                    }
                }
                return returnValue;
            },

            delete: function () {
                return user = {};
            },
            get: function () {
                return user;
            },

            set: function (key, value) {
                if (arguments.length == 2) {
                    user[key] = value;
                    return user;
                } else {
                    return user = key;
                }
            }
        };

        //return user;

    }]);
});