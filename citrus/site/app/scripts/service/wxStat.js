'use strict';

define(['app',
    'service/constant',
    'service/utils'
], function (md) {

    md.service('wxLog', ['$resource', 'APIHOST', function ($resource, APIHOST) {
        return $resource(APIHOST + '/app/wx/log');
    }]);

    md.service('wxStat', ['wxLog', '$location', 'utils', function (wxLog, $location, utils) {
        var user = global_user;
        var track_id = $location.search()['_t'];
        var new_track_id = 0;
        if(utils.isDebug()){
            alert(JSON.stringify(user));
        }

        var defaultParams = function(){
            return {
                'wx_openid':user.openid,
                'wx_nickname':user.nickname,
                'url':location.hash,
                'track_id': track_id
            }
        };

        var _mem = {};
        var checkAccess = function(action, url){
            var token = action + '|' + url;
            if(_mem[token]){
                return false;
            } else {
                _mem[token] = 1;
                return true;
            }
        };

        return {
            'getTrackId': function(){
                return new_track_id;
            },
            'view': function(callback){
                if(!checkAccess('view', location.hash)){
                    callback && callback();
                    return;
                }
                wxLog.save(angular.extend(defaultParams(), {action:'VIEW'}), function(res){
                    if(res.id){
                        //wxUser.setTrackId(res.id);
                        new_track_id = res.id;
                    }
                    callback && callback();
                })
            },
            'import': function(){
                wxLog.save(angular.extend(defaultParams(), {action:'IMPORT'}));
            },
            'apply': function(url){
                if(!checkAccess('apply', url)){
                    return;
                }
                wxLog.save(angular.extend(defaultParams(), {action:'APPLY', url: url}));
            },
            'create': function(){
                wxLog.save(angular.extend(defaultParams(), {action:'CREATE'}));
            },
            'list_resume': function(){
                wxLog.save(angular.extend(defaultParams(), {action:'LIST_RESUME'}));
            },
            'select_resume': function(){
                wxLog.save(angular.extend(defaultParams(), {action:'SELECT_RESUME'}));
            },
            'forward': function(url){
                var params = defaultParams();
                if(url){
                    params['url'] = url;
                }
                wxLog.save(angular.extend(params, {action:'FORWARD'}));
            },
            'ref': function(url){
                if(!checkAccess('ref', url)){
                    return;
                }
                wxLog.save(angular.extend(defaultParams(), {action:'REF', url: url}));
            }
        }
    }])

});

/*

{},
{
    save2: {
        method:'POST',
            params:{
            'wx_openid':user.weixin_unionid,
                'wx_nickname':user.weixin_nickname,
                'url':location.hash
        }
    }
}*/
