'use strict';


define([
    'app',
    'service/alert',
    'service/dialog',
    'service/corp',
    'directive/um'
], function (md) {

    md.controller('aboutCtrl', ['$rootScope', '$scope', '$timeout', 'alertService', 'dialog', 'corp', function ($rootScope, $scope, $timeout, alertService, dialog, corp) {
        $rootScope.page = 'about';

        var vm = $scope.vm = {};
        var id = $scope.user[0].company_id;
        var getDesTime = 0;

        vm.model = {
            about_banner: {}
        };



        corp.get({id: id}, function (res) {
            //console.log(res);
            vm.model = format(res);

        });

        vm.readerError = function (msg) {
            $scope.$apply(function () {
                alertService.add(msg, 3000, 'danger');
            });

            vm.model.about_banner.data = null;
        };

        vm.submit = function (form) {

                var data = parse(vm.model);
                corp.updateBrief({id: id}, data, function (res) {
                    dialog.alert('发布成功！');

                });

        };

        function format(data) {
            var newData = {};
            newData.about_banner = {data: '..' + data.about_banner};
            newData.location = data.location;
            newData.description = data.description;
            return newData;
        }

        function parse(data) {
            var mod = angular.copy(data);
            if (mod.about_banner.data && mod.about_banner.data) {
                try {
                    mod.about_banner.data = mod.about_banner.data.match(/,(.*)$/)[1];
                } catch (e) {
                    console.log(e);
                    mod.about_banner.data = null;
                }
            }
            // 把about_banner 的数据平放出来以适应接口；
            if (mod.about_banner.data) {
                mod.type = mod.about_banner.type;
                mod.data = mod.about_banner.data;
            }
            mod.field = 'about_banner';
            mod.id = id;
            delete mod.about_banner;
            mod.description = vm.model.description;
            return mod;
        }

    }]);

    //return ctrl;

});

