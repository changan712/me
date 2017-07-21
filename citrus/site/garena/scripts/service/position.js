'use strict';

define(['app'], function (md) {
    var   APIHOST = 'http://10.21.100.237/jingle/api/';
    md.service('position', ['$resource', function ($resource) {
        return $resource(APIHOST + 'job/:id', {id: '@id'});
    }]);

});