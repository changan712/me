import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IonicModule} from "ionic-angular";
import {AutoHeightDirective} from "../../directives/auto-height/auto-height";
import {AbsPipe} from "../../pipes/abs/abs";
import {MessageComponent} from "./message/message";
import {TipComponent} from "./tip/tip";
import {LoadingComponent} from "./loading/loading";
import {FixNumberPipe} from "../../pipes/fix-number/fix-number";
import {NgMathPipesModule} from "angular-pipes";
import {LangSwitcherComponent} from "./lang-switcher/lang-switcher";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        NgMathPipesModule,
    ],

    declarations: [
        AutoHeightDirective,
        AbsPipe,
        FixNumberPipe,
        LoadingComponent,
        TipComponent,
        LangSwitcherComponent,
        MessageComponent,
    ],

    exports: [
        LoadingComponent,
        TipComponent,
        MessageComponent,
        CommonModule,
        LangSwitcherComponent,
        AutoHeightDirective,
        AbsPipe,
        FixNumberPipe,
        NgMathPipesModule,
        TranslateModule,
    ],


})
export class SharedModule {
}
