import {Component} from '@angular/core';
import {SidebarMenu} from "./sidebar/sidebar.component";

@Component({
  selector: 'scm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentMenu: SidebarMenu; //child 컴포넌트에서 @Output으로 받게 됨
}
