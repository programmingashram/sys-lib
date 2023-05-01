import { trigger, transition, style, animate } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sys-dialog',
  templateUrl: './sys-dialog.component.html',
  styleUrls: ['./sys-dialog.component.scss'],
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
export class SysDialogComponent {
  @Input() title: string;
  @Input() message: string;
  @Input() customHeader: boolean;
  @Input() shiftRight: boolean;
  @Input() shiftLeft: boolean;
  @Input() scroll: boolean;

  @Output() closeDialog = new EventEmitter();

  @Output() confirm: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();


  onConfirm(): void {
    this.confirm.emit();
  }

  onCancel(): void {
    this.cancel.emit();
    // this.closeDialog.emit();
  }
}
