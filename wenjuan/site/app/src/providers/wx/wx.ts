import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Utils} from "../../app/core/utils";

@Injectable()
export class WxProvider {

    private jsSignUrl: string = "/api/app/qy-agent/js-sign";
    private jsApiList: Array<string> = [
        'startRecord', 'stopRecord', 'onVoiceRecordEnd',
        'playVoice', 'pauseVoice', 'stopVoice',
        'onVoicePlayEnd', 'uploadVoice', 'downloadVoice',
        'translateVoice'
    ];

    constructor(public http: Http) {

    }

    request() {

    }

    init(): Promise<any> {
        return new Promise((resolve, reject) => {
            let params: URLSearchParams = new URLSearchParams();
            params.append('url', location.href);

            this.http.get(this.jsSignUrl, {search: params})
                .map((res) => res.json())
                .catch((err) => {
                    reject(err);
                    return err;
                })
                .subscribe((data) => {
                    wx.config({
                        debug: Utils.getUrlParam('wxDebug') || false,
                        appId: data['appId'],
                        timestamp: data['timestamp'],
                        nonceStr: data['noncestr'],
                        signature: data['signature'],
                        jsApiList: this.jsApiList
                    });

                    wx.error(function (err) {
                        reject(err)

                    });
                    wx.ready(function () {
                        resolve('wx config success!')
                    })
                })
        })
    }


}
