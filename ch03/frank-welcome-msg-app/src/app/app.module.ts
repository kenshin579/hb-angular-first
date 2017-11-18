import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, COMPOSITION_BUFFER_MODE} from '@angular/forms';

import {I18nSupportService} from "./i18n-support.service";
import {AppComponent} from './app.component';
import {WelcomeMsgComponent} from './welcome-msg/welcome-msg.component';
import {LangSelectorComponent} from './lang-selector/lang-selector.component';
import { LangSelectorBtnPipe } from './lang-selector/lang-selector-btn.pipe';

/*
- 여기서 의존성으로 주입할 것이라는 정보를 등록함
  ㅁ.ex. I18nSupportService
 */

@NgModule({  //metadata정보를 담고 있음
  declarations: [
    AppComponent,
    LangSelectorBtnPipe,
    WelcomeMsgComponent,
    LangSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{provide: COMPOSITION_BUFFER_MODE, useValue: false}, I18nSupportService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
