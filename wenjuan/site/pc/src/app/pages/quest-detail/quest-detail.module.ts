import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestDetailComponent} from "./quest-detail.component";
import {CountdownComponent} from "./countdown/countdown.component";
import {SharedModule} from "../../shared/shared.module";
import { ControlArrayComponent } from './control-array/control-array.component';

@NgModule({
    imports: [
        SharedModule,
    ],
    declarations: [QuestDetailComponent, CountdownComponent, ControlArrayComponent],
    exports: [QuestDetailComponent]
})
export class QuestDetailModule {
}
