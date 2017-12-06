import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from "@angular/forms";
import {AppComponent} from './app.component';
import {TestParentComponent} from './test-parent/test-parent.component';
import {TestChildComponent} from './test-parent/test-child/test-child.component';

@NgModule({
  declarations: [
    AppComponent,
    TestParentComponent,
    TestChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
