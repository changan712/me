'use strict';

define(['app', 'service/resume'], function (md) {
    md.service('resumeSev', ['$q', '$ionicModal', 'resume', function ($q, $ionicModal, resume) {

        return {
            getInfo: function (id) {
                var defer = $q.defer();
                resume.get({id: id}, function (res) {
                    defer.resolve(res);
                });
                return defer.promise;
            },


            edit: function (id, data) {
                var defer = $q.defer();
                resume.edit({id: id}, data, function (res) {
                    defer.resolve(res);
                });
                return defer.promise;
            },
            add: function (data) {
                var defer = $q.defer();
                resume.save({}, data, function (res) {
                    defer.resolve(res);
                });
                return defer.promise;
            },
            createModal: function (scope) {
                var modals = {};

                $ionicModal.fromTemplateUrl('info.html', {
                    scope: scope,
                    animation: 'slide-in-up'
                }).then(function (modal) {
                    modals.info = modal;
                });

                $ionicModal.fromTemplateUrl('edu.html', {
                    scope: scope,
                    animation: 'slide-in-up'
                }).then(function (modal) {
                    modals.edu = modal;
                });

                $ionicModal.fromTemplateUrl('exp.html', {
                    scope: scope,
                    animation: 'slide-in-up'
                }).then(function (modal) {
                    modals.exp = modal;
                });

                $ionicModal.fromTemplateUrl('file.html', {
                    scope: scope,
                    animation: 'slide-in-up'
                }).then(function (modal) {
                    modals.file = modal;
                });

                return modals;

            }
        }

    }]);
});