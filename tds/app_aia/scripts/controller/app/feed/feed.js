'use strict';

define([
    'app',

], function (md) {

    md.controller('feedCtrl', ['$scope', '$state', '$location', function ($scope, $state, $location) {

        var _this = this;

        this.pageHash = '';
        this.pageHome = 1;
        this.page = 1;

        this.setHash = function (hash) {
            this.pageHash = hash;
        };

/*
        $scope.$on('$stateChangeStart', function (event, to, toParams, from, fromParams) {

            if (to.name == 'app.feed.list' || to.name == 'app.feed.home') {
                $location.hash(_this.pageHash)
            }
        });

        $scope.$on('app.pageChange', function (event, data) {

            var currentPage = data.meta.currentPage;
            var page = data.state.name;
            if (page == 'app.feed.list') {
                _this.page = currentPage
            }
            if (page == 'app.feed.home') {
                _this.pageHome = currentPage;
            }

        });*/


    }]);

});

