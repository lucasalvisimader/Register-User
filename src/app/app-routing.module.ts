import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppHeaderComponent } from "./app-header/app-header.component";
import { AppHomeComponent } from "./app-home/app-home.component";
import { AppRegisterComponent } from "./app-register/app-register.component";
import { AppShowComponent } from "./app-show/app-show.component";


const routes: Routes = [
    {
        path: 'app-header',
        component: AppHeaderComponent
    },
    {
        path: 'app-home',
        component: AppHomeComponent
    },
    {
        path: 'app-register',
        component: AppRegisterComponent
    },
    {
        path: 'app-show',
        component: AppShowComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }