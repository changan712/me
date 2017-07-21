import {Component, OnInit, ViewChildren, QueryList, Input, Output, EventEmitter} from '@angular/core';
import {AlertController} from 'ionic-angular';
import {VoiceComponent} from "../voice/voice";
import {TranslateService} from "@ngx-translate/core";

/**
 * Generated class for the VoiceListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
    selector: 'voice-list',
    templateUrl: 'voice-list.html',
})
export class VoiceListComponent implements OnInit {

    @Input() list: Array<any> = [];

    @ViewChildren(VoiceComponent) private _voiceComponentList: QueryList<VoiceComponent>;


    @Output() afterRemove: EventEmitter<any> = new EventEmitter();

    voiceComponentList: QueryList<VoiceComponent>;

    dataTranslated: any;

    constructor(private alertCtrl: AlertController,private translate:TranslateService) {
    }


    ngOnInit() {

        this.initTranslate().then(data => {
            this.dataTranslated = data;
        })

    }

    private async initTranslate(): Promise<any> {
        let data: any = {};
        data.ok = await   this.translate.get('UA.BTN_CONFIRM_OK').toPromise();
        data.cancel = await   this.translate.get('UA.BTN_CONFIRM_CANCEL').toPromise();
        data.titleRemoveAll = await   this.translate.get('COMPONENT.VOICE_LIST.UA.TITLE_REMOVE_ALL_CONFIRM').toPromise();
        data.titleRemove = await   this.translate.get('COMPONENT.VOICE_LIST.UA.TITLE_REMOVE_CONFIRM').toPromise();

        return data;
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.voiceComponentList = this._voiceComponentList;
        })
    }

    removeAll() {
        let confirm = this.alertCtrl.create({
            title: this.dataTranslated.titleRemoveAll,
            buttons: [
                {
                    text: this.dataTranslated.cancel,
                },
                {
                    text: this.dataTranslated.ok,
                    handler: () => {
                        while (this.list.length) {
                            this.list.pop();
                        }
                        this.afterRemove.emit(this.list);
                    }
                }
            ]
        });
        confirm.present();
    }


    removeVoice(localId) {
        let confirm = this.alertCtrl.create({
            title: this.dataTranslated.titleRemove,
            buttons: [
                {
                    text:  this.dataTranslated.cancel,
                },
                {
                    text: this.dataTranslated.ok,
                    handler: () => {
                        let index = this.list.findIndex((item) => item.localId == localId);
                        if (index > -1) {
                            this.list.splice(index, 1);
                            this.afterRemove.emit(this.list);
                        }
                    }
                }
            ]
        });
        confirm.present();
    }


}
