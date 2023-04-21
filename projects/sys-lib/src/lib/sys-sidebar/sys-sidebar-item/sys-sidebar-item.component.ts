import { Component, Input } from '@angular/core';

@Component({
  selector: 'sys-sidebar-item',
  templateUrl: './sys-sidebar-item.component.html',
  styleUrls: ['./sys-sidebar-item.component.scss']
})
export class SysSidebarItemComponent {
 @Input() icon: string;
  @Input() label: string;
  @Input() route: string;
  @Input() sidebarLogo: string;
}
