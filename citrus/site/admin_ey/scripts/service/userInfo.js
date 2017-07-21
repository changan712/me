/**
 * Created by Administrator on 2015/10/22.
 */
'use strict';

define(['app', 'service/constant'], function (md) {
    md.service('userInfo', ['$resource', 'APIHOST', function ($resource, APIHOST) {
        return $resource(APIHOST + 'user/modify', {}, {
            'submit': {method: 'POST'}
        });
    }]);
});