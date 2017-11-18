import {Component, AfterViewInit} from '@angular/core';
import {I18nSupportService} from "../i18n-support.service";

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent implements AfterViewInit {
  welcomeMsg = '';
  userName = "";
  private valid = false;
  private static CHK_KEYUP_WAIT_SEC = 5000;

  /*
  DI. dependency injection
   */
  constructor(public i18nSupporter: I18nSupportService) { //생성자에 인자로 선언할때 앵귤러는 우리가 new I18nSupportService()를 자동으로 해줌
  }

  ngAfterViewInit() {
    const checkTouchedFn = () => {
      console.log("valid:" + this.valid);
      if (this.valid) return;
      alert('이름을 입력해 주세요');
    };

    setTimeout(checkTouchedFn, WelcomeMsgComponent.CHK_KEYUP_WAIT_SEC)
  }

  onKeyUp(name) {
    console.log("onKeyUp!!");
    this.valid = name.length > 0;
  }

  onChange() {
    console.log("onChange!!");
    this.valid = this.userName.length > 0;
  }

  setName(name) {
    this.userName = name;
  }

  showWelcomeMsg() {
    //i18nSupporter를 생성하지 않았는데 DI로 사용할 수 있음
    this.welcomeMsg = this.i18nSupporter.getWelcomeMsgByCode(this.userName);
  }

}
