import {Injectable} from '@angular/core';
import {Http,URLSearchParams} from '@angular/http';

import {Observable} from "rxjs";
import {Utils} from "./utils";

@Injectable()
export class UserService {
    url: string = '/api/app/user/';

    current: any = null;

    agentId: string|number = 1;

    private agentIdKey: string = 'agent_id';

    constructor(public http: Http,) {
        this.agentId = Utils.getUrlParam(this.agentIdKey) || this.agentId;
    }


    checkMobile(body) {
        return this.http.post('/api/app/user/check-mobile', body).map((res) => res.json());
    }

    loginPc(body) {
        let search:URLSearchParams = new URLSearchParams();
        search.append(this.agentIdKey, <string>this.agentId);
        return this.http.post('/api/app/user/check-mobile-from-pc', body,{search}).map(res => res.json()).do((res) => {
            this.current = res;
        });
    }

    logout(): Promise<any> {
        return this.http.get('/api/app/user/logout').map(res => res.json()).finally(() => {
            this.current = null;
        }).toPromise();
    }

    sendMsg(body) {
        let search = new URLSearchParams();
        search.append(this.agentIdKey, <string>this.agentId);
        return this.http.post('/api/app/user/send-mobile-message', body, {search}).map((res) => res.json())
    }


    mock(id?: number): Promise<boolean> {
        if (this.current) return Promise.resolve(this.current);
        let search = new URLSearchParams();
        search.append(this.agentIdKey, <string>this.agentId);

        return this.http.get(this.url + (id || 'mock'), {search}).map((res) => {
            this.current = res.json();
            return this.current;
        }).toPromise();
    }


    reloadCurrent() {
        return this.getCurrent(true);
    }

    getCurrent(reload?: boolean): Promise<any> {
        if (this.current && !reload) return Promise.resolve(this.current);
        let search = new URLSearchParams();
        search.append(this.agentIdKey, <string>this.agentId);
        return this.http.get(this.url + 'info', {search}).map((res) => {
            this.current = res.json();
            return this.current;
        }).toPromise();
    }
}
