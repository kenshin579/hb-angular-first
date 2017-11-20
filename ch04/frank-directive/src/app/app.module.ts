import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HonorPipe } from './pipe/honor.pipe';
import { GeekMarkPipe } from './pipe/geek-mark.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HonorPipe,
    GeekMarkPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
