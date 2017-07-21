import {Injectable} from "@angular/core";
import {EventsService} from "./event.service";
import {EVENT_NAME} from "./event-name.enum";
import {UaService} from "./ua.service";
import {UserProvider} from "../../providers/user/user";
import {Utils} from "./utils";

@Injectable()

export class EventHandler {

    private loginUrl: string = "/api/app/qy-agent/web-login";

    constructor(private event: EventsService, private ua: UaService, private userSv: UserProvider) {

        this.event.on(EVENT_NAME.ERROR_HTTP, this.httpErrorHandler.bind(this));
        this.event.on(EVENT_NAME.ERROR_WX, this.wxErrorHandler.bind(this));
    }

    private  httpErrorHandler(event) {
        if (event.status != 401) {
            this.ua.showMessage(event.json().message || '服务器错误请稍后再试！')
        } else {
            if (Utils.isWXBrowser()) {
                location.href = this.loginUrl;
            }

        }

    }

    private  wxErrorHandler(event) {

    }

}