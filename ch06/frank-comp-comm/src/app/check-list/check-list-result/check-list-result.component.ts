import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'cc-check-list-result',
  templateUrl: './check-list-result.component.html',
  styleUrls: ['./check-list-result.component.css']
})
export class CheckListResultComponent implements OnInit {
  _checkedData: string[];
  checkedCnt: number;
  @Output() onSelectedToRemoveItem = new EventEmitter<string>(); //선택된 item을 부모에서 전달하여 삭제하도록 함

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

  removeMe(idx) {
    this.onSelectedToRemoveItem.emit(this._checkedData[idx]);
  }
}
