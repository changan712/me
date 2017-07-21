import {Component} from '@angular/core';

/**
 * Generated class for the TipComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
    selector: 'tip',
    templateUrl: 'tip.html'
})
export class TipComponent {

    duration: number = 3000;
    isShow: boolean = false;
    content: string = '';

    constructor() {

    }

    show(content: string, duration?: number): TipComponent {
        this.duration = duration || this.duration;

        this.content = content;
        this.isShow = true;
        setTimeout(() => {
            this.isShow = false;
        }, this.duration);
        return this;
    }

    hide() {
        this.isShow = false;
    }

}
