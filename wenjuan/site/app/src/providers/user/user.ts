import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Http} from "@angular/http";

/*
 Generated class for the UserProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class UserProvider {
    url: string = '/api/app/user/';

    current: any = null;

    constructor(public http: Http) {

    }

    checkMobile(body): Observable<any> {
        return this.http.post('/api/app/user/check-mobile', body).map((res) => res.json())
    }

    sendMsg(body): Observable<any> {
        return this.http.post('/api/app/user/send-mobile-message', body).map((res) => res.json())
    }

    mock(id?: number): Promise<boolean> {
        if (this.current) return Promise.resolve(this.current);
        return this.http.get(this.url + (id || 'mock')).map((res) => {
            this.current = res.json();
            return this.current;
        }).toPromise();
    }

    reloadCurrent() {
        return this.getCurrent(true);
    }

    getCurrent(reload?: boolean): Promise<any> {
        if (this.current && !reload) return Promise.resolve(this.current);
        return this.http.get(this.url + 'info').map((res) => {
            this.current = res.json();
            return this.current;
        }).toPromise();
    }
}
