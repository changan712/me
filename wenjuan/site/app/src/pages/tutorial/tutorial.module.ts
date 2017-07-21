import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TutorialPage} from './tutorial';
import {SharedModule} from "../../app/shared/shared.module";

@NgModule({
    declarations: [
        TutorialPage,
    ],
    imports: [
        IonicPageModule.forChild(TutorialPage),
        SharedModule,
    ],
    exports: [
        TutorialPage
    ]
})
export class TutorialPageModule {
}
