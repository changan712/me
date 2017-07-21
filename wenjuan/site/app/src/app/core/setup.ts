import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {UserProvider} from "../../providers/user/user";
import {QuestProvider} from "../../providers/quest/quest";
import {WxProvider} from "../../providers/wx/wx";
import {Storage} from '@ionic/storage';

@Injectable()
export class SetupService {


    constructor(private wxSv: WxProvider, private userSv: UserProvider, private  questSv: QuestProvider, private  storage: Storage) {
        this.wxSv.init();

    }


    private  getUserInfo(): Promise<any> {
        let arr = location.href.split('#');

        let segment = arr[arr.length - 1];
        if (segment != 'mock') {
            return this.userSv.getCurrent();

        } else {
            return this.userSv.mock();
        }
    }

    getRootPage(): Promise<string> {

        return this.getUserInfo().then((user) => {

            if (user.mobile) {
                return this.getPageByQuestCurrent()

            } else {
                return 'CheckMobilePage';
            }

        },(err)=>{
            alert('err')
        })
    }

    getPageByQuestCurrent(): Promise<string> {

        return this.questSv.getCurrent().toPromise().then((quest) => {
            return 'TutorialPage';
           /* return this.storage.get('hasSeenTutorial').then((res) => {
                alert(4)
                if (res) {
                    return 'IndexPage';
                } else {

                }
            })*/
        });

    }


}
