import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppHeaderComponent } from "./app-header/app-header.component";


const routes: Routes = [
    {
        path: 'app-header',
        component: AppHeaderComponent
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