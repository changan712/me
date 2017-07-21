import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {VoiceListComponent} from './voice-list';
import {VoiceComponentModule} from "../voice/voice.module";
import {SharedModule} from "../../app/shared/shared.module";

@NgModule({
    declarations: [
        VoiceListComponent,
    ],
    imports: [
        IonicPageModule.forChild(VoiceListComponent),
        VoiceComponentModule,
        SharedModule,
    ],
    exports: [
        VoiceListComponent
    ]
})
export class VoiceListPageModule {
}
