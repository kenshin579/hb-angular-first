import {Directive, forwardRef, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

const MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinNumValueValidator),
  multi: true
};

@Directive({
  selector: '[min][ngModel]',
  providers: [MIN_VALIDATOR]
})
export class MinNumValueValidator implements Validator {
  @Input() min: string;

  validate(control: AbstractControl): { [key: string]: any } { //todo: [key: string] <-- 이건 반환값인듯한데, 어떻게 이해하면 되나?
    if (this.min != null) {
      const min = Number.parseInt(this.min, 10);
      return control.value >= min ? null : {'min': `${this.min} 이상의 값을 입력하세요`};
    }
    return null;
  }

}

const MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxNumValueValidator),
  multi: true
};

@Directive({
  selector: '[max][ngModel]',
  providers: [MAX_VALIDATOR]
})
export class MaxNumValueValidator implements Validator {
  @Input() max: string;

  validate(control: AbstractControl): { [key: string]: any } {
    if (this.max != null) {
      const max = Number.parseInt(this.max, 10);
      return control.value <= max ? null : {'max': `${this.max} 이하의 값을 입력하세요`};
    }
    return null;
  }
}
