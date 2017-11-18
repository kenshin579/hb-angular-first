import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'langSelectorBtn'
})
export class LangSelectorBtnPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
