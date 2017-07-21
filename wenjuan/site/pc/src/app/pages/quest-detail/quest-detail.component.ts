import {Component, OnInit, ViewContainerRef, ViewChild} from '@angular/core';
import {QuestService} from "../../core/quest.service";

import {ActivatedRoute, Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators, FormArray} from "@angular/forms";
import {QuestItemService} from "../../core/quest-item";
import {UaService} from "../../core/ua.service";
import {Utils} from "../../core/utils";

import {VHostDirective} from "../../shared/v-host.directive";

@Component({
    selector: 'app-quest-detail',
    templateUrl: './quest-detail.component.html',
    styleUrls: ['./quest-detail.component.scss']
})
export class QuestDetailComponent implements OnInit {

    id;
    detail: any;
    formModel: FormGroup;
    list: Array<any>;
    activeIndex: number = 0;
    serverTime: number;
    endTime: number;
    questCurrent: any;
    warningTime: number = 1000 * 60 * 5;
    timeout: boolean = false;
    selectedIndex: number = 0;

    @ViewChild(VHostDirective) snackBarContainer;

    constructor(private  questSv: QuestService,
                private  questItemSv: QuestItemService,
                private  ua: UaService,
                private  router: Router,
                private  aRouter: ActivatedRoute,
                private  fb: FormBuilder,
                public  vcRef: ViewContainerRef) {
    }

    ngOnInit() {
        this.id = this.aRouter.snapshot.params['id'];


        this.getDetail(this.id);
        this.getItems(this.id)
            .then((res) => {
                this.formModel = this.createFormModel(this.list, this.id);
            })
            .then(() => {
                return this.questSv.reloadCurrent();

            })
            .then(() => {
                this.questCurrent = this.questSv.current;
                this.setCdTime();
            });
    }


    private   setCdTime() {
        const endTimeKey: string = 'questEndTime';
        this.serverTime = Utils.dateTransform(this.questCurrent.now);
        this.endTime = Utils.dateTransform(this.questCurrent.start_time) + this.questCurrent.quest.option.time_limit * 1000 * 60;

        /*
         this.storage.get(endTimeKey).then((questEndTime) => {
         if (questEndTime) {
         this.endTime = questEndTime;
         } else {
         this.endTime = this.serverTime + this.questCurrent.quest.option.time_limit * 1000 * 60;
         this.storage.set(endTimeKey, this.endTime);
         }
         });*/
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
            return a.index - b.index;
        });

        return controlsInvalid[0].index
    }


    onCountdownWarning(data) {
        this.ua.showTip('该测评即将超时，请及时提交!')
    }

    onCountdownComplete(data) {
        this.timeout = true;
    }

    private createFormModel(list, id): FormGroup {

        return this.fb.group({

            quest_id: id,
            items: this.fb.array(this.getItemsControls(list))
        });


    }

    private  getItemsControls(list: Array<any>) {
        let items = [];

        list.forEach((item, index) => {
            let range = this.getRange(item);
            let gp = this.fb.group({
                item_id: item.id,
                info: [item.info, [Validators.required, Validators.minLength(range['min']), Validators.maxLength(range['max'])]]
            });
            //为item:FormGroup 添加index 用来为错误定位；
            (<any>gp).index = index;
            items.push(gp);
        });
        return items;
    };


    submit() {
        console.log(this.formModel);

        if (this.formModel.valid) {
            this.questSv.answer(this.formModel.value).subscribe(res => {
                this.questSv.reloadCurrent().then(() => {
                    this.router.navigate(['/pages/success']);
                });
            });

        } else {
            this.selectedIndex = this.getFirstInvalidIndex();
            this.ua.showTip('请确认填写正确');
        }
    }

    private getTabLabel(name: string, index): string {
        return `${index + 1}. ${name}`;
    }

    private  getItems(id): Promise<any> {
        return this.questItemSv.index(id).toPromise().then((res) => {
            return this.list = res;
        });
    }

    private getDetail(id) {
        this.questSv.view(id).subscribe(res => {
            this.detail = res;
        })
    }


    private  getRange(item) {
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
