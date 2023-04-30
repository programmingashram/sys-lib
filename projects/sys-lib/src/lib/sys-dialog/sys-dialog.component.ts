import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sys-dialog',
  templateUrl: './sys-dialog.component.html',
  styleUrls: ['./sys-dialog.component.scss']
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
