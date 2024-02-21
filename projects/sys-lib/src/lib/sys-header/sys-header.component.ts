import { Component, ContentChildren, Input, ViewChild } from '@angular/core';
import { SysSidebarComponent } from '../sys-sidebar/sys-sidebar.component';

@Component({
  selector: 'sys-header',
  templateUrl: './sys-header.component.html',
  styleUrls: ['./sys-header.component.scss']
})
export class SysHeaderComponent {
  @Input() logo!: any;
  @Input() logoIcon!: any;;
  @Input() subTitle!: string;
  @Input() fixed!:boolean;
  @Input() Menu!: any[];
  menu: boolean = false;
  menuClose: boolean = false;

  @ViewChild(SysSidebarComponent) sidebarComponent: SysSidebarComponent;

  toggleSidebar() {
    this.sidebarComponent.toggle();
  }

  menuOpen(){

  }
  ngOnInit(){

    if (window.innerWidth >= 768) {
      this.menu=!this.menu;
      this.menuClose = !this.menuClose;
    }else{
    }

    return true;
  }

}
