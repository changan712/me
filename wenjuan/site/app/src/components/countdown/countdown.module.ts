import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CountdownComponent} from './countdown';

import {SharedModule} from "../../app/shared/shared.module";

@NgModule({
    declarations: [
        CountdownComponent,
    ],
    imports: [
        IonicPageModule.forChild(CountdownComponent),
        SharedModule,
    ],
    exports: [
        CountdownComponent
    ]
})
export class CountdownComponentModule {
}
