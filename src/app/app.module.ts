import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppRegisterComponent } from './app-register/app-register.component';
import { AppShowComponent } from './app-show/app-show.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppHomeComponent,
    AppRegisterComponent,
    AppShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
