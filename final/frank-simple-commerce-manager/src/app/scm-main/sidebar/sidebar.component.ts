import {Component, EventEmitter, OnInit, Output} from '@angular/core';

export declare type SidebarMenu = 'not_selected' | 'product' | 'category';

@Component({
  selector: 'scm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentMenu: SidebarMenu;
  @Output() changedMenu: EventEmitter<string> = new EventEmitter(); //부모 컴포넌트에 보내려고 함

  constructor() {
  }

  ngOnInit() {
  }

  clickedMenu(menu: SidebarMenu) {
    this.currentMenu = menu;
    this.changedMenu.emit(menu);
  }

}