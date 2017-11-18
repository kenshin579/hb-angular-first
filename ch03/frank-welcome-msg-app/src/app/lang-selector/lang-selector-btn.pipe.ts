import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'langSelectorBtn'
})
export class LangSelectorBtnPipe implements PipeTransform {

  transform(lang): any { //return type이 any임
    return `${lang.name } (${lang.code})`;
  }
}
