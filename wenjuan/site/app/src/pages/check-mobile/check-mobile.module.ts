import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CheckMobilePage} from './check-mobile';
import {SharedModule} from "../../app/shared/shared.module";

@NgModule({
    declarations: [
        CheckMobilePage,
    ],
    imports: [
        IonicPageModule.forChild(CheckMobilePage),
        SharedModule,
    ],
    exports: [
        CheckMobilePage
    ]
})
export class CheckMobilePageModule {
}
