import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CheckListComponent } from './check-list/check-list.component';
import { CheckListResultComponent } from './check-list/check-list-result/check-list-result.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    CheckListComponent,
    CheckListResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
