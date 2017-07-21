'use strict';

define(['app'], function (md) {
    md.factory('log', ['$http', 'utils', function ($http, utils) {
        return function (key, content) {
            var corpId = utils.getCorpId();
            var data = {};
            data[key] = JSON.stringify(content);
            return $http.post('/api/app/test/log?corp_id=' + corpId,data);
        };

    }]);
});