import {Component} from '@angular/core';
import {MessageOptions} from "./message-options";

/**
 * Generated class for the MessageComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */


export const MessageConfigDefault = {
    duration: 3000,
    mode: "danger",
    showBtnClose: true
};

@Component({
    selector: 'app-message',
    templateUrl: 'message.html',
    styleUrls: ['./message.scss']
})
export class MessageComponent {

    duration: number;
    mode: string;
    showBtnClose: boolean;

    isShow: boolean = false;
    content: string = '';

    constructor() {
        this.reset();
    }

    reset() {
        this.duration = MessageConfigDefault.duration;
        this.mode = MessageConfigDefault.mode;
        this.showBtnClose = MessageConfigDefault.showBtnClose;
    }

    show(content: string, options?: MessageOptions): MessageComponent {
        this.content = content;

        if (!options) options = <MessageOptions>{};

        this.duration = options.duration || this.duration;
        this.mode = options.mode || this.mode;
        this.showBtnClose = options.showBtnClose || this.showBtnClose;

        this.isShow = true;
        setTimeout(() => {
            this.isShow = false;
        }, this.duration);

        return this;
    }

    hide() {
        this.isShow = false;
        this.reset();
    }


}
