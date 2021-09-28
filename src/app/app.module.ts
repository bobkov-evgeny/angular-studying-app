import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ChildComponent} from "./child.component";
import {DataService} from "./data.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LogService} from "./log.service";


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClient, DataService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
