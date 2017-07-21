import {Injectable} from '@angular/core';
import {Http, RequestOptionsArgs, Request, Response, ConnectionBackend, RequestOptions} from '@angular/http';
import {Observable} from "rxjs";

import {EventsService} from "../../app/core/event.service";
import {EVENT_NAME} from "../../app/core/event-name.enum";

@Injectable()
export class CustomHttpService extends Http {
    constructor(private  backend: ConnectionBackend, private  defaultOptions: RequestOptions, private event: EventsService) {
        super(backend, defaultOptions);
        defaultOptions.headers.append('corpId', 'tds2in1');
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {

        return super.request(url, options)
            .catch(err => {
                this.event.broadcast(EVENT_NAME.ERROR_HTTP, err);
                return Observable.throw(err);
            })

    }
}
