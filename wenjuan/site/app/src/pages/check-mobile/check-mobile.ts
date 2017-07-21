import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserProvider} from "../../providers/user/user";
import {SetupService} from "../../app/core/setup";

/**
 * Generated class for the CheckMobilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-check-mobile',
    templateUrl: 'check-mobile.html',
})
export class CheckMobilePage implements OnInit {

    formModel: FormGroup;
    private cdDuration: number = 1 * 60;
    cd: number;
    beCd: boolean = false;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private  fb: FormBuilder,
                private  userSv: UserProvider,
                private  toastCtrl: ToastController,
                private  setupSv: SetupService) {
    }

    ngOnInit() {

        this.formModel = this.fb.group({
            mobile: ['', Validators.required],
            code: ['', Validators.required]
        })

    }

    private setCd() {
        this.beCd = true;
        this.cd = this.cdDuration;
        const timer = setInterval(() => {

            if (this.cd > 0) {
                this.cd--;
            } else {
                this.beCd = false;
                clearInterval(timer);
            }
        }, 1000)
    }


    sendMsg() {

        this.userSv.sendMsg({mobile: this.formModel.get('mobile').value}).subscribe(res => {
            this.setCd();
        })
    }


    onSubmit() {
        this.userSv.checkMobile(this.formModel.value).subscribe(res => {
            let toast = this.toastCtrl.create({
                message: res.message,
                duration: 3000,
                position: "top"
            });
            toast.present();

            this.setupSv.getPageByQuestCurrent().then((page: string) => {
                this.navCtrl.setRoot(page)
            })

        }, function (err) {

        })
    }

}
