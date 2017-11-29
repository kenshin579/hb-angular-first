import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cc-check-list-result',
  templateUrl: './check-list-result.component.html',
  styleUrls: ['./check-list-result.component.css']
})
export class CheckListResultComponent implements OnInit {
  checkedCnt: number; //todo: 현재 이것을 계산할 방법이 없음
  @Input() checkedResult: string[]; //자식 콘포넌트가 부모로 정보를 받음

  constructor() { }

  ngOnInit() { }
}
