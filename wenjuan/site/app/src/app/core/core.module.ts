import {RequestOptions, HttpModule, Http, XHRBackend} from "@angular/http";
import {IonicErrorHandler} from "ionic-angular";
import {ErrorHandler, NgModule, Optional, SkipSelf, Injector} from "@angular/core";
import {UserProvider} from "../../providers/user/user";
import {QuestProvider} from "../../providers/quest/quest";
import {StateService} from "./state.service";
import {IonicStorageModule} from "@ionic/storage";
import {QuestItemProvider} from "../../providers/quest-item/quest-item";
import {WxProvider} from "../../providers/wx/wx";
import {EventsService} from "./event.service";
import {CustomHttpProvider} from "../../providers/custom-http/custom-http";
import {UaService} from "./ua.service";
import {EventHandler} from "./event-handler";
import {SetupService} from "./setup";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";


export function customHttpFactory(backend: XHRBackend, defaultOptions: RequestOptions, event: EventsService, injector: Injector) {

    
    return new CustomHttpProvider(backend, defaultOptions, event, injector);
}

export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [],
    imports: [

        IonicStorageModule.forRoot({}),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [Http]
            }
        }),
        HttpModule,
    ],
    providers: [
        QuestProvider,
        QuestItemProvider,
        UserProvider,
        StateService,
        WxProvider,
        EventsService,
        UaService,
        EventHandler,
        SetupService,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        {
            provide: Http, useFactory: customHttpFactory,
            deps: [XHRBackend, RequestOptions, EventsService, Injector]
        }
    ]
})


export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
