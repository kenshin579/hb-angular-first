import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MouseTrackZoneComponent} from './mouse-track-zone/mouse-track-zone.component';
import {MySpecialLoggerService} from "./my-special-logger.service";
import {LogLevel} from "./log-level.enum";
import {LOG_LEVEL_TOKEN} from "./app.tokens";


@NgModule({
  declarations: [
    AppComponent,
    MouseTrackZoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MySpecialLoggerService, {provide: LOG_LEVEL_TOKEN, useValue: LogLevel.INFO}],
  // providers: [MySpecialLoggerService, {provide: 'logLevel', useValue: LogLevel.INFO}],
  // providers: [{provide: MySpecialLoggerService, useClass: MySpecialLoggerService}, //위와 같음
  //   {provide: 'logLevel', useValue: LogLevel.INFO}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
