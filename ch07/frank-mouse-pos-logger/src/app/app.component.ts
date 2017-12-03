import {Component} from '@angular/core';
import {MySpecialLoggerService} from "./my-special-logger.service";

@Component({
  selector: 'mpl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mpl works!';

  constructor(private logger: MySpecialLoggerService) {
  }

  printDebugLog() { //todo: 이게 프린트가 안됨..
    this.logger.debug("test dependency injector tree!");
  }

}
