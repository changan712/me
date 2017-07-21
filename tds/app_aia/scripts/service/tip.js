define(['app'], function (md) {
    md.service('tip', ['$rootScope', '$timeout', '$ionicLoading', function ($rootScope, $timeout, $ionicLoading) {
        var tip = null;
        return {
            show: function (html, delay, hasHideIcon) {
                var _this = this;
                var timer = null;
                tip = {msg: html, hide: _this.hide, hasHideIcon: hasHideIcon};
                if (timer) timer.cancel();
                if (delay != 0) {
                    timer = $timeout(function () {
                        _this.hide();
                    }, delay || 1500);
                }
                $ionicLoading.hide();
                $rootScope.$broadcast('tipChange');
                return this;
            },
            hide: function () {
                tip = null;
                $ionicLoading.hide();
                $rootScope.$broadcast('tipChange');
                return this;
            },
            get: function () {
                return tip;
            }
        }
    }]);
});