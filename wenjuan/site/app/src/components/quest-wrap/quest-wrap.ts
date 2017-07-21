import {Component, Input, OnInit, ViewChildren, QueryList, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, FormArray, FormControl} from "@angular/forms";
import {AlertController, ModalController} from "ionic-angular";
import {VoiceComponent} from "../voice/voice";
import {DfControlComponent} from "../df-control/df-control";
import {AutoHeightDirective} from "../../directives/auto-height/auto-height";
import {VoiceId} from "../../app/core/voice-id.interface";
import {RecorderComponent} from "../recorder/recorder";

/**
 * Generated class for the QuestWrapComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */


@Component({
    selector: 'quest-wrap',
    templateUrl: 'quest-wrap.html',

})
export class QuestWrapComponent implements OnInit {

    @Input() model: any;
    @Input('group') wrapForm: FormGroup;


    get id() {
        return this.model.id;
    }

    private ids: Array<VoiceId> = [];


    get serverIds() {
        let arr = [];
        this.ids.forEach(item => {
            arr.push(item.serverId);
        });

        return arr;
    }


    voiceForms: FormArray;

    @ViewChild(RecorderComponent) recorderComponent: RecorderComponent;
    @ViewChildren(VoiceComponent) voiceComponents: QueryList<VoiceComponent>;
    @ViewChild(DfControlComponent) dfControlComponent: DfControlComponent;
    @ViewChild(AutoHeightDirective) autoHeightDirective: AutoHeightDirective;

    visibleVoiceList: boolean = false;

    constructor(private fb: FormBuilder, private alertCtrl: AlertController, private modalCtrl: ModalController) {

    }

    ngOnInit() {
        (<FormGroup>this.wrapForm.get('info_option')).addControl('serverIds', new FormControl(this.serverIds));
    }

    toggleVoiceList() {
        this.visibleVoiceList = !this.visibleVoiceList;
    }

    stopRecord() {
        this.recorderComponent.stop();
    }

    upload(localId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            wx.uploadVoice({
                localId,
                isShowProgressTips: 1,
                success: (res) => {
                    resolve(res.serverId);
                },
                fail: (err) => {
                    reject(err);
                }
            })
        })
    }


    translate(localId: string): Promise<string> {
        return new Promise((resolve, reject) => {
            wx.translateVoice({
                localId,
                success: (res) => {
                    resolve(res.translateResult);
                },
                fail: (err) => {
                    reject(err);
                }

            })
        })
    }


    addText(result: string) {
        this.dfControlComponent.value += (this.dfControlComponent.value ? '\n' : '') + (result || '');
        setTimeout(()=>{
            this.dfControlComponent.focusToBottom();
        })
    }


    onRecorderChange(data: VoiceId) {

        this.ids.unshift(data);
        this.translate(data.localId).then(res => {
            this.addText(res);
            this.upload(data.localId).then((res) => {
                data.serverId = res;
                let controlServerIds = this.wrapForm.get('info_option.serverIds');
                if (controlServerIds) {
                    //关闭窗口后重新获取值;
                    controlServerIds.setValue(this.serverIds);
                }

            });
        });
    }

    afterVoiceListRemove(list) {
        let controlServerIds = this.wrapForm.get('info_option.serverIds');
        controlServerIds.setValue(this.serverIds);
        if (!list.length) this.visibleVoiceList = false;
    }

    getVoiceControls(list) {
        let items = [];
        list.forEach((item, index) => {
            items.push(this.fb.control(''));
        });
        return items;
    }

}
