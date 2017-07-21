'use strict';

define([
    'app',
    'directive/feedComment'
], function (md) {

    md.controller('feedProjectCtrl', ['$scope', '$state', '$location', function ($scope, $state, $location) {

        var _this = this;

        this.pageHash = '';
        this.pageHome = 1;
        this.page = 1;

        this.setHash = function (hash) {
            this.pageHash = hash;
        };




    }]);

});

