import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {IndexComponent} from './index/index.component';
import {TutorialComponent} from './tutorial/tutorial.component';
import {SuccessComponent} from './success/success.component';
import {SharedModule} from "../shared/shared.module";
import {PagesComponent} from './pages.component';

import {QuestDetailModule} from "./quest-detail/quest-detail.module";
import {SetupGuard} from "./setup.guard";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        PagesRoutingModule,
        QuestDetailModule,
    ],
    providers:[
        SetupGuard,

    ],

    declarations: [IndexComponent, TutorialComponent, SuccessComponent, PagesComponent]
})
export class PagesModule {
}
