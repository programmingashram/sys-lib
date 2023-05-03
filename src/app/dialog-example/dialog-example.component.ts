import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent {
showDialog = false;
  showDialog2 = false;
  showDialog3 = false;


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

  openDialog3(): void {
    this.showDialog3 = true;
  }


  onConfirm3(): void {
    console.log('Ok button clicked');
    this.showDialog3 = false;
  }

  onCancel3(): void {
    console.log('Cancel button clicked');
    this.showDialog3 = false;
  }


}
