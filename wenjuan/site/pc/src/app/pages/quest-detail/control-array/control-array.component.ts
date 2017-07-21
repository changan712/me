import {Component, OnInit, Input, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector: 'app-control-array',
    templateUrl: './control-array.component.html',
    styleUrls: ['./control-array.component.scss'],
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ControlArrayComponent), multi: true},
    ]
})
export class ControlArrayComponent implements OnInit,ControlValueAccessor {
    propagateChange: any = () => {
    };
    validateFn: any = () => {
    };

    private _value: Array<any>;

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
        this.propagateChange(val);
    }

    model: string;

    @Input() view: any;

    constructor() {
    }


    ngOnChanges(inputs) {
        this.propagateChange(this.value);
    }

    ngOnInit() {
        if (this.view && this.view.options[0] && this.view.options[0].key) {
        /*    this.model = this.view.options[0].key;
            this.value = [this.model];
            this.onRadioChange();
*/

        }
    }


    onRadioChange(item?) {
        setTimeout(() => {
            this.value = [this.model];
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
