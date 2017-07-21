'use strict';

define(['app'], function (md) {
    md.factory('busy', ['$ionicLoading', function($ionicLoading) {
        return {
            show: function(content) {
                $ionicLoading.show({
                    content: content || 'Loading Data',
                    animation: 'fade-in',
                    showBackdrop: true,
                    showDelay: 300
                });
            },

            hide: function() {
                $ionicLoading.hide();
            }
        };
    }])
});


