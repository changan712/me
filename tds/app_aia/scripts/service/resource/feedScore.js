'use strict';

define(['app'], function (md) {
    md.service('feedScore', ['$resource', function ($resource) {
        return $resource('/api/app/feed-score/:id', {id: '@id'}, {});
    }]);
});