import {Injectable, forwardRef, Inject} from "@angular/core";
import {Observable, Observer} from "rxjs";
import {EventsService} from "./event.service";
import {EVENT_NAME} from "./event-name.enum";
import {UaService} from "./ua.service";

import {Utils} from "./utils";
import {Router, NavigationExtras} from "@angular/router";
import {MdSnackBar, MdSnackBarConfig} from "@angular/material";
import {URLSearchParams} from "@angular/http";

@Injectable()

export class EventHandler {

    private loginUrl: string = "/api/app/qy-agent/web-login";

    constructor(private event: EventsService, private ua: UaService, private router: Router, private snackBar: MdSnackBar) {

        this.event.on(EVENT_NAME.ERROR_HTTP, this.httpErrorHandler.bind(this));
        this.event.on(EVENT_NAME.ERROR_WX, this.wxErrorHandler.bind(this));
    }

    private  httpErrorHandler(event) {
        if (event.status != 401) {
            let message = event.json().message || '服务器错误请稍后再试！';
            this.snackBar.open(message, '', <MdSnackBarConfig>{duration: 2000});

            //this.ua.showMessage()
        } else {

            this.router.navigate(['/login']);

            /* let backUrl = encodeURIComponent(location.origin + location.pathname) + '#/login';
             location.href = '/api/app/pc-agent/web-login/1?url=' + backUrl;*/
            /*   if(!/\/api\/app\/user\/info$/.test(event.url)){
             }else{
             this.router.navigate(['/login'])
             }*/
        }

    }

    private  wxErrorHandler(event) {

    }

}