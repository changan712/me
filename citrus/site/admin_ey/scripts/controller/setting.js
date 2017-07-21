'use strict';

define(['app', 'service/dialog', 'service/company'], function (md) {
    md.controller('settingCtrl', ['$rootScope', '$scope', '$state', 'dialog', 'company', function ($rootScope, $scope, $state, dialog, company) {

        $rootScope.page = 'setting';

        var vm = $scope.vm = {};
        var id = $scope.user[0].company_id;
        vm.images = {};

        if (id) {
            company.get({id: id}, function (res) {
                vm.images.logo_data = '..' + res.logo_1;
                vm.images.logo2_data = '..' + res.logo_2;
                vm.images.banner_data = '..' + res.banner;
                vm.images.qrcode_data = '..' + res.qrcode
            })
        }

        vm.readerError = function (msg) {
            dialog.alert(msg);
        };

        vm.setLogo = function (field, img, type) {
            if (!type) {
                dialog.alert("请选择图片！");
                return;
            }

            var data = {
                'id': id,
                'field': field,
                'data': img.match(/,(.*)$/)[1],
                'type': type
            };

            company.update({}, data, function (res) {
                dialog.alert("上传成功！");
            })
        };

    }]);
});
