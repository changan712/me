import {Component, ViewChild, OnInit} from '@angular/core';
import {TipComponent} from "./shared/tip/tip";
import {LoadingComponent} from "./shared/loading/loading";
import {MessageComponent} from "./shared/message/message";
import {UserService} from "./core/user.service";
import {UaService} from "./core/ua.service";
import {EventHandler} from "./core/event-handler";
import {QuestService} from "./core/quest.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    @ViewChild(MessageComponent) message;
    @ViewChild(TipComponent) tip;
    @ViewChild(LoadingComponent) loading;

    constructor(private  ua: UaService,
                private  eventHdl: EventHandler,
             ) {

    }

    ngOnInit() {
        this.initUa();
    }


    private  initUa() {
        this.ua.init({
            message: this.message,
            tip: this.tip,
            loading: this.loading
        })
    }
}
