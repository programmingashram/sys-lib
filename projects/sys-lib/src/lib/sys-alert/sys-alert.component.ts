import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'sys-alert',
  templateUrl: './sys-alert.component.html',
  styleUrls: ['./sys-alert.component.scss'],
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
export class SysAlertComponent {
  @Input() alertIcon: any
}
