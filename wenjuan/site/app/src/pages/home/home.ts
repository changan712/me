import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {QuestProvider, Quest} from "../../providers/quest/quest";


/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage implements OnInit {

    list: Quest[];

    constructor(public navCtrl: NavController, public navParams: NavParams, private questSv: QuestProvider) {

    }

    ngOnInit() {

        this.questSv.index().subscribe(res => {
            this.list = res;
        })
    }



    goDetail(item:Quest){
        this.navCtrl.push('QuestDetailPage',{id:item.id});
    }




}
