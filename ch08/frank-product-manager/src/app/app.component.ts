import {Component, AfterViewInit, ViewChild} from '@angular/core';
import {NgModel, NgForm} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '상품 등록';
  product: any;
  errorCodes = ['min', 'max', 'required', 'pattern'];
  errors: any[] = [];
  @ViewChild('prodForm') prodForm: NgForm;

  constructor() {
    this.initProduct();
  }

  ngAfterViewInit() {
    console.log("[FRANK] this.prodForm.statusChanges:", this.prodForm);
    this.prodForm.statusChanges/*.do(s => console.log(s))*/
      .filter(s => s === 'INVALID')
      .switchMap(() => {
        this.errors = [];
        // console.log("this.prodForm.controls:", this.prodForm.controls);
        return Observable.from(Object.keys(this.prodForm.controls));
      })
      .subscribe((controlName) => {
        console.log("controlName:", controlName);
        this.errorCodes
          .filter(code => this.prodForm.hasError(code, [controlName]))
          .forEach(code => {
            const errorMsg = this.prodForm.getError(code, [controlName]);
            this.errors.push({controlName, code, errorMsg})
          });
      });

    this.prodForm.statusChanges.filter(s => s === 'VALID').subscribe(() => this.errors = []);
  }

  initProduct() {
    this.product = {name: '', listPrice: '', qty: 0, desc: ''};
  }

  onSubmit() {
    alert(`제출\n${JSON.stringify(this.product)}`);
  }

  onReset() {
    this.initProduct();
  }
}
