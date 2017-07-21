import {Injectable, Injector} from '@angular/core';
import {Http, RequestOptionsArgs, Request, Response, ConnectionBackend, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

import {EventsService} from "../../app/core/event.service";
import {EVENT_NAME} from "../../app/core/event-name.enum";
import {TranslateService} from "@ngx-translate/core";

@Injectable()
export class CustomHttpProvider extends Http {
    constructor(private  backend: ConnectionBackend, private  defaultOptions: RequestOptions, private event: EventsService, private injector: Injector) {
        super(backend, defaultOptions);

    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        let translate = this.injector.get(TranslateService);

        if (translate.currentLang =='en') {
            this.defaultOptions.headers.set('Accept-Language', 'en-US,en;q=0.8,zh-CN;q=0.5');
        }
        return super.request(url, options)
            .catch(err => {
                this.event.broadcast(EVENT_NAME.ERROR_HTTP, err);
                return Observable.throw(err);
            })

    }
}
