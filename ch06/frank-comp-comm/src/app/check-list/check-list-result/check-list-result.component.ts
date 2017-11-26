import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'cc-check-list-result',
  templateUrl: './check-list-result.component.html',
  styleUrls: ['./check-list-result.component.css']
})
export class CheckListResultComponent implements OnInit {
  checkedCnt: number;
  checkedResult: string[];

  constructor() {
    this.initResult();
    const buttonElem = document.querySelector('button');
    buttonElem.addEventListener('click', () => this.collectCheckedResult());
  }

  ngOnInit() {
  }

  private initResult() {
    this.checkedCnt = 0;
    this.checkedResult = [];
  }

  private collectCheckedResult() {
    this.initResult();
    const spanElems = document.querySelectorAll('span');
    for (let i = 0; i < spanElems.length; i++) {
      const spanElem = spanElems.item(i);

      const checkboxElem = spanElem.querySelector('input');
      if (checkboxElem.checked) {
        this.checkedResult.push(spanElem.querySelector('label').innerText);
      }
    }
    this.checkedCnt = this.checkedResult.length;
  }

  /*
  이 코드에서의 문제점
  1.DOM API의 직접 사용
  - unit test 작성이 어려워짐
  2.DOM API사용으로 두 컴포넌간의 겹합도가 높아짐

  앵귤러 방식
  - 직접적인 DOM 접근 및 관리는 앵귤러에 위임하고 컴포넌트와 템플릿에 로직을 작성하고 뷰와의 관계를 선언하는 것이 할일
   */
}
