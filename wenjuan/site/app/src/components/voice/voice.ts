import {Component, OnInit, Input, EventEmitter, Output, NgZone, forwardRef, OnDestroy} from '@angular/core';

import {NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";

/**
 * Generated class for the VoiceComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
    selector: 'voice',
    templateUrl: 'voice.html',
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => VoiceComponent), multi: true},
    ]
})
export class VoiceComponent implements OnInit,ControlValueAccessor,OnDestroy {

    propagateChange: any = () => {
    };


    _value: any;
    get value() {
        return this._value;
    }

    set value(val) {
        this.propagateChange(val);
        this._value = val;
    }


    //1 停止 2 播放 3 暂停
    status: number = 1;


    @Input()
    list: Array<VoiceComponent> = [];

    //获取sibling 用来在播放前关闭其它voice; 标准情况下只有一个 暂不考虑多个的情况
    get voicePlaying(): VoiceComponent {
        let value = this.list.find(item => item.status != 1);
        console.log(value);

        return value;
    }


    @Output() onRemove: EventEmitter<string> = new EventEmitter();
    // @Output() afterTranslate: EventEmitter<string> = new EventEmitter();

    @Output() onPlay: EventEmitter<any> = new EventEmitter();


    @Input() localId: string;

    constructor(private ngZone: NgZone) {

    }

    remove() {
        this.onRemove.emit(this.localId);
    }

    ngOnInit() {
        // this.upload();
        //this.translate();

        wx.onVoicePlayEnd({
            success: () => {
                this.ngZone.run(() => {
                    this.status = 1;
                })
            }
        })
    }

    ngOnDestroy() {
        if (this.status == 2) {
            this.stop();
        }
    }


    pause() {
        wx.pauseVoice({localId: this.localId});
        this.status = 3;
    }

    play(): Promise<any> {
        if (this.voicePlaying) {
            return this.voicePlaying.stop().then(() => {
                return this.doPlay();
            })
        } else {
            return this.doPlay();
        }


    }

    private  doPlay(): Promise<any> {
        return new Promise((resolve, reject) => {

            wx.playVoice({
                localId: this.localId,
                success: () => {
                    this.ngZone.run(() => {
                        this.onPlay.emit(this);
                        this.status = 2;
                        resolve(this);
                    })
                }

            });
        });
    }

    stop(): Promise<any> {
        return new Promise((resolve, reject) => {
            wx.stopVoice({
                localId: this.localId,
                success: (res) => {
                    resolve(this);
                    this.ngZone.run(() => {
                        this.status = 1;
                    })
                }
            });

        });

    }


    writeValue(obj: any): void {
        if (obj) {
            this.value = obj;

        }
    }

    registerOnChange(fn: any): void {

        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {

    }
}
