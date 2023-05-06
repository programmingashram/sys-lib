import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-example',
  templateUrl: './alert-example.component.html',
  styleUrls: ['./alert-example.component.scss']
})
export class AlertExampleComponent {
  alertDelete = false;
  alertSuccess = false

  alertDeleteOpen(): void {
    this.alertDelete = true;
  }

  alertSuccessOpen(): void{
    this.alertSuccess = true;
  }

  closeSuccess(){
    this.alertSuccess = false;
    this.alertDelete = false;
  }

  closeAlert(){
    this.alertDelete = false;
  }
}
