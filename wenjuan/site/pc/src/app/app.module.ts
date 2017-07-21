import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from "./app-routing.module";
import './rxjs-extensions';
import {OthersModule} from "./others/others.module";


@NgModule({
    declarations: [
        AppComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        SharedModule,
        OthersModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
