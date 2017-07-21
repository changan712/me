import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {QuestService} from "../core/quest.service";
import {UserService} from "../core/user.service";

@Injectable()
export class SetupGuard implements Resolve<any> {

    constructor(private  questSv: QuestService, private userSv: UserService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
        return this.getUserInfo().then(() => {
            return this.questSv.getCurrent();
        });
    }

    private  getUserInfo(): Promise<any> {
        let arr = location.href.split('#');

        let segment = arr[arr.length - 1];
        if (segment != 'mock') {
            return this.userSv.getCurrent()

        } else {
            return this.userSv.mock();
        }
    }


}
