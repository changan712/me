define(['app'], function (md) {
    md.service('tip', ['$ionicLoading', function ($ionicLoading) {

        return {
            show: function (html, duration) {
                $ionicLoading.show({
                    template: html,
                    duration: duration || 2000,
                    noBackdrop: true
                })
            },
            hide: function () {
                $ionicLoading.hide();
            }
        }

    }])

});