import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from "rxjs";
import {Utils} from "../../app/core/utils";


export  interface Quest {
    id: number,
    name: string,
    info: string,
    type: string,
}

@Injectable()
export class QuestProvider {
    url: string = '/api/app/quest/';

    current: any = null;

    constructor(public http: Http) {

    }

    index(): Observable<any[]> {
        return this.http.get(this.url).map(res => res.json());
    }

    getCurrent(reload?: boolean): Observable<any> {
        if (this.current && !reload) return Observable.of(this.current);
        return this.http.get('/api/app/user-quest/current').map(res => {
            this.current = res.json();
            return this.current;
        });
    }

    getStatus(): number {
        let status: number;
        if (Utils.getUrlParam('status')) {
            return <number>Utils.getUrlParam('status');
        }

        if (this.current) {
            if (this.current.status == 'timeout' || this.current.status == "finish") {
                status = 2
            }
            else if (!this.current.quest) {
                status = 0;
            } else {
                status = 1;
            }
        }
        status = 1;
        return status;
    }

    reloadCurrent(): Promise<any> {
        return this.getCurrent(true).toPromise();
    }

    answer(body): Observable<any> {
        return this.http.post('/api/app/user-quest/answer', body).map(res => res.json())
    }

    create(body): Observable<any> {
        return this.http.post(this.url, body).map(res => res.json());
    }

    view(id: number): Observable<any> {
        return this.http.get(this.url + id).map(res => res.json());

    }
}
