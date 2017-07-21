import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {RecorderComponent} from './recorder';
import {SharedModule} from "../../app/shared/shared.module";

@NgModule({
    declarations: [
        RecorderComponent,
    ],
    imports: [
        IonicPageModule.forChild(RecorderComponent),
        SharedModule,
    ],
    exports: [
        RecorderComponent
    ]
})
export class RecorderComponentModule {
}
