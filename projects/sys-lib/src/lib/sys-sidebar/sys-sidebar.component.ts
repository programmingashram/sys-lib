import { Component, ContentChildren, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SysHeaderComponent } from '../sys-header/sys-header.component';
import { SidebarService } from './sidebar.service';
import { trigger, transition, style, animate } from '@angular/animations';
interface SidebarItem {
  label: string;
  route: string;
}
@Component({
  selector: 'sys-sidebar',
  templateUrl: './sys-sidebar.component.html',
  styleUrls: ['./sys-sidebar.component.scss'],
  animations: [
    trigger('myAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0)' }), // start state
        animate('200ms ease-out', style({ opacity: 1, transform: 'scale(1)' })) // end state
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ opacity: 0, transform: 'scale(0)' })) // end state
      ])
    ])
  ]
})
export class SysSidebarComponent {
  @Input() items: SidebarItem[];
  @Input() small: boolean;
  selectedItem: string;

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

@Output() myEvent = new EventEmitter()

  constructor(private router: Router, private element: ElementRef, private sidebarService: SidebarService) { }

  menuBar(){
    const sidebar = this.element.nativeElement.querySelector('.nav');
    const routerContent = this.element.nativeElement.querySelector('.router-content');
    sidebar.classList.add("small");

  }

  ngAfterViewInit() {

  }

  ngOnInit() {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.selectedItem = event.url;
      }
    });
  }
}
function contentChildren(SysHeaderComponent: any): (target: SysSidebarComponent, propertyKey: "header") => void {
  throw new Error('Function not implemented.');
}

