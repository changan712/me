import {Component, OnInit, ViewChild} from "@angular/core";
import {App} from 'ionic-angular';
import {MessageComponent} from "./shared/message/message";
import {TipComponent} from "./shared/tip/tip";
import {LoadingComponent} from "./shared/loading/loading";
import {UaService} from "./core/ua.service";
import {EventHandler} from "./core/event-handler";
import {SetupService} from "./core/setup";
import {TranslateService} from "@ngx-translate/core";
import {Storage} from '@ionic/storage';


@Component({
    templateUrl: 'app.html'
})
export class MyApp implements OnInit {
    rootPage: any;
    hasLogin: boolean = false;
    @ViewChild(MessageComponent) message;
    @ViewChild(TipComponent) tip;
    @ViewChild(LoadingComponent) loading;


    constructor(private ua: UaService,
                private setup: SetupService,
                private eventHdl: EventHandler,
                private translate: TranslateService,
                private storage: Storage,
                private  app: App,) {

    }

    ngOnInit() {
        this.initUa();

        this.initTranslate().then((title) => {
            console.log(title)
            this.app.setTitle(title);
        });
        this.setup.getRootPage().then((page: string) => {
            this.rootPage = page;
            this.hasLogin = true;
        })

    }
    private  initTranslate() {

        this.translate.setDefaultLang('zh');
        return this.storage.get('lang').then(
            (res) => {
                if (res) {
                    this.translate.use(res);
                } else if (this.translate.getBrowserLang() !== undefined) {
                    this.translate.use(this.translate.getBrowserLang());
                }
                return this.translate.get('TITLE').toPromise();
            }
        )
    }

    private initUa() {
        this.ua.init({
            message: this.message,
            tip: this.tip,
            loading: this.loading
        })
    }


}

