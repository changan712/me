import {
    Component, Input, forwardRef, OnChanges, ElementRef,
    AfterViewInit, OnInit
} from '@angular/core';
import {FormControl, FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {AlertController} from "ionic-angular";
import {TranslateService} from "@ngx-translate/core";

export function createDfRange(min, max) {

    return (c: FormControl) => {

        let length = getRawLength(c.value);
        let err = {
            dfError: {
                info: "dfError",
                min,
                max
            }
        };

        if (min == 0) {
            return null;
        }

        if (max == 0 || !max) {
            return length >= min ? null : err;
        } else {
            return length >= min && length <= max ? null : err
        }


        function getRawLength(value) {
            if (Array.isArray(value)) {
                return value.length;
            } else if (typeof value == 'string') {
                return value.trim().length;
            }
        }

    }
}


@Component({
    selector: 'df-control',
    templateUrl: 'df-control.html',
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DfControlComponent), multi: true},
    ]

})
export class DfControlComponent implements OnChanges,ControlValueAccessor,AfterViewInit,OnInit {

    propagateChange: any = () => {
    };
    validateFn: any = () => {
    };


    @Input() type: string|number;
    @Input() model: any;
    @Input() parentGroup: FormGroup;

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
        this.propagateChange(val);
    }

    lang: string = 'zh';

    recordData: any;

    textarea: HTMLTextAreaElement = null;

    private checkboxModel = {};

    private _value: any = "";

    constructor(private  alertCtrl: AlertController, public elementRef: ElementRef, private translate: TranslateService) {

    }

    ngOnInit() {
        this.lang = this.translate.currentLang;
    }

    ngAfterViewInit() {
        this.textarea = this.elementRef.nativeElement.querySelector('textarea');

    }

    /* uploadVoiceAll() {
     let promiseArr: Array<Promise<string>> = [];

     this.localIds.forEach((localId: string) => {
     promiseArr.push(this.uploadVoice(localId));
     });

     return Promise.all(promiseArr);
     }



     private  uploadVoice(localId: string) {
     return new Promise((resolve, reject) => {
     wx.uploadVoice({
     localId,
     isShowProgressTips: 1,
     success: (res) => {
     this.serverIds.push(res.serverId);
     resolve(res.serverId);
     },
     fail: (err) => {
     reject(err);
     }
     })
     })
     }*/

    focusToBottom() {
        if (this.textarea) {
            this.textarea.scrollTop = this.textarea.scrollHeight;
        }
    }


    ngOnChanges(inputs) {
        if (inputs.counterRangeMax || inputs.counterRangeMin) {
            this.propagateChange(this.value);
        }
    }

    onCheckboxClick(item) {
        let piked = [];

        setTimeout(() => {
            for (let i in this.checkboxModel) {
                if (this.checkboxModel[i]) {
                    piked.push(i);
                }
            }
            this.value = piked;

            this.propagateChange(this.value);
        })
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
