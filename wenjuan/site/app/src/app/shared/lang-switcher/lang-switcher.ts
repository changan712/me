import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Storage} from '@ionic/storage';

/**
 * Generated class for the LangSwitcherComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
    selector: 'lang-switcher',
    templateUrl: 'lang-switcher.html'
})
export class LangSwitcherComponent {


    constructor(public translate: TranslateService,private storage:Storage) {


    }

    useLang(lang:string){
        this.translate.use(lang);
        this.storage.set('lang',lang);
    }

}
