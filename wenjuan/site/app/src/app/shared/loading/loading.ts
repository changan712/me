import {Component} from '@angular/core';
import {LoadingOptions} from "./loading-options.interface";

/**
 * Generated class for the LoadingComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
    selector: 'loading',
    templateUrl: 'loading.html'
})
export class LoadingComponent {


    isShow: boolean = false;
    time = null;

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
        if (this.time) {
            clearTimeout(this.time);
            this.time = null;
        }
    }

}
