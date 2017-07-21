'use strict';

define(['app'], function (md) {


    md.filter('catImg', function () {
        var config = {
            '软件开发': 'image/i-cat-code.png',
            '游戏开发': 'image/i-cat-game.png',
            '美术类': 'image/i-cat-art.png',
            '产品类': 'image/i-cat-product.png',
            '运营类': 'image/i-cat-op.png'
        };

        return function (input) {
            if (config[input]) {
                return config[input];
            }
        }
    });
});

