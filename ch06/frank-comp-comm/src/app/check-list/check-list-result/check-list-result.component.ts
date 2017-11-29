import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'cc-check-list-result',
  templateUrl: './check-list-result.component.html',
  styleUrls: ['./check-list-result.component.css']
})
export class CheckListResultComponent implements OnInit {
  _checkedData: string[];
  checkedCnt: number;

  constructor() {
  }

  ngOnInit() {
  }

  @Input()
  set checkedResult(checkedResult: string[]) { //note: 실제 assign 될때 실행된다
    if (checkedResult) {
      this._checkedData = checkedResult;
      this.checkedCnt = this._checkedData.length;
    }
  }
}
