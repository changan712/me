import {Component, ViewChild, OnInit, ViewChildren, QueryList} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides, ToastController, Content, AlertController} from 'ionic-angular';
import {Quest, QuestProvider} from "../../providers/quest/quest";
import {QuestItemProvider} from "../../providers/quest-item/quest-item";

import {createDfRange} from "../../components/df-control/df-control";
import {FormGroup, FormBuilder, FormArray} from "@angular/forms";
import {QuestWrapComponent} from "../../components/quest-wrap/quest-wrap";
import {EventsService} from "../../app/core/event.service";

import {UaService} from "../../app/core/ua.service";
import {Utils} from "../../app/core/utils";
import {Storage} from '@ionic/storage';
import {TranslateService} from "@ngx-translate/core";

/**
 * Generated class for the QuestDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
    segment: 'quest-detail/:id'
})
@Component({
    selector: 'page-quest-detail',
    templateUrl: 'quest-detail.html',
})
export class QuestDetailPage implements OnInit {

    detail: Quest;

    id: number;

    list: any[];

    text: string;

    questCurrent;

    activeIndex: number = 0;

    serverTime: number;

    endTime: number;

    warningTime: number = 1000 * 60 * 5;

    timeout: boolean = false;

    formModel: FormGroup;

    @ViewChild(Content) content: Content;

    @ViewChild(Slides) slides: Slides;

    @ViewChildren(QuestWrapComponent) questWrapComponents: QueryList<QuestWrapComponent>;

    cd: any;

    lang: string = 'zh';

    dataTranslated: any;

    private tempDataKey: string = 'tempData';

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private questSv: QuestProvider,
                private questItemSv: QuestItemProvider,
                private fb: FormBuilder,
                private toastCtrl: ToastController,
                private events: EventsService,
                private ua: UaService,
                private alertCtrl: AlertController,
                private  storage: Storage,
                public translate: TranslateService,) {

    }

    ngOnInit() {
        this.id = this.navParams.data.id;

        this.lang = this.translate.currentLang;

        this.getDetail(this.id)
            .then((res) => {
                    return this.detail = res;
                }
            );

        this.getItems(this.id)
            .then((res) => {
                this.list = res;
                this.formModel = this.createFormModel(res, this.id);
               // this.updateCache();
            })
            //在getitems 后 后端会刷新current xuy
            .then((res) => {
                return this.questSv.reloadCurrent()
            })
            .then((res) => {
                    this.questCurrent = this.questSv.current;
                    this.setCdTime();
                }
            );

        this.initTranslate().then(data => {
            this.dataTranslated = data;
        })

    }

    private async initTranslate(): Promise<any> {
        let data: any = {};
        data.cdWarning = await   this.translate.get('PAGES.QUEST_DETAIL.UA.TIP_CD_WARNING').toPromise();
        data.tipSuccess = await   this.translate.get('PAGES.QUEST_DETAIL.UA.TIP_SUCCESS').toPromise();
        data.tipInvalid = await   this.translate.get('PAGES.QUEST_DETAIL.UA.TIP_INVALID').toPromise();

        return data;
    }

    ionViewCanEnter() {
        let result = this.questSv.getStatus() == 1;
        if (!result) {
            setTimeout(() => {
                this.navCtrl.setRoot('IndexPage');
            })
        }
        return result;
    }

    private  updateCache() {

        this.storage.get(this.tempDataKey).then(
            (value) => {
                if (value) {
                    this.formModel.setValue(value);
                }
                this.formModel.valueChanges.debounceTime(2000).subscribe((value) => {
                    this.storage.set(this.tempDataKey, value);
                })
            }
        )
    }

    private   setCdTime() {
        this.serverTime = Utils.dateTransform(this.questCurrent.now);
        this.endTime = Utils.dateTransform(this.questCurrent.start_time) + this.questCurrent.quest.option.time_limit * 1000 * 60;
    }

    onCountdownWarning(data) {
        this.ua.showTip(this.dataTranslated.cdWarning)
    }

    onCountdownComplete(data) {
        this.timeout = true;
    }

    prev() {
        this.slides.slidePrev();
    }

    next() {
        this.slides.slideNext();
    }

    onSelectChange(e) {
        this.slides.slideTo(this.activeIndex);
    }

    onSlideDidChange() {
        //解决Slides activeIndex bug;

        let index = this.slides.getActiveIndex();
        this.activeIndex = index == this.list.length ? this.list.length - 1 : index;
    }

    toSubmit() {

        this.markControlsDirty();
       // this.storage.remove(this.tempDataKey);
        if (this.formModel.valid) {
            //上传所有语音
            let loading = this.ua.showLoading({delay: 500});
            this.questSv.answer(this.formModel.value).finally(() => {
                loading.hide();
            }).subscribe(res => {
                this.questSv.reloadCurrent().then(() => {
                    this.ua.showTip(this.dataTranslated.tipSuccess);
                    this.navCtrl.setRoot('SuccessPage');


                });

            });
            this.storage.remove(this.tempDataKey).then(()=>{
                console.log(1)
            });

        } else {
            this.ua.showTip(this.dataTranslated.tipInvalid);
            this.slides.slideTo(this.getFirstInvalidIndex());
        }
    }

    /*
     private  uploadAllVoice(): Promise<any> {
     let arrPromise: Array<Promise<any>> = [];
     this.questWrapComponents.forEach((questWrapComponent:QuestWrapComponent) => {
     arrPromise.push(questWrapComponent.uploadVoiceAll());
     });
     return Promise.all(arrPromise);
     }*/

    private markControlsDirty() {
        let formGps = (<FormArray>this.formModel.get('items')).controls;
        for (let i in formGps) {
            //todo 也许模型结构太复杂..
            formGps[i].get('info').markAsDirty();
        }
    }

    private  getFirstInvalidIndex() {
        let formGps = (<FormArray>this.formModel.get('items')).controls;

        let controlsInvalid = [];
        for (let i in formGps) {

            if (formGps[i].invalid) {
                controlsInvalid.push(formGps[i])
            }
        }
        controlsInvalid.sort((a, b) => {
            return a.sliderIndex - b.sliderIndex;
        });
        console.log(controlsInvalid);

        return controlsInvalid[0].sliderIndex
    }


    private  getItems(id: number): Promise<any> {
        return this.questItemSv.index(id).toPromise();

    }

    private getDetail(id: number) {
        return this.questSv.view(id).toPromise();
    }

    //构造和结构相同的表单模型
    private createFormModel(list, id): FormGroup {

        return this.fb.group({

            quest_id: id,
            items: this.fb.array(this.getItemsControls(list))
        });


    }

    private  getItemsControls(list) {
        let items = [];
        list.forEach((item, index) => {
            let gp = this.fb.group({
                // voice_list:this.fb.group([]),
                item_id: item.id,
                info: [item.info || QuestDetailPage.getDefaultValue(item.type), QuestDetailPage.getValidators(item)],
                info_option: this.fb.group({})
            });
            //为item:FormGroup 添加sliderIndex 用来为错误定位；
            (<any>gp).sliderIndex = index;

            items.push(gp);


        });
        return items;
    }


    static getValidators(item) {
        let range = QuestDetailPage.getRange(item);

        console.log(range);

        return [createDfRange(range['min'], range['max'])]

    }

    static  getDefaultValue(type): string|any[] {
        if (type == "text") {
            return '';
        } else if (type == 'select') {
            return [];
        }
    }

    static  getRange(item) {
        let range = {};
        if (item.type_option && item.type_option.length && item.type_option.length.min) {
            range['min'] = item.type_option.length.min;
        } else {
            range['min'] = 70;
        }

        if (item.type_option && item.type_option.length && item.type_option.length.max) {
            range['max'] = item.type_option.length.max;
        } else {
            range['max'] = 350;
        }

        return range;
    }

}
