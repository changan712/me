import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {DfControlComponent} from './df-control';
import {SharedModule} from "../../app/shared/shared.module";


@NgModule({
    declarations: [
        DfControlComponent,
    ],
    imports: [
        IonicPageModule.forChild(DfControlComponent),
        SharedModule,
    ],
    exports: [
        DfControlComponent
    ]

})
export class DfControlComponentModule {
}
