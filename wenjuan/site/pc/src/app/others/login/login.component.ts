import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../core/user.service";
import {QuestService} from "../../core/quest.service";
import {URLSearchParams} from "@angular/http";


@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

    formModel: FormGroup;
    private cdDuration: number = 1 * 60;
    cd: number;
    beCd: boolean = false;

    constructor(public router: Router,
                private  fb: FormBuilder,
                private  userSv: UserService,
                private  questSv: QuestService,) {
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
        this.userSv.loginPc(this.formModel.value).subscribe(res => {
            this.router.navigate(['/pages/index'],{queryParamsHandling: 'preserve'});
            this.questSv.getCurrent();

        }, function (err) {

        })
    }


}
