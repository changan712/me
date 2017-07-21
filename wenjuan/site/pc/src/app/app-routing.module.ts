import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders, NgModule} from "@angular/core";
export const routes: Routes = [
    {path: '', redirectTo: 'pages', pathMatch: 'full'},
    {path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule'}

    /*  {path: 'page', redirectTo: 'pages/index', pathMatch: 'full'},
     {path: 'demo', loadChildren: 'app/demo/demo.module#DemoModule'},
     {path: '**', redirectTo: '404'}*/

];

@NgModule({
    imports: [RouterModule.forRoot(routes,{ useHash : true })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}