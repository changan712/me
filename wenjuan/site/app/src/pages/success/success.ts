import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {QuestProvider} from "../../providers/quest/quest";
import {Storage} from '@ionic/storage';
/**
 * Generated class for the SuccessPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-success',
    templateUrl: 'success.html',
})
export class SuccessPage implements OnInit {
    config: any;
    questCurrent: any;

    constructor(public navCtrl: NavController, private questSv: QuestProvider,private storage:Storage) {


    }

    ngOnInit() {

        this.questCurrent = this.questSv.current;
    }
    // for demo
    navToIndex(){
        this.storage.remove('questEndTime').then(()=>{
            this.navCtrl.setRoot('TutorialPage');
        })
    }


}
