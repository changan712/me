import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {IndexPage} from './index';
import {SharedModule} from "../../app/shared/shared.module";

@NgModule({
    declarations: [
        IndexPage,
    ],
    imports: [
        IonicPageModule.forChild(IndexPage),
        SharedModule,
    ],
    exports: [
        IndexPage
    ]
})
export class IndexPageModule {
}
