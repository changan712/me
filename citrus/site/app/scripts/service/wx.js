'use strict';

define(['app','service/utils', 'service/wxStat'], function (md) {
    md.service('wxUser', ['utils', '$location', 'wxStat', function (utils, $location, wxStat) {
        /* return $resource(apiHost + 'job/:method/:id', {id: '@id',method:'@method'});*/
        var storageKey = utils.getCorporation()+'_wxUser';
        var debug = $location.search()['_d'];

        return {
            getUser: function () {
                //var data = JSON.parse(localStorage.getItem(storageKey));
                var data = global_user;
                return {
                    weixin_unionid: data.openid,
                    weixin_nickname: data.nickname
                }
            },

            getInfo: function () {
                return JSON.parse(localStorage.getItem(storageKey));
            },

            setShare: function (config) {
                var track_id = wxStat.getTrackId();
                var tmp_a = config.link.split('#');
                var hash = '';
                if(tmp_a.length > 1){
                    hash = tmp_a[1].replace(/_t=[^&]*&?/, '').replace(/\?\&/, '');
                }
                if(track_id){
                    var t_str = '';
                    var tmp_h = hash;
                    if(tmp_h.indexOf('?') == -1){
                        t_str = '?_t=';
                    } else if(tmp_h.indexOf('?') == tmp_h.length - 1){
                        t_str = '_t=';
                    } else {
                        t_str = '&_t=';
                    }
                }
                //config.link = config.link + t_str + track_id;
                config.link = tmp_a[0] + '#' + hash + t_str + track_id;
                var stat_hash = '#' + hash + t_str + track_id;

                config.success = function(){
                    wxStat.forward(stat_hash)
                };
                var timeline_config = {};
                angular.copy(config, timeline_config);
                timeline_config['title'] = config['desc'];
                if(debug){
                    alert(JSON.stringify(timeline_config))
                    alert(JSON.stringify(config));
                }

                wx.onMenuShareTimeline(timeline_config);
                wx.onMenuShareAppMessage(config);
                wx.onMenuShareQQ(config);
                wx.onMenuShareWeibo(config);
                wx.onMenuShareQZone(config);
            }
        };

    }]);
});
