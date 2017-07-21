import {IonicPageModule} from 'ionic-angular';
import {QuestDetailPage} from './quest-detail';
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../app/shared/shared.module";
import {QuestWrapComponentModule} from "../../components/quest-wrap/quest-wrap.module";
import {CountdownComponentModule} from "../../components/countdown/countdown.module";

@NgModule({
    declarations: [
        QuestDetailPage,
    ],
    imports: [
        ReactiveFormsModule,
        SharedModule,
        CountdownComponentModule,
        QuestWrapComponentModule,
        IonicPageModule.forChild(QuestDetailPage),
    ],
    exports: [
        QuestDetailPage
    ]
})
export class QuestDetailPageModule {
}
