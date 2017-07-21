import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SuccessPage} from './success';
import ECharts  from  'echarts'
import {AngularEchartsModule} from "ngx-echarts";
import {SharedModule} from "../../app/shared/shared.module";

(<any>window).echarts = ECharts;

@NgModule({
    declarations: [
        SuccessPage,
    ],
    imports: [
        IonicPageModule.forChild(SuccessPage),
        AngularEchartsModule,
        SharedModule,
    ],
    exports: [
        SuccessPage
    ]
})
export class SuccessPageModule {
}
