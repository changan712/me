import {NgModule} from '@angular/core';

import {OthersRoutingModule} from './others-routing.module';
import {SharedModule} from "../shared/shared.module";
import {LoginComponent} from "./login/login.component";

@NgModule({
    imports: [
        SharedModule,
        OthersRoutingModule
    ],
    declarations: [
        LoginComponent
    ]
})
export class OthersModule {
}
