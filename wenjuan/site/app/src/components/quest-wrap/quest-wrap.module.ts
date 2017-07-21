import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {QuestWrapComponent} from './quest-wrap';
import {VoiceComponentModule} from "../voice/voice.module";
import {RecorderComponentModule} from "../recorder/recorder.module";
import {DfControlComponentModule} from "../df-control/df-control.module";
import {CommonModule} from "@angular/common";
import {VoiceListPageModule} from "../voice-list/voice-list.module";

@NgModule({
    declarations: [
        QuestWrapComponent,
    ],
    imports: [
        CommonModule,
        IonicPageModule.forChild(QuestWrapComponent),
        DfControlComponentModule,
        RecorderComponentModule,
        VoiceComponentModule,
        VoiceListPageModule,
    ],

    exports: [
        QuestWrapComponent
    ]
})
export class QuestWrapComponentModule {
}
