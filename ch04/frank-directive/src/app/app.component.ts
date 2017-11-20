import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShow = false;
  member = {'name': 'Angular', 'email': 'welcome@angular.io'}

  animals = ['Dog', 'Cat', 'Zebra', 'Horse'];
  animal = '';

  myName = 'Woojin';
  itsName = 'Angular';
}
