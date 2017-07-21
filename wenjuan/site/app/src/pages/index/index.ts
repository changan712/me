import {Component} from '@angular/core';
import {IonicPage, NavController, AlertController} from 'ionic-angular';
import {QuestProvider, Quest} from "../../providers/quest/quest";
import {UaService} from "../../app/core/ua.service";
import {TranslateService} from "@ngx-translate/core";
import {Observable} from "rxjs";

@IonicPage()
@Component({
    selector: 'page-index',
    templateUrl: 'index.html',
})
export class IndexPage {
    list;
    currentQuest = null;
    status: number;
    private dataTranslated: any;

    constructor(public navCtrl: NavController, private  ua: UaService, private alertCtrl: AlertController, private questSv: QuestProvider, private translate: TranslateService) {

    }

    ngOnInit() {
        this.currentQuest = this.questSv.current;
        this.status = this.questSv.getStatus();
        this.initTranslate().then(data => {
            this.dataTranslated = data;
        })
    }


    private async initTranslate(): Promise<any> {
        let data: any = {};
        data.title = await this.translate.get('PAGES.INDEX.UA.TITLE_REDO_CONFIRM').toPromise();
        data.ok = await   this.translate.get('PAGES.INDEX.UA.BTN_REDO_CONFIRM_OK').toPromise();
        data.tip = await   this.translate.get('PAGES.INDEX.UA.TIP_REDO').toPromise();
        data.cancel = await   this.translate.get('UA.BTN_CONFIRM_CANCEL').toPromise();
        return data;
    }

    reDo() {
        let confirm = this.alertCtrl.create({
            title: this.dataTranslated.title,
            buttons: [
                {
                    text: this.dataTranslated.cancel,
                    handler: () => {
                    }
                },
                {
                    text: this.dataTranslated.ok,
                    handler: this.doReDo.bind(this)
                },
            ]
        });
        confirm.present();

    }

    private  doReDo() {
        this.ua.showTip(this.dataTranslated.tip)
    }

    goPageTutorial() {
        this.navCtrl.setRoot('TutorialPage')
    }

    goDetail(item: Quest) {
        this.navCtrl.push('QuestDetailPage', {id: this.currentQuest.quest_id});
    }


}
