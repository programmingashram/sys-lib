import { Component } from '@angular/core';

@Component({
  selector: 'app-badge-example',
  templateUrl: './badge-example.component.html',
  styleUrls: ['./badge-example.component.scss']
})
export class BadgeExampleComponent {
  showDialog = false;
  showDialog2 = false;

  openDialog(): void {
    this.showDialog = true;
  }


  onConfirm(): void {
    console.log('Ok button clicked');
    this.showDialog = false;
  }

  onCancel(): void {
    console.log('Cancel button clicked');
    this.showDialog = false;
  }

  openDialog2(): void {
    this.showDialog2 = true;
  }


  onConfirm2(): void {
    console.log('Ok button clicked');
    this.showDialog2 = false;
  }

  onCancel2(): void {
    console.log('Cancel button clicked');
    this.showDialog2 = false;
  }
}
