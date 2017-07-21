import {Component, OnInit, NgZone, forwardRef, Output, EventEmitter} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {VoiceId} from "../../app/core/voice-id.interface";


/**
 * Generated class for the RecorderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
    selector: 'recorder',
    templateUrl: 'recorder.html',
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RecorderComponent), multi: true},
    ]
})
export class RecorderComponent implements OnInit,ControlValueAccessor {

    propagateChange: any = () => {
    };

    _value: any;

    localId: string;

    isRecording: boolean = false;

    @Output() onChange: EventEmitter<any> = new EventEmitter();
    @Output() afterTranslate: EventEmitter<any> = new EventEmitter();


    private startTime: number = 0;


    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
        this.propagateChange(val);
    }


    constructor(private ngZone: NgZone) {

    }


    ngOnInit() {
        wx.onVoiceRecordEnd({
            complete: (res) => {
                this.ngZone.run(() => {
                    this.localId = res.localId;
                });
            }
        })
    }

    toggle() {
        if (this.isRecording) {
            this.stop();
        } else {
            this.start()
        }
    }

    start() {
        this.isRecording = true;
        wx.startRecord({
            success: () => {
                this.ngZone.run(() => {
                    this.startTime = +(Date.now());
                })
            }
        });
    }


    stop(): Promise<any> {
        // if (!this.isRecording) return;

        return new Promise((resolve, reject) => {
            this.isRecording = false;
            wx.stopRecord({
                success: (res) => {
                    this.ngZone.run(() => {
                        let duration = +(Date.now()) - this.startTime;
                        this.startTime = 0;

                        this.localId = res.localId;
                        let data: VoiceId = {
                            duration,
                            localId: this.localId,
                        };
                        this.propagateChange(data);
                        this.onChange.emit(data);
                        resolve(data)
                    })
                },
                fail: (err) => {
                    this.ngZone.run(() => {

                        reject(err);
                    })
                }
            })

        });
    }

    //暂时不用再这里translate
   /* private  translateVoice(localId: string) {

        return new Promise((resolve, reject) => {
            wx.translateVoice({
                localId,
                success: (res) => {
                    let data = {
                        localId: this.localId,
                        info: res.translateResult
                    };
                    this.ngZone.run(() => {
                        this.propagateChange(data);
                        this.afterTranslate.emit(data);
                    });

                    resolve(data);
                },
                fail: (err) => {
                    reject(err);
                }

            })
        })
    }*/


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
