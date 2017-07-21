import {IonicPage, NavController, Slides} from 'ionic-angular';
import {QuestProvider} from "../../providers/quest/quest";
import {Storage} from '@ionic/storage';
import {UserProvider} from "../../providers/user/user";
import {Component, OnInit, ViewChild} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
/**
 * Generated class for the TutorialPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-tutorial',
    templateUrl: 'tutorial.html',
})
export class TutorialPage implements OnInit {

    currentQuest = null;
    currentUser = null;
    lang: string = 'zh';
    @ViewChild('slides') slides: Slides;

    constructor(public navCtrl: NavController, private userSv: UserProvider, private  questSv: QuestProvider, private storage: Storage, private  translate: TranslateService) {
    }

    ngOnInit() {
        this.lang = this.translate.currentLang;
        this.currentQuest = this.questSv.current;
        this.currentUser = this.userSv.current;
    }

    startApp() {
        this.navCtrl.setRoot('IndexPage');
        this.storage.set('hasSeenTutorial', true);
    }


}
