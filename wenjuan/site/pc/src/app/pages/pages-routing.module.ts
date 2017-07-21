import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {PagesComponent} from "./pages.component";
import {QuestDetailComponent} from "./quest-detail/quest-detail.component";
import {SuccessComponent} from "./success/success.component";
import {SetupGuard} from "./setup.guard";

const routes: Routes = [
        {
            path: '',
            component: PagesComponent,
            resolve:{
                current:SetupGuard,
            },
            children: [
                {
                    path: '',
                    redirectTo: 'index'
                },
                {
                    path: 'index',
                    component: IndexComponent
                },
               {
                    path: 'success',
                    component: SuccessComponent
                },
                {
                    path: 'quest-detail/:id',
                    component: QuestDetailComponent
                },
            ]
        },


    ]
    ;

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {
}
