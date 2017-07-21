import {Injectable} from "@angular/core";
import {MessageComponent} from "../shared/message/message";
import {LoadingComponent} from "../shared/loading/loading";
import {TipComponent} from "../shared/tip/tip";
import {MessageOptions} from "../shared/message/message-options";
import {LoadingOptions} from "../shared/loading/loading-options.interface";
@Injectable()
export class UaService {

    private _message: MessageComponent = null;
    get message() {
        return this._message;
    }


    private _loading: LoadingComponent = null;
    get loading() {
        return this._loading;
    }

    private _tip: TipComponent = null;
    get tip() {
        return this._tip;
    }

    initialized: boolean = false;

    constructor() {


    }

    init(config: UaConfigOptions) {
        this._message = config.message;
        this._loading = config.loading;
        this._tip = config.tip;
        this.initialized = true;
    }


    showTip(content: string, duration?: number): TipComponent {
        if (this.initialized)
            return this.tip.show(content, duration);

    }

    showMessage(content: string, opts?: MessageOptions): MessageComponent {
        if (this.initialized)
            return this.message.show(content, opts)
    }

    showLoading(options?: LoadingOptions): LoadingComponent {
        if (this.initialized)
            return this.loading.show(options);
    }

}

export interface UaConfigOptions {
    message: MessageComponent,
    loading: LoadingComponent,
    tip: TipComponent,
}
