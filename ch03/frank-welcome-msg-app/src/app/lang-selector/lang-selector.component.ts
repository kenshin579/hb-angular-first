import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {I18nSupportService} from "../i18n-support.service";
import {LANG_METADATA} from "../lang-metadata";

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LangSelectorComponent implements OnInit {
  langCode: string;
  langMetadata = LANG_METADATA;

  constructor(public i18nSupporter: I18nSupportService) {
    this.langCode = i18nSupporter.langCode;
  }

  ngOnInit() {
  }

  syncToService(code: string) {
    this.i18nSupporter.langCode = code; //lang 컴포넌트에서 langCode값이 변경될 때마다 I18nSupportService에 langCode를 전달함
  }
}
