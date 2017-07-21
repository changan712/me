import {Injectable} from '@angular/core';
import {Subject} from "rxjs";


@Injectable()
export class StateService {

    private _currentUser;


    setCurrentUser(user) {
        this._currentUser = user;
    }


    get currentUser() {
        return this._currentUser;
    }

    //子组件高度变化，需要content reset;
    contentHeightChanged = new Subject();


    constructor() {


    }


}
