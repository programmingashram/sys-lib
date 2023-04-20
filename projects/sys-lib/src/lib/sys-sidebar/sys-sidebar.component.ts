import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
interface SidebarItem {
  label: string;
  route: string;
}
@Component({
  selector: 'sys-sidebar',
  templateUrl: './sys-sidebar.component.html',
  styleUrls: ['./sys-sidebar.component.scss']
})
export class SysSidebarComponent {
  @Input() items: SidebarItem[];
  selectedItem: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.selectedItem = event.url;
      }
    });
  }
}
