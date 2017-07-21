import './rxjs-extensions';
import {CoreModule} from "./core/core.module";
import {NgModule} from "@angular/core";
import {MyApp} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {IonicModule, IonicApp} from "ionic-angular";
import {SharedModule} from "./shared/shared.module";

@NgModule({
    declarations: [
        MyApp,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp, {
            swipeBackEnabled: false
        }),
        SharedModule,
        CoreModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp
    ]

})
export class AppModule {
}
