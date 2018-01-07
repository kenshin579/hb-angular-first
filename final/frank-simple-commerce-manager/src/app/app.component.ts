import {Component, ViewContainerRef} from '@angular/core';
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'scm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * AppComponent가 관리하는 뷰의 참조 값을 토스트 메시지 서비스에 바인딩하여 현재 뷰와 상관없이
   * 토스트 메시지를 사용할 때 모달 형태의 메시지를 띄우기 위함
   *
   * @param {ToastsManager} toastr
   * @param {ViewContainerRef} vRef
   */
  constructor(private toastr: ToastsManager, vRef: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vRef);
  }

}
