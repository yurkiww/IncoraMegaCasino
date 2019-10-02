import { Component, OnInit, Input } from '@angular/core';

interface ISidebar {
  userName: string;
  userLastName: string;
  userImg: string;
  userStatus: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() sidebar: ISidebar = {
    userName: 'IVAN',
    userLastName: 'IVANOV',
    userImg: 'assets/sidebar/boy.png',
    userStatus: 'admin',
  } as ISidebar;
  constructor() {}

  ngOnInit() {}
}
