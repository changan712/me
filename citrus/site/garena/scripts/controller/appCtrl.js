'use strict';

define(['app', 'filter/filter'  ], function (md) {

    md.controller('appCtrl', ['$rootScope', '$scope',function ($rootScope, $scope) {
        var vm = $scope.vm = {};

        var u = navigator.userAgent, app = navigator.appVersion;
        $rootScope.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
        $rootScope.isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);



    }]);

    md.controller('404Ctrl', ['$scope', function ($scope) {

        console.log(1);

    }])

});

