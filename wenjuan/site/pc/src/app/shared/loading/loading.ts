import {Component} from '@angular/core';
import {LoadingOptions} from "./loading-options.interface";
import set = Reflect.set;


/**
 * Generated class for the LoadingComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
    selector: 'app-loading',
    templateUrl: 'loading.html'
})
export class LoadingComponent {


    isShow: boolean = false;
    private spinnerName: string = 'ios';
    private time = null;

    constructor() {

    }

    show(options?: LoadingOptions): LoadingComponent {

        if (this.time) {
            return;
        }

        this.time = setTimeout(() => {
            this.isShow = true;
            clearTimeout(this.time);
            this.time = null
        }, (options && options.delay) || 0);


        return this;

    }

    hide() {
        this.isShow = false;
    }

}
