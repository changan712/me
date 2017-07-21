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
            getInfo: function (callback) {

                var _this = this;
                this.get(getAPIHOST() + 'wx/info?url=' + encodeURIComponent(location.href), function (res) {
                    var conf_data = res;
                    if (debug) {
                        debugger
                    }
                    var code = getUrlParam('code');

                    if (!code) {
                        var share_url = location.origin + location.pathname;
                        var state = encodeURIComponent(location.hash.replace(/#/, ''));

                        //var redirectUrl = encodeURIComponent(location.href);
                        var redirectUrl = encodeURIComponent(share_url);
                        location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + conf_data.appid + '&redirect_uri=' + redirectUrl + '&response_type=code&scope=snsapi_userinfo&state=' + state + '#wechat_redirect';

                    } else {

                        _this.get(getAPIHOST() + 'wx/user?code=' + code, function (res) {
                            var state = getUrlParam('state');
                            if (state) {

                                location.hash = decodeURIComponent(state);

                            }
                            callback(res);
                        });
                    }

                });

            },
            getUser: function (callback) {
                if (getUrlParam('debug')) {
                    localStorage.removeItem('wxUser');
                }
                if (!isDomain()) {
                    localStorage.setItem('wxUser', JSON.stringify({openid: '10086', nickname: 'viola'}));
                    callback && callback();
                }
                // alert(localStorage.getItem('wxUser'));
                if (localStorage.getItem('wxUser') != 'undefined' && localStorage.getItem('wxUser')!='null' && localStorage.getItem('wxUser')) {
                    // alert(localStorage.getItem('wxUser'));
                    callback && callback(JSON.parse(localStorage.getItem('wxUser')));
                } else {
                    this.getInfo(function (data) {
                        localStorage.setItem('wxUser', JSON.stringify(data));
                        callback && callback(data)
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
            return getHost() + getCorporation() + '/api/'
        }

        function getHost() {
            var host = 'http://10.21.100.237/';
            var url = location.href;
            return (/localhost:/.test(url)) ? host : '/';
        }

        function getCorporation() {
            var url = location.href;
            if (/localhost:/.test(url)) {
                return 'jingle';
            } else {
                var reg = /http:\/\/.*?\/(\w+)/;
                return (reg.exec(url) && reg.exec(url)[1]) || 'jingle';
            }
        }
    }
);
