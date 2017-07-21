define([], function () {

        var debug = getUrlParam('debug');

        return {
            get: function (url, callback) {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        callback(JSON.parse(xhr.responseText))
                    }
                };
                xhr.send();
            },
            getUser: function (callback) {
                if(window.global_user&&window.global_user.openid){
                    callback && callback();
                } else {
                    if(!isDomain() || getUrlParam('nowx')){
                        global_user = {openid:'10087', nickname:'viola'};
                        callback && callback();
                        return;
                    }

                    this.get(getAPIHOST() + '/app/wx/info?url=' + encodeURIComponent(location.href), function (res) {
                        var conf_data = res;
                        var state = encodeURIComponent(location.hash.replace(/#/, ''));
                        var redirectUrl = encodeURIComponent(location.origin + '/' + global_company.url_name + '/app/wx/callback');
                        var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?' +
                            'appid=' + conf_data.appid +
                            '&redirect_uri=' + redirectUrl +
                            '&response_type=code' +
                            '&scope=snsapi_userinfo' +
                            '&state=' + state +
                            '#wechat_redirect';
                        if(conf_data.component_appid){
                            url = 'https://open.weixin.qq.com/connect/oauth2/authorize?' +
                            'appid=' + conf_data.appid +
                            '&redirect_uri=' + redirectUrl +
                            '&response_type=code' +
                            '&scope=snsapi_userinfo' +
                            '&state=' + state +
                            '&component_appid=' + conf_data.component_appid +
                            '#wechat_redirect';
                        }
                        location.href = url;
                    });
                }
            }
        };

        function isDomain() {
            return (/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/).test(location.host)
        }


        function getUrlParam(name) {
            var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
            if (results == null) {
                return null;
            }
            else {
                return results[1] || 0;
            }
        }

        function getAPIHOST() {
            return getHost() + getCorporation() ;//+ '/api/'
        }

        function getHost() {
            var host = 'http://10.21.109.23/';
            var url = location.href;
            return (/localhost:/.test(url)) ? host : '/';
        }

        function getCorporation() {
            var url = location.href;
            if (/localhost:/.test(url)) {
                return 'demo';
            } else {
                var reg = /http:\/\/.*?\/(\w+)/;
                return (reg.exec(url) && reg.exec(url)[1]) || 'demo';
            }
        }
    }
);
