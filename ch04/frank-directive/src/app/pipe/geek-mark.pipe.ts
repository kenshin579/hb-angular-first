import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'geekMark'
})
export class GeekMarkPipe implements PipeTransform {

  transform(value: string, level: string): string {
    switch (level) {
      case 'A':
        return `Oh Geek! ${value}`;
      case 'I':
        return `Good man, ${value}`;
      case 'B':
      default:
        return `Novice ${value}`;
    }
  }
}
