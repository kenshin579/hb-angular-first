import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule} from '@angular/material';
import {AppComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
