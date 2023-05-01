import { trigger, transition, style, animate } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sys-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  // animations: [
  //   trigger('myAnimation', [
  //     transition(':enter', [
  //       animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })) // end state
  //     ]),
  //     transition(':leave', [
  //       animate('500ms ease-out', style({ opacity: 0, transform: 'translateX(100%)' })) // end state
  //     ])
  //   ])
  // ]
})
export class TabComponent {
  @Input() active: boolean;
  @Input() tabTitle: any;
  @Input() icon: string;
  @Input() disable: boolean;
}
