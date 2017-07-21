define(['app'], function (md) {
    md.service('tip', ['$rootScope', '$timeout', '$ionicLoading', function ($rootScope, $timeout, $ionicLoading) {
        var tip = null;
        return {
            show: function (html, delay) {
                var _this = this;
                var timer = null;
                tip = {msg: html};
                if (timer) timer.cancel();
                timer = $timeout(function () {
                    _this.hide();
                }, delay || 2000);
                $ionicLoading.hide();
                $rootScope.$broadcast('tipChange');
            },
            hide: function () {
                tip = null;
                $ionicLoading.hide();
                $rootScope.$broadcast('tipChange');
            },
            get: function () {
                return tip;
            }
        }
    }]);
});