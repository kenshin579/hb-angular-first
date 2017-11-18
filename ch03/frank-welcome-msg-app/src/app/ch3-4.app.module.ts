import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, COMPOSITION_BUFFER_MODE} from '@angular/forms';

import {AppComponent} from './app.component';
import {WelcomeMsgComponent} from './welcome-msg/welcome-msg.component';
import {LangSelectorComponent} from './lang-selector/lang-selector.component';

/*
- 여기서 의존성으로 주입할 것이라는 정보를 등록함
  ㅁ.ex. I18nSupportService
 */

@NgModule({  //metadata정보를 담고 있음
  declarations: [
    AppComponent,
    WelcomeMsgComponent,
    LangSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{provide: COMPOSITION_BUFFER_MODE, useValue: false}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
