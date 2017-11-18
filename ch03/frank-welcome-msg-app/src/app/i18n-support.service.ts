import {Injectable} from '@angular/core';
import {LANG_METADATA} from "./lang-metadata";

@Injectable()
export class I18nSupportService {
  langCode = 'ko';
  private welcomeMsg;

  constructor() {
    this.welcomeMsg = {
      'ko': '안녕하세요',
      'en': 'Hello',
      'jp': '初めまして',
      'fr': 'Bonjour'
    };
  }

  getWelcomeMsgByCode(userName: string) {
    const langData = LANG_METADATA.find(lang => lang.code === this.langCode);
    const helloMsg = this.welcomeMsg[this.langCode];
    return `${helloMsg}, ${userName}!`;
  }
}
