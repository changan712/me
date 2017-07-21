import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {
    MdButtonModule, MdCardModule, MdInputModule, MdTabsModule, MdSnackBarModule,
    MdIconModule, MdRadioModule
} from "@angular/material";
import {MessageComponent} from "./message/message";
import {TipComponent} from "./tip/tip";
import {LoadingComponent} from "./loading/loading";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {NgMathPipesModule} from "angular-pipes";
import {AbsPipe} from './abs.pipe';
import {FixNumberPipe} from './fix-number.pipe';
import {VHostDirective} from "./v-host.directive";

@NgModule({
    declarations: [
        LoadingComponent,
        TipComponent,
        MessageComponent,
        AbsPipe,
        FixNumberPipe,
        VHostDirective,
    ],

    imports: [
        CommonModule,

    ],
    exports: [
        CommonModule,
        RouterModule,
        MdButtonModule,
        MdRadioModule,
        MdCardModule,
        MdInputModule,
        MdTabsModule,
        MdIconModule,
        MdSnackBarModule,
        LoadingComponent,
        TipComponent,
        MessageComponent,
        ReactiveFormsModule,
        FormsModule,
        NgMathPipesModule,
        AbsPipe,
        FixNumberPipe,
        VHostDirective,

    ]

})
export class SharedModule {
}
