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

        },
        {
          icon: "smart_button",
          label: "Badge",

        },
        {
          icon: "smart_button",
          label: "Grid",

        }
    ]
}
