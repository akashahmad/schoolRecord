import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImportPopupComponent } from './import-popup/import-popup.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from "@angular/forms"
import {from} from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    DashboardComponent,
    ImportPopupComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
