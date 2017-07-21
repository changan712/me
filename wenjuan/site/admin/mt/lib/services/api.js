'use strict';

define([
    'app',
    '../../lib/services/utils'
], function (md) {
    md.service('api', ['$resource', '$filter', 'utils', function ($resource, $filter, utils) {
        var api_prefix = '';
        var api_map = {
            user:['/api/admin/user/:id', {id:"@id"}, {
                import:{
                    method:'post',
                    url:'/api/admin/user/import-manual'
                },
                logout:{
                    url:'/api/admin/user/logout'
                },
                corp:{
                    method:'get',
                    url:'/api/admin/common/corp'
                },
                info:{
                    url:'/api/admin/user/info'
                },
                local_login:{
                    method:'post',
                    url:'/api/admin/user/login'
                }
            }],
            userQuest:['/api/admin/user-quest/:id', {id:"@id"}],
            quest:['/api/admin/quest/:id', {id:"@id"}],
            mobile:['/api/admin/mobile/:id', {id:"@id"}],
            mobileQuest:['/api/admin/mobile-quest/:id', {id:"@id"}],
            agent:['/api/admin/agent/:id', {id:"@id"}],
            admin:['/api/admin/admin/:id', {id:"@id"}],
            questItem:['/api/admin/quest-item/:id', {id:"@id"}]
        };

        this.init = function(type){
            if(!api_map[type]){
                return null;
            }
            var option = api_map[type];
            if(_.isString(option)){
                return $resource(api_prefix + option);
            }

            option[0] = api_prefix + option[0]; //add url prefix
            var resource = $resource.apply(null, option);

            return resource;
        };

        this.raw = function(url){
            return $resource(url);
        };

        this.meta = function(header_func){
            return JSON.parse(header_func()['x-meta-list'])
        };

        //2010-08-09 13:22:13
        this.strToDate = function(str){
            return new Date(str);
        };
        this.dateToDayStr = function(day){
            return $filter('date')(day, 'yyyy-MM-dd');
        };
        this.dateToTimeStr = function(day){
            return $filter('date')(day, 'yyyy-MM-dd HH:mm:ss');
        };

        this.getCorpId = function(){
            return utils.getCorpId()
        }

    }]);
});