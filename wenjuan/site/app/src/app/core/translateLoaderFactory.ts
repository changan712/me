import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {Http} from "@angular/http";
export function translateLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, './i18n/');
}