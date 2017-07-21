import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Observable} from "rxjs";


/*
 Generated class for the QuestItemProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class QuestItemProvider {

    url: string = "/api/app/quest-item/";

    constructor(public http: Http) {

    }

    index(id: number|string): Observable<any[]> {
        let params: URLSearchParams = new URLSearchParams();

        params.append('quest_id', id.toString());


        return this.http.get(this.url, {
            params
        }).map(res => res.json());

    }


}
