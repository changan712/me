import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UserService} from "./user.service";
import {HttpModule, RequestOptions, XHRBackend, Http} from "@angular/http";
import {QuestService} from "./quest.service";
import {EventsService} from "./event.service";
import {EventHandler} from "./event-handler";
import {CustomHttpService} from "./custom-http";
import {UaService} from "./ua.service";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {QuestItemService} from "./quest-item";

export function customHttpFactory(backend: XHRBackend, defaultOptions: RequestOptions, event: EventsService) {
    return new CustomHttpService(backend, defaultOptions, event);
}

@NgModule({
    imports: [
        HttpModule,
        BrowserAnimationsModule,
    ],
    providers: [
        UserService,
        QuestService,
        QuestItemService,
        EventHandler,
        EventsService,
        UaService,
        {
            provide: Http, useFactory: customHttpFactory,
            deps: [XHRBackend, RequestOptions, EventsService]
        }
    ]
})
export class CoreModule {
}
