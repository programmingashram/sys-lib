import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-example',
  templateUrl: './sidebar-example.component.html',
  styleUrls: ['./sidebar-example.component.scss']
})
export class SidebarExampleComponent {
   small : boolean = false;
   menu(){
      this.small = !this.small;
   }
    menuData = [
        {
          icon: "smart_button",
          label: "Button",
          routerLink: "/button"
        },
        {
          icon: "smart_button",
          label: "Badge",
          routerLink: "/button"
        },
        {
          icon: "smart_button",
          label: "Grid",
          routerLink: "/button"
        }
    ]
}
