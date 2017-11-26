import {Component, Host, OnInit, Optional, ViewEncapsulation} from '@angular/core';
import {MySpecialLoggerService} from "../my-special-logger.service";
import {LoggerService} from "../logger-service";
import {AnotherLoggerService} from "../another-logger.service";
import {LOG_LEVEL_TOKEN} from "../app.tokens";
import {LogLevel} from "../log-level.enum";

@Component({
  selector: 'mpl-mouse-track-zone',
  templateUrl: './mouse-track-zone.component.html',
  styleUrls: ['./mouse-track-zone.component.css'],
  // providers: [MySpecialLoggerService, {provide: LOG_LEVEL_TOKEN, useValue: LogLevel.DEBUG}]
  encapsulation : ViewEncapsulation.Native
})
export class MouseTrackZoneComponent implements OnInit {
  logger: LoggerService;

  constructor(@Host() @Optional() mySpecialLogger: MySpecialLoggerService, //note: Optional이 있어서 null처리가 됨
              anotherLogger: AnotherLoggerService) {
    this.logger = mySpecialLogger ? mySpecialLogger : anotherLogger;
  }

  ngOnInit() {
  }

  captureMousePos($event: MouseEvent) {
    this.logger.debug('click event occured');
    const pos = [$event.clientX, $event.clientY];
    this.logger.info(`x:${pos[0]} y:${pos[1]}`);
  }
}
